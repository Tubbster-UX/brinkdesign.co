import { Metadata } from "next";
import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '../../../keystatic.config';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ReactElement, JSXElementConstructor, ReactNode, Key } from 'react';
import { Button } from "@/components/ui/button";


const reader = createReader(process.cwd(), keystaticConfig);

async function fetchProjects() {
  try {
    const allProjects = await reader.collections.project.all();

    if (!allProjects || allProjects.length === 0) {
      console.warn('No projects found.');
      return [];
    }

    // Sort projects by published date in descending order
    allProjects.sort((a, b) => new Date(b.entry.published).getTime() - new Date(a.entry.published).getTime());

    return allProjects;
  } catch (error) {
    console.error('Error fetching projects:', error);
    throw new Error('Failed to fetch projects');
  }
}

export const metadata: Metadata = {
  title: "AV Projects – Brink Design Western South Dakota",
  description:
    "See our portfolio of AV installations, security systems and low voltage projects across western South Dakota.",
  alternates: { canonical: "https://www.brinkdesign.co/projects" },
  openGraph: {
    title: "AV Projects – Brink Design Western South Dakota",
    description:
      "Browse real-world examples of our cabling and audio/video work throughout the Black Hills region.",
    images: ["https://www.brinkdesign.co/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "AV Projects – Brink Design Western South Dakota",
    description:
      "View professional AV and low voltage projects completed by Brink Design across South Dakota.",
    images: ["https://www.brinkdesign.co/og-image.jpg"],
  },
};

export default async function Page() {
  try {
    const projects = await fetchProjects();
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
        {/* Hero Section - Redesigned to match blog hero */}
        <section className="relative bg-primary py-20 lg:py-32">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Projects Portfolio
            </h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-8 leading-relaxed">
              Explore our portfolio of successful AV, security, and networking installations. See how we help businesses, churches, and homeowners across western South Dakota achieve their technology goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-accent text-gray-900 font-bold rounded-lg hover:bg-yellow-300 transition-colors duration-200 shadow-md"
              >
                Start Your Project
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-blue-700 rounded-lg transition-colors duration-200"
              >
                View Services
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-6 justify-center">
              <div className="flex items-center gap-2 text-blue-100 text-sm">
                {/* Trust Indicator 1 */}
                <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" /></svg>
                Local South Dakota Experts
              </div>
              <div className="flex items-center gap-2 text-blue-100 text-sm">
                <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" /></svg>
                Commercial & Residential Solutions
              </div>
              <div className="flex items-center gap-2 text-blue-100 text-sm">
                <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" /></svg>
                Satisfaction Guaranteed
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <div className="container mx-auto px-6 py-20">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From residential smart homes to complex commercial installations, see how we&apos;ve transformed spaces with innovative low voltage solutions.
            </p>
          </div>

          {/* Projects Grid */}
          {projects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
              {projects.map((project: { entry: { title: boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | Promise<ReactNode> | Key | null | undefined; image: any; published: string; }; slug: any; }, index: number) => (
                <Link key={String(project.entry.title)} href={`/projects/${project.slug}`} className="block">
                  <div className="group relative rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                    {/* Project Image with overlay */}
                    <div className="relative w-full h-64">
                      <Image
                        src={project.entry.image || '/images/placeholder.png'}
                        alt={project.entry.title?.toString() ?? ''}
                        width={450}
                        height={300}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {/* Overlay for text readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                      {/* Info Overlay */}
                      <div className="absolute bottom-0 left-0 w-full px-6 pb-6 pt-10 flex flex-col gap-2 text-left transition-all duration-300">
                        <Button variant="outline" className="opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2 transition-all duration-300">
                          View Project
                          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                        </Button>
                        <CardTitle className="text-lg md:text-xl font-bold text-white mb-1 line-clamp-2 transition-colors text-left">
                          {typeof project.entry.title === "string" || typeof project.entry.title === "number"
                            ? project.entry.title
                            : ""}
                        </CardTitle>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No Projects Yet</h3>
              <p className="text-gray-600 mb-6">We&apos;re working on showcasing our amazing projects. Check back soon!</p>
              <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 bg-secondary text-primary font-bold rounded-lg hover:bg-secondary/90 transition-all duration-200">
                Start Your Project
              </Link>
            </div>
          )}

          {/* Process Section */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 md:p-16 text-white mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Deliver Excellence</h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Our proven process ensures every project exceeds expectations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Discovery', desc: 'Understanding your unique needs and vision' },
                { step: '02', title: 'Design', desc: 'Creating custom solutions for your space' },
                { step: '03', title: 'Installation', desc: 'Expert implementation with precision' },
                { step: '04', title: 'Support', desc: 'Ongoing maintenance and optimization' },
              ].map((item, index) => (
                <div key={index} className="text-center group">
                  <div className="bg-secondary text-primary rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-secondary via-secondary to-secondary/90 text-primary py-20">
          <div className="container mx-auto px-6 text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Create Your Success Story?
              </h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Join our growing list of satisfied clients who have transformed their spaces with our expert low voltage solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-primary text-secondary font-bold rounded-lg hover:bg-primary/90 transition-all duration-200 hover:shadow-lg">
                  Get Your Free Quote
                </Link>
                <Link href="/services" className="inline-flex items-center justify-center px-8 py-4 border border-primary text-primary hover:bg-primary hover:text-secondary rounded-lg transition-all duration-200">
                  View Our Services
                </Link>
              </div>

              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Free Consultation</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Expert Design</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Professional Installation</span>
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
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Unable to Load Projects</h1>
          <p className="text-gray-600 mb-6">{(error as Error).message}</p>
          <Link href="/" className="inline-flex items-center justify-center px-6 py-3 bg-secondary text-primary font-bold rounded-lg hover:bg-secondary/90 transition-all duration-200">
            Return Home
          </Link>
        </div>
      </div>
    );
  }
}