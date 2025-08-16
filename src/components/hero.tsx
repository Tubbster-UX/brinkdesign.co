"use client";

import React from 'react';
import Image from 'next/image';
import { Button } from './ui/button';
import Link from 'next/link'
import { ArrowRight, CheckCircle, Users, Star, Phone } from 'lucide-react';

export default function Hero() {
    return (
        <section className='relative min-h-screen flex items-center justify-center bg-primary overflow-hidden'>
            {/* Background Image with Overlay */}
            <Image
                src="/hero.avif"
                alt=""
                fill
                sizes="100vw"
                loading="lazy"
                className="object-cover object-center opacity-30"
            />
            <div className='absolute inset-0 bg-primary/80'></div>
            
            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
            
            <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20'>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <div className="text-center lg:text-left">
                        {/* Trust Badge */}
                        <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg text-sm font-medium mb-6 border border-white/20">
                            <Star className="w-4 h-4 text-yellow-400 mr-2" />
                            <span className="text-white">10+ Years Serving South Dakota</span>
                        </div>
                        
                        <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight'>
                            Professional AV, Security & 
                            <span className="text-yellow-400 block">
                                Low Voltage Solutions
                            </span>
                        </h1>
                        
                        <p className='text-lg md:text-xl mb-8 text-blue-100 leading-relaxed max-w-2xl'>
                            We specialize in clean, reliable installations for churches, homes, and businesses&mdash;cameras, cabling, audio systems, and smart tech done right the first time.
                        </p>
                        
                        {/* Trust Indicators */}
                        <div className="flex flex-wrap gap-4 mb-8 justify-center lg:justify-start">
                            <div className="flex items-center text-green-300 text-sm">
                                <CheckCircle className="w-4 h-4 mr-2" />
                                Professional Installations
                            </div>
                            <div className="flex items-center text-green-300 text-sm">
                                <CheckCircle className="w-4 h-4 mr-2" />
                                Local South Dakota Team
                            </div>
                            <div className="flex items-center text-green-300 text-sm">
                                <CheckCircle className="w-4 h-4 mr-2" />
                                24/7 Support Available
                            </div>
                        </div>
                        
                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Button asChild size="lg" className="bg-yellow-500 text-gray-900 hover:bg-yellow-400 font-bold px-8 py-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-200">
                                <Link href="/contact" className="inline-flex items-center">
                                    Request Free Quote
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </Link>
                            </Button>
                            <Button asChild variant="outline" size="lg">
                                <Link href="tel:6053818290" className="inline-flex items-center">
                                    <Phone className="w-5 h-5 mr-2" />
                                    Call (605) 381-8290
                                </Link>
                            </Button>
                        </div>
                    </div>
                    
                    {/* Hero Stats/Features */}
                    <div className="relative">
                        <div className="grid grid-cols-1 gap-6">
                            {/* Main Feature Card */}
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                                <h3 className="text-2xl font-bold text-white mb-4">Why Choose Brink Design?</h3>
                                <div className="space-y-4">
                                    <div className="flex items-center text-blue-100">
                                        <Users className="w-5 h-5 mr-3 text-yellow-400" />
                                        <span>Personal service from our local team</span>
                                    </div>
                                    <div className="flex items-center text-blue-100">
                                        <CheckCircle className="w-5 h-5 mr-3 text-green-400" />
                                        <span>Enterprise-grade equipment & installations</span>
                                    </div>
                                    <div className="flex items-center text-blue-100">
                                        <Star className="w-5 h-5 mr-3 text-yellow-400" />
                                        <span>Honest pricing, no hidden fees</span>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Stats Grid */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center border border-white/20">
                                    <div className="text-2xl font-bold text-yellow-400">10+</div>
                                    <div className="text-sm text-blue-100">Years Experience</div>
                                </div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center border border-white/20">
                                    <div className="text-2xl font-bold text-blue-400">24/7</div>
                                    <div className="text-sm text-blue-100">Support Available</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    );
}