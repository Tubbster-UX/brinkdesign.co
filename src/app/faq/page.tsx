import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata = {
    title: "FAQ – Brink Design Co.",
    description: "Frequently asked questions about AV installation, security cameras, networking, and more from Brink Design Co. Serving Rapid City and the Black Hills.",
    openGraph: {
        title: "FAQ – Brink Design Co.",
        description: "Answers to common questions about our AV and low voltage services, process, support, and more.",
        url: "https://www.brinkdesign.co/faq",
        type: "article",
        images: [
            {
                url: "https://www.brinkdesign.co/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Brink Design Co. AV Services",
            },
        ],
    },
};

export default function FAQPage() {
    return (
        <div className="min-h-screen bg-white px-4 py-12 md:px-20 text-gray-900">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
                    <p className="text-lg text-gray-600">
                        Everything you need to know about our AV installation process, services, and support.
                    </p>
                </div>

                <Accordion type="multiple" className="w-full mb-12">
                    <AccordionItem value="q1">
                        <AccordionTrigger>Do you offer free consultations?</AccordionTrigger>
                        <AccordionContent>
                            Yes — we provide free on-site walkthroughs to assess your space and recommend the best solution.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="q2">
                        <AccordionTrigger>What systems do you install?</AccordionTrigger>
                        <AccordionContent>
                            We install security cameras, Wi-Fi networks, door access control, audio/video systems, live streaming setups, and more.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="q3">
                        <AccordionTrigger>What areas do you serve?</AccordionTrigger>
                        <AccordionContent>
                            We serve Rapid City and the greater Black Hills region. <a href="/service-area" className="text-blue-600 underline">View full service area</a>.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="q4">
                        <AccordionTrigger>Can you upgrade or expand existing systems?</AccordionTrigger>
                        <AccordionContent>
                            Absolutely. We can improve or add onto your current security, networking, or AV setup.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="q5">
                        <AccordionTrigger>How long does a typical install take?</AccordionTrigger>
                        <AccordionContent>
                            Most jobs are completed within 1–4 days. Timelines vary based on scope and complexity.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="q6">
                        <AccordionTrigger>Do you provide ongoing support?</AccordionTrigger>
                        <AccordionContent>
                            Yes — we offer free remote support and optional paid on-site visits. Service plans are available for larger systems.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="q7">
                        <AccordionTrigger>Are there any monthly fees?</AccordionTrigger>
                        <AccordionContent>
                            No recurring fees unless you choose an ongoing service agreement. Most installs are one-time projects.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="q8">
                        <AccordionTrigger>What brands do you work with?</AccordionTrigger>
                        <AccordionContent>
                            We use top-tier brands like
                            {" "}
                            <a
                                href="https://ui.com"
                                className="text-blue-600 underline"
                            >
                                UniFi
                            </a>
                            ,{" "}
                            <a
                                href="https://www.shure.com"
                                className="text-blue-600 underline"
                            >
                                Shure
                            </a>
                            ,{" "}
                            <a
                                href="https://birddog.tv"
                                className="text-blue-600 underline"
                            >
                                BirdDog
                            </a>
                            , and more — always tailored to your needs and budget.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>


                <div className="text-center">
                    <h2 className="text-2xl font-semibold mb-4">Still have questions?</h2>
                    <p className="text-gray-600 mb-6">We&#39;re happy to help. Reach out and we&#39;ll get back to you shortly.</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a href="tel:6053818290">
                            <Button className="flex items-center gap-2" size="lg">
                                <Phone size={18} /> Call Us
                            </Button>
                        </a>
                        <a href="mailto:contact@brinkdesign.co">
                            <Button variant="outline" className="flex items-center gap-2" size="lg">
                                <Mail size={18} /> Send an Email
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
