"use client";

import React from 'react';
import Image from 'next/image';
import { Button } from './ui/button';
import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react';


export default function Hero() {
    return (
        <section className="relative min-h-[70vh] flex items-center bg-primary overflow-hidden">
            {/* Background Image */}
            <Image
                src="/hero.avif"
                alt=""
                fill
                sizes="100vw"
                priority
                className="object-cover object-center opacity-15"
            />

            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
                <div className="max-w-3xl">
                    <p className="text-sm font-semibold text-accent uppercase tracking-wide mb-3">
                        Rapid City &bull; Black Hills &bull; Western SD
                    </p>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 leading-[1.1]">
                        Security Cameras, Wi-Fi & AV — Installed Right
                    </h1>
                    <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl leading-relaxed">
                        We install low-voltage systems for homes, churches, and businesses across western South Dakota. Clean work, honest pricing, no subscriptions.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 mb-8">
                        <Button asChild size="lg" className="bg-accent text-gray-900 hover:bg-yellow-300 font-bold px-8 py-4 text-base">
                            <Link href="/contact" className="inline-flex items-center">
                                Book a Site Visit & Quote
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </Link>
                        </Button>
                        <Button asChild size="lg" className="bg-white text-gray-900 hover:bg-gray-100 font-bold px-8 py-4 text-base">
                            <Link href="tel:6053893261" className="inline-flex items-center">
                                (605) 389-3261
                                <Phone className="w-4 h-4 ml-2" />
                            </Link>
                        </Button>
                    </div>
                    <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-blue-200">
                        <span>Licensed & Insured</span>
                        <span className="text-blue-400">•</span>
                        <span>2-Year Labor Warranty</span>
                        <span className="text-blue-400">•</span>
                        <span>No Monthly Fees</span>
                    </div>
                </div>
            </div>
        </section>
    );
}