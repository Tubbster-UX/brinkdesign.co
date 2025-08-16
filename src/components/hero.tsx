"use client";

import React from 'react';
import Image from 'next/image';
import { Button } from './ui/button';
import Link from 'next/link'
import { ArrowRight, CheckCircle, Users, Star, Phone } from 'lucide-react';


export default function Hero() {
    return (
        <section className="relative min-h-[60vh] flex items-center justify-center bg-primary overflow-hidden">
            {/* Light Background Image */}
            <Image
                src="/hero.avif"
                alt=""
                fill
                sizes="100vw"
                loading="lazy"
                className="object-cover object-center opacity-10"
            />
            {/* Subtle Grid Pattern */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 pointer-events-none"></div>

            <div className="relative z-10 max-w-3xl mx-auto px-4 py-16 text-center">
                <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                    AV, Security & Cabling for South Dakota
                </h1>
                <p className="text-lg text-secondary mb-6 max-w-xl mx-auto">
                    Clean, reliable installations for churches, homes, and businesses. Local team. Honest advice. Quality work.
                </p>
                <ul className="flex flex-wrap gap-4 mb-8 justify-center text-accent text-sm">
                    <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-white" />10+ Years Experience</li>
                    <li className="flex items-center"><Users className="w-4 h-4 mr-2 text-white" />Local South Dakota Team</li>
                </ul>
                <Button asChild size="lg">
                    <Link href="/contact" className="inline-flex items-center">
                        Request a Quote
                        <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                </Button>
            </div>
        </section>
    );
}