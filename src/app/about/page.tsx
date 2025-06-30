import Image from 'next/image';
import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { 
    Users, 
    Target, 
    Award, 
    MapPin, 
    Clock, 
    Star, 
    Shield, 
    Zap, 
    CheckCircle, 
    Network, 
    Camera, 
    Volume2, 
    Home, 
    Wrench,
    Phone,
    ArrowRight,
    Calendar,
    Building,
    Wifi
} from 'lucide-react';
import { trackEvent } from '@/lib/analytics';

export const metadata: Metadata = {
    title: "About Brink Design Co. - Rapid City AV & Low Voltage Experts",
    description: "Learn how Brink Design Co. from Rapid City serves homes and businesses across South Dakota with expert low voltage installations and AV solutions.",
    alternates: { canonical: "https://www.brinkdesign.co/about" },
    openGraph: {
        title: "About Brink Design Co. - Rapid City AV & Low Voltage Experts",
        description: "Learn how Brink Design Co. from Rapid City serves homes and businesses across South Dakota with expert low voltage installations and AV solutions.",
        images: ["/og-image.jpg"],
    },
    twitter: {
        card: "summary_large_image",
        title: "About Brink Design Co. - Rapid City AV & Low Voltage Experts",
        description: "Learn how Brink Design Co. from Rapid City serves homes and businesses across South Dakota with expert low voltage installations and AV solutions.",
        images: ["https://www.brinkdesign.co/og-image.jpg"],
    },
};

const AboutPage: React.FC = () => {
    const services = [
        {
            icon: Network,
            title: "Network & Cabling",
            description: "Structured cabling, rack builds, patch panels, PoE deployments, fiber runs&mdash;your backbone for performance.",
            image: "/images/about/network.webp",
            alt: "Cleanly labeled Cat6 cables bundled into a patch panel"
        },
        {
            icon: Camera,
            title: "Security Systems",
            description: "Surveillance cameras, access control, motion sensors, remote monitoring, and alarm integrations&mdash;keeping an eye on what matters.",
            image: "/images/about/Unifi-Protect-Dashboard.jpg",
            alt: "Wall-mounted NVR with multiple camera feeds visible on a monitor"
        },
        {
            icon: Volume2,
            title: "Audio/Video",
            description: "Worship-space packages, conference-room installs, sound reinforcement, projection, livestream setups, and digital signage.",
            image: "/images/about/stage.jpg",
            alt: "Church stage with line-array speakers, stage lighting, and a projection screen active"
        },
        {
            icon: Home,
            title: "Smart Home & Automation",
            description: "Lighting control, thermostats, door locks, whole-house audio, voice-control integrations&mdash;and all the gadgets that make life easier.",
            image: "/images/about/smarthome.jpeg",
            alt: "Tablet displaying a home-automation dashboard controlling lights, locks, and thermostat"
        }
    ];

    const whyChooseUs = [
        {
            icon: Shield,
            title: "Clean Installs",
            description: "Neat cable management and professional finishes that last",
            color: "text-blue-600"
        },
        {
            icon: Target,
            title: "Honest Advice",
            description: "Vendor-neutral recommendations tailored to your specific needs",
            color: "text-green-600"
        },
        {
            icon: Award,
            title: "Built to Last",
            description: "Enterprise-grade hardware and industry best practices",
            color: "text-purple-600"
        },
        {
            icon: MapPin,
            title: "Local Expertise",
            description: "Optimized for South Dakota's unique environments and challenges",
            color: "text-orange-600"
        },
        {
            icon: Users,
            title: "Personal Service",
            description: "Direct access to our team, no middlemen or call centers",
            color: "text-red-600"
        },
        {
            icon: Zap,
            title: "Fast Response",
            description: "Emergency support and quick turnaround times",
            color: "text-yellow-500"
        }
    ];

    const projectTimelines = [
        {
            icon: Volume2,
            title: "Full Church AV Package",
            duration: "6 Weeks",
            color: "bg-purple-500",
            steps: [
                "Week 1: Initial consultation & site survey",
                "Week 2: System design, equipment selection & quote",
                "Weeks 3–4: Procurement & staging",
                "Week 5: Installation of cabling, speakers, cameras, projectors",
                "Week 6: Programming, calibration, staff training & hand-off"
            ]
        },
        {
            icon: Network,
            title: "Office Network",
            duration: "4 Weeks",
            color: "bg-blue-500",
            steps: [
                "Week 1: Site survey & network architecture plan",
                "Week 2: Structured cabling & rack setup",
                "Week 3: Switch, firewall & wireless AP configuration",
                "Week 4: Testing, documentation & user onboarding"
            ]
        },
        {
            icon: Wifi,
            title: "Ranch Wi-Fi",
            duration: "5 Weeks",
            color: "bg-green-500",
            steps: [
                "Week 1: Coverage assessment & equipment recommendation",
                "Week 2: Quote approval & gear procurement",
                "Weeks 3–4: Antenna mounting, cabling & AP deployment",
                "Week 5: Signal optimization, range testing & training"
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
            {/* Hero Section */}
            <div className="relative overflow-hidden bg-primary">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:40px_40px] opacity-20"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Content */}
                        <div>
                            <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 text-blue-200 rounded-full text-sm font-medium mb-6 border border-blue-400/30">
                                <Users className="w-4 h-4 mr-2" />
                                South Dakota&apos;s AV & Low Voltage Experts
                            </div>
                            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                                About <span className="text-secondary">Brink Design Co.</span>
                            </h1>
                            <p className="text-xl text-blue-100 mb-4 leading-relaxed">
                                <strong>Turning Ideas Into Innovative Solutions</strong>
                            </p>
                            <p className="text-lg text-blue-200 mb-8 leading-relaxed">
                                Professional low voltage installations done right the first time. 
                                Serving churches, businesses, and homeowners across South Dakota with quality that lasts.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href="/projects" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white hover:bg-white/10 rounded-xl transition-all duration-300">
                                    See Our Work
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </Link>
                                <Link href="/blog" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white hover:bg-white/10 rounded-xl transition-all duration-300">
                                    Read Recent Articles
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </Link>
                            </div>
                        </div>

                        {/* Hero Image */}
                        <div className="relative">
                            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                                <Image
                                    src="/images/about/rack.png"
                                    alt="Professional AV installation showing clean cable management and equipment rack"
                                    width={600}
                                    height={400}
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                            {/* Decorative elements */}
                            <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400/20 rounded-full blur-xl"></div>
                            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-orange-400/20 rounded-full blur-2xl"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Our Story */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="text-center mb-16">
                    <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
                        Our Journey
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Our Story
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        From family business to South Dakota&apos;s premier low voltage specialists
                    </p>
                </div>

                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Evolution of Excellence</h3>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Skytab Innovations has been serving South Dakota for over a decade. In 2023,
                                Alexavier Brink took over the family LLC and launched <strong>Brink Design</strong> to help smaller churches get professional AV installs&mdash;without the big-firm price tag.
                            </p>
                            <div className="flex items-center p-4 bg-green-50 rounded-lg border border-green-200">
                                <CheckCircle className="w-6 h-6 text-green-600 mr-3 flex-shrink-0" />
                                <span className="text-green-800 font-medium">Proudly serving South Dakota since 2013</span>
                            </div>
                        </div>
                        <div className="relative">
                            <Image
                                src="/images/about/rack.png"
                                alt="Then & now: a small church sanctuary and Alexavier installing speakers"
                                width={600}
                                height={400}
                                className="rounded-xl shadow-lg w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Our Mission */}
            <div className="bg-gradient-to-r from-gray-50 to-blue-50 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
                        <div className="max-w-4xl mx-auto">
                            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-12">
                                <Target className="w-16 h-16 text-blue-600 mx-auto mb-6" />
                                <blockquote className="text-2xl font-medium text-gray-900 mb-6 leading-relaxed">
                                    &ldquo;To empower churches, businesses, ranchers, and homeowners across western
                                    South Dakota (and into Wyoming and Nebraska) with smart, scalable technology&mdash;
                                    installed right the first time.&rdquo;
                                </blockquote>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                                    <div className="text-center">
                                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                                            <Users className="w-6 h-6 text-blue-600" />
                                        </div>
                                        <h4 className="font-semibold text-gray-900">People First</h4>
                                        <p className="text-sm text-gray-600">Building lasting relationships with every client</p>
                                    </div>
                                    <div className="text-center">
                                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                                            <Award className="w-6 h-6 text-green-600" />
                                        </div>
                                        <h4 className="font-semibold text-gray-900">Quality Work</h4>
                                        <p className="text-sm text-gray-600">Professional installations that exceed expectations</p>
                                    </div>
                                    <div className="text-center">
                                        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                                            <MapPin className="w-6 h-6 text-purple-600" />
                                        </div>
                                        <h4 className="font-semibold text-gray-900">Local Focus</h4>
                                        <p className="text-sm text-gray-600">Dedicated to serving our South Dakota community</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* What We Do */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">What We Do</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Comprehensive low voltage solutions for every need and application
                    </p>
                </div>

                <div className="space-y-16">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                                <div className={`p-8 md:p-12 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                                    <div className="flex items-center mb-6">
                                        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                                            <service.icon className="w-8 h-8 text-white" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                                    </div>
                                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                                        {service.description}
                                    </p>
                                    <Link href="/contact" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
                                        Learn More
                                        <ArrowRight className="w-4 h-4 ml-2" />
                                    </Link>
                                </div>
                                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                                    <Image
                                        src={service.image}
                                        alt={service.alt}
                                        width={600}
                                        height={400}
                                        className="w-full h-auto object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Maintenance & Support */}
                    <div className="bg-primary rounded-2xl shadow-lg p-8 md:p-12 text-white">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                            <div>
                                <div className="flex items-center mb-6">
                                    <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mr-4">
                                        <Wrench className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold">Maintenance & Support</h3>
                                </div>
                                <p className="text-blue-100 text-lg leading-relaxed mb-6">
                                    Firmware updates, system health checks, expansions, and remote diagnostics&mdash;
                                    plus emergency/after-hours service.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <a
                                        href="tel:6053818290"
                                        onClick={() => trackEvent('phone_click', { location: 'about-support' })}
                                        className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-50 transition-colors"
                                    >
                                        <Phone className="w-5 h-5 mr-2" />
                                        Call 605-381-8290
                                    </a>
                                    <span className="inline-flex items-center px-6 py-3 bg-white/10 rounded-lg text-white border border-white/20">
                                        24/7 Emergency Support
                                    </span>
                                </div>
                            </div>
                            <div className="flex items-center justify-center">
                                <div className="text-center">
                                    <Clock className="w-24 h-24 text-white/60 mx-auto mb-4" />
                                    <p className="text-blue-100">We&rsquo;ll be there when you need us!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-gradient-to-r from-gray-50 to-blue-50 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Brink Design Co?</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            The qualities that set us apart and make us South Dakota&rsquo;s preferred AV partner
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {whyChooseUs.map((item, index) => (
                            <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                                <item.icon className={`w-8 h-8 ${item.color} mb-4`} />
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                                <p className="text-gray-600 text-sm">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Service Area */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">Service Area</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Proudly serving western South Dakota, plus select projects in Wyoming and Nebraska
                    </p>
                </div>

                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 text-center">
                    <Image
                        src="/images/about/Service Area.png"
                        alt="Map highlighting western South Dakota, Wyoming, and Nebraska"
                        width={800}
                        height={400}
                        className="rounded-xl shadow-lg mx-auto mb-6"
                    />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                        <div className="text-center">
                            <MapPin className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                            <h4 className="font-semibold text-gray-900">Primary Service Area</h4>
                            <p className="text-sm text-gray-600">Western South Dakota</p>
                        </div>
                        <div className="text-center">
                            <Building className="w-8 h-8 text-green-600 mx-auto mb-2" />
                            <h4 className="font-semibold text-gray-900">Extended Coverage</h4>
                            <p className="text-sm text-gray-600">Wyoming & Nebraska</p>
                        </div>
                        <div className="text-center">
                            <Phone className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                            <h4 className="font-semibold text-gray-900">Remote Support</h4>
                            <p className="text-sm text-gray-600">Nationwide assistance</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Project Timelines */}
            <div className="bg-gradient-to-br from-gray-900 to-blue-900 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-white mb-6">Typical Project Timelines</h2>
                        <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                            Transparent timelines so you know what to expect from start to finish
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {projectTimelines.map((project, index) => (
                            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                                <div className="flex items-center mb-6">
                                    <div className={`w-12 h-12 ${project.color} rounded-xl flex items-center justify-center mr-4`}>
                                        <project.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white">{project.title}</h3>
                                        <div className="flex items-center text-blue-200 text-sm">
                                            <Calendar className="w-4 h-4 mr-1" />
                                            {project.duration}
                                        </div>
                                    </div>
                                </div>
                                <ol className="space-y-2">
                                    {project.steps.map((step, stepIndex) => (
                                        <li key={stepIndex} className="flex items-start text-sm text-blue-100">
                                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-green-400 flex-shrink-0" />
                                            {step}
                                        </li>
                                    ))}
                                </ol>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 py-20">
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Ready to Work Together?
                    </h2>
                    <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
                        Let&rsquo;s discuss your project and show you why South Dakota businesses 
                        trust Brink Design Co. for their technology needs.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            onClick={() => trackEvent('start_project_click', { location: 'about' })}
                            className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 font-bold rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-lg transform hover:scale-105"
                        >
                            <Users className="w-5 h-5 mr-2" />
                            Start Your Project
                        </Link>
                        <Link
                            href="tel:6053818290"
                            onClick={() => trackEvent('phone_click', { location: 'about' })}
                            className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-orange-600 rounded-xl transition-all duration-300"
                        >
                            <Phone className="w-5 h-5 mr-2" />
                            Call (605) 381-8290
                        </Link>
                    </div>
                    
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-orange-100">
                        <div className="flex items-center justify-center space-x-2">
                            <Star className="w-4 h-4 text-white" />
                            <span>10+ Years Experience</span>
                        </div>
                        <div className="flex items-center justify-center space-x-2">
                            <Award className="w-4 h-4 text-white" />
                            <span>Professional Quality</span>
                        </div>
                        <div className="flex items-center justify-center space-x-2">
                            <MapPin className="w-4 h-4 text-white" />
                            <span>Local South Dakota Team</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
