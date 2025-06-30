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

export async function generateMetadata({ params }: { params: { slug: string } }) {
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
      title: `${project.title} - Brink Design Co.`,
      description: `${project.title} - Professional AV and low voltage installation by Brink Design Co. Reliable solutions for security, networking, and audio/video systems.`,
      image: project.image,
      openGraph: {
        title: `${project.title} - Brink Design Co.`,
        description: `${project.title} - Professional AV and low voltage installation by Brink Design Co. Reliable solutions for security, networking, and audio/video systems.`,
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

export default async function Project({ params }: { params: { slug: string } }) {
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
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
            <span className="text-gray-300">{project.title}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Project Info */}
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-secondary/20 backdrop-blur-sm rounded-full text-secondary font-semibold text-sm border border-secondary/30">
                Case Study
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                {project.title}
              </h1>
              <p className="text-xl text-gray-200 leading-relaxed max-w-2xl">
                Discover how we delivered exceptional low voltage solutions that transformed this space with cutting-edge technology and professional installation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-secondary text-primary font-bold rounded-lg hover:bg-secondary/90 transition-all duration-200 hover:shadow-lg">
                  Start Your Project
                </Link>
                <Link href="/projects" className="inline-flex items-center justify-center px-8 py-4 border border-white/30 text-white hover:bg-white/10 rounded-lg transition-all duration-200">
                  View All Projects
                </Link>
              </div>
            </div>

            {/* Project Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Image
                  src={project.image || "/images/placeholder.png"}
                  alt={project.title}
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
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Project Details Header */}
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-secondary/10 rounded-full text-secondary font-semibold text-sm mb-4">
              Project Details
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Behind the Installation
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore the technical details, challenges overcome, and innovative solutions that made this project a success.
            </p>
          </div>

          {/* Content with Enhanced Typography */}
          <div className="relative">
            {/* Content Background */}
            <div className="absolute inset-0 bg-white rounded-3xl shadow-lg border border-gray-100"></div>

            <div className="relative p-8 md:p-12">
              <div className="prose prose-lg prose-gray max-w-none
                prose-headings:text-gray-900 prose-headings:font-bold
                prose-h1:text-4xl prose-h1:mb-8 prose-h1:text-secondary
                prose-h2:text-3xl prose-h2:mb-6 prose-h2:mt-12 prose-h2:pb-2 prose-h2:border-b prose-h2:border-gray-200
                prose-h3:text-2xl prose-h3:mb-4 prose-h3:mt-8 prose-h3:text-primary
                prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
                prose-ul:space-y-2 prose-li:text-gray-700
                prose-strong:text-gray-900 prose-strong:font-semibold
                prose-a:text-secondary prose-a:no-underline hover:prose-a:underline
                prose-img:rounded-xl prose-img:shadow-lg prose-img:my-8
                prose-blockquote:border-l-4 prose-blockquote:border-secondary prose-blockquote:bg-gray-50 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-lg
                prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-secondary">
                {Markdoc.renderers.react(renderable, React)}
              </div>
            </div>
          </div>

          {/* Project Highlights */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Quality Installation</h3>
              <p className="text-sm text-gray-600">Professional-grade installation meeting all industry standards</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Cutting-Edge Tech</h3>
              <p className="text-sm text-gray-600">Latest technology and equipment for optimal performance</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Ongoing Support</h3>
              <p className="text-sm text-gray-600">Comprehensive support and maintenance for long-term reliability</p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation & CTA Section */}
      <div className="bg-gradient-to-r from-gray-900 via-primary to-gray-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Navigation */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Explore More Projects</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                See how we've transformed other spaces with our expert low voltage solutions and innovative installations.
              </p>
              <Link href="/projects" className="inline-flex items-center space-x-2 text-secondary hover:text-secondary/80 transition-colors font-semibold">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                <span>Back to All Projects</span>
              </Link>
            </div>

            {/* CTA */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold mb-4">Ready for Your Project?</h3>
              <p className="text-gray-300 mb-6">
                Let's discuss how we can bring similar innovation and quality to your space.
              </p>
              <div className="space-y-4">
                <Link href="/contact" className="block w-full text-center bg-secondary text-primary font-bold py-4 px-6 rounded-lg hover:bg-secondary/90 transition-all duration-200 hover:shadow-lg">
                  Get Your Free Quote
                </Link>
                <div className="flex items-center justify-center space-x-4 text-sm text-gray-400">
                  <span className="flex items-center space-x-1">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                    <span>Free consultation</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                    <span>No pressure</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}