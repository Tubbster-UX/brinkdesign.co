"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import Markdoc from "@markdoc/markdoc";

export default function TestimonialsClient({ testimonials }: { testimonials: any[] }) {
    const [index, setIndex] = useState(0);
    const [fade, setFade] = useState(true);
    const [isHovered, setIsHovered] = useState(false);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    // Calculate how many "pages" of 3 testimonials there are
    const pageCount = Math.ceil(testimonials.length / 3);

    // Show 3 at a time, rotate every 6s unless hovered
    useEffect(() => {
        if (testimonials.length <= 3) return;
        if (isHovered) {
            if (intervalRef.current) clearInterval(intervalRef.current);
            return;
        }
        intervalRef.current = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setIndex((prev) => (prev + 3) % testimonials.length);
                setFade(true);
            }, 300);
        }, 6000);
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [testimonials.length, index, isHovered]);

    if (!testimonials.length) return null;

    // Get 3 testimonials, wrapping around if needed
    const getVisibleTestimonials = () => {
        if (testimonials.length <= 3) return testimonials;
        return [
            testimonials[index % testimonials.length],
            testimonials[(index + 1) % testimonials.length],
            testimonials[(index + 2) % testimonials.length],
        ];
    };

    const visibleTestimonials = getVisibleTestimonials();
    const currentPage = Math.floor(index / 3);

    return (
        <section className="bg-background py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Testimonials</h2>
                <div
                    className="flex flex-col items-center"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <div
                        className={`grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl transition-opacity duration-300 ${
                            fade ? "opacity-100" : "opacity-0"
                        }`}
                    >
                        {visibleTestimonials.map((testimonial, idx) => {
                            const renderable = JSON.parse(testimonial.content);
                            return (
                                <Card
                                    key={testimonial.slug}
                                    className="shadow-lg rounded-lg overflow-hidden group hover:bg-neutral-100 transition-all transform hover:scale-105 flex flex-col items-center"
                                >
                                    <a href={testimonial.website?.toString()} className="w-full h-full flex flex-col items-center">
                                        <CardHeader className="p-6 text-center w-full flex flex-col items-center">
                                            {testimonial.authorImage ? (
                                                <div className="w-24 h-24 mb-4 overflow-hiddenflex items-center justify-center">
                                                    <Image
                                                        src={testimonial.authorImage}
                                                        alt={testimonial.author?.toString() ?? ''}
                                                        width={96}
                                                        height={96}
                                                        className="object-contain w-full h-full"
                                                    />
                                                </div>
                                            ) : (
                                                <div className="w-24 h-24 mb-4 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-4xl font-bold">
                                                    {testimonial.author?.toString()?.[0] ?? "?"}
                                                </div>
                                            )}
                                            <CardTitle className="text-2xl font-bold transition-colors">{testimonial.author}</CardTitle>
                                            <div className="flex items-center justify-center mt-2">
                                                {Array.from({ length: testimonial.rating }).map((_, i) => (
                                                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.392 2.46a1 1 0 00-.364 1.118l1.286 3.97c.3.921-.755 1.688-1.54 1.118l-3.392-2.46a1 1 0 00-1.176 0l-3.392 2.46c-.784.57-1.838-.197-1.54-1.118l1.286-3.97a1 1 0 00-.364-1.118L2.343 9.397c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.97z" />
                                                    </svg>
                                                ))}
                                            </div>
                                        </CardHeader>
                                        <CardContent
                                            className="p-6 text-center w-full"
                                            style={{
                                                minHeight: 120,
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                transition: "min-height 0.3s"
                                            }}
                                        >
                                            <div className="text-gray-700 text-lg leading-relaxed w-full">
                                                {Markdoc.renderers.react(renderable, React)}
                                            </div>
                                        </CardContent>
                                    </a>
                                </Card>
                            );
                        })}
                    </div>
                    {testimonials.length > 3 && (
                        <div className="flex justify-center gap-2 pb-4 mt-8">
                            {Array.from({ length: pageCount }).map((_, i) => (
                                <button
                                    key={i}
                                    className={`w-3 h-3 rounded-full ${i === currentPage ? "bg-gray-800" : "bg-gray-300"}`}
                                    onClick={() => {
                                        setFade(false);
                                        setTimeout(() => {
                                            setIndex(i * 3);
                                            setFade(true);
                                        }, 300);
                                    }}
                                    aria-label={`Show testimonial set ${i + 1}`}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}