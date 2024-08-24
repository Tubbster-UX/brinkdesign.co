import { createReader } from "@keystatic/core/reader";
import keystaticConfig from "../../keystatic.config";
import Markdoc from "@markdoc/markdoc";
import React from "react";
import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";

const reader = createReader(process.cwd(), keystaticConfig);

export default async function Testimonials() {
    const slugs = await reader.collections.testimonials.list(); // Get an array of slugs
    const testimonials = await Promise.all(
        slugs.map(async (slug) => {
            const testimonial = await reader.collections.testimonials.read(slug);
            if (!testimonial) {
                console.error(`Testimonial not found for slug: ${slug}`);
                return null;
            }
            const { node } = await testimonial.content();
            const errors = Markdoc.validate(node);
            if (errors.length) {
                console.error(errors);
                throw new Error('Invalid content');
            }
            const renderable = Markdoc.transform(node);
            return {
                slug,
                ...testimonial,
                renderable
            };
        })
    );

    if (testimonials.length === 0) {
        return null;
    }

    const validTestimonials = testimonials.filter((testimonial) => testimonial !== null);

    return (
        <section className="bg-background py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Testimonials</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {validTestimonials.map((testimonial) => (
                        <Card key={testimonial.slug} className="shadow-lg rounded-lg overflow-hidden group hover:bg-neutral-100 transition-all transform hover:scale-105 flex flex-col items-center">
                            <a ref={testimonial.website}>
                            <CardContent className="p-0 pt-4 flex justify-center">
                                <Image
                                    src={testimonial.authorImage || '/images/placeholder.png'}
                                    alt={testimonial.author?.toString() ?? ''}
                                    width={150}
                                    height={150}
                                    className="w-36 h-36 object-contain border-gray-300 transition-transform duration-300 group-hover:scale-110"
                                />
                            </CardContent>
                            <CardHeader className="p-4 text-center">
                                <CardTitle className="text-2xl font-bold transition-colors">{testimonial.author}</CardTitle>
                                <div className="flex items-center justify-center">
                                    {Array.from({ length: testimonial.rating }).map((_, index) => (
                                        <svg key={index} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.392 2.46a1 1 0 00-.364 1.118l1.286 3.97c.3.921-.755 1.688-1.54 1.118l-3.392-2.46a1 1 0 00-1.176 0l-3.392 2.46c-.784.57-1.838-.197-1.54-1.118l1.286-3.97a1 1 0 00-.364-1.118L2.343 9.397c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.97z" />
                                        </svg>
                                    ))}
                                </div>
                            </CardHeader>
                            <CardContent className="p-4 text-center">
                                {Markdoc.renderers.react(testimonial.renderable, React)}
                            </CardContent>
                            </a>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}