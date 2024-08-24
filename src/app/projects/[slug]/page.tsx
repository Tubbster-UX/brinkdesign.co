import { createReader } from "@keystatic/core/reader";
import React from "react";
import Markdoc from "@markdoc/markdoc";
import keystaticConfig from "../../../../keystatic.config";
import Link from "next/link";
import Image from "next/image";

const reader = createReader(process.cwd(), keystaticConfig);

export default async function Project({ params }: { params: { slug: string } }) {
  const project = await reader.collections.project.read(params.slug);
  if (!project) {
    return <div className="container mx-auto p-4 text-center text-red-500">No Project Found</div>;
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