import type { Metadata } from "next";
import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '../../../keystatic.config';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import PaginationControls from '@/components/PaginationControls';
import { ReactElement, JSXElementConstructor, ReactNode, AwaitedReactNode, Key } from 'react';

const reader = createReader(process.cwd(), keystaticConfig);

async function fetchProjects(page: number, pageSize: number) {
  try {
    console.log('Fetching projects...');
    const allProjects = await reader.collections.project.all();
    console.log('Fetched projects:', allProjects);

    // Sort projects by published date in descending order
    allProjects.sort((a, b) => new Date(b.entry.published).getTime() - new Date(a.entry.published).getTime());

    // Calculate pagination
    const totalProjects = allProjects.length;
    const totalPages = Math.ceil(totalProjects / pageSize);
    const projects = allProjects.slice((page - 1) * pageSize, page * pageSize);

    console.log('Paginated projects:', projects);
    return { projects, page, totalPages };
  } catch (error) {
    console.error('Error fetching projects:', error);
    throw new Error('Failed to fetch projects');
  }
}

export const metadata: Metadata = {
  title: "Projects - Brink Design Co.",
  description: "Explore our portfolio of projects at Brink Design Co. Discover our innovative web design, logo design, and app development projects.",
};

export default async function Page({ searchParams }: { searchParams: { page?: string, pageSize?: string } }) {
  const page = parseInt(searchParams.page as string) || 1;
  const pageSize = parseInt(searchParams.pageSize as string) || 6;

  try {
    const { projects, totalPages } = await fetchProjects(page, pageSize);
    console.log('Projects:', projects);

    return (
      <div>
        <div className='bg-[url("/hero.avif")] bg-cover bg-center bg-fixed h-96 py-10'>
          <div className="container flex flex-col justify-end items-start h-full">
            <h1 className="text-3xl font-bold text-white">Projects</h1>
          </div>
        </div>
        <div className="container mx-auto p-4 min-h-96">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project: { entry: { title: boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | Promise<AwaitedReactNode> | Key | null | undefined; image: any; }; slug: any; }) => (
              <Link key={String(project.entry.title)} href={`/projects/${project.slug}`}>
                <Card className="shadow-lg rounded-lg overflow-hidden group hover:bg-neutral-100 transition-all transform hover:scale-105">
                  <CardContent className="p-0">
                    <Image
                      src={project.entry.image || '/images/placeholder.png'}
                      alt={project.entry.title?.toString() ?? ''}
                      width={450}
                      height={400}
                      className="w-full h-48 object-contain transition-transform duration-300 group-hover:scale-110"
                    />
                  </CardContent>
                  <CardHeader className="p-4">
                    <CardTitle className="text-lg font-semibold transition-colors">{project.entry.title}</CardTitle>
                  </CardHeader>
                  <CardFooter className="p-4 flex justify-end">
                    <span className="text-[1e262e] hover:underline flex items-center">
                      <span className="mr-2">Read more</span>
                      <svg className='transition-transform duration-300 transform rotate-45 group-hover:rotate-0 fill-current' xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z" /></svg>
                    </span>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
          <PaginationControls page={page} totalPages={totalPages} />
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error rendering page:', error);
    return (
      <div>
        <h1>Error loading projects</h1>
        <p>{(error as Error).message}</p>
      </div>
    );
  }
}