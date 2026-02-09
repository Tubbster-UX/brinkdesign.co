import { notFound } from 'next/navigation';
import { reader } from '@/lib/reader';
import Image from 'next/image';
import Link from 'next/link';
import Markdoc from "@markdoc/markdoc";
import React from 'react';

type Project = {
  slug: string;
};

export async function generateStaticParams() {
  const projects: Project[] = (await reader.collections.project.list()).map((slug) => ({ slug }));
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  try {
    const project = await reader.collections.project.read(params.slug);
    if (!project) {
      console.error(`Project with slug ${params.slug} not found`);
      return {
        title: "Project Not Found - Brink Design Co.",
        description: "The requested project could not be found.",
      };
    }
    return {
      title: `${project.title} | Brink Design Co.`,
      description: `See how we handled this install: ${project.title}. Professional low-voltage work by Brink Design in western South Dakota.`,
      image: project.image,
      openGraph: {
        title: `${project.title} | Brink Design Co.`,
        description: `See how we handled this install: ${project.title}. Professional low-voltage work by Brink Design in western South Dakota.`,
        images: [
          {
            url: project.image,
            width: 450,
            height: 400,
            alt: project.title,
          },
        ],
      },
    };

  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: "Error - Brink Design Co.",
      description: "An error occurred while fetching the project data.",
    };
  }
}

export default async function Project(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const { slug } = params;
  const project = await reader.collections.project.read(slug);

  if (!project) {
    console.error(`Project with slug ${slug} not found`);
    return notFound();
  }

  const { node } = await project.description();
  const errors = Markdoc.validate(node);
  if (errors.length) {
    console.error(errors);
    throw new Error('Invalid content');
  }
  const renderable = Markdoc.transform(node);

  // Generate JSON-LD structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `https://www.brinkdesign.co/projects/${slug}`,
    "name": project.title,
    "headline": project.title,
    "description": `Professional low-voltage installation project: ${project.title}. Security, networking, and AV work by Brink Design Co. in South Dakota.`,
    "url": `https://www.brinkdesign.co/projects/${slug}`,
    "image": {
      "@type": "ImageObject",
      "url": project.image ? `https://www.brinkdesign.co${project.image}` : "https://www.brinkdesign.co/og-image.jpg",
      "width": 600,
      "height": 400,
      "caption": project.title
    },
    "creator": {
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
    "about": [
      "Commercial AV Systems",
      "Network Infrastructure",
      "Security Systems",
      "Low Voltage Installation"
    ],
    "keywords": `${project.title}, low voltage installation, security cameras, network cabling, AV systems, South Dakota`,
    "genre": "Project Write-Up",
    "provider": {
      "@type": "Organization",
      "name": "Brink Design Co.",
      "url": "https://www.brinkdesign.co"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.brinkdesign.co/projects/${slug}`
    },
    "isPartOf": {
      "@type": "WebSite",
      "name": "Brink Design Co.",
      "url": "https://www.brinkdesign.co"
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="bg-primary text-white py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-6">
          {/* Breadcrumb */}
          <nav className="text-sm mb-6 flex items-center space-x-2">
            <Link href="/projects" className="text-blue-200 hover:text-white transition-colors">
              Projects
            </Link>
            <span className="text-blue-300">/</span>
            <span className="text-blue-100">{project.title}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                {project.title}
              </h1>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 bg-accent text-gray-900 font-bold rounded-lg hover:bg-yellow-300 transition-colors">
                  Book a Site Visit & Quote
                </Link>
                <Link href="/projects" className="inline-flex items-center justify-center px-6 py-3 border border-white/30 text-white hover:bg-white/10 rounded-lg transition-colors">
                  All Projects
                </Link>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image
                src={project.image || "/images/placeholder.png"}
                alt={project.title}
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-16">
        <div className="prose prose-lg prose-gray max-w-none
          prose-headings:text-gray-900 prose-headings:font-bold
          prose-h2:text-2xl prose-h2:mb-4 prose-h2:mt-10 prose-h2:pb-2 prose-h2:border-b prose-h2:border-gray-200
          prose-h3:text-xl prose-h3:mb-3 prose-h3:mt-8
          prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-4
          prose-ul:space-y-1 prose-li:text-gray-700
          prose-strong:text-gray-900 prose-strong:font-semibold
          prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
          prose-img:rounded-lg prose-img:my-6
          prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:bg-gray-50 prose-blockquote:py-3 prose-blockquote:px-5 prose-blockquote:rounded-r-lg">
          {Markdoc.renderers.react(renderable, React)}
        </div>
      </div>

      {/* CTA */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-3xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Need something similar?</h2>
              <p className="text-base text-gray-600 mb-6">
                We&apos;ll walk your site, figure out what you need, and give you a clear quote.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors">
                  Book a Site Visit & Quote
                </Link>
                <Link href="tel:6053893261" className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors font-semibold">
                  Call (605) 389-3261
                </Link>
              </div>
            </div>
            <div className="flex-1">
              <Link href="/projects" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors font-semibold">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to All Projects
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}