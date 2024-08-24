import { createReader } from "@keystatic/core/reader";
import keystaticConfig from "../../keystatic.config";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const reader = createReader(process.cwd(), keystaticConfig);

export default function About({ data }: { data: any }) {
    return (
        <div className='p-6 bg-gray-100 text-black' id='about'>
            <h1 className='text-4xl font-extrabold text-center mb-8'>{data?.title}</h1>
            <section className="max-w-4xl mx-auto p-8">
                <div>
                    <p>{data?.content}</p>
                </div>
                <div className="text-center">
                    <Button asChild>
                        <Link href="/contact">Work With Me</Link>
                    </Button>
                </div>
            </section>
        </div>
    );
}

// Fetching the data at build time using getStaticProps
export async function getStaticProps() {
    const data = await reader.singletons.about.read();

    // If content is a function that returns a promise, resolve it
    if (typeof data?.content === "function") {
        const content = await data.content();
        return {
            props: {
                data: { ...data, content: content.node }, // Ensure content.node is a valid ReactNode
            },
        };
    }

    return {
        props: {
            data: data || null,
        },
    };
}
