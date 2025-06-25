import { Metadata } from "next";
import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '../../../keystatic.config';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ReactElement, JSXElementConstructor, ReactNode, AwaitedReactNode, Key } from 'react';

const reader = createReader(process.cwd(), keystaticConfig);

async function fetchBlogPosts() {
    try {
        const allPosts = await reader.collections.blog.all();

        if (!allPosts || allPosts.length === 0) {
            console.warn('No blog posts found.');
            return [];
        }

        // Sort posts by published date in descending order
        allPosts.sort((a, b) => new Date(b.entry.published).getTime() - new Date(a.entry.published).getTime());

        return allPosts;
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
            <div>
                <div className='bg-[url("/hero.avif")] bg-cover bg-center bg-fixed h-96 py-10'>
                    <div className="container flex flex-col justify-end items-start h-full">
                        <h1 className="text-3xl font-bold text-white">Blog</h1>
                    </div>
                </div>
                <div className="container mx-auto p-4 min-h-96">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post: { entry: { title: boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | Promise<AwaitedReactNode> | Key | null | undefined; featuredImage: any; published: string; }; slug: any; }) => (
                            <Link key={String(post.entry.title)} href={`/blog/${post.slug}`}>
                                <Card className="shadow-lg rounded-lg overflow-hidden group hover:bg-neutral-100 transition-all transform hover:scale-105">
                                    <CardContent className="p-0">
                                        <Image
                                            src={post.entry.featuredImage || '/images/placeholder.png'}
                                            alt={post.entry.title?.toString() ?? ''}
                                            width={450}
                                            height={400}
                                            className="w-full h-48 object-contain transition-transform duration-300 group-hover:scale-110"
                                        />
                                    </CardContent>
                                    <CardHeader className="p-4">
                                        <CardTitle className="text-lg font-semibold transition-colors">{post.entry.title}</CardTitle>
                                        <p className="text-sm text-gray-600 mt-2">
                                            {new Date(post.entry.published).toLocaleDateString('en-US', {
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric'
                                            })}
                                        </p>
                                    </CardHeader>
                                    <CardFooter className="p-4 flex justify-end">
                                        <span className="text-[1e262e] hover:underline flex items-center">
                                            <span className="mr-2">Read more</span>
                                            <svg className='transition-transform duration-300 transform rotate-45 group-hover:rotate-0 fill-current' xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z" /></svg>
                                        </span>
                                    </CardFooter>
                                </Card>
                            </Link>
                        ))}
                    </div>
                    {posts.length === 0 && (
                        <div className="text-center py-12">
                            <h2 className="text-2xl font-semibold text-gray-600 mb-4">No blog posts yet</h2>
                            <p className="text-gray-500">Check back soon for updates and insights!</p>
                        </div>
                    )}
                </div>
            </div>
        );
    } catch (error) {
        console.error('Error rendering page:', error);
        return (
            <div>
                <h1>Error loading blog posts</h1>
                <p>{(error as Error).message}</p>
            </div>
        );
    }
}
