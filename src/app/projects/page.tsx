import { Metadata } from "next";
import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '../../../keystatic.config';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ReactElement, JSXElementConstructor, ReactNode, Key } from 'react';
import { trackEvent } from '@/lib/analytics';


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
  title: "Projects - Brink Design Co.",
  description: "Browse our portfolio of AV installations and low voltage projects, including networking, security systems, door access, and more.",
  alternates: { canonical: "https://www.brinkdesign.co/projects" },
  twitter: {
    card: "summary_large_image",
    title: "Projects - Brink Design Co.",
    description: "Browse our portfolio of AV installations and low voltage projects, including networking, security systems, door access, and more.",
    images: ["https://www.brinkdesign.co/og-image.jpg"],
  },
};

export default async function Page() {
  try {
    const projects = await fetchProjects();
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
                  Our <span className="text-secondary">Projects</span>
                </h1>
                <p className="text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed">
                  Explore our portfolio of successful low voltage installations, from security systems to smart home automation and commercial AV solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    onClick={() => trackEvent('start_project_click', { location: 'projects-hero' })}
                    className="inline-flex items-center justify-center px-8 py-4 bg-secondary text-primary font-bold rounded-lg hover:bg-secondary/90 transition-all duration-200 hover:shadow-lg"
                  >
                    Start Your Project
                  </Link>
                  <Link href="/services" className="inline-flex items-center justify-center px-8 py-4 border border-white/30 text-white hover:bg-white/10 rounded-lg transition-all duration-200">
                    View Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-primary text-white py-16">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-secondary">10+</div>
                <div className="text-gray-300">Years Experience</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-secondary">24/7</div>
                <div className="text-gray-300">Support Available</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-secondary">100%</div>
                <div className="text-gray-300">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div className="container mx-auto px-6 py-20">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-secondary/10 rounded-full text-secondary font-semibold text-sm mb-4">
              Case Studies
            </div>
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
                <Link key={String(project.entry.title)} href={`/projects/${project.slug}`}>
                  <Card className="group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white">
                    {/* Project Image */}
                    <div className="relative overflow-hidden">
                      <Image
                        src={project.entry.image || '/images/placeholder.png'}
                        alt={project.entry.title?.toString() ?? ''}
                        width={450}
                        height={300}
                        className="w-full h-64 object-contain transition-transform duration-500 group-hover:scale-110"
                      />
                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                      {/* Read More Button - appears on hover */}
                      <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                        <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 border border-white/30">
                          <svg className="w-5 h-5 text-white transition-transform duration-300 group-hover:rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Project Info */}
                    <CardContent className="p-6">
                      <CardTitle className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                        {typeof project.entry.title === "string" || typeof project.entry.title === "number"
                          ? project.entry.title
                          : ""}
                      </CardTitle>

                      {/* Project Meta */}
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span>Case Study</span>
                        <span>{new Date(project.entry.published).getFullYear()}</span>
                      </div>

                      {/* Bottom border animation */}
                      <div className="mt-4 h-0.5 bg-gradient-to-r from-secondary to-secondary/60 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                    </CardContent>
                  </Card>
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
              <Link
                href="/contact"
                onClick={() => trackEvent('start_project_click', { location: 'projects-empty' })}
                className="inline-flex items-center justify-center px-6 py-3 bg-secondary text-primary font-bold rounded-lg hover:bg-secondary/90 transition-all duration-200"
              >
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