import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Home,
  Lightbulb,
  Wifi,
  ShieldCheck,
  Speaker,
  Thermometer,
  Smartphone,
  Clock,
  CheckCircle,
  Sparkles,
  PanelLeft,
  MapPin,
  Battery,
  DoorClosed,
  Camera,
  Waves,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Smart Home Installation – Brink Design Co.",
  description:
    "Whole-home automation, rock-solid WiFi, lighting, shades, audio, and security—designed, installed, and supported by Brink Design across western South Dakota.",
  alternates: { canonical: "https://www.brinkdesign.co/services/smart-home" },
  openGraph: {
    title: "Smart Home Installation – Brink Design Co.",
    description:
      "Smart lighting, climate, WiFi, shades, and audio that work together. Local design, install, and support for Rapid City and the Black Hills.",
    images: ["https://www.brinkdesign.co/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Smart Home Installation – Brink Design Co.",
    description:
      "Smart home automation, WiFi, and AV installs for homes in western South Dakota.",
    images: ["https://www.brinkdesign.co/og-image.jpg"],
  },
};

const pillars = [
  {
    icon: Lightbulb,
    title: "Lighting & Shades",
    description: "Scene-based lighting, dimming, and automated shades for comfort and security.",
    items: ["Room and whole-home scenes", "Day/Night and away modes", "Voice + app control"],
  },
  {
    icon: Thermometer,
    title: "Climate & Energy",
    description: "Smart thermostats, sensors, and schedules that save energy without sacrificing comfort.",
    items: ["Multi-zone climate", "Geofencing and schedules", "HVAC + ERV integration"],
  },
  {
    icon: Wifi,
    title: "WiFi That Just Works",
    description: "Controller-based WiFi and wiring so every room—and the backyard—gets fast coverage.",
    items: ["Whole-home WiFi design", "Structured wiring", "Network security hardening"],
  },
  {
    icon: Speaker,
    title: "Audio & Media",
    description: "Whole-home audio, media rooms, and outdoor sound with simple, family-friendly control.",
    items: ["Distributed audio", "Media/theater rooms", "Outdoor and pool audio"],
  },
  {
    icon: ShieldCheck,
    title: "Security & Entry",
    description: "Pro-grade cameras, smart locks, and alerts that tie into your home scenes.",
    items: ["Cameras with local recording", "Smart locks and access", "Motion and perimeter alerts"],
  },
  {
    icon: Smartphone,
    title: "Simple Control",
    description: "One app, voice, wall keypads, or touchscreens—designed so anyone in the house can use it.",
    items: ["Wall keypads and touchscreens", "Voice assistants", "Remote support ready"],
  },
];

const packages = [
  {
    name: "Essential",
    price: "Custom quoted",
    summary: "Foundation: WiFi, lighting scenes, a few key rooms, and security basics.",
    features: [
      "Controller-based WiFi + router",
      "Lighting scenes in main spaces",
      "Entry cameras + smart lock",
      "Mobile + voice control",
    ],
  },
  {
    name: "Preferred",
    price: "Most popular",
    summary: "Whole-home lighting/shades, multi-room audio, climate, and cameras with local recording.",
    features: [
      "Whole-home WiFi and wiring",
      "Lighting + shades on schedules",
      "4–8 zones of audio",
      "Local NVR with remote alerts",
    ],
  },
  {
    name: "Signature",
    price: "By design",
    summary: "Media room or theater, advanced lighting design, outdoor audio, and concierge support.",
    features: [
      "Media/theater build-out",
      "Architectural lighting + shades",
      "Outdoor audio zones",
      "Proactive monitoring & support",
    ],
  },
];

const processSteps = [
  { step: "01", title: "Walkthrough & Goals", detail: "On-site assessment, WiFi heat map, and lifestyle needs." },
  { step: "02", title: "Design & Options", detail: "Good/Better/Best plan with clear pricing and timelines." },
  { step: "03", title: "Install & Program", detail: "Clean wiring, device setup, scenes, and training." },
  { step: "04", title: "Support", detail: "Local support with remote diagnostics and tune-ups." },
];

const faqs = [
  {
    q: "Can you work with my existing gear (Nest, Ring, Sonos, etc.)?",
    a: "Yes. We keep what works, replace what limits reliability, and tie it into one control experience when possible.",
  },
  {
    q: "Do you offer remote support?",
    a: "We set up secure remote access for monitoring, quick fixes, and firmware updates without a truck roll when possible.",
  },
  {
    q: "What brands do you recommend?",
    a: "We spec reliable, serviceable platforms (e.g., Ubiquiti for networking, Lutron for lighting/shades, Sonos for audio) based on your goals and budget.",
  },
  {
    q: "Do you handle new builds and retrofits?",
    a: "Both. We love prewire during construction, but we also do clean retrofits with minimal drywall work.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Smart Home Installation",
  description:
    "Smart home automation, lighting, shades, WiFi, audio, and security installations with local design, programming, and support.",
  provider: {
    "@type": "LocalBusiness",
    name: "Brink Design Co.",
    url: "https://www.brinkdesign.co",
    telephone: "605-389-3261",
    email: "contact@brinkdesign.co",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Rapid City",
      addressRegion: "SD",
      addressCountry: "US",
    },
  },
  areaServed: "Western South Dakota",
  url: "https://www.brinkdesign.co/services/smart-home",
};

export default function SmartHomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-blue-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="bg-primary py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 text-white rounded-full text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" /> Smart Home Installation
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            One Home. One App. Zero Headaches.
          </h1>
          <p className="text-lg md:text-xl text-blue-50 max-w-3xl mb-8 leading-relaxed">
            Lighting, shades, climate, security, audio, and WiFi that just works—designed, installed, and supported by a local team in western South Dakota.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-accent text-accent-foreground font-bold shadow-md hover:bg-accent/90">
                Request a Quote
              </Button>
            </Link>
            <Link href="tel:6053893261">
              <Button size="lg" variant="outline">
                Call (605) 389-3261
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium mb-6">
            What We Deliver
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Whole-Home Smart Systems</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Reliable, unified control—no juggling apps, no dead zones, no mystery outages.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <h3 className="text-xl font-bold text-gray-900 mb-3">{pillar.title}</h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">{pillar.description}</p>
              <ul className="space-y-2 text-sm text-gray-700">
                {pillar.items.map((item) => (
                  <li key={item} className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Packages */}
      <section className="bg-white py-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
              Packages to Fit Your Home
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Starting Point</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We tailor every project—these tiers show how we typically bundle smart home systems. Pricing is custom after a walkthrough.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div key={pkg.name} className="relative bg-gradient-to-b from-gray-50 to-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">{pkg.name}</h3>
                  <span className="text-sm font-semibold text-primary">{pkg.price}</span>
                </div>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">{pkg.summary}</p>
                <ul className="space-y-2 mb-8 text-sm text-gray-700">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button asChild className="w-full bg-primary text-secondary hover:bg-primary/90">
                  <Link href="/contact">Plan This Package</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Work</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Clear steps, predictable timelines, clean installs, and training so the whole family is comfortable using the system.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((step) => (
              <div key={step.title} className="text-center bg-white/5 rounded-2xl p-6 border border-white/10">
                <div className="w-14 h-14 rounded-full bg-secondary text-primary flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-gray-300 leading-relaxed">{step.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-secondary via-secondary to-secondary/90 text-primary py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for a Home That Just Works?</h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            We'll walk your property, map WiFi coverage, plan lighting and audio zones, and give you clear options with honest pricing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary text-secondary hover:bg-primary/90 px-8 py-4 text-lg">
              <Link href="/contact">Request a Quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-secondary px-8 py-4 text-lg">
              <Link href="tel:6053893261">Call (605) 389-3261</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Smart Home FAQs</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.q} className="group border border-gray-200 rounded-xl p-4">
                <summary className="flex items-center justify-between cursor-pointer font-semibold text-gray-900">
                  <span>{faq.q}</span>
                  <ArrowRight className="w-4 h-4 text-gray-500 transition-transform group-open:rotate-90" />
                </summary>
                <p className="text-gray-600 mt-3 text-sm leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
