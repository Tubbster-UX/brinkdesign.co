import About from "@/components/about";
import Hero from "@/components/hero";
import Testimonials from "@/components/testimonials-server";
import Services from "@/components/services";
import FeaturedProjectsServer from "@/components/FeaturedProjectsServer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brink Design Co. – AV Installation, Network Cabling & Security Cameras in Rapid City",
  description:
    "Professional audio/video setups, structured cabling and security camera systems for businesses, churches and homes across Rapid City and western South Dakota.",
  alternates: { canonical: "https://www.brinkdesign.co/" },
  openGraph: {
    title: "Brink Design Co. – AV Installation, Network Cabling & Security Cameras in Rapid City",
    description:
      "Professional AV installation, network cabling and security system integration serving Rapid City and the Black Hills.",
    images: ["https://www.brinkdesign.co/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Brink Design Co. – AV Installation, Network Cabling & Security Cameras in Rapid City",
    description:
      "Professional AV, cabling and security solutions for homes and businesses across western South Dakota.",
    images: ["https://www.brinkdesign.co/og-image.jpg"],
  },
};

export default function Home() {
  return (
      <main>
        <Hero />
        <Services />
        <FeaturedProjectsServer />
        <About />
        <Testimonials />
      </main>
  );
}
