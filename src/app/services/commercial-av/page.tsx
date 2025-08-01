import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
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
    title: "Professional Commercial AV Installation - Brink Design Co.",
    description:
        "Expert commercial audio/video installation for businesses, churches, schools, and conference rooms. Custom AV systems designed for South Dakota organizations.",
    openGraph: {
        title: "Professional Commercial AV Installation - Brink Design Co.",
        description:
            "Expert commercial audio/video installation for businesses, churches, schools, and conference rooms. Custom AV systems designed for South Dakota organizations.",
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
        title: "Professional Commercial AV Installation - Brink Design Co.",
        description:
            "Expert commercial audio/video installation for businesses, churches, schools, and conference rooms. Custom AV systems designed for South Dakota organizations.",
        images: ["https://www.brinkdesign.co/og-image.jpg"],
    },
};

export default function CommercialAVPage() {
    const avServices = [
        {
            icon: Volume2,
            title: "Professional Sound Systems",
            description: "Crystal-clear audio solutions for any space or application",
            features: ["Distributed Audio Systems", "Wireless Microphone Systems", "Sound Reinforcement", "Audio DSP & Control"]
        },
        {
            icon: Monitor,
            title: "Display & Video Solutions",
            description: "High-impact visual displays for presentations and digital signage",
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
            description: "Intuitive control systems that make complex AV simple to operate",
            features: ["Touch Panel Control", "Room Automation", "Lighting Integration", "Climate Control"]
        },
        {
            icon: Presentation,
            title: "Conference Room Solutions",
            description: "Complete meeting room technology for productive collaboration",
            features: ["Video Conferencing", "Wireless Presentation", "Room Scheduling", "Collaboration Tools"]
        },
        {
            icon: Radio,
            title: "Wireless Technologies",
            description: "Cutting-edge wireless solutions for flexible AV installations",
            features: ["Wireless Audio", "Screen Mirroring", "Portable Systems", "BYOD Integration"]
        }
    ];

    const applications = [
        {
            icon: Building,
            title: "Corporate & Business",
            description: "Professional AV solutions for modern workplaces",
            scenarios: ["Conference Rooms", "Training Centers", "Reception Areas", "Executive Boardrooms"]
        },
        {
            icon: Home,
            title: "Houses of Worship",
            description: "Inspiring audio and video systems for religious services",
            scenarios: ["Sanctuary Sound Systems", "Live Streaming", "Stage Lighting", "Overflow Rooms"]
        },
        {
            icon: Users,
            title: "Educational Facilities",
            description: "Interactive learning environments with modern AV technology",
            scenarios: ["Classroom Displays", "Auditorium Systems", "Distance Learning", "Campus-wide Audio"]
        },
        {
            icon: Star,
            title: "Entertainment Venues",
            description: "High-performance AV for events and entertainment",
            scenarios: ["Concert Venues", "Sports Facilities", "Community Centers", "Event Spaces"]
        }
    ];

    const whyChooseUs = [
        {
            icon: Award,
            title: "Expert Design & Engineering",
            description: "Custom AV solutions designed specifically for your space and needs",
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
            title: "Local Expertise",
            description: "South Dakota based with deep understanding of local needs",
            color: "text-yellow-500"
        },
        {
            icon: Zap,
            title: "Latest Technology",
            description: "Cutting-edge AV equipment from industry-leading manufacturers",
            color: "text-red-600"
        }
    ];

    const processSteps = [
        {
            step: "01",
            title: "Consultation & Needs Assessment",
            description: "Understanding your goals, space requirements, and usage patterns"
        },
        {
            step: "02",
            title: "Custom System Design",
            description: "Detailed AV design with equipment specifications and layout plans"
        },
        {
            step: "03",
            title: "Professional Installation",
            description: "Expert installation with clean integration and testing"
        },
        {
            step: "04",
            title: "Training & Handover",
            description: "Complete user training and system documentation"
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
            telephone: "605-381-8290",
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

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50">
            {/* JSON-LD Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            {/* Hero Section */}
            <div className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-blue-800 to-indigo-900">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:40px_40px] opacity-20"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Content */}
                        <div>
                            <div className="inline-flex items-center px-4 py-2 bg-purple-500/20 text-purple-200 rounded-full text-sm font-medium mb-6 border border-purple-400/30">
                                <Volume2 className="w-4 h-4 mr-2" />
                                Professional AV Solutions
                            </div>
                            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                                Commercial <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Audio/Video</span> Installation
                            </h1>
                            <p className="text-xl text-purple-100 mb-8 leading-relaxed">
                                Custom AV systems for businesses, churches, schools, and event venues. 
                                Professional design and installation that delivers exceptional performance.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-bold rounded-xl hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 shadow-lg">
                                    <Play className="w-5 h-5 mr-2" />
                                    Start Your AV Project
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

            {/* AV Services Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="text-center mb-16">
                    <div className="inline-block px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-6">
                        AV Solutions
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Professional AV Services
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        From simple conference room setups to complex multi-zone systems, we deliver AV solutions that work flawlessly.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {avServices.map((service, index) => (
                        <div key={index} className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-transparent to-blue-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="relative">
                                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
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

            {/* Project Highlights */}
            <div className="bg-gradient-to-r from-gray-50 to-purple-50 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">Project Highlights</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Successful AV installations across various industries and applications in South Dakota.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {projectHighlights.map((project, index) => (
                            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                                <div className="flex items-center mb-6">
                                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-xl flex items-center justify-center mr-4">
                                        <project.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                                        <p className="text-gray-600">{project.description}</p>
                                    </div>
                                </div>
                                <p className="text-gray-700 text-sm leading-relaxed">{project.details}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Process Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">Our AV Installation Process</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        From concept to completion, we follow a proven process to ensure your AV system exceeds expectations.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {processSteps.map((step, index) => (
                        <div key={index} className="relative text-center">
                            <div className="relative">
                                <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg shadow-lg">
                                    {step.step}
                                </div>
                                {index < processSteps.length - 1 && (
                                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-purple-300 to-blue-300 transform -translate-y-1/2"></div>
                                )}
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                            <p className="text-gray-600 text-sm">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Applications */}
            <div className="bg-gradient-to-r from-gray-50 to-purple-50 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">AV Applications</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Professional AV solutions tailored for different industries and use cases.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {applications.map((app, index) => (
                            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                                <div className="flex items-center mb-6">
                                    <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
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
            <div className="bg-gradient-to-br from-gray-900 to-purple-900 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-white mb-6">Why Choose Brink Design Co?</h2>
                        <p className="text-xl text-purple-100 max-w-2xl mx-auto">
                            Professional expertise, quality installations, and exceptional service for your AV projects.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {whyChooseUs.map((item, index) => (
                            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                                <item.icon className={`w-8 h-8 ${item.color} mb-4`} />
                                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                                <p className="text-purple-100 text-sm">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="bg-white py-12">
                <div className="max-w-3xl mx-auto px-4 text-center">
                    <p className="text-lg text-gray-700">
                        Looking for tips on upgrading your church system?&nbsp;
                        <Link href="/blog/church-av-upgrades" className="text-blue-600 font-medium">Read our church AV upgrade guide</Link>.
                    </p>
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 py-20">
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Ready to Transform Your Space?
                    </h2>
                    <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
                        Professional AV installation that delivers exceptional performance and reliability. 
                        Get a custom quote for your commercial AV project.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 font-bold rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-lg transform hover:scale-105">
                            <Play className="w-5 h-5 mr-2" />
                            Start Your AV Project Today
                        </Link>
                        <Link href="tel:+16051234567" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-orange-600 rounded-xl transition-all duration-300">
                            <Phone className="w-5 h-5 mr-2" />
                            Call (605) 123-4567
                        </Link>
                    </div>
                    
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-orange-100">
                        <div className="flex items-center justify-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-white" />
                            <span>Free AV Consultation</span>
                        </div>
                        <div className="flex items-center justify-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-white" />
                            <span>Custom System Design</span>
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
