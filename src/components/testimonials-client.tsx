"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { trackEvent } from '@/lib/analytics';
import Markdoc from "@markdoc/markdoc";

interface Testimonial {
    slug: string;
    author: string;
    authorImage?: string | null;
    published: boolean;
    rating: number;
    website?: string | null;
    content: string;
}

interface TestimonialsClientProps {
    testimonials: Testimonial[];
}

export default function TestimonialsClient({ testimonials }: TestimonialsClientProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    // Filter only published testimonials and ensure we have valid data
    const validTestimonials = testimonials.filter(t => t && t.published && t.author && t.content);

    // Auto-advance testimonials every 8 seconds
    useEffect(() => {
        if (!isAutoPlaying || validTestimonials.length <= 1) return;

        const interval = setInterval(() => {
            setCurrentIndex(prev => (prev + 1) % validTestimonials.length);
        }, 8000);

        return () => clearInterval(interval);
    }, [isAutoPlaying, validTestimonials.length]);

    const goToNext = () => {
        setCurrentIndex(prev => (prev + 1) % validTestimonials.length);
    };

    const goToPrev = () => {
        setCurrentIndex(prev => (prev - 1 + validTestimonials.length) % validTestimonials.length);
    };

    const goToIndex = (index: number) => {
        setCurrentIndex(index);
    };

    if (!validTestimonials.length) {
        return null;
    }

    // Show 3 testimonials at a time, centered around current index
    const getVisibleTestimonials = () => {
        if (validTestimonials.length <= 3) {
            return validTestimonials;
        }

        const result = [];
        for (let i = 0; i < 3; i++) {
            const index = (currentIndex + i) % validTestimonials.length;
            result.push(validTestimonials[index]);
        }
        return result;
    };

    const visibleTestimonials = getVisibleTestimonials();

    return (
        <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
                        <Star className="w-4 h-4 mr-2" />
                        Client Testimonials
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        What Our Clients Say
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Don&rsquo;t just take our word for it. Here&rsquo;s what South Dakota businesses
                        and homeowners say about working with Brink Design Co.
                    </p>
                </motion.div>

                {/* Navigation Controls */}
                {validTestimonials.length > 1 && (
                    <div className="flex justify-center items-center gap-4 mb-12">
                        <button
                            onClick={goToPrev}
                            className="p-3 bg-white border border-gray-200 rounded-full shadow-md hover:shadow-lg transition-all duration-200 hover:bg-gray-50 disabled:opacity-50"
                            aria-label="Previous testimonials"
                        >
                            <ChevronLeft className="w-5 h-5 text-gray-600" />
                        </button>
                        
                        <div className="flex gap-2">
                            {validTestimonials.map((_, i) => (
                                <button
                                    key={i}
                                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                                        i === currentIndex ? "bg-blue-600 w-8" : "bg-gray-300 hover:bg-gray-400"
                                    }`}
                                    onClick={() => goToIndex(i)}
                                    aria-label={`Show testimonial ${i + 1}`}
                                />
                            ))}
                        </div>
                        
                        <button
                            onClick={goToNext}
                            className="p-3 bg-white border border-gray-200 rounded-full shadow-md hover:shadow-lg transition-all duration-200 hover:bg-gray-50"
                            aria-label="Next testimonials"
                        >
                            <ChevronRight className="w-5 h-5 text-gray-600" />
                        </button>
                    </div>
                )}

                {/* Testimonials Display */}
                <div 
                    className="relative"
                    onMouseEnter={() => setIsAutoPlaying(false)}
                    onMouseLeave={() => setIsAutoPlaying(true)}
                >
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        >
                            {visibleTestimonials.map((testimonial, idx) => (
                                <TestimonialCard 
                                    key={`${testimonial.slug}-${currentIndex}-${idx}`}
                                    testimonial={testimonial}
                                    index={idx}
                                />
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center mt-20"
                >
                    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-12">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            Ready to Join Our Happy Clients?
                        </h3>
                        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                            Experience the same professional service and quality installations
                            that have earned us these amazing reviews.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="/contact"
                                onClick={() => trackEvent('start_project_click', { location: 'testimonials' })}
                                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                            >
                                Start Your Project
                            </a>
                            <a
                                href="tel:6053818290"
                                onClick={() => trackEvent('phone_click', { location: 'testimonials' })}
                                className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 text-gray-700 hover:border-gray-400 hover:text-gray-900 rounded-xl transition-all duration-300"
                            >
                                Call (605) 381-8290
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

// Separate component for individual testimonial cards
function TestimonialCard({ testimonial, index }: { testimonial: Testimonial; index: number }) {
    const renderable = JSON.parse(testimonial.content);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
        >
            <Card className="h-full bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group relative overflow-hidden">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                    <Quote className="w-12 h-12 text-blue-600" />
                </div>

                <div className="p-6 h-full flex flex-col">
                    {/* Author Section */}
                    <div className="flex items-center space-x-4 mb-6">
                        {testimonial.authorImage ? (
                            <div className="w-16 h-16 flex-shrink-0">
                                <Image
                                    src={testimonial.authorImage}
                                    alt={testimonial.author}
                                    width={64}
                                    height={64}
                                    className="object-contain w-full h-full"
                                />
                            </div>
                        ) : (
                            <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
                                {testimonial.author[0]?.toUpperCase() || "?"}
                            </div>
                        )}
                        <div className="flex-1 min-w-0">
                            <h3 className="text-lg font-bold text-gray-900 truncate">
                                {testimonial.author}
                            </h3>
                            {/* Star Rating */}
                            <div className="flex items-center mt-1">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <Star
                                        key={i}
                                        className={`w-4 h-4 ${
                                            i < testimonial.rating
                                                ? "text-yellow-400 fill-current"
                                                : "text-gray-300"
                                        }`}
                                    />
                                ))}
                                <span className="ml-2 text-sm text-gray-500">
                                    ({testimonial.rating}/5)
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <CardContent className="flex-1 p-0">
                        <div className="text-gray-700 leading-relaxed mb-4">
                            {Markdoc.renderers.react(renderable, React)}
                        </div>

                        {/* Website Link */}
                        {testimonial.website && (
                            <a
                                href={testimonial.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors duration-200"
                            >
                                Visit Website
                                <ExternalLink className="w-3 h-3 ml-1" />
                            </a>
                        )}
                    </CardContent>
                </div>
            </Card>
        </motion.div>
    );
}