import { Metadata } from "next";
import Link from "next/link";
import {
  Music,
  Volume2,
  Home,
  Smartphone,
  Phone,
  CheckCircle,
  Tv,
  Mic,
  Speaker,
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
    "Whole-Home Audio Installation Rapid City | Sonos & Distributed Audio",
  description:
    "Professional whole-home audio installation in Rapid City, SD. Sonos, in-ceiling speakers, outdoor audio, and multi-room systems. Free consultation—call (605) 299-5020.",
  keywords: [
    "whole home audio Rapid City",
    "Sonos installation Rapid City",
    "distributed audio system",
    "in-ceiling speakers installation",
    "outdoor audio Rapid City SD",
    "multi-room audio Black Hills",
    "home audio contractor",
    "smart home audio",
  ],
  openGraph: {
    title: "Whole-Home Audio Installation Rapid City | Sonos Experts",
    description:
      "Professional whole-home audio installation in Rapid City. Sonos, distributed audio, and multi-room systems.",
    url: "https://brinkdesign.co/whole-home-audio-rapid-city",
  },
  alternates: {
    canonical: "https://brinkdesign.co/whole-home-audio-rapid-city",
  },
};

const whatWeInstall = [
  {
    icon: Speaker,
    title: "Sonos Systems",
    description:
      "Wireless Sonos speakers and soundbars with seamless multi-room control. Perfect for easy retrofit installations.",
  },
  {
    icon: Music,
    title: "In-Ceiling Speakers",
    description:
      "Architectural speakers that disappear into your ceiling—clean aesthetics with powerful, room-filling sound.",
  },
  {
    icon: Volume2,
    title: "Distributed Audio",
    description:
      "Multi-zone amplifiers that power speakers throughout your home from a central location.",
  },
  {
    icon: Mic,
    title: "Outdoor Audio",
    description:
      "Weather-resistant speakers for patios, decks, and pools—enjoy music outside year-round.",
  },
];

const roomApplications = [
  {
    icon: Home,
    title: "Living & Family Rooms",
    description:
      "Immersive sound for movies, music, and entertaining with invisible or statement speakers.",
  },
  {
    icon: Tv,
    title: "Home Theater",
    description:
      "Surround sound systems with Dolby Atmos, powered subwoofers, and acoustic calibration.",
  },
  {
    icon: Music,
    title: "Kitchen & Dining",
    description:
      "Background music while cooking and entertaining, controlled from your phone or voice.",
  },
  {
    icon: Volume2,
    title: "Outdoor Spaces",
    description:
      "Patios, decks, pools, and gardens with weatherproof speakers that handle South Dakota winters.",
  },
];

const faqs = [
  {
    question: "How much does whole-home audio installation cost in Rapid City?",
    answer:
      "A basic 2-3 zone system typically runs $2,000-$5,000. Larger homes with 6+ zones, in-ceiling speakers, and outdoor audio range from $8,000-$20,000+. We provide free on-site consultations with detailed pricing before any work begins.",
  },
  {
    question: "Should I choose Sonos or in-ceiling speakers?",
    answer:
      "Sonos is ideal for retrofit installations—no wiring required, easy to expand, and great app control. In-ceiling speakers look cleaner and often sound better, but require wiring during construction or renovation. Many clients mix both.",
  },
  {
    question: "Can I control music in different rooms independently?",
    answer:
      "Absolutely. Modern systems let you play different music in each zone or group rooms together for a party. Control everything from your phone, tablet, wall keypad, or voice assistant.",
  },
  {
    question: "What about outdoor speakers in South Dakota winters?",
    answer:
      "We install speakers rated for extreme temperatures and weather. Brands like Sonance, Origin Acoustics, and Sonos outdoor speakers are designed to handle -20°F winters and summer heat.",
  },
  {
    question: "Can you add audio to my existing smart home setup?",
    answer:
      "Yes. We integrate with Control4, Crestron, Savant, and simple solutions like Apple HomeKit, Google Home, and Amazon Alexa. Your audio system can work with your existing automation.",
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
  name: "Whole-Home Audio Installation",
  provider: {
    "@type": "LocalBusiness",
    name: "Brink Design Co.",
    telephone: "+1-605-299-5020",
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
    "Professional whole-home audio installation including Sonos, distributed audio, in-ceiling speakers, and outdoor sound systems in Rapid City, SD.",
  serviceType: "Whole-Home Audio Installation",
};

export default function WholeHomeAudioRapidCity() {
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
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-orange-400">
              Rapid City Audio Solutions
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Whole-Home Audio Installation in Rapid City
            </h1>
            <p className="mt-6 text-xl leading-8 text-slate-300">
              Music in every room, controlled from your phone. We design and
              install distributed audio systems, Sonos setups, and in-ceiling
              speakers for homes throughout the Black Hills.
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
                <a href="tel:+16052995020" className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  (605) 299-5020
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What We Install Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Audio Solutions for Every Home
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              From wireless Sonos to custom distributed audio—we match the
              right technology to your home, lifestyle, and budget.
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

      {/* Room Applications Section */}
      <section className="bg-slate-50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Audio for Every Space
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              We design systems tailored to how you use each room—from
              background music while cooking to immersive home theater.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {roomApplications.map((item) => (
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

      {/* Why Sonos Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Why We Recommend Sonos
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                Sonos has become our go-to recommendation for most
                homeowners—and for good reason:
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  "No wiring required for wireless speakers",
                  "Simple app controls everything",
                  "Expandable—start small and add rooms later",
                  "Works with Spotify, Apple Music, Amazon, and 100+ services",
                  "Voice control with Alexa, Google, or Sonos Voice",
                  "Great integration with home automation systems",
                ].map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-orange-500" />
                    <span className="text-slate-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-center justify-center rounded-2xl bg-slate-100 p-8">
              <div className="text-center">
                <Speaker className="mx-auto h-20 w-20 text-slate-400" />
                <p className="mt-4 text-lg font-medium text-slate-600">
                  Authorized Sonos Installer
                </p>
                <p className="mt-2 text-sm text-slate-500">
                  Professional setup, calibration, and ongoing support
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-slate-50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Our Installation Process
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              From design to installation, we make getting whole-home audio
              easy.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-3xl">
            <ol className="space-y-8">
              {[
                {
                  step: "1",
                  title: "Consultation",
                  description:
                    "We visit your home to understand how you listen to music, which rooms matter most, and your aesthetic preferences.",
                },
                {
                  step: "2",
                  title: "System Design",
                  description:
                    "You receive a proposal with speaker locations, equipment specs, and pricing—plus a walk through of how the app works.",
                },
                {
                  step: "3",
                  title: "Pre-Wire (If Needed)",
                  description:
                    "For in-ceiling or distributed audio, we run speaker wire to each location with clean, hidden installations.",
                },
                {
                  step: "4",
                  title: "Installation",
                  description:
                    "Speakers are mounted, amplifiers are installed, and everything is connected and powered up.",
                },
                {
                  step: "5",
                  title: "Calibration & Setup",
                  description:
                    "We configure zones, streaming services, and voice control—then calibrate each speaker for optimal sound.",
                },
                {
                  step: "6",
                  title: "Training",
                  description:
                    "You get a walkthrough of the app, voice commands, and tips for getting the most out of your system.",
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
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Common questions about whole-home audio installation in Rapid City.
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
              Ready for Music in Every Room?
            </h2>
            <p className="mt-6 text-lg leading-8 text-orange-100">
              Schedule a free consultation and we'll design the perfect audio
              system for your home.
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
                <a href="tel:+16052995020" className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  (605) 299-5020
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
