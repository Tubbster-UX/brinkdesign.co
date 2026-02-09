import Link from "next/link";
import { Button } from "./ui/button";
import { createReader } from "@keystatic/core/reader";
import React from "react";
import keystaticConfig from "../../keystatic.config";
import Markdoc from "@markdoc/markdoc";
import { ArrowRight, Users, Award, MapPin, Clock } from "lucide-react";

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
        <section className="py-20 bg-primary text-white" id="about">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <div>

                        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                            {about.title}
                        </h2>

                        <div className="prose prose-lg prose-invert max-w-none mb-8">
                            {Markdoc.renderers.react(renderable, React)}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button asChild size="lg" className="bg-yellow-500 text-gray-900 hover:bg-accent font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                                <Link href="/contact" className="inline-flex items-center">
                                    Book a Site Visit &amp; Quote
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </Link>
                            </Button>
                        </div>
                    </div>

                    {/* Stats & Features */}
                    <div className="space-y-6">
                        {/* Main Feature Card */}
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                            <h3 className="text-2xl font-bold mb-6">Why People Choose Us</h3>
                            <div className="space-y-4">
                                <div className="flex items-center">
                                    <Award className="w-6 h-6 mr-4 text-accent" />
                                    <div>
                                        <div className="font-semibold">Clean, Tested Work</div>
                                        <div className="text-sm text-blue-100">Labeled cables, organized racks, tested before we leave</div>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <MapPin className="w-6 h-6 mr-4 text-green-400" />
                                    <div>
                                        <div className="font-semibold">Local &amp; Reachable</div>
                                        <div className="text-sm text-blue-100">Based in Rapid City — we pick up the phone</div>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <Clock className="w-6 h-6 mr-4 text-blue-400" />
                                    <div>
                                        <div className="font-semibold">2-Year Labor Warranty</div>
                                        <div className="text-sm text-blue-100">We stand behind every install</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
                                <div className="text-3xl font-bold text-accent mb-2">10+</div>
                                <div className="text-sm text-blue-100">Years Experience</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
                                <div className="text-3xl font-bold text-blue-400 mb-2">$0</div>
                                <div className="text-sm text-blue-100">Monthly Fees</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}