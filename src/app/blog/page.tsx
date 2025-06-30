// app/blog/page.tsx (Next.js 15 compatible)

import { Metadata } from "next";
import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '../../../keystatic.config';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Clock, ArrowRight, BookOpen, TrendingUp } from 'lucide-react';

const reader = createReader(process.cwd(), keystaticConfig);

function calculateReadingTime(text: string): number {
    const wordsPerMinute = 200;
    const wordCount = text.trim().split(/\s+/).length;
    return Math.max(1, Math.ceil(wordCount / wordsPerMinute));
}

async function fetchBlogPosts() {
    try {
        const allPosts = await reader.collections.blog.all();
        if (!allPosts || allPosts.length === 0) return [];

        allPosts.sort((a, b) => new Date(b.entry.published).getTime() - new Date(a.entry.published).getTime());

        return await Promise.all(
            allPosts.map(async (post) => {
                try {
                    const { node } = await post.entry.content();
                    const contentText = JSON.stringify(node);
                    const readingTime = calculateReadingTime(contentText);
                    return { ...post, readingTime };
                } catch (err) {
                    return { ...post, readingTime: 3 };
                }
            })
        );
    } catch (err) {
        console.error('Fetch error:', err);
        return [];
    }
}

export const metadata: Metadata = {
    title: "Professional AV & Technology Blog | Brink Design Co.",
    description: "Expert insights on commercial AV systems, network infrastructure, security technology, and smart building solutions from South Dakota's leading AV professionals.",
    alternates: { canonical: "https://www.brinkdesign.co/blog" },
    openGraph: {
        title: "Professional AV & Technology Blog | Brink Design Co.",
        description: "Expert insights on commercial AV systems, network infrastructure, security technology, and smart building solutions.",
        images: ["https://www.brinkdesign.co/og-image.jpg"],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Professional AV & Technology Blog | Brink Design Co.",
        description: "Expert insights on commercial AV systems, network infrastructure, security technology, and smart building solutions.",
        images: ["https://www.brinkdesign.co/og-image.jpg"],
    },
};

export default async function BlogPage() {
    const posts = await fetchBlogPosts();

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative bg-blue-600 py-20 lg:py-32">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 text-blue-100 rounded-full text-sm font-medium mb-6">
                        <BookOpen className="w-4 h-4 mr-2" />
                        Knowledge Center
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Expert AV & Technology Insights
                    </h1>
                    <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8 leading-relaxed">
                        Stay ahead with professional insights on commercial AV systems, network infrastructure,
                        security technology, and smart building solutions from South Dakota&apos;s leading experts.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-gray-50 transition-colors duration-200 shadow-lg"
                        >
                            Get Expert Consultation
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </Link>
                        <Link
                            href="/services"
                            className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-blue-600 rounded-xl transition-colors duration-200"
                        >
                            Our Services
                        </Link>
                    </div>
                </div>
            </section>

            {/* Articles Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Latest Articles
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Discover insights, best practices, and industry trends from our team of AV and technology professionals.
                        </p>
                    </div>

                    {posts.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {posts.map((post, index) => (
                                <article key={post.slug} className="group">
                                    <Link href={`/blog/${post.slug}`} className="block">
                                        <Card className="h-full bg-white border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
                                            {/* Featured Image */}
                                            <div className="relative overflow-hidden">
                                                <Image
                                                    src={post.entry.featuredImage || '/images/blog/placeholder.jpg'}
                                                    alt={post.entry.title}
                                                    width={400}
                                                    height={240}
                                                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                            </div>

                                            <CardContent className="p-6 flex-1 flex flex-col">
                                                {/* Article Meta */}
                                                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                                                    <div className="flex items-center">
                                                        <Calendar className="w-4 h-4 mr-1" />
                                                        {new Date(post.entry.published).toLocaleDateString('en-US', {
                                                            month: 'short',
                                                            day: 'numeric',
                                                            year: 'numeric'
                                                        })}
                                                    </div>
                                                    <div className="flex items-center">
                                                        <Clock className="w-4 h-4 mr-1" />
                                                        {post.readingTime} min read
                                                    </div>
                                                </div>

                                                {/* Title */}
                                                <CardTitle className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
                                                    {post.entry.title}
                                                </CardTitle>

                                                {/* Description */}
                                                <p className="text-gray-600 line-clamp-3 flex-1 mb-4">
                                                    Discover professional insights and expert advice on AV technology, networking solutions, and smart building systems.
                                                </p>

                                                {/* Read More Link */}
                                                <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors duration-200">
                                                    <span>Read Article</span>
                                                    <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </Link>
                                </article>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20">
                            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <BookOpen className="w-12 h-12 text-gray-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                Coming Soon
                            </h3>
                            <p className="text-gray-600 mb-8 max-w-md mx-auto">
                                We&apos;re preparing valuable content on AV systems, networking, and security technology.
                                Check back soon for expert insights!
                            </p>
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
                            >
                                Get Expert Advice Now
                                <ArrowRight className="w-4 h-4 ml-2" />
                            </Link>
                        </div>
                    )}
                </div>
            </section>

            {/* Newsletter/CTA Section */}
            <section className="py-20 bg-blue-600">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Need Expert AV & Technology Guidance?
                    </h2>
                    <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                        Get personalized advice from our team of professionals. We&apos;re here to help you make informed
                        decisions about your AV, networking, and security technology needs.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-gray-50 transition-colors duration-200 shadow-lg"
                        >
                            Schedule Consultation
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </Link>
                        <Link
                            href="/projects"
                            className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-blue-600 rounded-xl transition-colors duration-200"
                        >
                            View Our Work
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
