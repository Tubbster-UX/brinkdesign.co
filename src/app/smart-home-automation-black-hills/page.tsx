import type { Metadata } from "next";
import Link from "next/link";
import {
  Home,
  Lightbulb,
  ShieldCheck,
  Wifi,
  Phone,
  CheckCircle,
  ArrowRight,
  Clock,
  BadgeCheck,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "Smart Home Automation Black Hills | Brink Design Rapid City",
  description:
    "Smart home automation installation in Rapid City and the Black Hills. Control lighting, climate, cameras, locks, and audio from one app with local support.",
  alternates: {
    canonical: "https://www.brinkdesign.co/smart-home-automation-black-hills",
  },
  openGraph: {
    title: "Smart Home Automation Black Hills | Brink Design",
    description:
      "Professional smart home automation for Black Hills homeowners. Lighting, security, WiFi, and whole-home audio integrated in one system.",
    url: "https://www.brinkdesign.co/smart-home-automation-black-hills",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Smart Home Automation Installation",
  provider: {
    "@type": "LocalBusiness",
    name: "Brink Design Co.",
    url: "https://www.brinkdesign.co",
    telephone: "+1-605-389-3261",
  },
  areaServed: [
    { "@type": "City", name: "Rapid City" },
    { "@type": "Place", name: "Black Hills" },
    { "@type": "City", name: "Box Elder" },
    { "@type": "City", name: "Spearfish" },
    { "@type": "City", name: "Sturgis" },
    { "@type": "City", name: "Hill City" },
  ],
  serviceType: "Smart Home Automation",
};

const faqs = [
  {
    question: "How much does smart home automation cost in the Black Hills?",
    answer:
      "Most projects start around $2,500 for foundational lighting, app control, and basic integration. Larger homes with full lighting scenes, climate, security, and multi-room audio can range from $8,000 to $40,000+. We give clear line-item pricing after a walkthrough.",
  },
  {
    question: "Can you work with equipment I already own?",
    answer:
      "Yes. We often integrate existing routers, speakers, cameras, and smart devices when they meet reliability standards. If a device creates instability, we will tell you exactly why and provide upgrade options.",
  },
  {
    question: "Do I need a custom home to install smart automation?",
    answer:
      "No. We design systems for both retrofit homes and new construction. Many of our Rapid City projects start with network and lighting upgrades, then expand over time.",
  },
  {
    question: "What happens if something breaks later?",
    answer:
      "You get local support from a Black Hills team. We document your setup, provide training at handoff, and offer support plans for updates, troubleshooting, and expansion.",
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

const outcomes = [
  "One app for lights, climate, security, and audio",
  "Fewer app conflicts and fewer support headaches",
  "Reliable automations that your whole family can use",
  "Clear upgrade path for future additions",
];

const process = [
  {
    title: "1) Free Walkthrough",
    copy: "We review your home, devices, and priorities in person across Rapid City and the Black Hills.",
  },
  {
    title: "2) System Blueprint",
    copy: "You get a clear plan with recommended gear, wiring needs, and budget tiers.",
  },
  {
    title: "3) Professional Installation",
    copy: "Our team installs, labels, tests, and documents everything for long-term reliability.",
  },
  {
    title: "4) Training + Support",
    copy: "We train your household and remain available for updates, changes, and future expansion.",
  },
];

const areas = [
  "Rapid City",
  "Black Hills",
  "Box Elder",
  "Spearfish",
  "Sturgis",
  "Hill City",
  "Keystone",
  "Custer",
];

export default function SmartHomeAutomationBlackHillsPage() {
  return (
    <main className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="bg-slate-950 py-20 text-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-300">
              Smart Home Automation in Rapid City & the Black Hills
            </p>
            <h1 className="mt-4 max-w-4xl text-4xl font-bold sm:text-5xl">
              Turn Your Home Into a Predictable, Easy-to-Use Smart System
            </h1>
            <p className="mt-6 max-w-3xl text-lg text-slate-200">
              Brink Design builds smart homes that actually work day-to-day.
              Lighting, climate, cameras, locks, and audio are designed around
              reliability first, not gadget hype.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {outcomes.map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-lg bg-white/5 p-3 text-sm">
                  <CheckCircle className="mt-0.5 h-4 w-4 text-emerald-400" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild size="lg" className="font-semibold">
                <Link href="/contact">Book a Free Walkthrough</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/30 bg-transparent text-white hover:bg-white/10"
              >
                <a href="tel:6053893261" className="inline-flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  Call (605) 389-3261
                </a>
              </Button>
            </div>
          </div>

          <aside className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h2 className="text-xl font-semibold">Free Smart Home Plan Session</h2>
            <p className="mt-2 text-sm text-slate-200">
              Get a no-pressure in-home strategy session with a practical roadmap
              and pricing ranges.
            </p>
            <div className="mt-5 space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-blue-300" />
                30-45 minute walkthrough
              </div>
              <div className="flex items-center gap-2">
                <BadgeCheck className="h-4 w-4 text-emerald-300" />
                Upgrade roadmap + budget tiers
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-orange-300" />
                Local Black Hills installer
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <Button asChild className="w-full font-semibold">
                <Link href="/contact">Claim Your Free Session</Link>
              </Button>
              <Link
                href="/projects"
                className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-white/20 px-4 py-2 text-sm font-medium text-white hover:bg-white/10"
              >
                See Recent Install Projects
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold text-slate-900">What We Integrate</h2>
          <p className="mt-3 max-w-3xl text-slate-700">
            We build the system architecture so every part talks to the others
            reliably and can be controlled from one place.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <article className="rounded-xl border p-6">
              <Lightbulb className="h-7 w-7 text-amber-500" />
              <h3 className="mt-4 text-xl font-semibold">Lighting + Shade Scenes</h3>
              <p className="mt-2 text-slate-700">
                Morning, evening, movie, and away scenes that trigger
                automatically or with one button.
              </p>
            </article>
            <article className="rounded-xl border p-6">
              <ShieldCheck className="h-7 w-7 text-emerald-500" />
              <h3 className="mt-4 text-xl font-semibold">Cameras + Entry Security</h3>
              <p className="mt-2 text-slate-700">
                See and manage key security events from the same dashboard as the
                rest of your home.
              </p>
            </article>
            <article className="rounded-xl border p-6">
              <Wifi className="h-7 w-7 text-sky-500" />
              <h3 className="mt-4 text-xl font-semibold">Network-First Foundation</h3>
              <p className="mt-2 text-slate-700">
                Stable WiFi and structured cabling prevent the random outages and
                lag common in DIY smart homes.
              </p>
            </article>
            <article className="rounded-xl border p-6">
              <Home className="h-7 w-7 text-indigo-500" />
              <h3 className="mt-4 text-xl font-semibold">One Interface Your Family Uses</h3>
              <p className="mt-2 text-slate-700">
                We simplify controls so anyone can use the system without needing
                ten separate apps.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold text-slate-900">Our 4-Step Install Process</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {process.map((step) => (
              <article key={step.title} className="rounded-xl border bg-white p-6">
                <h3 className="text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-slate-700">{step.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold text-slate-900">Service Area</h2>
          <p className="mt-3 text-slate-700">
            We install smart home systems across Western South Dakota with a
            focus on long-term local support.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {areas.map((area) => (
              <span
                key={area}
                className="rounded-full border bg-slate-50 px-4 py-2 text-sm font-medium"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-16 text-white">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-3xl font-bold">Smart Home Automation FAQs</h2>
          <Accordion type="single" collapsible className="mt-8 w-full">
            {faqs.map((faq, idx) => (
              <AccordionItem value={`item-${idx + 1}`} key={faq.question}>
                <AccordionTrigger className="text-left text-base font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-200">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="pb-20 pt-16">
        <div className="mx-auto max-w-6xl rounded-2xl bg-slate-100 p-8 md:p-10">
          <h2 className="text-3xl font-bold">Build Your Smart Home Roadmap</h2>
          <p className="mt-3 max-w-3xl text-slate-700">
            Start with the highest-impact upgrades now, then phase in additional
            automation as your goals evolve.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild>
              <Link href="/contact">Get a Free Consultation</Link>
            </Button>
            <Link
              className="inline-flex items-center rounded-md border bg-white px-4 py-2 text-sm font-medium"
              href="/whole-home-audio-rapid-city"
            >
              Whole-Home Audio Installation
            </Link>
            <Link
              className="inline-flex items-center rounded-md border bg-white px-4 py-2 text-sm font-medium"
              href="/home-network-installation-rapid-city"
            >
              Home Network Installation
            </Link>
            <Link
              className="inline-flex items-center rounded-md border bg-white px-4 py-2 text-sm font-medium"
              href="/commercial-security-cameras-rapid-city"
            >
              Security Camera Installation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
