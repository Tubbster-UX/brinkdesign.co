import type { Metadata } from "next";
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

const services = [
    {
        title: 'Security System Installation',
        description: 'Professional installation of CCTV, alarm systems, and access control for homes and businesses.',
        icon: '/icons/security-system.png',
    },
    {
        title: 'Network Cabling',
        description: 'Structured cabling solutions for reliable and high-speed data, voice, and video networks.',
        icon: '/icons/network-cabling.png',
    },
    {
        title: 'Audio/Video Solutions',
        description: 'Custom audio and video system setup for conference rooms, home theaters, and commercial spaces.',
        icon: '/icons/audio-video.png',
    },
    {
        title: 'Smart Home Integration',
        description: 'Seamless integration of smart devices for automation, security, and energy efficiency.',
        icon: '/icons/smart-home.png',
    },
    {
        title: 'Troubleshooting & Maintenance',
        description: 'Expert diagnostics, repairs, and ongoing maintenance for all low voltage systems.',
        icon: '/icons/maintenance.png',
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
        <div>
            <div className='bg-[url("/hero.avif")] bg-cover bg-center bg-fixed h-96 py-10'>
                <div className="container flex flex-col justify-end items-start h-full">
                    <h1 className="text-3xl font-bold text-white">Low Voltage Services</h1>
                </div>
            </div>

            <div className="container mx-auto p-4">
                <div className="text-center my-8">
                    <h2 className="text-4xl font-bold">What We Offer</h2>
                    <p className="text-gray-600 mt-4">Comprehensive low voltage solutions for residential and commercial needs.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <Card key={index} className="shadow-lg rounded-lg overflow-hidden group hover:bg-neutral-100 transition-all transform hover:scale-105">
                            <CardHeader className="flex items-center space-x-4 p-4">
                                <Image src={service.icon} alt={service.title} width={100} height={100} className="w-16 h-16 transition-transform duration-300 group-hover:scale-110" />
                                <CardTitle className="text-2xl font-bold">{service.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="p-4">
                                <CardDescription className="text-gray-600">{service.description}</CardDescription>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="text-center my-16 bg-[#1e262e] text-white p-8 rounded-lg">
                    <h2 className="text-4xl font-bold">Get in Touch</h2>
                    <p className="mt-4">Ready to upgrade your property? Contact us today for a free consultation!</p>
                    <Button className="mt-8 px-6 py-3 bg-white text-black font-bold hover:bg-gray-200 transition" asChild>
                        <Link href="/contact">Contact Us</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}