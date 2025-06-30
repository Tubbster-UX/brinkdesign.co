import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
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
    title: "Professional Low Voltage Cabling Services - Brink Design Co.",
    description:
        "Expert low voltage cabling installation for data, voice, video, and security systems. Serving South Dakota with professional structured wiring solutions for homes and businesses.",
    alternates: { canonical: "https://www.brinkdesign.co/services/low-voltage" },
    openGraph: {
        title: "Professional Low Voltage Cabling Services - Brink Design Co.",
        description: "Expert low voltage cabling installation for data, voice, video, and security systems. Serving South Dakota with professional structured wiring solutions.",
        images: ["/og-image.jpg"],
    },
    twitter: {
        card: "summary_large_image",
        title: "Professional Low Voltage Cabling Services - Brink Design Co.",
        description:
            "Expert low voltage cabling installation for data, voice, video, and security systems. Serving South Dakota with professional structured wiring solutions.",
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
            telephone: "605-381-8290",
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

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
            {/* JSON-LD Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            {/* Hero Section */}
            <div className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:40px_40px] opacity-20"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Content */}
                        <div>
                            <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 text-blue-200 rounded-full text-sm font-medium mb-6 border border-blue-400/30">
                                <Cable className="w-4 h-4 mr-2" />
                                Professional Low Voltage Solutions
                            </div>
                            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                                Expert <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Low Voltage</span> Cabling Services
                            </h1>
                            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                                Professional structured wiring for data, voice, video, and security systems. 
                                Clean installations that deliver reliable performance for years to come.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-bold rounded-xl hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 shadow-lg">
                                    <Zap className="w-5 h-5 mr-2" />
                                    Get Free Consultation
                                </Link>
                                <Link href="/projects" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white hover:bg-white/10 rounded-xl transition-all duration-300">
                                    View Our Work
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Services Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="text-center mb-16">
                    <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
                        Complete Solutions
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Low Voltage Services We Provide
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        From simple data runs to complete structured cabling systems, we handle all your low voltage needs with precision and professionalism.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="relative">
                                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <service.icon className="w-8 h-8 text-white" />
                                </div>
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

            {/* Process Section */}
            <div className="bg-gradient-to-r from-gray-50 to-blue-50 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Proven Process</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            From initial consultation to final testing, we follow a systematic approach to ensure flawless installations.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {processSteps.map((step, index) => (
                            <div key={index} className="relative text-center">
                                <div className="relative">
                                    <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg shadow-lg">
                                        {step.step}
                                    </div>
                                    {index < processSteps.length - 1 && (
                                        <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-blue-300 to-purple-300 transform -translate-y-1/2"></div>
                                    )}
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                                <p className="text-gray-600 text-sm">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Project Types */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">Projects We Handle</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Whether residential or commercial, we have the expertise to handle projects of any size and complexity.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {projectTypes.map((type, index) => (
                        <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                            <div className="flex items-center mb-6">
                                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                                    <type.icon className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900">{type.title}</h3>
                                    <p className="text-gray-600">{type.description}</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {type.examples.map((example, idx) => (
                                    <div key={idx} className="flex items-center p-3 bg-gray-50 rounded-lg">
                                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                                        <span className="text-sm font-medium text-gray-700">{example}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-gradient-to-br from-gray-900 to-blue-900 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-white mb-6">Why Choose Brink Design Co?</h2>
                        <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                            Professional expertise, quality installations, and exceptional service that sets us apart.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {whyChooseUs.map((item, index) => (
                            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                                <item.icon className={`w-8 h-8 ${item.color} mb-4`} />
                                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                                <p className="text-blue-100 text-sm">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 py-20">
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Ready to Wire Your Space Right?
                    </h2>
                    <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
                        Get professional low voltage cabling that delivers reliable performance and looks great. 
                        Free consultation and competitive pricing.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 font-bold rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-lg transform hover:scale-105">
                            <Zap className="w-5 h-5 mr-2" />
                            Schedule Free Walkthrough
                        </Link>
                        <Link href="tel:+16051234567" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-orange-600 rounded-xl transition-all duration-300">
                            <Phone className="w-5 h-5 mr-2" />
                            Call (605) 123-4567
                        </Link>
                    </div>
                    
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-orange-100">
                        <div className="flex items-center justify-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-white" />
                            <span>Free On-Site Consultation</span>
                        </div>
                        <div className="flex items-center justify-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-white" />
                            <span>Licensed & Insured</span>
                        </div>
                        <div className="flex items-center justify-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-white" />
                            <span>Lifetime Workmanship Warranty</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}