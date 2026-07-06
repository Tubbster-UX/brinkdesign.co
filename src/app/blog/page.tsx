// app/blog/page.tsx (Next.js 15 compatible)

import { Metadata } from "next";
import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '../../../keystatic.config';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, ArrowRight, BookOpen, TrendingUp } from 'lucide-react';
import { CheckCircle } from 'lucide-react';

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
    title: "AV & Technology Blog – Brink Design Western South Dakota",
    description: "Insights on commercial AV, networking and security from the low voltage experts serving Rapid City and all of western South Dakota.",
    alternates: { canonical: "https://www.brinkdesign.co/blog" },
    openGraph: {
        title: "AV & Technology Blog – Brink Design Western South Dakota",
        description: "Expert tips on AV systems, network infrastructure and security solutions across western South Dakota.",
        images: ["https://www.brinkdesign.co/og-image.jpg"],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "AV & Technology Blog – Brink Design Western South Dakota",
        description: "Latest insights on AV and low voltage installs across the Black Hills region.",
        images: ["https://www.brinkdesign.co/og-image.jpg"],
    },
};

export default async function BlogPage() {
    const posts = await fetchBlogPosts();

    return (
        <div className="min-h-screen bg-white">
            {/* Blog Hero Section - Clarified */}
            <section className="relative bg-primary py-20 lg:py-32">
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                        Blog Articles
                    </h1>
                    <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-8 leading-relaxed">
                        Tips, how-tos, and industry news for smarter AV, security, and networking. Our blog helps businesses, churches, and homeowners stay informed and make better technology decisions in western South Dakota.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
                        <Link href="/contact">
                            <Button variant="default" size="lg" className="bg-accent text-secondary-foreground font-bold shadow-md hover:bg-accent/90">
                                Ask a Blog Question
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </Button>
                        </Link>
                        <Link href="/services">
                            <Button variant="outline" size="lg">
                                Explore Our Services
                            </Button>
                        </Link>
                    </div>
                    <div className="mt-10 flex flex-wrap gap-6 justify-center">
                        <div className="flex items-center gap-2 text-blue-100 text-sm">
                            <CheckCircle className="w-4 h-4 text-green-400" />
                            Trusted Local Blog Authors
                        </div>
                        <div className="flex items-center gap-2 text-blue-100 text-sm">
                            <CheckCircle className="w-4 h-4 text-green-400" />
                            Practical AV & Tech Advice
                        </div>
                        <div className="flex items-center gap-2 text-blue-100 text-sm">
                            <CheckCircle className="w-4 h-4 text-green-400" />
                            No Sales Pressure, Just Insights
                        </div>
                    </div>
                </div>
            </section>

            {/* Blog Articles Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Latest Blog Posts
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Explore tips, tutorials, and technology news from our AV and low voltage experts. Stay up to date and get answers to your questions.
                        </p>
                    </div>

                    {posts.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {posts.map((post, index) => (
                                <article key={post.slug} className="group">
                                    <Link href={`/blog/${post.slug}`} className="block">
                                        <Card className="h-full bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 hover:border-accent">
                                            {/* Featured Image */}
                                            <div className="w-full h-48 overflow-hidden rounded-t-2xl">
                                                <Image
                                                    src={post.entry.featuredImage || '/images/placeholder.png'}
                                                    alt={post.entry.title}
                                                    width={400}
                                                    height={240}
                                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-102"
                                                />
                                            </div>
                                            <CardContent className="p-6 flex-1 flex flex-col">
                                                {/* Article Meta */}
                                                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-2">
                                                    <span className="flex items-center"><Calendar className="w-4 h-4 mr-1" />{new Date(post.entry.published).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                                                    <span className="flex items-center"><Clock className="w-4 h-4 mr-1" />{post.readingTime} min read</span>
                                                </div>
                                                {/* Title */}
                                                <CardTitle className="text-lg md:text-xl font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-accent transition-colors text-left">
                                                    {post.entry.title}
                                                </CardTitle>
                                                {/* Blog Description */}
                                                <p className="text-gray-600 line-clamp-3 text-sm flex-1 mb-2">
                                                    Read the latest tips, how-tos, and news on AV, networking, and security technology from our blog experts.
                                                </p>
                                                {/* Read More Link */}
                                                <div className="flex items-center text-accent font-medium group-hover:text-primary transition-colors duration-200">
                                                    <span>Read Blog Post</span>
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
                                Blog Content Coming Soon
                            </h3>
                            <p className="text-gray-600 mb-8 max-w-md mx-auto">
                                We&apos;re preparing new articles and tips on AV systems, networking, and security technology. Check back soon for fresh blog content!
                            </p>
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
                            >
                                Ask a Blog Question
                                <ArrowRight className="w-4 h-4 ml-2" />
                            </Link>
                        </div>
                    )}
                </div>
            </section>

            {/* Newsletter/CTA Section */}
            <section className="py-20 bg-primary">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Have a Blog Topic or Question?
                    </h2>
                    <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                        Our team is here to answer your AV, networking, and security technology questions. Reach out for advice or suggest a topic for our next blog post!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-gray-50 transition-colors duration-200 shadow-lg"
                        >
                            Ask a Blog Question
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </Link>
                        <Link
                            href="/services"
                            className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-blue-600 rounded-xl transition-colors duration-200"
                        >
                            Explore Our Services
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
