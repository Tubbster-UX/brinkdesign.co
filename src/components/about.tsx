import Link from "next/link";
import { Button } from "./ui/button";
import { createReader } from "@keystatic/core/reader";
import React from "react";
import keystaticConfig from "../../keystatic.config";
import Markdoc from "@markdoc/markdoc";

type About = {
    title: string;
    content: string;
};

const reader = createReader(process.cwd(), keystaticConfig);

export default async function About() {
    const about = await reader.singletons.about.read();

    if (!about) {
        console.error(`About page not found`);
        return null;
    }

    const { node } = await about.content();
    const errors = Markdoc.validate(node);
    if (errors.length) {
        console.error(errors);
        throw new Error('Invalid content');
      }
    const renderable = Markdoc.transform(node);
    return (
        <div className="p-6 bg-gray-100 text-black" id="about">
            <h2 className="text-4xl font-extrabold text-center mb-8">{about.title}</h2>
            <section className="max-w-4xl mx-auto p-8">
                <div className="prose">{Markdoc.renderers.react(renderable, React)}</div>
                <div className="text-center mt-8">
                    <Button asChild><Link href="/contact">Work With Me</Link></Button>
                </div>
            </section>
        </div>
    );
}