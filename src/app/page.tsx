import About from "@/components/about";
import HomeContent from "@/components/home-content";
import Hero from "@/components/hero";
import Testimonials from "@/components/testimonials-server";
import Services from "@/components/services";
import FeaturedProjectsServer from "@/components/FeaturedProjectsServer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Security Cameras & Business WiFi | Brink Design Rapid City",
  description:
    "Security camera installation & business WiFi in Rapid City and the Black Hills. Local installer, no monthly fees, 2-year warranty. Book a free walkthrough.",
  alternates: { canonical: "https://www.brinkdesign.co/" },
  openGraph: {
    title: "Security Cameras & Business WiFi | Brink Design Rapid City",
    description:
      "Security cameras and business WiFi for Rapid City. Local team, no subscriptions, quality installs.",
    url: "https://www.brinkdesign.co/",
    type: "website",
    images: ["https://www.brinkdesign.co/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Security Cameras & Business WiFi | Brink Design Rapid City",
    description:
      "Security cameras, business WiFi, and AV installations for Rapid City businesses. No monthly fees.",
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
        <HomeContent />
      </main>
  );
}
