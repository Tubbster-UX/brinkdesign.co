import { notFound } from 'next/navigation';
import { reader } from '@/lib/reader';
import Image from 'next/image';
import Link from 'next/link';
import Markdoc from "@markdoc/markdoc";
import React from 'react';

type BlogPost = {
  slug: string;
};

// Calculate reading time based on content
function calculateReadingTime(text: string): number {
  const wordsPerMinute = 200; // Average reading speed
  const wordCount = text.trim().split(/\s+/).length;
  const readingTimeMinutes = Math.ceil(wordCount / wordsPerMinute);
  return Math.max(1, readingTimeMinutes); // Minimum 1 minute
}

export async function generateStaticParams() {
  const posts: BlogPost[] = (await reader.collections.blog.list()).map((slug) => ({ slug }));
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
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
            url: post.featuredImage,
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

export default async function BlogPost(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
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

  // Calculate reading time from content
  const contentText = JSON.stringify(node);
  const readingTime = calculateReadingTime(contentText);

  // Generate JSON-LD structured data for BlogPosting
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `https://www.brinkdesign.co/blog/${slug}`,
    "headline": post.title,
    "name": post.title,
    "description": `Expert insights on AV systems, networking, and security technology: ${post.title}. Professional advice from South Dakota's leading low voltage specialists.`,
    "url": `https://www.brinkdesign.co/blog/${slug}`,
    "datePublished": post.published,
    "dateModified": post.published,
    "image": {
      "@type": "ImageObject",
      "url": post.featuredImage ? `https://www.brinkdesign.co${post.featuredImage}` : "https://www.brinkdesign.co/og-image.jpg",
      "width": 1200,
      "height": 630,
      "caption": post.title
    },
    "author": {
      "@type": "Organization",
      "name": "Brink Design Co.",
      "url": "https://www.brinkdesign.co",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.brinkdesign.co/brink-design-logo.png",
        "width": 200,
        "height": 80
      },
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "SD",
        "addressCountry": "US"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-605-389-3261",
        "contactType": "customer service",
        "availableLanguage": "English"
      }
    },
    "publisher": {
      "@type": "Organization",
      "name": "Brink Design Co.",
      "url": "https://www.brinkdesign.co",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.brinkdesign.co/brink-design-logo.png",
        "width": 200,
        "height": 80
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.brinkdesign.co/blog/${slug}`
    },
    "isPartOf": {
      "@type": "Blog",
      "name": "Brink Design Co. Blog",
      "@id": "https://www.brinkdesign.co/blog"
    },
    "articleSection": "Technology",
    "wordCount": contentText.split(/\s+/).length,
    "timeRequired": `PT${readingTime}M`,
    "keywords": `${post.title}, commercial AV, low voltage installation, security systems, network cabling, audio video, South Dakota, professional installation, AV technology, smart building solutions`,
    "about": [
      {
        "@type": "Thing",
        "name": "Commercial AV Systems"
      },
      {
        "@type": "Thing", 
        "name": "Network Infrastructure"
      },
      {
        "@type": "Thing",
        "name": "Security Systems"
      },
      {
        "@type": "Thing",
        "name": "Low Voltage Installation"
      }
    ],
    "mentions": [
      {
        "@type": "Organization",
        "name": "Brink Design Co.",
        "url": "https://www.brinkdesign.co"
      }
    ],
    "inLanguage": "en-US",
    "genre": "Technology",
    "educationalUse": "Professional Development",
    "learningResourceType": "Article",
    "audience": {
      "@type": "Audience",
      "audienceType": "Business Professionals"
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-primary via-primary to-primary/95 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:40px_40px]"></div>
        </div>

        <div className="relative container mx-auto px-6 py-20">
          {/* Breadcrumb */}
          <nav className="text-sm mb-8 flex items-center space-x-2">
            <Link href="/projects" className="text-secondary hover:text-secondary/80 transition-colors font-medium">
              Projects
            </Link>
            <span className="text-gray-300">/</span>
            <span className="text-gray-300">{post.title}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Project Info */}
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-secondary/20 backdrop-blur-sm rounded-full text-secondary font-semibold text-sm mb-6 border border-secondary/30">
                Expert Insights
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                {post.title}
              </h1>
              {/* Article Meta */}
              <div className="flex flex-wrap items-center gap-6 text-gray-200 mb-8">
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>{new Date(post.published).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}</span>
                </div>

                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{readingTime} min read</span>
                </div>

                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span>Brink Design Team</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 bg-secondary text-primary font-semibold rounded-lg hover:bg-secondary/90 transition-all duration-200 hover:shadow-lg">
                  Get Expert Help
                </Link>
                <Link href="/blog" className="inline-flex items-center justify-center px-6 py-3 border border-white/30 text-white hover:bg-white/10 rounded-lg transition-all duration-200">
                  More Articles
                </Link>
              </div>
            </div>

            {/* Project Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Image
                  src={post.featuredImage || "/images/placeholder.png"}
                  alt={post.title}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary/10 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Article Content */}
          <div className="relative">
            {/* Content Background */}
            <div className="absolute inset-0 bg-white rounded-3xl shadow-lg border border-gray-100"></div>

            <div className="relative p-8 md:p-12">
              <div className="prose prose-lg prose-gray max-w-none
                prose-headings:text-gray-900 prose-headings:font-bold
                prose-h1:text-4xl prose-h1:mb-8 prose-h1:text-primary prose-h1:border-b prose-h1:border-secondary/20 prose-h1:pb-4
                prose-h2:text-3xl prose-h2:mb-6 prose-h2:mt-12 prose-h2:pb-2 prose-h2:border-b prose-h2:border-gray-200 prose-h2:text-primary
                prose-h3:text-2xl prose-h3:mb-4 prose-h3:mt-8 prose-h3:text-primary
                prose-h4:text-xl prose-h4:mb-3 prose-h4:mt-6 prose-h4:text-gray-800
                prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6 prose-p:text-lg
                prose-ul:space-y-2 prose-li:text-gray-700 prose-li:text-lg
                prose-ol:space-y-2
                prose-strong:text-gray-900 prose-strong:font-semibold
                prose-em:text-gray-600 prose-em:italic
                prose-a:text-secondary prose-a:no-underline hover:prose-a:underline prose-a:font-medium
                prose-img:rounded-xl prose-img:shadow-lg prose-img:my-8
                prose-blockquote:border-l-4 prose-blockquote:border-secondary prose-blockquote:bg-gray-50 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-blockquote:italic
                prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-secondary prose-code:text-sm
                prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:rounded-xl prose-pre:p-6
                prose-table:text-sm prose-table:shadow-lg prose-table:rounded-lg prose-table:overflow-hidden
                prose-th:bg-gray-100 prose-th:font-semibold prose-th:text-gray-900
                prose-td:text-gray-700">
                {Markdoc.renderers.react(renderable, React)}
              </div>
            </div>
          </div>

          {/* Article Footer */}
          <div className="mt-16 p-8 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl text-white">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0">
                <h3 className="text-xl font-bold mb-2">Found this helpful?</h3>
                <p className="text-gray-300">Tell us what you need — we’ll point you in the right direction.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 bg-secondary text-primary font-bold rounded-lg hover:bg-secondary/90 transition-all duration-200">
                  Book a Site Visit & Quote
                </Link>
                <Link href="/services" className="inline-flex items-center justify-center px-6 py-3 border border-white/30 text-white hover:bg-white/10 rounded-lg transition-all duration-200">
                  View Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation & Related */}
      <div className="bg-gradient-to-r from-gray-900 via-primary to-gray-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Navigation */}
              <div>
                <h3 className="text-2xl font-bold mb-6">Continue Reading</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Explore more expert insights and practical tips from our low voltage professionals.
                </p>
                <Link href="/blog" className="inline-flex items-center space-x-2 text-secondary hover:text-secondary/80 transition-colors font-semibold">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  <span>Back to All Articles</span>
                </Link>
              </div>

              {/* Share & CTA */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold mb-4">Need Expert Help?</h3>
                <p className="text-gray-300 mb-6">
                  Turn insights into action. Let our team help you implement these solutions.
                </p>
                <div className="space-y-4">
                  <Link href="/contact" className="block w-full text-center bg-secondary text-primary font-bold py-4 px-6 rounded-lg hover:bg-secondary/90 transition-all duration-200 hover:shadow-lg">
                    Get Professional Installation
                  </Link>
                  <div className="flex items-center justify-center space-x-4 text-sm text-gray-400">
                    <span className="flex items-center space-x-1">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                      <span>Site visits available</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                      <span>Expert installs</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
