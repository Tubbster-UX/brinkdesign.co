import { Metadata } from "next";
import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '../../../keystatic.config';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ReactElement, JSXElementConstructor, ReactNode, AwaitedReactNode, Key } from 'react';

const reader = createReader(process.cwd(), keystaticConfig);

// Calculate reading time based on content
function calculateReadingTime(text: string): number {
    const wordsPerMinute = 200; // Average reading speed
    const wordCount = text.trim().split(/\s+/).length;
    const readingTimeMinutes = Math.ceil(wordCount / wordsPerMinute);
    return Math.max(1, readingTimeMinutes); // Minimum 1 minute
}

async function fetchBlogPosts() {
    try {
        const allPosts = await reader.collections.blog.all();

        if (!allPosts || allPosts.length === 0) {
            console.warn('No blog posts found.');
            return [];
        }

        // Sort posts by published date in descending order
        allPosts.sort((a, b) => new Date(b.entry.published).getTime() - new Date(a.entry.published).getTime());

        // Add reading time to each post
        const postsWithReadingTime = await Promise.all(
            allPosts.map(async (post) => {
                try {
                    const { node } = await post.entry.content();
                    const contentText = JSON.stringify(node); // Convert content to string for word counting
                    const readingTime = calculateReadingTime(contentText);
                    return {
                        ...post,
                        readingTime
                    };
                } catch (error) {
                    console.error(`Error processing content for post ${post.slug}:`, error);
                    // Fallback to default reading time if content can't be processed
                    return {
                        ...post,
                        readingTime: 3 // Default 3 minutes
                    };
                }
            })
        );

        return postsWithReadingTime;
    } catch (error) {
        console.error('Error fetching blog posts:', error);
        throw new Error('Failed to fetch blog posts');
    }
}

export const metadata: Metadata = {
    title: "Blog - Brink Design Co.",
    description: "Read our latest insights, tips, and updates on AV installations, networking, security systems, and low voltage solutions.",
    alternates: { canonical: "https://www.brinkdesign.co/blog" },
    twitter: {
        card: "summary_large_image",
        title: "Blog - Brink Design Co.",
        description: "Read our latest insights, tips, and updates on AV installations, networking, security systems, and low voltage solutions.",
        images: ["https://www.brinkdesign.co/og-image.jpg"],
    },
};

export default async function Page() {
    try {
        const posts = await fetchBlogPosts();
        return (
            <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
                {/* Hero Section */}
                <div className="relative">
                    {/* Background with overlay */}
                    <div className='bg-[url("/hero.avif")] bg-cover bg-center bg-fixed h-[60vh] relative'>
                        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    </div>

                    {/* Hero Content */}
                    <div className="absolute inset-0 flex items-center">
                        <div className="container mx-auto px-6">
                            <div className="max-w-4xl">
                                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                                    Blog
                                </h1>
                                <p className="text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed">
                                    Stay informed with the latest trends, best practices, and expert advice in low voltage systems, security technology, and smart home automation.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-secondary text-primary font-bold rounded-lg hover:bg-secondary/90 transition-all duration-200 hover:shadow-lg">
                                        Get Expert Advice
                                    </Link>
                                    <Link href="/services" className="inline-flex items-center justify-center px-8 py-4 border border-white/30 text-white hover:bg-white/10 rounded-lg transition-all duration-200">
                                        Our Services
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Blog Section */}
                <div className="container mx-auto px-6 py-20">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Latest Articles
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Discover expert insights, industry trends, and practical tips to help you make informed decisions about your low voltage technology needs.
                        </p>
                    </div>

                    {/* Blog Posts Grid */}
                    {posts.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                            {posts.map((post: { entry: { title: boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | Promise<AwaitedReactNode> | Key | null | undefined; featuredImage: any; published: string; summary?: string; }; slug: any; readingTime: number; }, index: number) => (
                                <Link key={String(post.entry.title)} href={`/blog/${post.slug}`}>
                                    <Card className="group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white h-full flex flex-col">
                                        {/* Featured Image */}
                                        <div className="relative overflow-hidden">
                                            <Image
                                                src={post.entry.featuredImage || '/images/placeholder.png'}
                                                alt={post.entry.title?.toString() ?? ''}
                                                width={450}
                                                height={250}
                                                className="w-full h-48 object-contain transition-transform duration-500 group-hover:scale-110"
                                            />
                                            {/* Overlay on hover */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                            {/* Read More Button - appears on hover */}
                                            <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                                <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 border border-white/30">
                                                    <svg className="w-4 h-4 text-white transition-transform duration-300 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Article Content */}
                                        <div className="p-6 flex-1 flex flex-col">
                                            <div className="flex-1">
                                                <CardTitle className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-primary transition-colors leading-tight">
                                                    {post.entry.title}
                                                </CardTitle>

                                                {/* Article Meta */}
                                                <div className="flex items-center text-sm text-gray-500 mb-4">
                                                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                    </svg>
                                                    <span>{new Date(post.entry.published).toLocaleDateString('en-US', {
                                                        year: 'numeric',
                                                        month: 'long',
                                                        day: 'numeric'
                                                    })}</span>
                                                    <span className="mx-2">•</span>
                                                    <span>{post.readingTime} min read</span>
                                                </div>
                                            </div>

                                            {/* Read More Link */}
                                            <div className="flex items-center justify-between">
                                                <span className="text-primary font-semibold text-sm group-hover:text-primary transition-colors">
                                                    Read Article
                                                </span>
                                                <div className="w-8 h-0.5 bg-gradient-to-r from-secondary to-secondary/60 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                                            </div>
                                        </div>
                                    </Card>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20">
                            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Coming Soon</h3>
                            <p className="text-gray-600 mb-6">We're preparing expert insights and industry tips. Check back soon for valuable content!</p>
                            <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 bg-secondary text-primary font-bold rounded-lg hover:bg-secondary/90 transition-all duration-200">
                                Get Expert Advice
                            </Link>
                        </div>
                    )}

                    {/* Categories Section */}
                    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 md:p-16 text-white mb-20">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Topics We Cover</h2>
                            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                                Explore our expertise across various low voltage technology areas
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { title: 'Security Systems', icon: '🔒', desc: 'CCTV, alarms, and access control insights' },
                                { title: 'Smart Home Tech', icon: '🏠', desc: 'Automation and integration tips' },
                                { title: 'Network Solutions', icon: '🌐', desc: 'Cabling and connectivity best practices' },
                                { title: 'Commercial AV', icon: '📺', desc: 'Professional audio/video systems' },
                            ].map((category, index) => (
                                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-colors group">
                                    <div className="text-3xl mb-4">{category.icon}</div>
                                    <h3 className="text-xl font-semibold mb-2 group-hover:text-secondary transition-colors">{category.title}</h3>
                                    <p className="text-gray-400 text-sm">{category.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Newsletter/CTA Section */}
                <div className="bg-gradient-to-r from-secondary via-secondary to-secondary/90 text-primary py-20">
                    <div className="container mx-auto px-6 text-center">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                Stay Ahead with Expert Insights
                            </h2>
                            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                                Get the latest tips, trends, and expert advice delivered straight from our team of low voltage professionals.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-primary text-secondary font-bold rounded-lg hover:bg-primary/90 transition-all duration-200 hover:shadow-lg">
                                    Get Personal Consultation
                                </Link>
                                <Link href="/services" className="inline-flex items-center justify-center px-8 py-4 border border-primary text-primary hover:bg-primary hover:text-secondary rounded-lg transition-all duration-200">
                                    Explore Our Services
                                </Link>
                            </div>

                            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                                <div className="flex items-center justify-center space-x-2">
                                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                                    <span>Expert Knowledge</span>
                                </div>
                                <div className="flex items-center justify-center space-x-2">
                                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                                    <span>Industry Insights</span>
                                </div>
                                <div className="flex items-center justify-center space-x-2">
                                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                                    <span>Practical Tips</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('Error rendering page:', error);
        return (
            <div className="min-h-screen bg-gradient-to-br from-red-50 to-red-100 flex items-center justify-center">
                <div className="text-center p-8 bg-white rounded-2xl shadow-xl max-w-md mx-auto">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                        </svg>
                    </div>
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">Unable to Load Articles</h1>
                    <p className="text-gray-600 mb-6">{(error as Error).message}</p>
                    <Link href="/" className="inline-flex items-center justify-center px-6 py-3 bg-secondary text-primary font-bold rounded-lg hover:bg-secondary/90 transition-all duration-200">
                        Return Home
                    </Link>
                </div>
            </div>
        );
    }
}
