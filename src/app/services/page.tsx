import type { Metadata } from "next";
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const services = [
    {
        title: 'Smart Home & Automation',
        description: 'Lighting, shades, climate, entry, and audio that work together in one app with local support.',
        icon: '/icons/smart-home.png',
        features: ['Lighting & Shades', 'Climate & Energy', 'Voice/App Control', 'Scenes & Schedules'],
        color: 'from-green-500 to-emerald-500',
        href: '/services/smart-home',
    },
    {
        title: 'Audio/Video Systems',
        description: 'Whole-home audio, media rooms, and commercial AV designed for clarity and simplicity.',
        icon: '/icons/audio-video.png',
        features: ['Media/Theater Rooms', 'Distributed Audio', 'Conference AV', 'Livestream/Recording'],
        color: 'from-purple-500 to-pink-500',
        href: '/services/commercial-av',
    },
    {
        title: 'WiFi & Wiring',
        description: 'Controller-based WiFi and structured wiring so every room gets fast, reliable coverage.',
        icon: '/icons/network-cabling.png',
        features: ['Whole-Home WiFi', 'Structured Cabling', 'Fiber Runs', 'Network Security'],
        color: 'from-blue-500 to-cyan-500',
        href: '/services/low-voltage',
    },
    {
        title: 'Security Systems',
        description: 'Pro-grade cameras, access, and alerts with local recording and remote access.',
        icon: '/icons/security-system.png',
        features: ['IP Cameras', 'Access Control', 'Motion/Perimeter Alerts', 'Remote Monitoring'],
        color: 'from-red-500 to-orange-500',
        href: '/services/security-cameras',
    },
    {
        title: 'Care & Support',
        description: 'Firmware updates, network tuning, and system checks to keep everything running right.',
        icon: '/icons/maintenance.png',
        features: ['System Health Checks', 'Firmware & Security', 'Performance Tuning', 'Scheduled Maintenance'],
        color: 'from-amber-500 to-yellow-500',
        href: '/contact',
    },
];

const benefits = [
    {
        title: 'Hands-On Knowledge',
        description: 'Our techs design and install systems every day — not just spec them.',
    },
    {
        title: 'Designed for Your Space',
        description: 'Every project is planned around your building, not a one-size template.',
    },
    {
        title: 'Clear Pricing',
        description: 'You get a written quote before any work starts. No surprises.',
    },
    {
        title: 'Local Support',
        description: 'Based in Rapid City. If something needs attention, we\'re a phone call away.',
    },
];

const faqs = [
    {
        question: 'How do I get started?',
        answer: 'Call us or fill out the contact form. We\'ll schedule a site visit to understand your space and give you a clear quote.',
    },
    {
        question: 'How long does installation take?',
        answer: 'Most projects are completed in a few days depending on scope and complexity.',
    },
    {
        question: 'Are your systems under warranty?',
        answer: 'All work includes a two‑year labor warranty plus manufacturer coverage.',
    },
    {
        question: 'Do you work with homes and businesses?',
        answer: 'We serve residential, commercial and institutional clients across the region.',
    },
];

export const metadata: Metadata = {
    title: "Smart Home & AV Services – Brink Design Co.",
    description: "Smart home automation, WiFi, audio/video, and security installations for homes, churches, and businesses across western South Dakota.",
    alternates: { canonical: "https://www.brinkdesign.co/services" },
    openGraph: {
        title: "Smart Home & AV Services – Brink Design Co.",
        description: "Smart home, WiFi, AV, and security installs for Rapid City and the Black Hills.",
        images: ["https://www.brinkdesign.co/og-image.jpg"],
    },
    twitter: {
        card: "summary_large_image",
        title: "Smart Home & AV Services – Brink Design Co.",
        description: "Smart home, WiFi, AV, and security installations with local design and support.",
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
                                Smart home automation, WiFi, audio/video, and security installs—designed, programmed, and supported locally.
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
                            <div className="text-3xl md:text-4xl font-bold text-secondary">2yr</div>
                            <div className="text-gray-300">Labor Warranty</div>
                        </div>
                        <div className="space-y-2">
                            <div className="text-3xl md:text-4xl font-bold text-secondary">100%</div>
                            <div className="text-gray-300">Licensed & Insured</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Services Section */}
            <div id="services" className="container mx-auto px-6 py-20">
                <div className="text-center mb-16">
                    <div className="inline-block px-4 py-2 bg-primary/10 rounded-full font-semibold text-sm mb-4">
                        What We Install
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        What We Install
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Cameras, WiFi, cabling, and AV for homes, churches, and businesses across South Dakota.
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
                            Every job follows the same four steps
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { step: '01', title: 'Site Visit', desc: 'We walk your space and understand what you need' },
                            { step: '02', title: 'Design', desc: 'You get a plan and a clear quote' },
                            { step: '03', title: 'Installation', desc: 'Our crew installs everything clean and tested' },
                            { step: '04', title: 'Support', desc: 'Training, handover, and ongoing service' },
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

                {/* Benefits Section */}
                <div className="bg-white py-20">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Work With Us</h2>
                            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                Licensed, insured, and backed by years of hands-on install work.
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

                {/* Quote Section */}
                <div className="bg-gradient-to-r from-gray-50 to-gray-100 py-20">
                    <div className="container mx-auto px-6 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Get a Quote</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
                            Tell us what you need — we&apos;ll give you a written quote.
                        </p>
                        <Button size="lg" className="bg-primary text-secondary hover:bg-primary/90 font-bold px-8 py-4 text-lg" asChild>
                            <Link href="/contact">Book a Site Visit & Quote</Link>
                        </Button>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="bg-white py-16">
                    <div className="max-w-3xl mx-auto px-6">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Service FAQs</h2>
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
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-secondary via-secondary to-secondary/90 text-primary py-20">
                <div className="container mx-auto px-6 text-center">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Ready to Get Started?
                        </h2>
                        <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                            We’ll walk your property, figure out what you need, and give you a clear plan with honest pricing.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-primary text-secondary hover:bg-primary/90 font-bold px-8 py-4 text-lg" asChild>
                                <Link href="/contact">Book a Site Visit & Quote</Link>
                            </Button>
                            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-secondary px-8 py-4 text-lg" asChild>
                                <Link href="/projects">View Our Work</Link>
                            </Button>
                        </div>

                        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                            <div className="flex items-center justify-center space-x-2">
                                <div className="w-2 h-2 bg-primary rounded-full"></div>
                                <span>On-Site Assessment</span>
                            </div>
                            <div className="flex items-center justify-center space-x-2">
                                <div className="w-2 h-2 bg-primary rounded-full"></div>
                                <span>Clear, Written Quotes</span>
                            </div>
                            <div className="flex items-center justify-center space-x-2">
                                <div className="w-2 h-2 bg-primary rounded-full"></div>
                                <span>2-Year Labor Warranty</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}