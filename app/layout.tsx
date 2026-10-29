import type { Metadata, Viewport } from "next";
import "@fontsource-variable/schibsted-grotesk";
import "@fontsource-variable/schibsted-grotesk/wght-italic.css";
import "@fontsource/instrument-serif/latin-400.css";
import "@fontsource/instrument-serif/latin-400-italic.css";
import "@fontsource-variable/geist-mono";
import "@fontsource/mrs-saint-delafield/latin-400.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dev Jariwala — Software Engineer",
  description:
    "Dev Jariwala, computer science at the University of Michigan. Software engineering internships at KPIT, Hyundai America Technical Center, and Necessities.",
  openGraph: {
    title: "Dev Jariwala — Software Engineer",
    description: "Computer science at the University of Michigan.",
    images: ["/photos/headshot.webp"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
