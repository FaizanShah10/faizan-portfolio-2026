import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Work } from "@/components/Work";
import { Skills } from "@/components/Skills";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { MotionRoot } from "@/components/MotionRoot";

export default function Home() {
  return (
    <>
      <MotionRoot />
      <Nav />
      <main className="flex-1">
        <Hero />
        <About />
        <Experience />
        <Work />
        <Skills />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
