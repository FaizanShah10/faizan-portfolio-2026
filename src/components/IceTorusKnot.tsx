"use client";

import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import type { Group, Mesh } from "three";

const ACCENT = "#c2a4ff";

function IceKnotMesh({ animate }: { animate: boolean }) {
  const meshRef = useRef<Mesh>(null);
  const groupRef = useRef<Group>(null);
  // Stable phase offsets so the orbit path feels organic, not a perfect clock.
  const phaseRef = useRef({
    a: Math.random() * Math.PI * 2,
    b: Math.random() * Math.PI * 2,
  });

  useFrame((state, delta) => {
    if (!animate || !meshRef.current || !groupRef.current) return;

    const t = state.clock.elapsedTime;
    const { a, b } = phaseRef.current;

    // Same circular path + spin, just quieter.
    const radius = 0.12 + Math.sin(t * 0.22 + b) * 0.03;
    const angle = t * 0.28 + a;
    groupRef.current.position.x = Math.cos(angle) * radius;
    groupRef.current.position.y = Math.sin(angle) * radius;

    meshRef.current.rotation.y += delta * 0.12;
    meshRef.current.rotation.z += delta * 0.05;
  });

  return (
    <group ref={groupRef}>
      <mesh ref={meshRef} scale={0.72}>
        <torusKnotGeometry args={[0.92, 0.25, 200, 32]} />
        <meshPhysicalMaterial
          color={ACCENT}
          metalness={0.05}
          roughness={0.1}
          transmission={0.92}
          thickness={1.4}
          ior={1.4}
          clearcoat={1}
          clearcoatRoughness={0.08}
          attenuationColor={ACCENT}
          attenuationDistance={0.75}
          iridescence={0.4}
          iridescenceIOR={1.3}
          iridescenceThicknessRange={[140, 420]}
          envMapIntensity={1.2}
          transparent
        />
      </mesh>
    </group>
  );
}

function Scene({ animate }: { animate: boolean }) {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight
        position={[3.2, 2.4, 2.8]}
        intensity={1.05}
        color="#f3eaff"
      />
      <directionalLight
        position={[-2.8, -1.2, -2]}
        intensity={1}
        color={ACCENT}
      />
      <pointLight
        position={[0, 1.6, 2.2]}
        intensity={0.7}
        color={ACCENT}
        distance={8}
      />
      <Environment preset="city" />
      <IceKnotMesh animate={animate} />
    </>
  );
}

export function IceTorusKnot({ className }: { className?: string }) {
  const [mounted, setMounted] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 768px)");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const sync = () => {
      const show = desktop.matches;
      setMounted(show);
      setAnimate(show && !reduceMotion.matches);
    };

    sync();
    desktop.addEventListener("change", sync);
    reduceMotion.addEventListener("change", sync);
    return () => {
      desktop.removeEventListener("change", sync);
      reduceMotion.removeEventListener("change", sync);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className={`relative overflow-visible ${className ?? ""}`}
    >
      {/* Keeps layout height; canvas is absolute so it can paint outside the slot. */}
      <div className="aspect-square w-full" />

      <div className="pointer-events-none absolute top-1/2 left-1/2 z-20 h-[180%] w-[180%] -translate-x-1/2 -translate-y-1/2">
        <div className="absolute inset-[18%] rounded-full bg-[radial-gradient(circle,color-mix(in_srgb,var(--color-accent)_24%,transparent),transparent_72%)] blur-3xl" />
        {mounted ? (
          <Canvas
            className="!h-full !w-full"
            style={{ background: "transparent" }}
            dpr={[1, 1.5]}
            gl={{
              alpha: true,
              antialias: true,
              powerPreference: "high-performance",
            }}
            camera={{ position: [0, 0, 6.4], fov: 32 }}
          >
            <Scene animate={animate} />
          </Canvas>
        ) : null}
      </div>
    </div>
  );
}
