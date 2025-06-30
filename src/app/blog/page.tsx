// app/blog/page.tsx (Next.js 15 compatible)

import { Metadata } from "next";
import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '../../../keystatic.config';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

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
    title: "Blog - Brink Design Co.",
    description: "Insights on AV, networking, security, and smart tech.",
    alternates: { canonical: "https://www.brinkdesign.co/blog" },
    twitter: {
        card: "summary_large_image",
        title: "Blog - Brink Design Co.",
        description: "Insights on AV, networking, security, and smart tech.",
        images: ["https://www.brinkdesign.co/og-image.jpg"],
    },
};

export default async function BlogPage() {
    const posts = await fetchBlogPosts();

    return (
        <div className="min-h-screen bg-gray-50">
            <section className="bg-[url('/hero.avif')] bg-cover bg-center bg-fixed h-[60vh] relative">
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="absolute inset-0 flex items-center">
                    <div className="container mx-auto px-6 max-w-4xl">
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Blog</h1>
                        <p className="text-xl text-gray-200 max-w-2xl">
                            Get insights on AV systems, security tech, networking, and more.
                        </p>
                        <div className="mt-6 flex gap-4">
                            <Link href="/contact" className="bg-secondary text-primary px-6 py-3 rounded font-semibold">
                                Get Expert Advice
                            </Link>
                            <Link href="/services" className="border border-white px-6 py-3 rounded text-white">
                                Our Services
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container mx-auto px-6 py-20">
                <h2 className="text-4xl font-bold mb-10 text-center">Latest Articles</h2>
                {posts.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post) => (
                            <Link key={post.slug} href={`/blog/${post.slug}`}>
                                <Card className="hover:shadow-xl transition">
                                    <Image
                                        src={post.entry.featuredImage || '/images/placeholder.png'}
                                        alt={post.entry.title}
                                        width={450}
                                        height={250}
                                        className="w-full h-48 object-cover"
                                    />
                                    <CardContent>
                                        <CardTitle className="text-lg font-semibold mb-2 line-clamp-2">
                                            {post.entry.title}
                                        </CardTitle>
                                        <p className="text-sm text-gray-500 mb-1">
                                            {new Date(post.entry.published).toLocaleDateString()} • {post.readingTime} min read
                                        </p>
                                        <p className="text-sm text-gray-600 line-clamp-3">
                                            Read the full article to learn more.
                                        </p>
                                    </CardContent>
                                </Card>
                            </Link>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-10 text-gray-500">
                        <p>No articles found. Check back soon!</p>
                    </div>
                )}
            </section>
        </div>
    );
}
