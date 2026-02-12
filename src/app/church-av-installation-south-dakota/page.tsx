import { Metadata } from "next";
import Link from "next/link";
import {
  Music,
  Video,
  Mic2,
  Monitor,
  Phone,
  CheckCircle,
  Users,
  Wifi,
  Radio,
  Projector,
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
    "Church AV Installation South Dakota | Audio, Video & Live Streaming",
  description:
    "Professional church AV installation in South Dakota. Sound systems, video walls, live streaming, and stage lighting for churches of all sizes. Free consultation—call (605) 299-5020.",
  keywords: [
    "church AV installation South Dakota",
    "church sound system installation",
    "church video system",
    "church live streaming",
    "worship audio video",
    "church projector installation",
    "sanctuary AV system",
    "church technology consultant",
  ],
  openGraph: {
    title: "Church AV Installation South Dakota | Worship Technology Experts",
    description:
      "Professional church AV installation in South Dakota. Sound systems, video walls, live streaming, and stage lighting.",
    url: "https://brinkdesign.co/church-av-installation-south-dakota",
  },
  alternates: {
    canonical: "https://brinkdesign.co/church-av-installation-south-dakota",
  },
};

const whatWeInstall = [
  {
    icon: Mic2,
    title: "Sound Systems",
    description:
      "Shure wireless microphones, line array speakers, digital mixers, and hearing assist systems for clear audio in every seat.",
  },
  {
    icon: Monitor,
    title: "Video & Displays",
    description:
      "LED video walls, projection systems, confidence monitors, and IMAG for large sanctuaries.",
  },
  {
    icon: Video,
    title: "Live Streaming",
    description:
      "BirdDog NDI cameras, streaming encoders, and complete broadcast setups for YouTube, Facebook, and your website.",
  },
  {
    icon: Radio,
    title: "Stage Lighting",
    description:
      "LED stage lighting, DMX control, and architectural lighting to enhance worship experiences.",
  },
];

const servicesOffered = [
  {
    icon: Mic2,
    title: "Sanctuary Sound",
    description:
      "Speech intelligibility and music reproduction balanced for your unique room acoustics.",
  },
  {
    icon: Projector,
    title: "Projection & Displays",
    description:
      "Lyrics, sermon slides, and video displayed clearly for the entire congregation.",
  },
  {
    icon: Video,
    title: "Broadcast & Streaming",
    description:
      "Reach members at home with professional-quality live streams and recordings.",
  },
  {
    icon: Radio,
    title: "Lighting Control",
    description:
      "Create the right atmosphere for worship, from bright celebration to intimate reflection.",
  },
  {
    icon: Wifi,
    title: "Network Infrastructure",
    description:
      "UniFi networks to support AV-over-IP, streaming, and congregation WiFi.",
  },
  {
    icon: Users,
    title: "Training & Support",
    description:
      "Volunteer training so your team can operate the system with confidence.",
  },
];

const faqs = [
  {
    question: "How much does a church sound system cost in South Dakota?",
    answer:
      "Basic sanctuary systems start around $15,000-$30,000 for small churches (under 200 seats). Mid-size churches typically invest $40,000-$80,000. Large sanctuaries with complex requirements can range from $100,000-$300,000+. We provide free on-site assessments with detailed proposals.",
  },
  {
    question: "Can you help us start live streaming our services?",
    answer:
      "Absolutely. We've helped dozens of South Dakota churches launch live streaming—from simple single-camera setups to multi-camera broadcast productions. We handle cameras, switching, encoding, and can train your volunteer team.",
  },
  {
    question: "What brands do you recommend for church audio?",
    answer:
      "For wireless microphones, Shure is our standard—reliable and easy to use. For speakers, we work with QSC, JBL, and other professional brands matched to your room. For mixers, Allen & Heath, Yamaha, and Behringer (for budget-conscious churches) all work well.",
  },
  {
    question: "How long does a church AV installation take?",
    answer:
      "Small upgrades (adding a projector or wireless mics) can be done in 1-2 days. Complete sanctuary renovations typically take 1-3 weeks depending on scope. We schedule around your services to minimize disruption.",
  },
  {
    question: "Do you offer training for our volunteer tech team?",
    answer:
      "Yes—training is included with every installation. We create custom documentation for your system and can provide ongoing training sessions as your volunteer team changes. We're also available for phone/video support.",
  },
  {
    question: "Can you upgrade our existing system or do we need to start over?",
    answer:
      "Often, existing equipment can be retained and upgraded incrementally. We'll assess what you have, identify the weakest links, and recommend a phased approach that fits your budget.",
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
  name: "Church AV Installation",
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
    "@type": "State",
    name: "South Dakota",
  },
  description:
    "Professional church AV installation including sound systems, video walls, live streaming, and stage lighting for churches throughout South Dakota.",
  serviceType: "Church AV Installation",
};

export default function ChurchAVInstallationSouthDakota() {
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
              South Dakota Church Technology
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Church AV Installation in South Dakota
            </h1>
            <p className="mt-6 text-xl leading-8 text-slate-300">
              Sound systems, video walls, live streaming, and stage lighting for
              churches of all sizes. We help your congregation hear clearly,
              see clearly, and connect with members at home.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="bg-orange-500 text-white hover:bg-orange-600"
              >
                <Link href="/contact">Schedule a Consultation</Link>
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

      {/* Intro Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Technology That Serves Your Ministry
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Great church AV isn't about the gear—it's about removing
              distractions so your congregation can focus on worship. We design
              systems that volunteers can operate confidently and that serve
              your ministry for years to come.
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

      {/* Services Grid */}
      <section className="bg-slate-50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Complete Church AV Services
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              From initial design through installation, training, and ongoing
              support—we're your partner in worship technology.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {servicesOffered.map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-orange-100">
                  <item.icon className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-slate-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Experience with South Dakota Churches
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                We've worked with churches across South Dakota and Wyoming—from
                small country churches to large multi-campus ministries. We
                understand the unique challenges of church AV:
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  "Volunteer-operated systems that need to be intuitive",
                  "Budget constraints and phased upgrade paths",
                  "Acoustically challenging sanctuaries",
                  "Live streaming to reach homebound members",
                  "Balancing traditional and contemporary worship styles",
                  "Supporting special events like weddings and funerals",
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
                <Users className="mx-auto h-20 w-20 text-slate-400" />
                <p className="mt-4 text-lg font-medium text-slate-600">
                  Serving Churches Across the Region
                </p>
                <p className="mt-2 text-sm text-slate-500">
                  Rapid City, Sioux Falls, Pierre, Gillette, and beyond
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
              Our Process
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              We work alongside your leadership and tech team from initial
              vision through final training.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-3xl">
            <ol className="space-y-8">
              {[
                {
                  step: "1",
                  title: "Discovery Meeting",
                  description:
                    "We meet with your leadership to understand your ministry goals, worship style, budget, and timeline.",
                },
                {
                  step: "2",
                  title: "Site Assessment",
                  description:
                    "We survey your sanctuary, assess acoustics, evaluate existing equipment, and identify challenges.",
                },
                {
                  step: "3",
                  title: "System Design",
                  description:
                    "You receive a detailed proposal with equipment specifications, installation scope, and phasing options.",
                },
                {
                  step: "4",
                  title: "Installation",
                  description:
                    "Our team installs and integrates all equipment, working around your service schedule.",
                },
                {
                  step: "5",
                  title: "Training",
                  description:
                    "We train your volunteer team on operating the system and create custom documentation.",
                },
                {
                  step: "6",
                  title: "Ongoing Support",
                  description:
                    "Phone, video, and on-site support whenever you need help—during services or otherwise.",
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
              Common questions about church AV installation in South Dakota.
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
              Let's Talk About Your Church's Needs
            </h2>
            <p className="mt-6 text-lg leading-8 text-orange-100">
              Schedule a free consultation to discuss your worship technology
              goals. We'll visit your sanctuary and provide recommendations
              tailored to your ministry.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="bg-white text-orange-600 hover:bg-orange-50"
              >
                <Link href="/contact">Schedule a Consultation</Link>
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
