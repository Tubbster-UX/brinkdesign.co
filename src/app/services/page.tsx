import type { Metadata } from "next";
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

const services = [
    {
        title: 'Security System Installation',
        description: 'Professional installation of CCTV, alarm systems, and access control for homes and businesses. Advanced monitoring and 24/7 protection.',
        icon: '/icons/security-system.png',
        features: ['CCTV Systems', 'Access Control', 'Alarm Systems', '24/7 Monitoring'],
        color: 'from-red-500 to-orange-500',
        href: '/security-installation',
    },
    {
        title: 'Network Cabling',
        description: 'Structured cabling solutions for reliable and high-speed data, voice, and video networks. Future-proof infrastructure for growing businesses.',
        icon: '/icons/network-cabling.png',
        features: ['Cat6/Cat6a Installation', 'Fiber Optic', 'Network Design', 'Testing & Certification'],
        color: 'from-blue-500 to-cyan-500',
        href: '/network-cabling',
    },
    {
        title: 'Audio/Video Solutions',
        description: 'Custom audio and video system setup for conference rooms, home theaters, and commercial spaces. Crystal clear communication and entertainment.',
        icon: '/icons/audio-video.png',
        features: ['Conference Rooms', 'Home Theaters', 'Digital Signage', 'Live Streaming'],
        color: 'from-purple-500 to-pink-500',
        href: '/commercial-av',
    },
    {
        title: 'Smart Home Integration',
        description: 'Seamless integration of smart devices for automation, security, and energy efficiency. Control your entire home from anywhere.',
        icon: '/icons/smart-home.png',
        features: ['Home Automation', 'Voice Control', 'Energy Management', 'Remote Monitoring'],
        color: 'from-green-500 to-emerald-500',
    },
    {
        title: 'Troubleshooting & Maintenance',
        description: 'Expert diagnostics, repairs, and ongoing maintenance for all low voltage systems. Keep your technology running smoothly.',
        icon: '/icons/maintenance.png',
        features: ['System Diagnostics', 'Preventive Maintenance', 'Emergency Repairs', 'Performance Optimization'],
        color: 'from-amber-500 to-yellow-500',
    },
];

export const metadata: Metadata = {
    title: "Low Voltage Services - Brink Design Co.",
    description: "Explore our professional low voltage services including security system installation, network cabling, audio/video solutions, and more.",
    alternates: { canonical: "https://www.brinkdesign.co/services" },
    twitter: {
        card: "summary_large_image",
        title: "Low Voltage Services - Brink Design Co.",
        description: "Explore our professional low voltage services including security system installation, network cabling, audio/video solutions, and more.",
        images: ["https://www.brinkdesign.co/og-image.jpg"],
    },
};

export default function Page() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
            {/* Hero Section - Enhanced */}
            <div className="relative">
                {/* Background with overlay */}
                <div className='bg-[url("/hero.avif")] bg-cover bg-center bg-fixed h-[60vh] relative'>
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>

                {/* Hero Content */}
                <div className="absolute inset-0 flex items-center">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl">
                            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                                Services
                            </h1>
                            <p className="text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed">
                                From security systems to smart home automation, we deliver cutting-edge low voltage solutions that power your modern lifestyle.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <div className="bg-primary text-white py-16">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
                        <div className="space-y-2">
                            <div className="text-3xl md:text-4xl font-bold text-secondary">10+</div>
                            <div className="text-gray-300">Years Experience</div>
                        </div>
                        <div className="space-y-2">
                            <div className="text-3xl md:text-4xl font-bold text-secondary">24/7</div>
                            <div className="text-gray-300">Support Available</div>
                        </div>
                        <div className="space-y-2">
                            <div className="text-3xl md:text-4xl font-bold text-secondary">100%</div>
                            <div className="text-gray-300">Satisfaction Rate</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Services Section */}
            <div id="services" className="container mx-auto px-6 py-20">
                <div className="text-center mb-16">
                    <div className="inline-block px-4 py-2 bg-primary/10 rounded-full font-semibold text-sm mb-4">
                        Our Expertise
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        What We Specialize In
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Comprehensive low voltage solutions designed to meet the evolving needs of modern homes and businesses across South Dakota.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {services.map((service, index) => (
                        <Card key={index} className="group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white">
                            {/* Gradient Background */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

                            <CardHeader className="relative z-10 p-8">
                                <div className="flex items-center space-x-4 mb-4">
                                    <div className={`p-3 rounded-full bg-gradient-to-br ${service.color} shadow-lg`}>
                                        <Image
                                            src={service.icon}
                                            alt={service.title}
                                            width={40}
                                            height={40}
                                            className="w-8 h-8 filter brightness-0 invert transition-transform duration-300 group-hover:scale-110"
                                        />
                                    </div>
                                    <div className={`w-12 h-0.5 bg-gradient-to-r ${service.color} opacity-60`}></div>
                                </div>
                                <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors">
                                    {service.title}
                                </CardTitle>
                            </CardHeader>

                            <CardContent className="relative z-10 px-8 pb-8">
                                <CardDescription className="text-gray-600 text-base leading-relaxed mb-6">
                                    {service.description}
                                </CardDescription>

                                <div className="space-y-2 mb-6">
                                    {service.features.map((feature, featureIndex) => (
                                        <div key={featureIndex} className="flex items-center text-sm text-gray-700">
                                            <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color} mr-3 flex-shrink-0`}></div>
                                            {feature}
                                        </div>
                                    ))}
                                </div>
                                {(service.href) ?
                                    <Button
                                        variant="outline"
                                        className="w-full group-hover:border-transparent group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-800 group-hover:text-white transition-all duration-300"
                                        asChild
                                    >

                                        <Link href={service.href} className="flex items-center justify-center w-full h-full">
                                            <span className="text-sm font-semibold">Learn More</span>
                                        </Link>
                                    </Button>
                                    :
                                    <></>
                                    }
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Process Section */}
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 md:p-16 text-white mb-20">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
                        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                            A streamlined approach that ensures quality results every time
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { step: '01', title: 'Consultation', desc: 'Free on-site assessment of your needs' },
                            { step: '02', title: 'Design', desc: 'Custom solution tailored to your space' },
                            { step: '03', title: 'Installation', desc: 'Professional implementation by experts' },
                            { step: '04', title: 'Support', desc: 'Ongoing maintenance and support' },
                        ].map((item, index) => (
                            <div key={index} className="text-center group">
                                <div className="bg-secondary text-primary rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform">
                                    {item.step}
                                </div>
                                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                                <p className="text-gray-400 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-secondary via-secondary to-secondary/90 text-primary py-20">
                <div className="container mx-auto px-6 text-center">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Ready to Transform Your Space?
                        </h2>
                        <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                            Get a free consultation and see how our expert low voltage solutions can enhance your property's functionality and value.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-primary text-secondary hover:bg-primary/90 font-bold px-8 py-4 text-lg" asChild>
                                <Link href="/contact">Schedule Free Consultation</Link>
                            </Button>
                            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-secondary px-8 py-4 text-lg" asChild>
                                <Link href="/projects">View Our Work</Link>
                            </Button>
                        </div>

                        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                            <div className="flex items-center justify-center space-x-2">
                                <div className="w-2 h-2 bg-primary rounded-full"></div>
                                <span>Free Site Evaluation</span>
                            </div>
                            <div className="flex items-center justify-center space-x-2">
                                <div className="w-2 h-2 bg-primary rounded-full"></div>
                                <span>No Pressure Consultation</span>
                            </div>
                            <div className="flex items-center justify-center space-x-2">
                                <div className="w-2 h-2 bg-primary rounded-full"></div>
                                <span>Expert Recommendations</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}