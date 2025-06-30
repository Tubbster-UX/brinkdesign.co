"use client";

import React from 'react';
import Logo from './logo';
import Link from 'next/link';
import { Button } from './ui/button';
import { trackEvent } from '@/lib/analytics';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gradient-to-br from-primary via-primary to-primary/95 text-gray-300 relative overflow-hidden">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
            </div>
            
            <div className="relative">
                {/* Main footer content */}
                <div className="container mx-auto px-6 pt-16 pb-12">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                        {/* Logo and Tagline - Enhanced */}
                        <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left">
                            <Logo className="w-36 mb-6 transition-transform hover:scale-105" />
                            <p className="text-lg font-medium text-gray-200 mb-4 max-w-sm">
                                Low Voltage Done Right.
                            </p>
                            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
                                Professional low voltage solutions for homes and businesses across South Dakota. Quality installations, expert service.
                            </p>
                        </div>

                        {/* Navigation - Better organized */}
                        <div className="lg:col-span-3">
                            <h3 className="text-xl font-bold mb-6 text-white relative">
                                Services
                                <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-secondary to-secondary/60"></div>
                            </h3>
                            <nav className="space-y-3">
                                <Link href="/services" className="block text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-200">
                                    All Services
                                </Link>
                                <Link href="/services/low-voltage" className="block text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-200">
                                    Low Voltage Cabling
                                </Link>
                                <Link href="/services/security-cameras" className="block text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-200">
                                    Security Systems
                                </Link>
                                <Link href="/services/commercial-av" className="block text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-200">
                                    Commercial AV
                                </Link>
                            </nav>
                        </div>

                        <div className="lg:col-span-2">
                            <h3 className="text-xl font-bold mb-6 text-white relative">
                                Company
                                <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-secondary to-secondary/60"></div>
                            </h3>
                            <nav className="space-y-3">
                                <Link href="/about" className="block text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-200">
                                    About Us
                                </Link>
                                <Link href="/projects" className="block text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-200">
                                    Projects
                                </Link>
                                <Link href="/blog" className="block text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-200">
                                    Blog
                                </Link>
                                <Link href="/linecard" className="block text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-200">
                                    Line Card
                                </Link>
                                <Link href="/service-area" className="block text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-200">
                                    Service Area
                                </Link>
                            </nav>
                        </div>

                        {/* Contact & CTA - Enhanced */}
                        <div className="lg:col-span-3">
                            <h3 className="text-xl font-bold mb-6 text-white relative">
                                Get Started
                                <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-secondary to-secondary/60"></div>
                            </h3>
                            
                            <div className="space-y-4 mb-6">
                                <div className="flex items-center space-x-3">
                                    <a href="mailto:contact@brinkdesign.co" className="text-gray-300 hover:text-white transition-colors">
                                        contact@brinkdesign.co
                                    </a>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <span className="text-gray-400">South Dakota</span>
                                </div>
                            </div>

                            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                                <p className="text-sm mb-3 text-gray-300 font-medium">Ready to get started?</p>
                                <p className="text-xs mb-4 text-gray-400">Free consultation • No pressure • Expert advice</p>
                                <Link
                                    href="/contact"
                                    onClick={() => trackEvent('cta_click', { cta: 'footer_book_site_visit' })}
                                >
                                    <Button className="w-full bg-secondary hover:bg-secondary/90 text-primary font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-secondary/20">
                                        Book Free Site Visit
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Quick links row */}
                    <div className="mt-12 pt-8 border-t border-white/10">
                        <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm">
                            <Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
                            <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link>
                            <Link href="/faq" className="text-gray-400 hover:text-white transition-colors">FAQ</Link>
                            <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
                        </div>
                    </div>
                </div>

                {/* Legal and Disclaimer */}
                <div className="bg-black/20 border-t border-white/10">
                    <div className="container mx-auto px-6 py-6">
                        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-center md:text-left">
                            <div className="text-sm text-gray-400">
                                <p>&copy; {new Date().getFullYear()} Skytab Innovations LLC DBA Brink Design. All rights reserved.</p>
                            </div>
                            <div className="text-xs text-gray-500">
                                <p>Product names, logos, brands, and other trademarks are the property of their respective owners.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;