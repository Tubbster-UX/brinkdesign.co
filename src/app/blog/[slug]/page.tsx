import { notFound } from 'next/navigation';
import { reader } from '@/lib/reader';
import Image from 'next/image';
import Link from 'next/link';
import Markdoc from "@markdoc/markdoc";
import React from 'react';

type BlogPost = {
  slug: string;
};

export async function generateStaticParams() {
  const posts: BlogPost[] = (await reader.collections.blog.list()).map((slug) => ({ slug }));
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  try {
    const post = await reader.collections.blog.read(params.slug);
    if (!post) {
      console.error(`Blog post with slug ${params.slug} not found`);
      return {
        title: "Blog Post Not Found - Brink Design Co.",
        description: "The requested blog post could not be found.",
      };
    }
    return {
      title: `${post.title} - Brink Design Co. Blog`,
      description: `${post.title} - Insights and tips from Brink Design Co. on AV installations, networking, security systems, and low voltage solutions.`,
      image: post.featuredImage,
      openGraph: {
        title: `${post.title} - Brink Design Co. Blog`,
        description: `${post.title} - Insights and tips from Brink Design Co. on AV installations, networking, security systems, and low voltage solutions.`,
        images: [
          {
            url: post.featuredImage || '/og-image.jpg',
            width: 1200,
            height: 630,
            alt: post.title,
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: `${post.title} - Brink Design Co. Blog`,
        description: `${post.title} - Insights and tips from Brink Design Co. on AV installations, networking, security systems, and low voltage solutions.`,
        images: [post.featuredImage || '/og-image.jpg'],
      },
    };

  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: "Error - Brink Design Co.",
      description: "An error occurred while fetching the blog post data.",
    };
  }
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const post = await reader.collections.blog.read(slug);

  if (!post) {
    console.error(`Blog post with slug ${slug} not found`);
    return notFound();
  }

  const { node } = await post.content();
  const errors = Markdoc.validate(node);
  if (errors.length) {
    console.error(errors);
    throw new Error('Invalid content');
  }
  const renderable = Markdoc.transform(node);

  return (
    <div className="container mx-auto">
      <div className="p-10">
        <nav className="text-sm mb-4">
          <Link href="/blog">
            <span className="text-blue-500 hover:underline">Blog</span>
          </Link>
          <span className="mx-2">/</span>
          <span>{post.title}</span>
        </nav>
        <div className="mb-6">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <p className="text-gray-600 mb-6">
            Published on {new Date(post.published).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </p>
          {post.featuredImage && (
            <div className="mb-8">
              <Image 
                src={post.featuredImage} 
                alt={post.title} 
                width={800} 
                height={400} 
                className="w-full max-w-4xl mx-auto rounded-lg shadow-lg"
              />
            </div>
          )}
        </div>
        <div className="prose max-w-none">
          {Markdoc.renderers.react(renderable, React)}
        </div>
        <hr className="my-8" />
        <Link href="/blog">
          <span className="text-blue-500 hover:underline">← Back to Blog</span>
        </Link>
      </div>
    </div>
  );
}
