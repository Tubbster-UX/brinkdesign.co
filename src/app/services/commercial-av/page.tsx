import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
    Volume2,
    Monitor,
    Mic,
    CheckCircle, 
    Clock, 
    Star, 
    Users, 
    Award,
    ArrowRight,
    Phone,
    Settings,
    Home,
    Building,
    Presentation,
    Radio,
    Camera,
    Gamepad2,
    Zap,
    Speaker,
    Projector,
    Music,
    Tv,
    Wifi,
    Play
} from "lucide-react";

export const metadata: Metadata = {
    title: "Commercial AV Installation for Businesses | Brink Design Co.",
    description:
        "Commercial AV installation for conference rooms, offices, schools, and event spaces in Rapid City and western South Dakota. Clear audio, simple controls, and training included.",
    openGraph: {
        title: "Commercial AV Installation for Businesses | Brink Design Co.",
        description:
            "Professional AV for businesses and organizations. Sound, video, conferencing, and control systems with training included.",
        url: "https://www.brinkdesign.co/services/commercial-av",
        type: "article",
        images: [
            {
                url: 'https://www.brinkdesign.co/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Brink Design Co. Commercial AV Services',
            },
        ],
    },
    alternates: { canonical: "https://www.brinkdesign.co/services/commercial-av" },
    twitter: {
        card: "summary_large_image",
        title: "Commercial AV Installation for Businesses | Brink Design Co.",
        description:
            "Conference rooms, presentations, and business AV that your team can run. Training included.",
        images: ["https://www.brinkdesign.co/og-image.jpg"],
    },
};

export default function CommercialAVPage() {
    const avServices = [
        {
            icon: Volume2,
            title: "Professional Sound Systems",
            description: "Clear audio for any room or venue",
            features: ["Distributed Audio Systems", "Wireless Microphone Systems", "Sound Reinforcement", "Audio DSP & Control"]
        },
        {
            icon: Monitor,
            title: "Display & Video Solutions",
            description: "Projectors, displays, video walls, and signage",
            features: ["Large Format Displays", "Video Walls", "Projector Systems", "Digital Signage"]
        },
        {
            icon: Camera,
            title: "Live Streaming Systems",
            description: "Professional streaming and recording for events and services",
            features: ["Multi-Camera Systems", "Live Stream Encoding", "Recording Solutions", "Remote Production"]
        },
        {
            icon: Settings,
            title: "Control & Automation",
            description: "Room controls that make complex AV simple to operate",
            features: ["Touch Panel Control", "Room Automation", "Lighting Integration", "Climate Control"]
        },
        {
            icon: Presentation,
            title: "Conference Room Solutions",
            description: "Video conferencing, wireless presentation, and meeting room tech",
            features: ["Video Conferencing", "Wireless Presentation", "Room Scheduling", "Collaboration Tools"]
        },
        {
            icon: Radio,
            title: "Wireless Technologies",
            description: "Wireless audio and screen sharing for flexible setups",
            features: ["Wireless Audio", "Screen Mirroring", "Portable Systems", "BYOD Integration"]
        }
    ];

    const applications = [
        {
            icon: Building,
            title: "Corporate & Business",
            description: "AV for conference rooms, offices, and meeting spaces",
            scenarios: ["Conference Rooms", "Training Centers", "Reception Areas", "Executive Boardrooms"]
        },
        {
            icon: Home,
            title: "Houses of Worship",
            description: "Sound, video, and streaming your volunteers can run",
            scenarios: ["Sanctuary Sound Systems", "Live Streaming", "Stage Lighting", "Overflow Rooms"]
        },
        {
            icon: Users,
            title: "Schools & Training",
            description: "Classrooms and auditoriums with AV that works every time",
            scenarios: ["Classroom Displays", "Auditorium Systems", "Distance Learning", "Campus-wide Audio"]
        },
        {
            icon: Star,
            title: "Entertainment Venues",
            description: "Sound and video for events, concerts, and community spaces",
            scenarios: ["Concert Venues", "Sports Facilities", "Community Centers", "Event Spaces"]
        }
    ];

    const whyChooseUs = [
        {
            icon: Award,
            title: "Designed for Your Room",
            description: "Every system is planned around your space, not a template",
            color: "text-purple-600"
        },
        {
            icon: Settings,
            title: "Professional Installation",
            description: "Clean, organized installations with proper cable management",
            color: "text-blue-600"
        },
        {
            icon: Clock,
            title: "Timely Project Delivery",
            description: "On-schedule completion without compromising quality",
            color: "text-green-600"
        },
        {
            icon: Users,
            title: "Training & Support",
            description: "Comprehensive training and ongoing technical support",
            color: "text-orange-600"
        },
        {
            icon: Star,
            title: "Local & Reachable",
            description: "Based in Rapid City — we pick up the phone",
            color: "text-yellow-500"
        },
        {
            icon: Zap,
            title: "Proven Equipment",
            description: "Reliable AV equipment from manufacturers we trust and install daily",
            color: "text-red-600"
        }
    ];

    const processSteps = [
        {
            step: "01",
            title: "Site Walk & Goals",
            description: "We visit your space and understand how you use it"
        },
        {
            step: "02",
            title: "Plan & Quote",
            description: "Equipment list, layout, and a clear written quote"
        },
        {
            step: "03",
            title: "Installation",
            description: "Clean install with proper wiring and testing"
        },
        {
            step: "04",
            title: "Training & Handover",
            description: "Hands-on training so your team can run the system"
        }
    ];

    const projectHighlights = [
        {
            icon: Music,
            title: "Church Sound & Video",
            description: "Complete worship technology solutions",
            details: "Multi-zone audio, live streaming, stage lighting, and volunteer-friendly controls"
        },
        {
            icon: Presentation,
            title: "Corporate Boardrooms",
            description: "Executive-level meeting technology",
            details: "Video conferencing, wireless presentation, room control, and professional displays"
        },
        {
            icon: Projector,
            title: "Educational Classrooms",
            description: "Interactive learning environments",
            details: "Interactive displays, sound reinforcement, distance learning, and simple controls"
        },
        {
            icon: Tv,
            title: "Event & Entertainment",
            description: "High-impact AV for special events",
            details: "Large venue sound, video walls, lighting control, and mobile systems"
        }
    ];

    const benefits = [
        {
            title: "Engaging Communication",
            description: "Deliver clear sound and vivid video for meetings, worship and events.",
        },
        {
            title: "Scalable Systems",
            description: "Designs that grow with your organization and future technology.",
        },
        {
            title: "Simplified Control",
            description: "Intuitive interfaces make complex setups easy for any user.",
        },
        {
            title: "Ongoing Support",
            description: "Local technicians ready to assist long after installation.",
        },
    ];

    const faqs = [
        {
            question: "Can you integrate with my existing equipment?",
            answer: "Yes, we often reuse projectors, speakers and cabling when practical to maximize your budget.",
        },
        {
            question: "Do you provide training after installation?",
            answer: "Every project includes hands‑on training and easy reference guides for your team.",
        },
        {
            question: "What brands do you recommend?",
            answer: "We work with trusted manufacturers like Shure, Epson and BirdDog based on performance and value.",
        },
        {
            question: "How long do AV projects take?",
            answer: "Most installations are completed in 1–3 weeks depending on scope and equipment availability.",
        },
    ];

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Commercial AV Installation",
        description:
            "Expert commercial audio/video installation for businesses, churches, schools, and conference rooms. Custom AV systems designed for South Dakota organizations.",
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
        url: "https://www.brinkdesign.co/services/commercial-av",
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
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50">
            {/* JSON-LD Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
            />
            {/* Hero Section - bg-primary, Shadcn Buttons */}
            <section className="bg-primary py-20 lg:py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                        Commercial AV for Businesses & Organizations
                    </h1>
                    <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-8 leading-relaxed">
                        Sound systems, projectors, conferencing, and control systems your team can actually run. Clear audio, simple controls, and training included.
                    </p>
                    <p className="text-sm text-blue-200 mb-6">
                        Need church-specific design and livestream help? <Link href="/church-av-installation-south-dakota" className="underline font-semibold">See our church AV installation page</Link>.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
                        <Link href="/contact">
                            <Button variant="default" size="lg" className="bg-accent text-accent-foreground font-bold shadow-md hover:bg-accent/90">
                                Book a Site Visit & Quote
                            </Button>
                        </Link>
                        <Link href="tel:6053893261">
                            <Button variant="outline" size="lg">
                                Call (605) 389-3261
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* AV Services Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="text-center mb-16">
                    <div className="inline-block px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-6">
                        What We Install
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Sound, Video & Streaming Done Right
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        From a simple projector setup to a full sanctuary sound system, we install it, train your team, and support it after.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {avServices.map((service, index) => (
                        <div key={index} className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                            <div className="relative">
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                                <p className="text-gray-600 mb-4">{service.description}</p>
                                <ul className="space-y-2">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center text-sm text-gray-700">
                                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Request a Quote CTA */}
            <div className="bg-gradient-to-r from-gray-50 to-purple-50 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">Get a Quote</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
                        Tell us about your space — we’ll give you a written quote.
                    </p>
                    <Button size="lg" className="bg-primary text-secondary hover:bg-primary/90 font-bold px-8 py-4 text-lg" asChild>
                        <Link href="/contact">Book a Site Visit & Quote</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
