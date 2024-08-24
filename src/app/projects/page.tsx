import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '../../../keystatic.config';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
const reader = createReader(process.cwd(), keystaticConfig);

export default async function Page() {
  const projects = await reader.collections.project.all();

  // Sort projects by published date in descending order
  projects.sort((a, b) => new Date(b.entry.published).getTime() - new Date(a.entry.published).getTime());

  return (
    <div>
      <div className='bg-[url("/hero.avif")] bg-cover bg-center bg-fixed h-96 py-10'>
        <div className="container flex flex-col justify-end items-start h-full">
          <h1 className="text-3xl font-bold text-white">Projects</h1>
        </div>
      </div>
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <Link key={project.entry.title} href={`/projects/${project.slug}`}>
              <Card className="shadow-lg rounded-lg overflow-hidden group hover:bg-neutral-100 transition-all transform hover:scale-105">
                <CardContent className="p-0">
                  <Image
                    src={project.entry.image || '/images/placeholder.png'}
                    alt={project.entry.title}
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
      </div>
    </div>
  );
}