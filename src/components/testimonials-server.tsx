"use server"
import { createReader } from "@keystatic/core/reader";
import keystaticConfig from "../../keystatic.config";
import Markdoc from "@markdoc/markdoc";
import TestimonialsClient from "./testimonials-client";

const reader = createReader(process.cwd(), keystaticConfig);

export default async function TestimonialsServer() {
    try {
        const slugs = await reader.collections.testimonials.list();
        
        if (!slugs.length) {
            return null;
        }

        const testimonials = await Promise.all(
            slugs.map(async (slug) => {
                try {
                    const testimonial = await reader.collections.testimonials.read(slug);
                    if (!testimonial) return null;

                    // Validate required fields
                    if (!testimonial.author || !testimonial.published) {
                        return null;
                    }

                    const { node } = await testimonial.content();
                    const errors = Markdoc.validate(node);
                    if (errors.length) {
                        console.warn(`Markdoc validation errors for testimonial ${slug}:`, errors);
                        return null;
                    }

                    const renderable = Markdoc.transform(node);

                    // Return serializable testimonial data
                    return {
                        slug,
                        author: String(testimonial.author),
                        authorImage: testimonial.authorImage || null,
                        published: Boolean(testimonial.published),
                        rating: Math.max(1, Math.min(5, Number(testimonial.rating) || 5)),
                        website: testimonial.website ? String(testimonial.website) : null,
                        content: JSON.stringify(renderable),
                    };
                } catch (error) {
                    console.warn(`Error processing testimonial ${slug}:`, error);
                    return null;
                }
            })
        );

        // Filter out null entries and only include published testimonials
        const validTestimonials = testimonials
            .filter((t): t is NonNullable<typeof t> => t !== null && t.published)
            .sort((a, b) => b.rating - a.rating); // Sort by rating descending

        if (validTestimonials.length === 0) {
            return null;
        }

        return <TestimonialsClient testimonials={validTestimonials} />;
    } catch (error) {
        console.error("Error loading testimonials:", error);
        return null;
    }
}