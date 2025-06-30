import { notFound } from 'next/navigation';
import keystaticConfig from '../../../keystatic.config';
import { createReader } from '@keystatic/core/reader';
import Image from 'next/image';
import Link from 'next/link';
import Markdoc from '@markdoc/markdoc';
import React from 'react';

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
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-primary via-primary to-primary/95 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:40px_40px]"></div>
        </div>

        <div className="relative container mx-auto px-6 py-20">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-2 bg-secondary/20 backdrop-blur-sm rounded-full text-secondary font-semibold text-sm mb-6 border border-secondary/30">
              Trusted Partners
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Our <span className="text-secondary">Line Card</span>
            </h1>

            <p className="text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed">
              We partner with industry-leading brands to deliver cutting-edge solutions across networking, security, audio/video, and automation technologies.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-secondary text-primary font-bold rounded-lg hover:bg-secondary/90 transition-all duration-200 hover:shadow-lg">
                Get Expert Consultation
              </Link>
              <Link href="/services" className="inline-flex items-center justify-center px-8 py-4 border border-white/30 text-white hover:bg-white/10 rounded-lg transition-all duration-200">
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </div>

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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {groupedEntries[category].map(({ entry, slug }, index) => (
                <div key={slug} className="group relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                  {/* Brand Card */}
                  <div className="p-6 h-full flex flex-col">
                    {/* Logo Section */}
                    <div className="flex items-center justify-center mb-6 h-20 relative">
                      {entry.logo ? (
                        <div className="relative group-hover:scale-105 transition-transform duration-300">
                            <Image
                              src={entry.logo}
                              alt={`${entry.brand} logo`}
                              className="h-20 w-auto object-contain"
                              width={150}
                              height={150}
                              priority={index < 3} // Load first few logos eagerly
                            />
                        </div>
                      ) : (
                        <div className="flex items-center justify-center h-16 w-full bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl transition-all duration-300">
                          <h4 className="text-lg font-bold text-gray-700 text-center px-4 group-hover:text-secondary transition-colors">
                            {entry.brand}
                          </h4>
                        </div>
                      )}
                    </div>

                    {/* Brand Name */}
                    {entry.logo && (
                      <h4 className="text-xl font-semibold text-center mb-4 text-gray-800 group-hover:text-primary transition-colors capitalize">
                        {entry.brand}
                      </h4>
                    )}

                    {/* Content */}
                    <div className="flex-grow mb-4">
                      {entry.renderedNotes && (
                        <div className="prose prose-sm prose-gray max-w-none text-center
                          prose-p:text-gray-600 prose-p:text-sm prose-p:leading-relaxed
                          prose-strong:text-gray-800 prose-strong:font-semibold
                          prose-a:text-secondary prose-a:no-underline hover:prose-a:underline">
                          {entry.renderedNotes}
                        </div>
                      )}
                    </div>

                    {/* Website Link */}
                    {entry.website && (
                      <div className="mt-auto">
                        <a
                          href={entry.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center w-full py-2 px-4 bg-gray-50 hover:bg-secondary hover:text-white text-gray-700 font-medium text-sm transition-all duration-200 rounded-lg group/link"
                        >
                          <span>Visit Website</span>
                          <svg className="ml-2 w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      </div>
                    )}

                    {/* Bottom Border Animation */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary to-secondary/60 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* Partnership Benefits */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 md:p-16 text-white mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why We Choose These Partners</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Our partnerships are built on quality, reliability, and innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Proven Reliability',
                desc: 'Industry-tested solutions with track records of excellence',
                icon: '🛡️'
              },
              {
                title: 'Cutting-Edge Innovation',
                desc: 'Latest technology and forward-thinking product development',
                icon: '🚀'
              },
              {
                title: 'Professional Support',
                desc: 'Comprehensive warranties and ongoing technical assistance',
                icon: '🤝'
              },
            ].map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-secondary transition-colors">{benefit.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{benefit.desc}</p>
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
              Ready to Work with the Best?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Leverage our partnerships with industry leaders to get the highest quality solutions for your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-primary text-secondary font-bold rounded-lg hover:bg-primary/90 transition-all duration-200 hover:shadow-lg">
                Start Your Project
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
