import { Metadata } from "next";
import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '../../../keystatic.config';
import Link from 'next/link';
import Image from 'next/image';

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
  title: "Our Work – Security, AV & Cabling Projects | Brink Design Co.",
  description:
    "Real installs. Real results. Browse security camera, Wi-Fi, AV, and low-voltage cabling projects completed by Brink Design across the Black Hills.",
  alternates: { canonical: "https://www.brinkdesign.co/projects" },
  openGraph: {
    title: "Our Work – Security, AV & Cabling Projects | Brink Design Co.",
    description:
      "Browse real installs: security cameras, Wi-Fi networks, church AV, and structured cabling across western South Dakota.",
    images: ["https://www.brinkdesign.co/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Work – Brink Design Co.",
    description:
      "Real security, AV, and cabling projects completed across the Black Hills by Brink Design.",
    images: ["https://www.brinkdesign.co/og-image.jpg"],
  },
};

export default async function Page() {
  try {
    const projects = await fetchProjects();
    return (
      <div className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-primary py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Our Work
            </h1>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">
              Real installs for real clients. Security cameras, Wi-Fi networks, church AV, and clean cabling across the Black Hills.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-accent text-gray-900 font-bold rounded-lg hover:bg-yellow-300 transition-colors duration-200"
            >
              Book a Site Visit & Quote
            </Link>
          </div>
        </section>

        {/* Projects Grid */}
        <div className="max-w-6xl mx-auto px-6 py-16">
          {projects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project: { entry: { title: any; image: any; published: string; }; slug: any; }) => (
                <Link key={String(project.entry.title)} href={`/projects/${project.slug}`} className="group block">
                  <div className="relative rounded-xl overflow-hidden bg-gray-900 aspect-[4/3]">
                    <Image
                      src={project.entry.image || '/images/placeholder.png'}
                      alt={project.entry.title?.toString() ?? ''}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-all duration-300 group-hover:scale-105 group-hover:opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <h2 className="text-white font-bold text-lg leading-snug line-clamp-2 mb-2">
                        {typeof project.entry.title === "string" || typeof project.entry.title === "number"
                          ? project.entry.title
                          : ""}
                      </h2>
                      <span className="inline-flex items-center text-sm text-white/80 font-medium group-hover:text-white transition-colors">
                        View Project
                        <svg className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-xl font-bold text-gray-900 mb-2">No projects yet</h3>
              <p className="text-gray-600 mb-6">We&apos;re adding project write-ups. Check back soon.</p>
              <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                Book a Site Visit & Quote
              </Link>
            </div>
          )}
        </div>

        {/* CTA */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Need something similar?
            </h2>
            <p className="text-base text-gray-600 mb-8 max-w-xl mx-auto">
              Tell us what you need — we&apos;ll walk your site and give you a clear quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors">
                Book a Site Visit & Quote
              </Link>
              <Link href="tel:6053893261" className="inline-flex items-center justify-center px-8 py-4 border border-gray-300 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors font-semibold">
                Call (605) 389-3261
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  } catch (error) {
    console.error('Error rendering page:', error);
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center p-8 max-w-md mx-auto">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Unable to Load Projects</h1>
          <p className="text-gray-600 mb-6">{(error as Error).message}</p>
          <Link href="/" className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
            Return Home
          </Link>
        </div>
      </div>
    );
  }
}