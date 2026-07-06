import { Metadata } from "next";
import Link from "next/link";
import {
  Wifi,
  Home,
  Shield,
  Zap,
  Phone,
  CheckCircle,
  Users,
  Laptop,
  Gamepad2,
  Tv,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title:
    "Home Network Installation Rapid City | UniFi & Omada Whole-Home WiFi",
  description:
    "Professional home network installation in Rapid City, SD. We install UniFi and TP-Link Omada systems for reliable WiFi in every room. Free consultation—call (605) 389-3261.",
  keywords: [
    "home network installation Rapid City",
    "whole home WiFi Rapid City",
    "UniFi home installation",
    "Omada home network",
    "residential WiFi Rapid City SD",
    "mesh WiFi installation Black Hills",
    "home networking contractor",
    "smart home network setup",
  ],
  openGraph: {
    title: "Home Network Installation Rapid City | UniFi & Omada Experts",
    description:
      "Professional home network installation in Rapid City. UniFi and Omada systems for reliable WiFi throughout your home.",
    url: "https://www.brinkdesign.co/home-network-installation-rapid-city",
  },
  alternates: {
    canonical: "https://www.brinkdesign.co/home-network-installation-rapid-city",
  },
};

const whatWeInstall = [
  {
    icon: Wifi,
    title: "UniFi Home Networks",
    description:
      "Enterprise-grade UniFi access points, switches, and gateways sized for residential use. One app controls everything.",
  },
  {
    icon: Shield,
    title: "TP-Link Omada Systems",
    description:
      "Cost-effective Omada hardware with cloud management. Great performance at a lower price point.",
  },
  {
    icon: Zap,
    title: "Structured Wiring",
    description:
      "Cat6/Cat6A cabling to every room, patch panels, and network racks for a future-proof foundation.",
  },
  {
    icon: Home,
    title: "Whole-Home Coverage",
    description:
      "Access point placement designed for your floor plan—no dead zones in the basement, garage, or backyard.",
  },
];

const whoWeHelp = [
  {
    icon: Users,
    title: "Growing Families",
    description:
      "Multiple devices, Zoom calls, gaming, and streaming—all running smoothly at the same time.",
  },
  {
    icon: Laptop,
    title: "Remote Workers",
    description:
      "Dedicated VLANs for your home office, QoS for video calls, and backup connectivity options.",
  },
  {
    icon: Gamepad2,
    title: "Gamers & Streamers",
    description:
      "Low-latency wired connections, WiFi 6 for consoles, and proper port forwarding configuration.",
  },
  {
    icon: Tv,
    title: "Smart Home Enthusiasts",
    description:
      "Separate IoT networks, reliable coverage for every smart device, and centralized control.",
  },
];

const faqs = [
  {
    question: "How much does home network installation cost in Rapid City?",
    answer:
      "Simple setups with 1-2 access points using existing wiring start around $500-$1,000. Larger homes needing 3-4 access points and some new cabling typically run $1,500-$3,000. We provide free on-site estimates with detailed pricing before any work begins.",
  },
  {
    question: "Do I need wired Ethernet or is mesh WiFi enough?",
    answer:
      "Wired backhaul always outperforms wireless mesh. We recommend running Ethernet to each access point location for maximum speed and reliability. That said, if wiring isn't feasible, modern mesh systems can still deliver excellent results.",
  },
  {
    question: "What's the difference between UniFi and Omada for home use?",
    answer:
      "Both are excellent. UniFi has a more polished app and wider ecosystem (cameras, door access). Omada costs less and is simpler for basic setups. We'll recommend the right platform based on your needs and budget.",
  },
  {
    question: "How long does a home network installation take?",
    answer:
      "A typical installation takes 1-2 days. Day one covers wiring and hardware mounting. Day two handles configuration, testing, and walkthrough. Larger homes or extensive wiring may take longer.",
  },
  {
    question: "Can you fix my existing network instead of replacing it?",
    answer:
      "Often, yes. We offer network assessments to diagnose issues. Sometimes a simple access point addition or configuration change solves the problem. We'll always recommend the most cost-effective solution.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Home Network Installation",
  provider: {
    "@type": "LocalBusiness",
    name: "Brink Design Co.",
    telephone: "+1-605-389-3261",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Rapid City",
      addressRegion: "SD",
      addressCountry: "US",
    },
  },
  areaServed: {
    "@type": "City",
    name: "Rapid City",
    containedInPlace: {
      "@type": "State",
      name: "South Dakota",
    },
  },
  description:
    "Professional home network installation using UniFi and TP-Link Omada systems. Whole-home WiFi coverage, structured wiring, and smart home networking in Rapid City, SD.",
  serviceType: "Home Network Installation",
};

export default function HomeNetworkInstallationRapidCity() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 lg:py-28">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-orange-400">
              Rapid City Home Networking
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Home Network Installation in Rapid City
            </h1>
            <p className="mt-6 text-xl leading-8 text-slate-300">
              Tired of dead zones, buffering, and dropped connections? We
              install UniFi and Omada whole-home networks that actually work—in
              every room, on every device.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="bg-orange-500 text-white hover:bg-orange-600"
              >
                <Link href="/contact">Book a Free Consultation</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/20 bg-white/5 text-white hover:bg-white/10"
              >
                <a href="tel:+16053893261" className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  (605) 389-3261
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Your Home Network Should Just Work
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Consumer routers from big-box stores weren't designed for modern
              households. With 20+ connected devices, 4K streaming, video calls,
              and smart home gadgets, you need a network built for real-world
              demands.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {whatWeInstall.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-slate-200 bg-slate-50 p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100">
                  <item.icon className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Help Section */}
      <section className="bg-slate-50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Built for How You Actually Use Your Network
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Whether you're working from home, raising a family of streamers,
              or building a smart home—we design networks for your specific
              needs.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {whoWeHelp.map((item) => (
              <div key={item.title} className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-100">
                  <item.icon className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Our Installation Process
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              From first call to final walkthrough, here's how we deliver a
              network you'll love.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-3xl">
            <ol className="space-y-8">
              {[
                {
                  step: "1",
                  title: "Free Consultation",
                  description:
                    "We visit your home to assess your needs, review the floor plan, and identify optimal access point locations.",
                },
                {
                  step: "2",
                  title: "Custom Proposal",
                  description:
                    "You receive a detailed quote with equipment specs, installation scope, and transparent pricing.",
                },
                {
                  step: "3",
                  title: "Structured Wiring",
                  description:
                    "Our team runs Cat6/Cat6A cabling to each access point location with clean, hidden installations.",
                },
                {
                  step: "4",
                  title: "Hardware Installation",
                  description:
                    "Access points, switches, and gateway are mounted and connected to your structured wiring.",
                },
                {
                  step: "5",
                  title: "Configuration & Testing",
                  description:
                    "We configure VLANs, guest networks, QoS, and security settings—then test every room.",
                },
                {
                  step: "6",
                  title: "Training & Handoff",
                  description:
                    "You get a walkthrough of the management app, WiFi passwords, and documentation for your system.",
                },
              ].map((item) => (
                <li key={item.step} className="flex gap-6">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-500 text-lg font-bold text-white">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-slate-600">{item.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-slate-50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Common questions about home network installation in Rapid City.
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-3xl">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-lg font-medium text-slate-900">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-orange-500 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready for WiFi That Actually Works?
            </h2>
            <p className="mt-6 text-lg leading-8 text-orange-100">
              Schedule a free consultation and we'll design the perfect network
              for your home.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="bg-white text-orange-600 hover:bg-orange-50"
              >
                <Link href="/contact">Book a Free Consultation</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-orange-600"
              >
                <a href="tel:+16053893261" className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  (605) 389-3261
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
