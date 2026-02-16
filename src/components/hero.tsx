"use client";

import React from 'react';
import Image from 'next/image';
import { Button } from './ui/button';
import Link from 'next/link';
import { ArrowRight, Phone, ShieldCheck, Wifi, Speaker } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative min-h-[72vh] overflow-hidden bg-primary flex items-center">
            <Image
                src="/hero.avif"
                alt=""
                fill
                sizes="100vw"
                priority
                className="object-cover object-center opacity-15"
            />

            <div className="relative z-10 mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
                <div className="max-w-3xl">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-accent">
                        Rapid City • Black Hills • Western SD
                    </p>
                    <h1 className="mb-5 text-4xl font-bold leading-[1.1] text-white md:text-5xl lg:text-6xl">
                        Get a Fast, No-Guesswork Quote for Cameras, WiFi, AV & Smart Home
                    </h1>
                    <p className="mb-8 max-w-2xl text-lg leading-relaxed text-blue-100 md:text-xl">
                        We design, install, and support reliable systems for businesses,
                        churches, and homes—so you get fewer headaches and a setup that
                        works every day.
                    </p>

                    <div className="mb-8 flex flex-col gap-3 sm:flex-row">
                        <Button asChild size="lg" className="bg-accent px-8 py-4 text-base font-bold text-gray-900 hover:bg-yellow-300">
                            <Link href="/contact" className="inline-flex items-center">
                                Book a Free Walkthrough
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

                    <div className="mb-7 rounded-lg border border-white/20 bg-white/10 p-3 text-sm text-blue-100">
                        <span className="font-semibold text-white">This week:</span> Free on-site walkthroughs available in Rapid City, Box Elder, Spearfish, and Sturgis.
                    </div>

                    <div className="mb-7 flex flex-wrap gap-x-6 gap-y-2 text-sm text-blue-200">
                        <span>Licensed &amp; Insured</span>
                        <span className="text-blue-400">•</span>
                        <span>No Monthly Fees</span>
                        <span className="text-blue-400">•</span>
                        <span>2-Year Warranty</span>
                    </div>

                    <div className="grid gap-2 text-sm sm:grid-cols-3">
                        <Link href="/commercial-security-cameras-rapid-city" className="inline-flex items-center gap-2 rounded-md bg-white/10 px-3 py-2 text-blue-100 hover:bg-white/20">
                            <ShieldCheck className="h-4 w-4" />
                            Security Cameras
                        </Link>
                        <Link href="/business-wifi-networks-rapid-city" className="inline-flex items-center gap-2 rounded-md bg-white/10 px-3 py-2 text-blue-100 hover:bg-white/20">
                            <Wifi className="h-4 w-4" />
                            Business WiFi
                        </Link>
                        <Link href="/smart-home-automation-black-hills" className="inline-flex items-center gap-2 rounded-md bg-white/10 px-3 py-2 text-blue-100 hover:bg-white/20">
                            <Speaker className="h-4 w-4" />
                            Smart Home
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
