import About from "@/components/about";
import Hero from "@/components/hero";
import Testimonials from "@/components/testimonials-server";
import Services from "@/components/services";
import FeaturedProjectsServer from "@/components/FeaturedProjectsServer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brink Design Co. – AV, Security & Cabling in Rapid City, SD",
  description:
    "Security cameras, WiFi, network cabling, and AV systems for homes, churches, and businesses in Rapid City and western South Dakota. Local team. Quality installs. No monthly fees.",
  alternates: { canonical: "https://www.brinkdesign.co/" },
  openGraph: {
    title: "Brink Design Co. – AV, Security & Cabling in Rapid City, SD",
    description:
      "Security cameras, WiFi, cabling, and AV installations for South Dakota. Local experts, quality work.",
    images: ["https://www.brinkdesign.co/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Brink Design Co. – AV, Security & Cabling in Rapid City, SD",
    description:
      "Security cameras, WiFi, and AV installations for homes, churches, and businesses in western South Dakota.",
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
