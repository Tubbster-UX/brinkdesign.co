"use client";

import React from 'react';
import Image from 'next/image';
import { Button } from './ui/button';
import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-primary">
            <Image
                src="/hero.avif"
                alt=""
                fill
                sizes="100vw"
                priority
                className="object-cover object-center opacity-10"
            />

            <div className="relative z-10 mx-auto max-w-5xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
                <div className="max-w-3xl">
                    <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-accent">
                        Rapid City • Black Hills • Western South Dakota
                    </p>
                    <h1 className="mb-6 text-4xl font-bold leading-[1.1] text-white md:text-5xl lg:text-6xl">
                        Fast Quotes for Security Cameras, Business WiFi, AV & Smart Home
                    </h1>
                    <p className="mb-8 max-w-2xl text-lg leading-relaxed text-blue-100 md:text-xl">
                        We design, install, and support dependable systems for businesses, churches, and homes—without the guesswork.
                    </p>

                    <div className="mb-8 flex flex-col gap-3 sm:flex-row">
                        <Button asChild size="lg" className="bg-accent px-8 py-4 text-base font-bold text-gray-900 hover:bg-yellow-300">
                            <Link href="/contact" className="inline-flex items-center">
                                Book a Site Visit & Quote
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                        <Button asChild size="lg" className="bg-white px-8 py-4 text-base font-bold text-gray-900 hover:bg-gray-100">
                            <Link href="tel:6053893261" className="inline-flex items-center">
                                Call (605) 389-3261
                                <Phone className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>

                    <p className="text-sm text-blue-200">
                        Licensed &amp; Insured • No Monthly Fees • 2-Year Labor Warranty
                    </p>
                </div>
            </div>
        </section>
    );
}
