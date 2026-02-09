import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
    Cable,
    Network,
    Zap,
    CheckCircle, 
    Shield, 
    Clock, 
    Star, 
    Users, 
    Award,
    ArrowRight,
    Phone,
    Settings,
    Home,
    Building,
    Wifi,
    Camera,
    Speaker,
    Monitor,
    Wrench,
    FileCheck
} from "lucide-react";

export const metadata: Metadata = {
    title: "WiFi & Network Cabling | Brink Design Co.",
    description:
        "Fix WiFi dead zones and run clean network cables. Structured wiring for homes and businesses in Rapid City and western South Dakota.",
    alternates: { canonical: "https://www.brinkdesign.co/services/low-voltage" },
    openGraph: {
        title: "WiFi & Network Cabling | Brink Design Co.",
        description: "Fast, reliable WiFi and clean cable runs for homes and businesses in western South Dakota.",
        images: ["/og-image.jpg"],
    },
    twitter: {
        card: "summary_large_image",
        title: "WiFi & Network Cabling | Brink Design Co.",
        description:
            "WiFi that works in every room. Professional cabling for Rapid City and the Black Hills.",
        images: ["https://www.brinkdesign.co/og-image.jpg"],
    },
};

export default function LowVoltageCablingPage() {
    const services = [
        {
            icon: Network,
            title: "Ethernet & Fiber Optic Cabling",
            description: "High-speed data connections for reliable network performance",
            features: ["Cat6/Cat6A Installation", "Fiber Optic Runs", "Network Testing & Certification"]
        },
        {
            icon: Speaker,
            title: "Audio/Video Wiring",
            description: "Professional AV infrastructure for home theaters and commercial spaces",
            features: ["Speaker Wire Installation", "HDMI & Coax Runs", "Control System Wiring"]
        },
        {
            icon: Camera,
            title: "Security System Cabling",
            description: "Secure, reliable wiring for cameras and access control systems",
            features: ["Camera Cable Runs", "Access Control Wiring", "Alarm System Infrastructure"]
        },
        {
            icon: Phone,
            title: "Voice & Communication",
            description: "Traditional and VoIP phone system infrastructure",
            features: ["Phone Line Installation", "VoIP System Wiring", "Intercom Systems"]
        },
        {
            icon: Settings,
            title: "Network Infrastructure",
            description: "Complete network setup with racks, panels, and organization",
            features: ["Patch Panel Installation", "Network Rack Setup", "Cable Management"]
        },
        {
            icon: Wifi,
            title: "Wireless Infrastructure",
            description: "Strategic access point placement and backhaul connections",
            features: ["Access Point Wiring", "Wireless Backhaul", "Coverage Optimization"]
        }
    ];

    const whyChooseUs = [
        {
            icon: Shield,
            title: "Clean, Professional Installs",
            description: "Meticulous wire management and organization for lasting performance",
            color: "text-green-600"
        },
        {
            icon: FileCheck,
            title: "Testing & Certification",
            description: "Every cable tested and certified to industry standards",
            color: "text-blue-600"
        },
        {
            icon: Clock,
            title: "Timely Project Completion",
            description: "On-schedule delivery without compromising quality",
            color: "text-orange-600"
        },
        {
            icon: Users,
            title: "Experienced Team",
            description: "Certified technicians with years of low voltage expertise",
            color: "text-purple-600"
        },
        {
            icon: Award,
            title: "Industry Standards",
            description: "Following TIA/EIA standards for professional-grade installations",
            color: "text-indigo-600"
        },
        {
            icon: Star,
            title: "Local Expertise",
            description: "South Dakota owned with deep understanding of local needs",
            color: "text-yellow-500"
        }
    ];

    const projectTypes = [
        {
            icon: Home,
            title: "Residential Projects",
            description: "Smart homes, home offices, and entertainment systems",
            examples: ["Home Theater Wiring", "Home Office Setup", "Smart Home Infrastructure", "Security System Installation"]
        },
        {
            icon: Building,
            title: "Commercial Projects", 
            description: "Offices, retail spaces, and industrial facilities",
            examples: ["Office Network Infrastructure", "Retail POS Systems", "Warehouse Communications", "Conference Room AV"]
        }
    ];

    const processSteps = [
        {
            step: "01",
            title: "Site Assessment",
            description: "Comprehensive evaluation of your space and requirements"
        },
        {
            step: "02",
            title: "Custom Design",
            description: "Tailored wiring plan optimized for your specific needs"
        },
        {
            step: "03",
            title: "Professional Install",
            description: "Clean, organized installation by certified technicians"
        },
        {
            step: "04",
            title: "Testing & Documentation",
            description: "Complete testing, labeling, and project documentation"
        }
    ];

    const benefits = [
        {
            title: "Organized Cabling",
            description: "Cleanly routed and labeled runs simplify future upgrades.",
        },
        {
            title: "Scalable Infrastructure",
            description: "Structured wiring that grows with your technology needs.",
        },
        {
            title: "Reduced Downtime",
            description: "Reliable connections minimize network issues and service calls.",
        },
        {
            title: "Future‑Proof Design",
            description: "Installations that support emerging standards and devices.",
        },
    ];

    const faqs = [
        {
            question: "What is low voltage wiring?",
            answer: "Low voltage wiring carries 50 volts or less and powers technology like networking, security cameras and smart devices.",
        },
        {
            question: "What is low voltage wiring used for?",
            answer: "It is used for structured cabling, Wi‑Fi access points, cameras and automation controls in homes and businesses.",
        },
        {
            question: "When should I plan low voltage pre-wiring?",
            answer: "Pre‑wiring is best during new construction or renovations before walls are closed to keep cables hidden and reduce costs.",
        },
        {
            question: "Do you test and certify each cable?",
            answer: "Yes, every run is tested, labeled and certified to meet TIA/EIA standards.",
        },
    ];

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Low Voltage Cabling Services",
        description:
            "Expert low voltage cabling installation for data, voice, video, and security systems. Serving South Dakota with professional structured wiring solutions for homes and businesses.",
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
        url: "https://www.brinkdesign.co/services/low-voltage",
    };

    const faqLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map(faq => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
            {/* JSON-LD Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            {/* Hero Section - bg-primary, Shadcn Buttons */}
            <section className="bg-primary py-20 lg:py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                        WiFi & Network Cabling
                    </h1>
                    <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-8 leading-relaxed">
                        Fast, reliable internet in every room. We run the cables, set up access points, and make sure your network just works.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
                        <Link href="/contact">
                            <Button variant="default" size="lg" className="bg-accent text-accent-foreground font-bold shadow-md hover:bg-accent/90">
                                Request a Quote
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

            {/* Services Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="text-center mb-16">
                    <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
                        What We Install
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Cabling & WiFi Done Right
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        From one ethernet drop to a whole building, we handle it cleanly and test everything before we leave.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
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
            <div className="bg-gradient-to-r from-gray-50 to-blue-50 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">Request a Quote</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
                        Each cabling project is unique—contact us for a personalized estimate.
                    </p>
                    <Button size="lg" className="bg-primary text-secondary hover:bg-primary/90 font-bold px-8 py-4 text-lg" asChild>
                        <Link href="/contact">Get a Quote</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}