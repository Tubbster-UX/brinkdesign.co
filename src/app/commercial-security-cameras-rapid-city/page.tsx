import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
    Shield,
    Camera,
    CheckCircle,
    Clock,
    Users,
    Award,
    ArrowRight,
    Phone,
    Building,
    Smartphone,
    HardDrive,
    MapPin,
    Wrench,
    FileCheck,
    Star,
    ShoppingBag,
    ForkKnife,
    CarIcon,
    BoxIcon
} from "lucide-react";

export const metadata: Metadata = {
    title: "Commercial Security Cameras Rapid City | Brink Design",
    description:
        "Commercial security camera installation in Rapid City & the Black Hills. Local recording, no monthly fees, remote access. Free site walkthrough.",
    alternates: { canonical: "https://www.brinkdesign.co/commercial-security-cameras-rapid-city" },
    openGraph: {
        title: "Commercial Security Cameras Rapid City | Brink Design",
        description: "Commercial camera systems for Rapid City businesses. No monthly fees, remote access, local installation.",
        url: "https://www.brinkdesign.co/commercial-security-cameras-rapid-city",
        type: "article",
        images: ["/og-image.jpg"],
    },
    twitter: {
        card: "summary_large_image",
        title: "Commercial Security Cameras Rapid City | Brink Design",
        description:
            "Commercial security cameras for Rapid City businesses. Local recording, phone access, no subscriptions.",
        images: ["https://www.brinkdesign.co/og-image.jpg"],
    },
};

export default function CommercialSecurityCamerasRapidCityPage() {
    const applications = [
        {
            icon: ShoppingBag,
            title: "Retail Stores",
            description: "POS coverage, entrance/exit monitoring, stockroom visibility",
        },
        {
            icon: Building,
            title: "Offices",
            description: "Lobby cameras, server room access, parking lot monitoring",
        },
        {
            icon: BoxIcon,
            title: "Warehouses & Shops",
            description: "High-mounted cameras for wide coverage, forklift-safe cable runs",
        },
        {
            icon: ForkKnife,
            title: "Restaurants & Bars",
            description: "Kitchen visibility, ID-check verification, incident documentation",
        },
        {
            icon: CarIcon,
            title: "Auto Dealerships",
            description: "Lot coverage, showroom monitoring, service bay cameras",
        },
        {
            icon: Wrench,
            title: "Construction Sites",
            description: "Temporary or permanent installs for theft prevention",
        },
    ];

    const processSteps = [
        {
            step: "01",
            title: "Site Walkthrough",
            description: "We visit your property, identify coverage zones, blind spots, and infrastructure",
        },
        {
            step: "02",
            title: "Proposal & Quote",
            description: "Written scope with camera count, placement diagram, and clear pricing",
        },
        {
            step: "03",
            title: "Installation",
            description: "Clean cable runs, solid mounts, proper weatherproofing",
        },
        {
            step: "04",
            title: "Configuration",
            description: "Cameras tuned for your environment, motion zones set, users created",
        },
        {
            step: "05",
            title: "Training",
            description: "We walk through the app, show you how to pull footage and set alerts",
        },
        {
            step: "06",
            title: "Ongoing Support",
            description: "We're local in Rapid City — a phone call away when you need us",
        },
    ];

    const whatYouGet = [
        "Professional-grade cameras (4K, night vision, weatherproof)",
        "Network Video Recorder (NVR) with 30-90+ days storage",
        "Remote access via iOS/Android app and desktop",
        "Smart motion alerts with AI filtering",
        "Clean cable runs and labeled patch panels",
        "Training for your team",
        "2-year labor warranty on installation",
        "No monthly fees ever",
    ];

    const whyChooseUs = [
        {
            icon: MapPin,
            title: "Local Team",
            description: "Based in Rapid City, not a call center. We show up when you need us.",
        },
        {
            icon: Shield,
            title: "No Monthly Fees",
            description: "You own the system. No cloud subscriptions required.",
        },
        {
            icon: Award,
            title: "2-Year Warranty",
            description: "Labor warranty on every install. We stand behind our work.",
        },
    ];

    const serviceAreas = [
        "Rapid City (all neighborhoods and commercial zones)",
        "Box Elder / Ellsworth AFB",
        "Spearfish",
        "Sturgis",
        "Deadwood",
        "Belle Fourche",
        "Hot Springs",
        "Custer",
    ];

    const faqs = [
        {
            question: "How much does a commercial camera system cost in Rapid City?",
            answer: "Most commercial systems run $3,000–$10,000 installed, depending on camera count and complexity. We provide written quotes after a site walkthrough — no ballparks over the phone.",
        },
        {
            question: "Do I need monthly monitoring fees?",
            answer: "No. Our systems record locally to an on-site NVR. You access footage from your phone or desktop without paying a cloud subscription. Optional cloud backup is available if desired.",
        },
        {
            question: "Can I view my cameras from my phone?",
            answer: "Yes. We set up apps on your phone and any manager devices. You can view live feeds, playback recordings, and receive motion alerts from anywhere.",
        },
        {
            question: "What brands do you install?",
            answer: "We install UniFi Protect, Hikvision, Dahua, and other commercial-grade brands. We'll recommend the best fit for your property and budget.",
        },
        {
            question: "How long does installation take?",
            answer: "Most 4–8 camera systems are installed in one day. Larger systems or multi-building projects may take 2–3 days.",
        },
    ];

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Commercial Security Camera Installation in Rapid City",
        description:
            "Commercial security camera installation in Rapid City and the Black Hills. Local recording, no monthly fees, remote access. Professional installation with 2-year warranty.",
        provider: {
            "@type": "LocalBusiness",
            "@id": "https://www.brinkdesign.co/#localbusiness",
            name: "Brink Design Co.",
            url: "https://www.brinkdesign.co",
            telephone: "+1-605-389-3261",
            email: "contact@brinkdesign.co",
            address: {
                "@type": "PostalAddress",
                addressLocality: "Rapid City",
                addressRegion: "SD",
                addressCountry: "US",
            },
        },
        areaServed: [
            { "@type": "City", name: "Rapid City" },
            { "@type": "City", name: "Box Elder" },
            { "@type": "City", name: "Spearfish" },
            { "@type": "City", name: "Sturgis" },
        ],
        serviceType: "Commercial Security Camera Installation",
        url: "https://www.brinkdesign.co/commercial-security-cameras-rapid-city",
    };

    const faqJsonLd = {
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

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-red-50">
            {/* JSON-LD Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
            />

            {/* Hero Section */}
            <section className="bg-primary py-20 lg:py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <p className="text-sm font-semibold text-accent uppercase tracking-wide mb-3">
                            Rapid City &bull; Black Hills &bull; Western SD
                        </p>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                            Commercial Security Cameras in Rapid City
                        </h1>
                        <p className="text-lg md:text-xl text-red-100 max-w-2xl mb-8 leading-relaxed">
                            We install commercial-grade camera systems for businesses across Rapid City and the Black Hills. 4K cameras, local recording, phone access — no monthly fees to some cloud company. You own the footage. You control the system.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button asChild size="lg" className="bg-accent text-accent-foreground font-bold shadow-md hover:bg-accent/90">
                                <Link href="/contact" className="inline-flex items-center">
                                    Book a Free Walkthrough
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </Link>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                                <Link href="tel:6053893261" className="inline-flex items-center">
                                    <Phone className="w-4 h-4 mr-2" />
                                    (605) 389-3261
                                </Link>
                            </Button>
                        </div>
                        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-red-200 mt-8">
                            <span>Licensed & Insured</span>
                            <span className="text-red-400">•</span>
                            <span>No Monthly Fees</span>
                            <span className="text-red-400">•</span>
                            <span>2-Year Warranty</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Rapid City Businesses Need Cameras */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            Why Rapid City Businesses Need Professional Security Cameras
                        </h2>
                        <div className="prose prose-lg text-gray-600">
                            <p>
                                Property crime in Rapid City isn&apos;t going away. Whether you run a retail store on Main Street, a warehouse off East North Street, or a construction yard near Box Elder, cameras aren&apos;t optional anymore. They&apos;re how you document theft, deter break-ins, reduce liability claims, and keep an eye on operations when you&apos;re not there.
                            </p>
                            <p>
                                These aren&apos;t Ring doorbells — they&apos;re 4K cameras with local recording, 24/7 access from your phone, and no monthly fees. You own the footage. You control the system.
                            </p>
                        </div>
                    </div>
                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                        <h3 className="text-xl font-bold text-gray-900 mb-6">What Makes Commercial Systems Different</h3>
                        <ul className="space-y-4">
                            {[
                                "Weatherproof housings (IP67+) for South Dakota winters",
                                "Long-range infrared for parking lots after dark",
                                "AI-powered alerts that filter out false triggers",
                                "Local NVR storage with 30-90+ days of recordings",
                                "Multi-user access for you and your managers",
                                "Centralized management across multiple locations",
                            ].map((feature, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* Applications */}
            <section className="bg-gray-50 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Applications for Rapid City Businesses
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            We install camera systems for businesses across the Black Hills region
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {applications.map((app, index) => (
                            <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                                <app.icon className="w-10 h-10 text-primary mb-4" />
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{app.title}</h3>
                                <p className="text-gray-600">{app.description}</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-center text-gray-600 mt-8">
                        If you operate a business in Rapid City, Spearfish, Sturgis, or anywhere in the Black Hills, we can design a system that fits.
                    </p>
                </div>
            </section>

            {/* Our Process */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        How We Work
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        From walkthrough to training, here&apos;s what to expect
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {processSteps.map((step, index) => (
                        <div key={index} className="relative">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                                    {step.step}
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                                    <p className="text-gray-600">{step.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* What You Get */}
            <section className="bg-primary py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                What You Get
                            </h2>
                            <ul className="space-y-4">
                                {whatYouGet.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                                        <span className="text-white">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                            <h3 className="text-2xl font-bold text-white mb-4">Ready for a Quote?</h3>
                            <p className="text-red-100 mb-6">
                                We&apos;ll visit your property, identify coverage zones, and deliver a written quote within 48 hours.
                            </p>
                            <Button asChild size="lg" className="w-full bg-accent text-accent-foreground font-bold hover:bg-accent/90">
                                <Link href="/contact">
                                    Book a Free Site Walkthrough
                                </Link>
                            </Button>
                            <p className="text-center text-red-200 text-sm mt-4">
                                Or call us: <Link href="tel:6053893261" className="underline">(605) 389-3261</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Brink */}
            <section className="py-16 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-gray-900 text-center mb-10">
                        Why Rapid City Businesses Choose Brink
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {whyChooseUs.map((item, index) => (
                            <div key={index} className="text-center">
                                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <item.icon className="w-7 h-7 text-blue-600" />
                                </div>
                                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                                <p className="text-gray-600 text-sm">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Service Areas */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                        Serving Rapid City and the Surrounding Black Hills
                    </h2>
                    <p className="text-gray-600 mb-8">
                        We&apos;re based in Rapid City and serve commercial clients throughout the region.
                    </p>
                    <div className="flex flex-wrap justify-center gap-3">
                        {serviceAreas.map((area, idx) => (
                            <span key={idx} className="px-4 py-2 bg-white rounded-full border border-gray-200 text-gray-700 text-sm">
                                {area}
                            </span>
                        ))}
                    </div>
                    <p className="text-gray-500 text-sm mt-6">
                        If you&apos;re within driving distance of the Black Hills, we&apos;ll come to you.
                    </p>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Frequently Asked Questions
                    </h2>
                </div>
                <Accordion type="single" collapsible className="space-y-4">
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`faq-${index}`} className="bg-white rounded-xl border border-gray-200 px-6">
                            <AccordionTrigger className="text-left font-semibold text-gray-900 hover:no-underline py-6">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-600 pb-6">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </section>

            {/* Internal Links */}
            <section className="bg-gray-50 py-12">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Services</h3>
                    <div className="flex flex-wrap gap-4">
                        <Link href="/business-wifi-networks-rapid-city" className="text-primary hover:underline">
                            Business WiFi Networks →
                        </Link>
                        <Link href="/structured-cabling-rapid-city" className="text-primary hover:underline">
                            Structured Cabling →
                        </Link>
                        <Link href="/projects" className="text-primary hover:underline">
                            View Our Projects →
                        </Link>
                        <Link href="/service-area" className="text-primary hover:underline">
                            Full Service Area →
                        </Link>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="bg-primary py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Ready to Secure Your Business?
                    </h2>
                    <p className="text-red-100 mb-8 max-w-2xl mx-auto">
                        Book a free site walkthrough. We&apos;ll assess your property and deliver a written quote — usually within 48 hours.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button asChild size="lg" className="bg-accent text-accent-foreground font-bold hover:bg-accent/90">
                            <Link href="/contact">
                                Book a Free Walkthrough
                            </Link>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                            <Link href="tel:6053893261">
                                Call (605) 389-3261
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
