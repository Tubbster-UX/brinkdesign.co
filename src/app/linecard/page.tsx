import { notFound } from 'next/navigation';
import keystaticConfig from '../../../keystatic.config';
import { createReader } from '@keystatic/core/reader';
import Image from 'next/image';
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

  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Line Card</h1>
      <p className="text-lg text-gray-600 mb-10">Trusted brands we work with across networking, AV, security, and automation.</p>

      {sortedCategories.map(category => (
        <section key={category} className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 pb-4 border-b-2 border-gray-200 capitalize">
            {category}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {groupedEntries[category].map(({ entry, slug }) => (
              <div key={slug} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border border-gray-100">
                <div className="flex flex-col h-full">
                  {/* Logo or Brand Name Header */}
                  <div className="flex items-center justify-center mb-6 h-20">
                    {entry.logo ? (
                      <Image
                        src={entry.logo}
                        alt={`${entry.brand} logo`}
                        width={120}
                        height={60}
                        className="object-contain max-h-16 w-auto"
                      />
                    ) : (
                      <div className="flex items-center justify-center h-16 w-full bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg">
                        <h3 className="text-lg font-bold text-gray-700 text-center px-4">
                          {entry.brand}
                        </h3>
                      </div>
                    )}
                  </div>
                  
                  {/* Brand name for logo entries */}
                  {entry.logo && (
                    <h3 className="text-xl font-semibold text-center mb-4 text-gray-800 capitalize">
                      {entry.brand}
                    </h3>
                  )}
                  
                  {/* Content */}
                  <div className="flex-grow">
                    {entry.renderedNotes && (
                      <div className="prose prose-sm prose-gray max-w-none mb-4">
                        {entry.renderedNotes}
                      </div>
                    )}
                  </div>
                  
                  {/* Website link at bottom */}
                  {entry.website && (
                    <div className="mt-auto pt-4">
                      <a
                        href={entry.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors duration-200"
                      >
                        Visit Website
                        <svg className="ml-1 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
