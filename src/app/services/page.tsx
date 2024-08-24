import type { Metadata } from "next";
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import React from 'react';

const services = [
    {
        title: 'Logo Design',
        description: 'Crafting distinctive and impactful logos that capture the essence of your brand.',
        icon: '/icons/logo-design.png',
    },
    {
        title: 'Website Development',
        description: 'Designing and developing responsive, cutting-edge websites customized to meet your business goals.',
        icon: '/icons/website-development.png',
    },
    {
        title: 'App Development',
        description: 'Creating intuitive and feature-rich mobile applications that enhance user engagement and experience.',
        icon: '/icons/app-development.png',
    },
];

export const metadata: Metadata = {
    title: "Our Services - Brink Design Co.",
    description: "Discover our range of services including logo design, website development, and app development to help your business grow and succeed.",
};

export default function Page() {
    return (
        <div>
            <div className='bg-[url("/hero.avif")] bg-cover bg-center bg-fixed h-96 py-10'>
                <div className="container flex flex-col justify-end items-start h-full">
                    <h1 className="text-3xl font-bold text-white">Our Services</h1>
                </div>
            </div>

            <div className="container mx-auto p-4">
                <div className="text-center my-8">
                    <h2 className="text-4xl font-bold">What We Offer</h2>
                    <p className="text-gray-600 mt-4">We provide a range of services to help your business grow and succeed.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <Card key={index} className="shadow-lg rounded-lg overflow-hidden group hover:bg-neutral-100 transition-all transform hover:scale-105">
                            <CardHeader className="flex items-center space-x-4 p-4">
                                <img src={service.icon} alt={service.title} className="w-16 h-16 transition-transform duration-300 group-hover:scale-110" />
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
                    <p className="mt-4">Ready to start your project? Contact Me today to get started!</p>
                    <Button className="mt-8 px-6 py-3 bg-white text-black font-bold hover:bg-gray-200 transition" asChild><Link href="/contact">Contact Me</Link></Button>
                </div>
            </div>
        </div>
    );
}