"use server"
import { createReader } from "@keystatic/core/reader";
import keystaticConfig from "../../keystatic.config";
import Markdoc from "@markdoc/markdoc";
import TestimonialsClient from "./testimonials-client";

const reader = createReader(process.cwd(), keystaticConfig);

export default async function TestimonialsServer() {
    const slugs = await reader.collections.testimonials.list();
const testimonials = await Promise.all(
    slugs.map(async (slug) => {
        const testimonial = await reader.collections.testimonials.read(slug);
        if (!testimonial) return null;
        const { node } = await testimonial.content();
        const errors = Markdoc.validate(node);
        if (errors.length) return null;
        const renderable = Markdoc.transform(node);
        // Only pass serializable fields!
        return {
            slug,
            author: testimonial.author,
            authorImage: testimonial.authorImage,
            published: testimonial.published,
            rating: testimonial.rating,
            website: testimonial.website,
            content: JSON.stringify(renderable), // serialize for client
        };
    })
);

    const validTestimonials = testimonials.filter(Boolean);

    if (validTestimonials.length === 0) return null;

    return <TestimonialsClient testimonials={validTestimonials} />;
}