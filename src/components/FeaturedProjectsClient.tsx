"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardFooter, CardTitle } from '@/components/ui/card';
import { ArrowRight, Eye, Calendar, MapPin } from 'lucide-react';
import React from 'react';

type Project = {
  slug: string;
  entry: {
    title: string;
    image: string;
    description: React.ReactNode;
  };
};

export default function FeaturedProjectsClient({ projects }: { projects: Project[] }) {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
            Our Work
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Recent Installs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Real jobs for homes, churches, and businesses across South Dakota.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 hover:border-blue-300 h-full flex flex-col group">
                {/* Image Container */}
                <div className="relative overflow-hidden">
                  <CardContent className="p-0 relative">
                    <Image
                      src={project.entry.image || '/images/placeholder.png'}
                      alt={project.entry.title.toString()}
                      width={600}
                      height={400}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* View Project Badge */}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Eye className="w-4 h-4 inline mr-1" />
                      View Project
                    </div>
                    
                  </CardContent>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2">
                      {project.entry.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="flex-1 pt-0 pb-4">
                    <div className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                      {project.entry.description}
                    </div>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Want a Similar Setup?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              We&rsquo;ll walk your property, show you options, and give you a clear quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Book a Site Visit & Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                href="/projects"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 text-gray-700 hover:border-gray-400 hover:text-gray-900 rounded-xl transition-all duration-300"
              >
                View All Projects
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}