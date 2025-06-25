import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '../../keystatic.config';
import Image from 'next/image';
import Link from 'next/link';
import Markdoc from '@markdoc/markdoc';
import { Card, CardContent, CardHeader, CardFooter, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import React from 'react';

const reader = createReader(process.cwd(), keystaticConfig);

export default async function FeaturedProjects() {
  const all = await reader.collections.project.all();
  if (!all || all.length === 0) return null;
  all.sort((a, b) => new Date(b.entry.published).getTime() - new Date(a.entry.published).getTime());
  const slice = all.slice(0, 3);

  const projects = await Promise.all(
    slice.map(async (proj) => {
      const { node } = await proj.entry.description();
      const renderable = Markdoc.transform(node);
      return { ...proj, renderable };
    })
  );

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
              <CardContent className="pt-0 text-sm text-gray-700 flex-1">
                {Markdoc.renderers.react(project.renderable, React)}
              </CardContent>
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
