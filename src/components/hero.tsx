"use client";

import React from 'react';
import { Button } from './ui/button';
import Link from 'next/link'
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Users, Star, Phone } from 'lucide-react';
import { trackEvent } from '@/lib/analytics';

export default function Hero() {
    return (
        <section className='relative min-h-screen flex items-center justify-center bg-primary overflow-hidden'>
            {/* Background Image with Overlay */}
            <div className='absolute inset-0 bg-[url("/hero.avif")] bg-cover bg-center bg-fixed opacity-30'></div>
            <div className='absolute inset-0 bg-primary/80'></div>
            
            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
            
            {/* Animated Background Elements */}
            <div className="absolute top-20 left-10 w-4 h-4 bg-yellow-400 rounded-full animate-pulse"></div>
            <div className="absolute top-40 right-20 w-6 h-6 bg-blue-400 rounded-full animate-bounce"></div>
            <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
            
            <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20'>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center lg:text-left"
                    >
                        {/* Trust Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6 border border-white/20"
                        >
                            <Star className="w-4 h-4 text-yellow-400 mr-2" />
                            <span className="text-white">10+ Years Serving South Dakota</span>
                        </motion.div>
                        
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className='text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight'
                        >
                            Professional AV, Security & 
                            <span className="text-yellow-400 block">
                                Low Voltage Solutions
                            </span>
                        </motion.h1>
                        
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                            className='text-lg md:text-xl mb-8 text-blue-100 leading-relaxed max-w-2xl'
                        >
                            We specialize in clean, reliable installations for churches, homes, and businesses&mdash;cameras, cabling, audio systems, and smart tech done right the first time.
                        </motion.p>
                        
                        {/* Trust Indicators */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.6 }}
                            className="flex flex-wrap gap-4 mb-8 justify-center lg:justify-start"
                        >
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
                        </motion.div>
                        
                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7, duration: 0.6 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                        >
                            <Button asChild size="lg" className="bg-yellow-500 text-gray-900 hover:bg-yellow-400 font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                                <Link
                                    href="/contact"
                                    onClick={() => trackEvent('cta_click', { cta: 'hero_request_free_quote' })}
                                    className="inline-flex items-center"
                                >
                                    Request Free Quote
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </Link>
                            </Button>
                            <Button asChild variant="outline" size="lg">
                                <Link
                                    href="tel:6053818290"
                                    onClick={() => trackEvent('phone_click', { location: 'hero' })}
                                    className="inline-flex items-center"
                                >
                                    <Phone className="w-5 h-5 mr-2" />
                                    Call (605) 381-8290
                                </Link>
                            </Button>
                        </motion.div>
                    </motion.div>
                    
                    {/* Hero Stats/Features */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="relative"
                    >
                        <div className="grid grid-cols-1 gap-6">
                            {/* Main Feature Card */}
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
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
                                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
                                    <div className="text-2xl font-bold text-yellow-400">10+</div>
                                    <div className="text-sm text-blue-100">Years Experience</div>
                                </div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
                                    <div className="text-2xl font-bold text-blue-400">24/7</div>
                                    <div className="text-sm text-blue-100">Support Available</div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Decorative Elements */}
                        <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400/20 rounded-full blur-xl"></div>
                        <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-orange-400/20 rounded-full blur-2xl"></div>
                    </motion.div>
                </div>
            </div>
            
        </section>
    );
}