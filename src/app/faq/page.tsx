import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Mail, Phone, MessageCircle, Clock, Shield, Award, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
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
    alternates: { canonical: "https://www.brinkdesign.co/faq" },
    twitter: {
        card: "summary_large_image",
        title: "FAQ – Brink Design Co.",
        description: "Frequently asked questions about AV installation, security cameras, networking, and more from Brink Design Co. Serving Rapid City and the Black Hills.",
        images: ["https://www.brinkdesign.co/og-image.jpg"],
    },
};

export default function FAQPage() {
    const categories = [
        {
            title: "Getting Started",
            icon: MessageCircle,
            description: "Initial consultation and project setup",
            color: "from-blue-500 to-blue-600"
        },
        {
            title: "Services & Process",
            icon: Clock,
            description: "Our installation and support process",
            color: "from-green-500 to-green-600"
        },
        {
            title: "Support & Warranty",
            icon: Shield,
            description: "Ongoing support and guarantees",
            color: "from-purple-500 to-purple-600"
        },
        {
            title: "Technical Details",
            icon: Award,
            description: "Equipment and technical specifications",
            color: "from-orange-500 to-orange-600"
        }
    ];

    const faqs = [
        {
            category: "Getting Started",
            questions: [
                {
                    q: "Do you offer free consultations?",
                    a: "Yes — we provide comprehensive free on-site consultations to assess your space, understand your needs, and recommend the best solution. During this visit, we'll create a detailed proposal with no hidden fees or surprises."
                },
                {
                    q: "How do I get started with a project?",
                    a: "Simply call us at (605) 381-8290 or fill out our contact form. We'll schedule a free consultation within 24-48 hours to discuss your project and provide a detailed quote."
                },
                {
                    q: "What's included in your consultation?",
                    a: "Our consultation includes a thorough site assessment, needs analysis, equipment recommendations, installation timeline, and a detailed written proposal. We'll also answer all your questions about the process."
                }
            ]
        },
        {
            category: "Services & Process", 
            questions: [
                {
                    q: "What systems do you install?",
                    a: "We specialize in security camera systems, Wi-Fi networks, door access control, audio/video systems, live streaming setups, smart home automation, and structured cabling. Every installation is customized to your specific needs."
                },
                {
                    q: "How long does a typical installation take?",
                    a: "Most residential projects are completed within 1-3 days, while commercial installations typically take 3-7 days. Complex projects may take longer, but we'll provide a detailed timeline during consultation."
                },
                {
                    q: "Can you upgrade or expand existing systems?",
                    a: "Absolutely. We're experts at integrating with existing infrastructure and can upgrade, expand, or modernize your current security, networking, or AV setup while maintaining compatibility."
                },
                {
                    q: "Do you handle permits and inspections?",
                    a: "Yes, we handle all necessary permits and coordinate inspections when required. We're fully licensed and insured, ensuring your project meets all local codes and regulations."
                }
            ]
        },
        {
            category: "Support & Warranty",
            questions: [
                {
                    q: "Do you provide ongoing support?",
                    a: "Yes — we offer free remote support for all installations plus optional on-site service visits. We also provide comprehensive service plans for larger commercial systems with priority response times."
                },
                {
                    q: "What warranty do you provide?",
                    a: "All installations include a 2-year labor warranty and manufacturer warranty on equipment (typically 1-5 years depending on the product). We stand behind our work with guaranteed satisfaction."
                },
                {
                    q: "Are there any monthly fees?",
                    a: "No recurring fees unless you choose an optional service agreement. Most installations are one-time projects with no ongoing costs except for any cloud services you select."
                },
                {
                    q: "What if I need help after installation?",
                    a: "We provide free phone and remote support for all customers. For complex issues or on-site needs, we offer affordable service calls with same-day or next-day availability."
                }
            ]
        },
        {
            category: "Technical Details",
            questions: [
                {
                    q: "What brands do you work with?",
                    a: "We partner with industry-leading brands like UniFi, Shure, BirdDog, Epson, Logitech, and Netgear. We carefully select equipment based on reliability, performance, and value — never pushing unnecessary upgrades."
                },
                {
                    q: "Do you provide training on the systems?",
                    a: "Yes, comprehensive training is included with every installation. We'll teach you how to use your new system effectively and provide easy-to-follow documentation for future reference."
                },
                {
                    q: "Can you work with my existing IT team?",
                    a: "Absolutely. We collaborate seamlessly with internal IT teams, providing technical documentation, network diagrams, and ongoing coordination to ensure smooth integration with your existing infrastructure."
                },
                {
                    q: "What about future scalability?",
                    a: "We design all systems with growth in mind. Whether you need to add more cameras, expand your network, or integrate new technologies, our installations are built to scale efficiently."
                }
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-r from-primary via-primary to-primary/95 text-white overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:40px_40px]"></div>
                </div>

                <div className="relative container mx-auto px-6 py-20">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-block px-4 py-2 bg-secondary/20 backdrop-blur-sm rounded-full text-secondary font-semibold text-sm mb-6 border border-secondary/30">
                            Knowledge Base
                        </div>

                        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
                            <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">Frequently Asked</span><br />
                            <span className="text-secondary">Questions</span>
                        </h1>

                        <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
                            Everything you need to know about our AV installation process, services, and support. Get instant answers to common questions.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-secondary text-primary font-bold rounded-lg hover:bg-secondary/90 transition-all duration-200 hover:shadow-lg">
                                <MessageCircle className="mr-2" size={20} />
                                Ask a Question
                            </Link>
                            <Link href="tel:6053818290" className="inline-flex items-center justify-center px-8 py-4 border border-white/30 text-white hover:bg-white/10 rounded-lg transition-all duration-200">
                                <Phone className="mr-2" size={20} />
                                Call (605) 381-8290
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div className="space-y-2">
                            <div className="text-3xl md:text-4xl font-bold text-secondary">24hr</div>
                            <div className="text-gray-300">Response Time</div>
                        </div>
                        <div className="space-y-2">
                            <div className="text-3xl md:text-4xl font-bold text-secondary">100%</div>
                            <div className="text-gray-300">Free Consultations</div>
                        </div>
                        <div className="space-y-2">
                            <div className="text-3xl md:text-4xl font-bold text-secondary">2yr</div>
                            <div className="text-gray-300">Labor Warranty</div>
                        </div>
                        <div className="space-y-2">
                            <div className="text-3xl md:text-4xl font-bold text-secondary">10+</div>
                            <div className="text-gray-300">Years Experience</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Categories Overview */}
            <div className="container mx-auto px-6 py-20">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Browse by Category
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Find answers quickly by exploring our organized FAQ categories
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                    {categories.map((category, index) => {
                        const IconComponent = category.icon;
                        return (
                            <div key={category.title} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 p-6">
                                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                    <IconComponent className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                                    {category.title}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {category.description}
                                </p>
                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary to-secondary/60 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-b-2xl"></div>
                            </div>
                        );
                    })}
                </div>

                {/* FAQ Sections by Category */}
                <div className="space-y-12">
                    {faqs.map((categoryData, categoryIndex) => (
                        <div key={categoryData.category} className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden">
                            <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-8 py-6 border-b border-gray-200">
                                <h3 className="text-2xl font-bold text-gray-900 flex items-center">
                                    {categories.find(cat => cat.title === categoryData.category) && (
                                        <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${categories.find(cat => cat.title === categoryData.category)?.color} flex items-center justify-center mr-3`}>
                                            {(() => {
                                                const IconComponent = categories.find(cat => cat.title === categoryData.category)?.icon;
                                                return IconComponent ? <IconComponent className="w-4 h-4 text-white" /> : null;
                                            })()}
                                        </div>
                                    )}
                                    {categoryData.category}
                                </h3>
                            </div>
                            
                            <div className="p-8">
                                <Accordion type="multiple" className="w-full">
                                    {categoryData.questions.map((faq, index) => (
                                        <AccordionItem key={`${categoryIndex}-${index}`} value={`q${categoryIndex}-${index}`} className="border-b border-gray-100 last:border-0">
                                            <AccordionTrigger className="text-left hover:text-primary transition-colors py-6 text-lg font-semibold">
                                                {faq.q}
                                            </AccordionTrigger>
                                            <AccordionContent className="text-gray-600 leading-relaxed pb-6 text-base">
                                                {faq.a}
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Trust Indicators */}
                <div className="mt-20 bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 md:p-16 text-white">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Brink Design?</h2>
                        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                            10+ years of proven expertise in the Black Hills region
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: 'Licensed & Insured',
                                desc: 'Fully licensed low voltage contractor with comprehensive insurance coverage',
                                icon: Shield
                            },
                            {
                                title: 'Local Experts',
                                desc: 'Black Hills natives with deep understanding of local needs and challenges',
                                icon: Award
                            },
                            {
                                title: 'Guaranteed Work',
                                desc: '2-year labor warranty and 100% satisfaction guarantee on all installations',
                                icon: CheckCircle
                            },
                        ].map((benefit, index) => {
                            const IconComponent = benefit.icon;
                            return (
                                <div key={index} className="text-center group">
                                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-secondary to-secondary/80 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <IconComponent className="w-8 h-8 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-semibold mb-3 group-hover:text-secondary transition-colors">{benefit.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">{benefit.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Enhanced Contact CTA Section */}
            <div className="bg-gradient-to-r from-secondary via-secondary to-secondary/90 text-primary py-20 mt-20">
                <div className="container mx-auto px-6 text-center">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Still Have Questions?
                        </h2>
                        <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                            Our team is standing by to help. Get personalized answers and expert guidance for your specific project.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
                            <Link href="/contact" className="group bg-primary text-secondary p-6 rounded-2xl hover:bg-primary/90 transition-all duration-200 hover:shadow-lg">
                                <Mail className="w-8 h-8 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                                <h3 className="font-bold text-lg mb-2">Send a Message</h3>
                                <p className="text-sm opacity-80">Get a detailed response within 4 hours</p>
                                <ArrowRight className="w-5 h-5 mx-auto mt-3 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            
                            <Link href="tel:6053818290" className="group bg-primary text-secondary p-6 rounded-2xl hover:bg-primary/90 transition-all duration-200 hover:shadow-lg">
                                <Phone className="w-8 h-8 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                                <h3 className="font-bold text-lg mb-2">Call Directly</h3>
                                <p className="text-sm opacity-80">(605) 381-8290 - Local support</p>
                                <ArrowRight className="w-5 h-5 mx-auto mt-3 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            
                            <Link href="/contact" className="group bg-primary text-secondary p-6 rounded-2xl hover:bg-primary/90 transition-all duration-200 hover:shadow-lg">
                                <MessageCircle className="w-8 h-8 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                                <h3 className="font-bold text-lg mb-2">Schedule Consultation</h3>
                                <p className="text-sm opacity-80">Free on-site assessment available</p>
                                <ArrowRight className="w-5 h-5 mx-auto mt-3 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                            <div className="flex items-center justify-center space-x-2">
                                <div className="w-2 h-2 bg-primary rounded-full"></div>
                                <span>24-Hour Response</span>
                            </div>
                            <div className="flex items-center justify-center space-x-2">
                                <div className="w-2 h-2 bg-primary rounded-full"></div>
                                <span>Free Consultations</span>
                            </div>
                            <div className="flex items-center justify-center space-x-2">
                                <div className="w-2 h-2 bg-primary rounded-full"></div>
                                <span>Local Black Hills Team</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
