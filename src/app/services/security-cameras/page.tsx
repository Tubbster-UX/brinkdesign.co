import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
    Shield,
    Camera,
    Eye,
    CheckCircle, 
    Clock, 
    Star, 
    Users, 
    Award,
    ArrowRight,
    Phone,
    Monitor,
    Home,
    Building,
    Smartphone,
    HardDrive,
    Wifi,
    AlertTriangle,
    PlayCircle,
    Settings,
    Lock,
    Zap,
    MapPin,
    Search
} from "lucide-react";

export const metadata: Metadata = {
    title: "Security Camera Systems – Brink Design Western South Dakota",
    description:
        "Professional security camera installation with local recording and remote access for homes and businesses in western South Dakota.",
    alternates: { canonical: "https://www.brinkdesign.co/services/security-cameras" },
    openGraph: {
        title: "Security Camera Systems – Brink Design Western South Dakota",
        description: "Expert surveillance solutions and monitoring services for the Black Hills region.",
        images: ["/og-image.jpg"],
    },
    twitter: {
        card: "summary_large_image",
        title: "Security Camera Systems – Brink Design Western South Dakota",
        description:
            "Protect your property with professional CCTV installation from Brink Design based in western South Dakota.",
        images: ["https://www.brinkdesign.co/og-image.jpg"],
    },
};

export default function SecurityCamerasPage() {
    const cameraTypes = [
        {
            icon: Camera,
            title: "Dome Cameras",
            description: "Discreet, vandal-resistant cameras perfect for indoor and covered outdoor areas",
            features: ["360° Rotation Capability", "Vandal-Resistant Housing", "Night Vision Technology", "Compact Design"]
        },
        {
            icon: Eye,
            title: "Bullet Cameras",
            description: "Long-range outdoor cameras with weatherproof housing and infrared capabilities",
            features: ["Weather-Resistant IP67", "Long-Range Zoom", "Infrared Night Vision", "Easy Installation"]
        },
        {
            icon: Monitor,
            title: "PTZ Cameras",
            description: "Pan-tilt-zoom cameras for active monitoring and large area coverage",
            features: ["Remote Control Operation", "Auto-Tracking Features", "Preset Positions", "High-Speed Movement"]
        },
        {
            icon: Search,
            title: "Fisheye 360° Cameras",
            description: "Complete area coverage with panoramic view and digital pan-tilt-zoom",
            features: ["360° Field of View", "Digital Dewarping", "Multiple View Modes", "Reduced Camera Count"]
        },
        {
            icon: Wifi,
            title: "Wireless Cameras",
            description: "Flexible placement options with Wi-Fi connectivity and battery backup",
            features: ["No Cable Runs Required", "Battery Backup Options", "Easy Relocation", "Quick Setup"]
        },
        {
            icon: HardDrive,
            title: "AI-Enhanced Cameras",
            description: "Smart cameras with built-in analytics and intelligent detection",
            features: ["Person/Vehicle Detection", "Line Crossing Alerts", "Facial Recognition", "Smart Notifications"]
        }
    ];

    const monitoringFeatures = [
        {
            icon: HardDrive,
            title: "Local Network Video Recorders",
            description: "On-site storage with no cloud dependencies or monthly fees",
            benefits: ["No Monthly Fees", "Complete Privacy", "High-Capacity Storage", "Reliable Local Access"]
        },
        {
            icon: Smartphone,
            title: "Mobile & Desktop Apps",
            description: "Access your cameras from anywhere with intuitive mobile and desktop applications",
            benefits: ["iOS & Android Apps", "Live View & Playback", "Multi-Camera Support", "User-Friendly Interface"]
        },
        {
            icon: AlertTriangle,
            title: "Smart Motion Detection",
            description: "Intelligent alerts that distinguish between people, vehicles, and other motion",
            benefits: ["Reduced False Alarms", "Custom Detection Zones", "Real-Time Notifications", "Email & Push Alerts"]
        },
        {
            icon: PlayCircle,
            title: "Advanced Playback",
            description: "Powerful search and playback features for quick incident investigation",
            benefits: ["Timeline Search", "Motion-Based Indexing", "Multi-Camera Sync", "Export Capabilities"]
        }
    ];

    const whyChooseUs = [
        {
            icon: Shield,
            title: "Professional Installation",
            description: "Expert placement and configuration for optimal coverage and performance",
            color: "text-red-600"
        },
        {
            icon: Lock,
            title: "Secure Systems",
            description: "Enterprise-grade security with encrypted connections and access controls",
            color: "text-blue-600"
        },
        {
            icon: Clock,
            title: "No Monthly Fees",
            description: "Own your system outright with no ongoing subscription costs",
            color: "text-green-600"
        },
        {
            icon: Users,
            title: "Local Support",
            description: "South Dakota based team providing ongoing support and service",
            color: "text-purple-600"
        },
        {
            icon: Award,
            title: "Quality Equipment",
            description: "Commercial-grade cameras and recorders built to last",
            color: "text-orange-600"
        },
        {
            icon: Star,
            title: "Custom Solutions",
            description: "Tailored systems designed specifically for your property and needs",
            color: "text-yellow-500"
        }
    ];

    const applications = [
        {
            icon: Home,
            title: "Residential Security",
            description: "Protect your family and property with comprehensive home surveillance",
            scenarios: ["Front Door Monitoring", "Driveway & Garage Coverage", "Backyard Protection", "Package Delivery Monitoring"]
        },
        {
            icon: Building,
            title: "Business Security",
            description: "Commercial surveillance solutions for retail, office, and industrial facilities",
            scenarios: ["Entrance & Exit Monitoring", "Cash Register Coverage", "Parking Lot Security", "Warehouse Surveillance"]
        }
    ];

    const processSteps = [
        {
            step: "01",
            title: "Security Assessment",
            description: "Comprehensive evaluation of your property's vulnerabilities and coverage needs"
        },
        {
            step: "02",
            title: "Custom Design",
            description: "Tailored camera placement plan optimized for maximum coverage and effectiveness"
        },
        {
            step: "03",
            title: "Professional Installation",
            description: "Expert installation with clean cable runs and proper weatherproofing"
        },
        {
            step: "04",
            title: "System Training",
            description: "Complete training on system operation, mobile apps, and playback features"
        }
    ];

    const benefits = [
        {
            title: "Crime Deterrence",
            description: "Visible cameras discourage theft and vandalism before it happens.",
        },
        {
            title: "Remote Monitoring",
            description: "Check live feeds and recordings from anywhere via secure apps.",
        },
        {
            title: "Clear Evidence",
            description: "High‑definition video captures critical details when incidents occur.",
        },
        {
            title: "No Monthly Fees",
            description: "Local recording means you own your system without subscriptions.",
        },
    ];

    const faqs = [
        {
            question: "Can I view my cameras from my phone?",
            answer: "Yes, our systems include secure mobile and desktop apps for live view and playback.",
        },
        {
            question: "Do security cameras require internet?",
            answer: "Recording works without internet, but a connection enables remote access and alerts.",
        },
        {
            question: "How much video storage do I need?",
            answer: "Most homes use 1–2 TB for 2–3 weeks of history; businesses may require larger drives.",
        },
        {
            question: "What warranty is included?",
            answer: "We provide a two‑year labor warranty plus manufacturer coverage on all equipment.",
        },
    ];

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Security Camera Systems",
        description:
            "Expert security camera installation and monitoring systems for homes and businesses. Professional surveillance solutions with local recording, remote access, and no monthly fees.",
        provider: {
            "@type": "LocalBusiness",
            name: "Brink Design Co.",
            url: "https://www.brinkdesign.co",
            telephone: "605-381-8290",
            email: "contact@brinkdesign.co",
            address: {
                "@type": "PostalAddress",
                addressLocality: "Rapid City",
                addressRegion: "SD",
                addressCountry: "US",
            },
        },
        url: "https://www.brinkdesign.co/services/security-cameras",
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-red-50">
            {/* JSON-LD Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            {/* Hero Section - bg-primary, Shadcn Buttons */}
            <section className="bg-primary py-20 lg:py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                        Security Camera Systems
                    </h1>
                    <p className="text-lg md:text-xl text-red-100 max-w-2xl mx-auto mb-8 leading-relaxed">
                        Protect what matters most with professional-grade surveillance systems. Local recording, remote access, and intelligent monitoring without monthly fees.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
                        <Link href="/contact">
                            <Button variant="default" size="lg" className="bg-accent text-accent-foreground font-bold shadow-md hover:bg-accent/90">
                                Get Free Security Assessment
                            </Button>
                        </Link>
                        <Link href="/projects">
                            <Button variant="outline" size="lg">
                                View Installations
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Camera Types Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="text-center mb-16">
                    <div className="inline-block px-4 py-2 bg-red-100 text-red-800 rounded-full text-sm font-medium mb-6">
                        Camera Solutions
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Professional Camera Types
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Choose from our comprehensive selection of commercial-grade cameras designed for every security need and environment.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {cameraTypes.map((camera, index) => (
                        <div key={index} className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                            <div className="relative">
                                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <camera.icon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{camera.title}</h3>
                                <p className="text-gray-600 mb-4">{camera.description}</p>
                                <ul className="space-y-2">
                                    {camera.features.map((feature, idx) => (
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
            <div className="bg-gradient-to-r from-gray-50 to-red-50 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">Request a Quote</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
                        Every surveillance need is different—contact us for a personalized estimate.
                    </p>
                    <Button size="lg" className="bg-primary text-secondary hover:bg-primary/90 font-bold px-8 py-4 text-lg" asChild>
                        <Link href="/contact">Get a Quote</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}