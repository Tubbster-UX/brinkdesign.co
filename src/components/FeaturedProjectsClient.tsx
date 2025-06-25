"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardFooter, CardTitle } from '@/components/ui/card';
import React from 'react';

type Project = {
  slug: string;
  entry: {
    title: string;
    image: string;
    description: React.ReactNode; // Updated to accept rendered description
  };
};

export default function FeaturedProjectsClient({ projects }: { projects: Project[] }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="py-16 bg-gray-100"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.slug} className="overflow-hidden group shadow-lg flex flex-col">
              <CardContent className="p-0">
                <Image
                  src={project.entry.image || '/images/placeholder.png'}
                  alt={project.entry.title.toString()}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover"
                />
              </CardContent>
              <CardHeader>
                <CardTitle>{project.entry.title}</CardTitle>
              </CardHeader>
              <CardFooter className="mt-auto">
                <Link href={`/projects/${project.slug}`} className="text-primary hover:underline">
                  View Project
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/projects" className="inline-block px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 focus-visible:outline focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
            View All Projects
          </Link>
        </div>
      </div>
    </motion.section>
  );
}