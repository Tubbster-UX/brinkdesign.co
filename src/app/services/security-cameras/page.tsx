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
            {/* Hero Section */}
            <div className="relative overflow-hidden bg-gradient-to-br from-red-900 via-red-800 to-orange-900">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:40px_40px] opacity-20"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Content */}
                        <div>
                            <div className="inline-flex items-center px-4 py-2 bg-red-500/20 text-red-200 rounded-full text-sm font-medium mb-6 border border-red-400/30">
                                <Shield className="w-4 h-4 mr-2" />
                                Professional Security Solutions
                            </div>
                            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                                Advanced <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Security Camera</span> Systems
                            </h1>
                            <p className="text-xl text-red-100 mb-8 leading-relaxed">
                                Protect what matters most with professional-grade surveillance systems. 
                                Local recording, remote access, and intelligent monitoring without monthly fees.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-bold rounded-xl hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 shadow-lg">
                                    <Shield className="w-5 h-5 mr-2" />
                                    Get Free Security Assessment
                                </Link>
                                <Link href="/projects" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white hover:bg-white/10 rounded-xl transition-all duration-300">
                                    View Installations
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

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
                            <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 via-transparent to-orange-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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

            {/* Monitoring Features */}
            <div className="bg-gradient-to-r from-gray-50 to-red-50 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">Advanced Monitoring Features</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Powerful monitoring capabilities that keep you connected and in control of your security system.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {monitoringFeatures.map((feature, index) => (
                            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                                <div className="flex items-center mb-6">
                                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                                        <feature.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                                        <p className="text-gray-600">{feature.description}</p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {feature.benefits.map((benefit, idx) => (
                                        <div key={idx} className="flex items-center p-3 bg-gray-50 rounded-lg">
                                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                                            <span className="text-sm font-medium text-gray-700">{benefit}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            
            {/* Benefits Section */}
            <div className="bg-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">Benefits of Professional Security</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Strong protection and easy management for your property.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="flex items-start space-x-3">
                                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                                <div>
                                    <h3 className="font-semibold text-gray-900">{benefit.title}</h3>
                                    <p className="text-gray-600 text-sm">{benefit.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Process Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Security Installation Process</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        From assessment to training, we ensure your security system is perfectly tailored and professionally installed.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {processSteps.map((step, index) => (
                        <div key={index} className="relative text-center">
                            <div className="relative">
                                <div className="w-20 h-20 bg-gradient-to-r from-red-600 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg shadow-lg">
                                    {step.step}
                                </div>
                                {index < processSteps.length - 1 && (
                                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-red-300 to-orange-300 transform -translate-y-1/2"></div>
                                )}
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                            <p className="text-gray-600 text-sm">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Applications */}
            <div className="bg-gradient-to-r from-gray-50 to-red-50 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">Security Applications</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Customized security solutions for residential homes and commercial businesses of all sizes.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {applications.map((app, index) => (
                            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                                <div className="flex items-center mb-6">
                                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                                        <app.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900">{app.title}</h3>
                                        <p className="text-gray-600">{app.description}</p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {app.scenarios.map((scenario, idx) => (
                                        <div key={idx} className="flex items-center p-3 bg-gray-50 rounded-lg">
                                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                                            <span className="text-sm font-medium text-gray-700">{scenario}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-gradient-to-br from-gray-900 to-red-900 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our Security Systems?</h2>
                        <p className="text-xl text-red-100 max-w-2xl mx-auto">
                            Professional installation, quality equipment, and ongoing support that gives you peace of mind.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {whyChooseUs.map((item, index) => (
                            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                                <item.icon className={`w-8 h-8 ${item.color} mb-4`} />
                                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                                <p className="text-red-100 text-sm">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            
            {/* Quote Section */}
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

            {/* FAQ Section */}
            <div className="bg-white py-16">
                <div className="max-w-3xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Security Camera FAQ</h2>
                    <Accordion type="single" collapsible className="w-full">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`}>
                                <AccordionTrigger>{faq.question}</AccordionTrigger>
                                <AccordionContent>{faq.answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 py-20">
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Secure Your Property Today
                    </h2>
                    <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
                        Professional security camera installation with no monthly fees. 
                        Get a free assessment and custom quote for your property.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 font-bold rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-lg transform hover:scale-105">
                            <Shield className="w-5 h-5 mr-2" />
                            Get Free Security Assessment
                        </Link>
                        <Link href="tel:+16051234567" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-orange-600 rounded-xl transition-all duration-300">
                            <Phone className="w-5 h-5 mr-2" />
                            Call (605) 123-4567
                        </Link>
                    </div>
                    
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-orange-100">
                        <div className="flex items-center justify-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-white" />
                            <span>Free Security Assessment</span>
                        </div>
                        <div className="flex items-center justify-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-white" />
                            <span>No Monthly Monitoring Fees</span>
                        </div>
                        <div className="flex items-center justify-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-white" />
                            <span>Professional Installation</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}