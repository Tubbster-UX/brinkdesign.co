import { notFound } from 'next/navigation';
import { reader } from '@/lib/reader';
import Image from 'next/image';
import Link from 'next/link';
import Markdoc from "@markdoc/markdoc";
import React from 'react';

type Project = {
  slug: string;
};

export async function generateStaticParams() {
  const projects: Project[] = (await reader.collections.project.list()).map((slug) => ({ slug }));
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  try {
    const project = await reader.collections.project.read(params.slug);
    if (!project) {
      console.error(`Project with slug ${params.slug} not found`);
      return {
        title: "Project Not Found - Brink Design Co.",
        description: "The requested project could not be found.",
      };
    }
    return {
      title: `${project.title} - Brink Design Co.`,
      description: `${project.title} - Innovative web design, logo design, and app development by Brink Design Co. Tailored solutions to elevate your brand.`,
      image: project.image,
      openGraph: {
        title: `${project.title} - Brink Design Co.`,
        description: `${project.title} - Innovative web design, logo design, and app development by Brink Design Co. Tailored solutions to elevate your brand.`,
        images: [
          {
            url: project.image,
            width: 450,
            height: 400,
            alt: project.title,
          },
        ],
      },
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: "Error - Brink Design Co.",
      description: "An error occurred while fetching the project data.",
    };
  }
}

export default async function Project({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const project = await reader.collections.project.read(slug);

  if (!project) {
    console.error(`Project with slug ${slug} not found`);
    return notFound();
  }

  const { node } = await project.description();
  const errors = Markdoc.validate(node);
  if (errors.length) {
    console.error(errors);
    throw new Error('Invalid content');
  }
  const renderable = Markdoc.transform(node);

  return (
    <div className="container mx-auto">
      <div className="p-10">
        <nav className="text-sm mb-4">
          <Link href="/projects">
            <span className="text-blue-500 hover:underline">Projects</span>
          </Link>
          <span className="mx-2">/</span>
          <span>{project.title}</span>
        </nav>
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <h1 className="text-3xl font-bold mb-4 md:mb-0">{project.title}</h1>
          <Image src={project.image || "/images/placeholder.png"} alt={project.title} width={450} height={400} />
        </div>
        <div className="prose max-w-none">
          {Markdoc.renderers.react(renderable, React)}
        </div>
        <hr className="my-6" />
        <Link href="/projects">
          <span className="text-blue-500 hover:underline">Back to Projects</span>
        </Link>
      </div>
    </div>
  );
}