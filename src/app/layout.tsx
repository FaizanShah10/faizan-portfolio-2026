import type { Metadata } from "next";
// Self-hosted via @fontsource (not next/font/google): this build environment
// cannot reach fonts.googleapis.com. @fontsource ships the same font files
// as local static assets, which next/font/google would otherwise download
// and self-host automatically — the end result (self-hosted woff2, no
// runtime request to Google) is the same either way.
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/800.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/instrument-serif/400.css";
import "@fontsource/instrument-serif/400-italic.css";
import "./globals.css";
import { CursorGlow } from "@/components/CursorGlow";

const siteUrl = "https://faizan-webdeveloper.vercel.app";
const title = "Syed Faizan — Full Stack Developer";
const description =
  "Full Stack Developer (React, Next.js, Node.js) with 2+ years building production web applications end to end — architecture, APIs, UI, and deployment. Currently at Centangle Interactive, open to full-time opportunities.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s — Syed Faizan",
  },
  description,
  keywords: [
    "Syed Faizan",
    "Faizan Naveed",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "MERN Stack Developer",
    "Pakistan Software Engineer",
  ],
  authors: [{ name: "Syed Faizan" }],
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Syed Faizan",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full" data-scroll-behavior="smooth">
      <body className="min-h-full flex flex-col bg-bg text-ink antialiased selection:bg-accent">
        <div className="grain-overlay" aria-hidden="true" />
        <CursorGlow />
        {children}
      </body>
    </html>
  );
}
