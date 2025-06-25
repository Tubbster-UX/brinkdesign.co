import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '../../keystatic.config';
import Markdoc from '@markdoc/markdoc';
import FeaturedProjectsClient from './FeaturedProjectsClient';
import React from 'react';

const reader = createReader(process.cwd(), keystaticConfig);

export default async function FeaturedProjectsServer() {
  const all = await reader.collections.project.all();
  if (!all || all.length === 0) return null;

  all.sort((a, b) => new Date(b.entry.published).getTime() - new Date(a.entry.published).getTime());
  const slice = all.slice(0, 3);

  const projects = await Promise.all(
    slice.map(async (proj) => {
      const { node } = await proj.entry.description();
      const renderable = Markdoc.transform(node);
      const renderedDescription = Markdoc.renderers.react(renderable, React); // Render the description on the server
      return {
        slug: proj.slug,
        entry: {
          title: proj.entry.title,
          image: proj.entry.image || '', // Handle null case
          description: renderedDescription, // Pass the rendered description
          published: proj.entry.published,
        },
      };
    })
  );

  return <FeaturedProjectsClient projects={projects} />;
}