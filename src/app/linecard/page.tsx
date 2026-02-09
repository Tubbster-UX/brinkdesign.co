import { notFound } from 'next/navigation';
import keystaticConfig from '../../../keystatic.config';
import { createReader } from '@keystatic/core/reader';
import Image from 'next/image';
import Link from 'next/link';
import Markdoc from '@markdoc/markdoc';
import React from 'react';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'AV Line Card – Brink Design Western South Dakota',
  description: 'View our preferred audio, video and technology partners for projects across western South Dakota.',
  openGraph: {
    title: 'AV Line Card – Brink Design Western South Dakota',
    description: 'Discover the brands Brink Design trusts for professional AV and low voltage installations.',
    images: ['https://www.brinkdesign.co/og-image.jpg'],
  },
  alternates: { canonical: 'https://www.brinkdesign.co/linecard' },
  twitter: {
    card: 'summary_large_image',
    title: 'AV Line Card – Brink Design Western South Dakota',
    description: 'Our trusted vendors for AV, security and networking equipment in South Dakota.',
    images: ['https://www.brinkdesign.co/og-image.jpg'],
  },
};

export default async function LineCardPage() {
  const reader = createReader(process.cwd(), keystaticConfig);
  const entries = await reader.collections.lineCard.all();

  if (!entries || entries.length === 0) return notFound();

  // Process entries to render Markdoc content and group by category
  const processedEntries = await Promise.all(
    entries.map(async ({ entry, slug }) => {
      let renderedNotes = null;
      if (entry.notes) {
        const { node } = await entry.notes();
        const errors = Markdoc.validate(node);
        if (errors.length === 0) {
          const renderable = Markdoc.transform(node);
          renderedNotes = Markdoc.renderers.react(renderable, React);
        }
      }
      return {
        slug,
        entry: {
          ...entry,
          renderedNotes,
        },
      };
    })
  );

  // Group entries by category
  const groupedEntries = processedEntries.reduce((acc, item) => {
    const category = item.entry.category || 'Other';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(item);
    return acc;
  }, {} as Record<string, typeof processedEntries>);

  // Sort categories and entries within each category
  const sortedCategories = Object.keys(groupedEntries).sort();
  sortedCategories.forEach(category => {
    groupedEntries[category].sort((a, b) => a.entry.brand.localeCompare(b.entry.brand));
  });

  // Category icons mapping
  const categoryIcons: Record<string, string> = {
    'networking': '🌐',
    'security': '🔒',
    'audio/video': '📺',
    'automation': '🏠',
    'other': '⚡',
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Hero Section - Redesigned to match other pages */}
      <section className="relative bg-primary py-20 lg:py-32">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Line Card
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-8 leading-relaxed">
            Discover the brands Brink Design trusts for professional AV, security, networking, and automation projects across western South Dakota.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
            <Link href="/contact">
              <Button variant="default" size="lg" className="bg-accent text-secondary-foreground font-bold shadow-md hover:bg-accent/90">
                Book a Site Visit & Quote
              </Button>
            </Link>
            <Link href="/services">
              <Button variant="outline" size="lg">
                View Our Services
              </Button>
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap gap-6 justify-center">
            <div className="flex items-center gap-2 text-blue-100 text-sm">
              <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" /></svg>
              Trusted Industry Brands
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

      {/* Main Content */}
      <div className="container mx-auto px-6 py-20">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-secondary/10 rounded-full text-secondary font-semibold text-sm mb-4">
            Industry Leaders
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Brands We Trust
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our carefully curated partnerships ensure you receive the highest quality equipment and solutions for your low voltage technology needs.
          </p>
        </div>

        {/* Categories */}
        {sortedCategories.map((category, categoryIndex) => (
          <section key={category} className="mb-20">
            {/* Category Header */}
            <div className="flex items-center mb-12">
              <div className="flex items-center space-x-4">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 capitalize">
                    {category}
                  </h3>
                  <div className="w-24 h-1 bg-gradient-to-r from-secondary to-secondary/60 rounded-full mt-2"></div>
                </div>
              </div>
              <div className="ml-auto bg-secondary/10 px-4 py-2 rounded-full">
                <span className="font-semibold text-sm">
                  {groupedEntries[category].length} Brands
                </span>
              </div>
            </div>

            {/* Brands Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {groupedEntries[category].map(({ entry, slug }, index) => (
                <div key={slug} className="group relative overflow-hidden bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-200 hover:border-accent border border-gray-100 flex flex-col">
                  {/* Brand Card */}
                  <div className="p-8 h-full flex flex-col items-center">
                    {/* Logo Section */}
                    <div className="flex items-center justify-center mb-6 h-24 w-full">
                      {entry.logo ? (
                        <div className="relative group-hover:scale-105 transition-transform duration-300 flex items-center justify-center h-24 w-full">
                          <Image
                            src={entry.logo}
                            alt={`${entry.brand} logo`}
                            className="h-24 w-auto object-contain mx-auto"
                            width={180}
                            height={180}
                            priority={index < 3}
                          />
                        </div>
                      ) : (
                        <div className="flex items-center justify-center h-20 w-full bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl transition-all duration-300">
                          <h4 className="text-lg font-bold text-gray-700 text-center px-4 group-hover:text-accent transition-colors">
                            {entry.brand}
                          </h4>
                        </div>
                      )}
                    </div>

                    {/* Brand Name */}
                    <h4 className={`text-xl font-semibold mb-4 text-gray-800 group-hover:text-accent transition-colors capitalize text-center w-full ${entry.logo ? '' : 'mt-2'}`}>
                      {entry.brand}
                    </h4>

                    {/* Content */}
                    <div className="flex-grow mb-4 w-full">
                      {entry.renderedNotes && (
                        <div className="prose prose-sm prose-gray max-w-none text-center
                          prose-p:text-gray-600 prose-p:text-sm prose-p:leading-relaxed
                          prose-strong:text-gray-800 prose-strong:font-semibold
                          prose-a:text-accent prose-a:no-underline hover:prose-a:underline">
                          {entry.renderedNotes}
                        </div>
                      )}
                    </div>

                    {/* Website Link */}
                    {entry.website && (
                      <div className="mt-auto w-full">
                        <a
                          href={entry.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center w-full py-2 px-4 bg-gray-50 text-gray-700 hover:bg-gray-100 font-normal text-sm transition-all duration-200 rounded-lg group/link border border-gray-200"
                        >
                          <span>Visit Website</span>
                          <svg className="ml-2 w-4 h-4 text-gray-400 transition-transform duration-200 group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      </div>
                    )}

                    {/* Bottom Border Animation */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-accent/60 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-secondary via-secondary to-secondary/90 text-primary py-20">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Work with the Best?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              We install equipment from the brands listed below. Need help choosing? We’ll recommend the right gear for your space.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-primary text-secondary font-bold rounded-lg hover:bg-primary/90 transition-all duration-200 hover:shadow-lg">
                Book a Site Visit & Quote
              </Link>
              <Link href="/services" className="inline-flex items-center justify-center px-8 py-4 border border-primary text-primary hover:bg-primary hover:text-secondary rounded-lg transition-all duration-200">
                View Our Services
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div className="flex items-center justify-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Premium Equipment</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Professional Installation</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Ongoing Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
