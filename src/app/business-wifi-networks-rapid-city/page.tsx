import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
    Network,
    Wifi,
    CheckCircle,
    ArrowRight,
    Phone,
    Building,
    MapPin,
    Shield,
    Award,
    Server,
    Cable,
    Settings,
    Gauge,
    Users,
    ShoppingBag,
    BoxIcon,
    HeartPulse,
    ForkKnife
} from "lucide-react";

export const metadata: Metadata = {
    title: "Business WiFi Installation Rapid City | UniFi & Omada",
    description:
        "Business WiFi installation in Rapid City. UniFi and TP-Link Omada networks, full coverage, no dead zones. Local installer, no monthly fees. Free site survey.",
    alternates: { canonical: "https://www.brinkdesign.co/business-wifi-networks-rapid-city" },
    openGraph: {
        title: "Business WiFi Installation Rapid City | UniFi & Omada",
        description: "Fast, reliable WiFi and clean cable runs for businesses in Rapid City and the Black Hills.",
        url: "https://www.brinkdesign.co/business-wifi-networks-rapid-city",
        type: "article",
        images: ["/og-image.jpg"],
    },
    twitter: {
        card: "summary_large_image",
        title: "Business WiFi Installation Rapid City | UniFi & Omada",
        description:
            "Business-grade WiFi networks for Rapid City. UniFi and Omada installation, no dead zones, no monthly fees.",
        images: ["https://www.brinkdesign.co/og-image.jpg"],
    },
};

export default function BusinessWiFiRapidCityPage() {
    const whatWeInstall = [
        {
            icon: Wifi,
            title: "UniFi & Omada Access Points",
            description: "Ceiling or wall-mounted APs for seamless coverage",
        },
        {
            icon: Network,
            title: "Managed PoE Switches",
            description: "UniFi or Omada switches to power your access points",
        },
        {
            icon: Shield,
            title: "Business Gateways & Routers",
            description: "Enterprise firewalls from UniFi or TP-Link Omada",
        },
        {
            icon: Cable,
            title: "Structured Cabling",
            description: "Cat6/Cat6A runs from your network closet to every AP",
        },
        {
            icon: Server,
            title: "Network Racks",
            description: "Clean installs with labeled patch panels and cable management",
        },
        {
            icon: Settings,
            title: "Full Configuration",
            description: "VLANs, guest networks, security policies, and documentation",
        },
    ];

    const whyThesePlatforms = [
        "No monthly licensing fees — you own the hardware, you own the software",
        "Centralized management — one dashboard for all your APs, switches, and cameras",
        "Scalable — start with 2 APs, expand to 20. Same system.",
        "Built for business — VLANs, guest networks, bandwidth controls, traffic analytics",
        "Local support — we know UniFi and Omada inside and out",
    ];

    const applications = [
        {
            icon: Building,
            title: "Offices",
            description: "High-density coverage for laptops, phones, and video conferencing",
        },
        {
            icon: ShoppingBag,
            title: "Retail",
            description: "POS connectivity, customer WiFi, back-office systems",
        },
        {
            icon: BoxIcon,
            title: "Warehouses",
            description: "Coverage for scanners, tablets, and inventory systems",
        },
        {
            icon: HeartPulse,
            title: "Medical Offices",
            description: "HIPAA-compliant network segmentation",
        },
        {
            icon: ForkKnife,
            title: "Restaurants",
            description: "Separate networks for staff POS and guest WiFi",
        },
        {
            icon: Network,
            title: "Multi-Site Businesses",
            description: "Centralized management across locations",
        },
    ];

    const processSteps = [
        {
            step: "01",
            title: "Site Survey",
            description: "We assess your space, identify coverage gaps, and plan AP placement",
        },
        {
            step: "02",
            title: "Network Design",
            description: "Documented layout with AP locations, cable runs, and switch sizing",
        },
        {
            step: "03",
            title: "Cable Installation",
            description: "Cat6/Cat6A runs from your network closet to each AP location",
        },
        {
            step: "04",
            title: "Hardware Install",
            description: "Mount APs, install switches, configure the firewall",
        },
        {
            step: "05",
            title: "Configuration",
            description: "SSIDs, VLANs, guest networks, security policies",
        },
        {
            step: "06",
            title: "Testing & Handoff",
            description: "Coverage validation, documentation, and dashboard walkthrough",
        },
    ];

    const whatYouGet = [
        "Commercial-grade UniFi or Omada access points and switches",
        "Structured cabling to every access point",
        "Network rack organization (if needed)",
        "Guest WiFi and employee network separation",
        "Dashboard access for monitoring and management",
        "Documentation of your network layout",
        "2-year labor warranty",
        "Ongoing support from a local team",
    ];

    const whyChooseUs = [
        {
            icon: MapPin,
            title: "Local Team",
            description: "Based in Rapid City. We show up when you need us.",
        },
        {
            icon: Shield,
            title: "No Monthly Fees",
            description: "No licensing subscriptions. You own everything.",
        },
        {
            icon: Award,
            title: "2-Year Warranty",
            description: "Labor warranty on every install.",
        },
    ];

    const faqs = [
        {
            question: "How much does business WiFi installation cost?",
            answer: "Most small-to-medium business installs run $2,000–$8,000 depending on square footage, number of access points, and cabling requirements. We provide written quotes after a site survey.",
        },
        {
            question: "UniFi or Omada — which should I choose?",
            answer: "Both are excellent platforms with no licensing fees. UniFi has a more polished interface and integrates with UniFi Protect cameras. Omada offers great value and works well for businesses wanting TP-Link reliability. We'll recommend the best fit for your needs and budget.",
        },
        {
            question: "Can you fix my existing network or do I need all new equipment?",
            answer: "We'll assess what you have. Sometimes a few access points and a new switch solve the problem. Other times, a ground-up redesign is the better long-term investment. We'll tell you honestly.",
        },
        {
            question: "Do you provide ongoing support?",
            answer: "Yes. We're local in Rapid City. If something goes down or you want to add devices, we're a phone call away.",
        },
        {
            question: "How long does installation take?",
            answer: "Most small offices (2-4 APs) are done in a day. Larger spaces or multi-floor buildings may take 2-3 days.",
        },
    ];

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Business WiFi Installation in Rapid City",
        description:
            "Professional business WiFi installation in Rapid City and the Black Hills. UniFi and TP-Link Omada networks, full coverage, no monthly fees.",
        provider: {
            "@type": "LocalBusiness",
            "@id": "https://www.brinkdesign.co/#localbusiness",
            name: "Brink Design Co.",
            url: "https://www.brinkdesign.co",
            telephone: "+1-605-389-3261",
            email: "contact@brinkdesign.co",
            address: {
                "@type": "PostalAddress",
                addressLocality: "Rapid City",
                addressRegion: "SD",
                addressCountry: "US",
            },
        },
        areaServed: [
            { "@type": "City", name: "Rapid City" },
            { "@type": "City", name: "Box Elder" },
            { "@type": "City", name: "Spearfish" },
            { "@type": "City", name: "Sturgis" },
        ],
        serviceType: "Business WiFi Installation",
        url: "https://www.brinkdesign.co/business-wifi-networks-rapid-city",
    };

    const faqJsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
            },
        })),
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
            {/* JSON-LD Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
            />

            {/* Hero Section */}
            <section className="bg-primary py-20 lg:py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <p className="text-sm font-semibold text-accent uppercase tracking-wide mb-3">
                            Rapid City &bull; Black Hills &bull; Western SD
                        </p>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                            Business WiFi Networks in Rapid City
                        </h1>
                        <p className="text-lg md:text-xl text-blue-100 max-w-2xl mb-8 leading-relaxed">
                            Consumer routers don&apos;t cut it for business. We install UniFi and Omada networks designed for 50+ devices, seamless coverage, and zero dead zones. No monthly licensing fees.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button asChild size="lg" className="bg-accent text-accent-foreground font-bold shadow-md hover:bg-accent/90">
                                <Link href="/contact" className="inline-flex items-center">
                                    Request a Free Site Survey
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </Link>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                                <Link href="tel:6053893261" className="inline-flex items-center">
                                    <Phone className="w-4 h-4 mr-2" />
                                    (605) 389-3261
                                </Link>
                            </Button>
                        </div>
                        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-blue-200 mt-8">
                            <span>UniFi & Omada Experts</span>
                            <span className="text-blue-400">•</span>
                            <span>No License Fees</span>
                            <span className="text-blue-400">•</span>
                            <span>2-Year Warranty</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Upgrade */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            Why Rapid City Businesses Upgrade Their WiFi
                        </h2>
                        <div className="prose prose-lg text-gray-600">
                            <p>
                                If you&apos;ve got employees complaining about slow connections, point-of-sale terminals dropping offline, or video calls freezing, your WiFi infrastructure is the problem — not your internet provider.
                            </p>
                            <p>
                                We install business-grade WiFi networks for offices, retail stores, warehouses, and commercial spaces across Rapid City. We specialize in UniFi and TP-Link Omada — network platforms trusted by IT professionals for reliability, performance, and manageability.
                            </p>
                        </div>
                    </div>
                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                        <h3 className="text-xl font-bold text-gray-900 mb-6">What We Install</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {whatWeInstall.map((item, idx) => (
                                <div key={idx} className="flex items-start gap-3">
                                    <item.icon className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <p className="font-medium text-gray-900 text-sm">{item.title}</p>
                                        <p className="text-gray-600 text-xs">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Why UniFi & Omada */}
            <section className="bg-blue-600 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                UniFi & Omada: The Platforms We Install
                            </h2>
                            <p className="text-blue-100 mb-8">
                                Other platforms require subscriptions, cloud dependencies, or lock you into proprietary ecosystems. UniFi and Omada give you control.
                            </p>
                            <ul className="space-y-4">
                                {whyThesePlatforms.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                                        <span className="text-white">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                            <h3 className="text-2xl font-bold text-white mb-4">Ready for a Site Survey?</h3>
                            <p className="text-blue-100 mb-6">
                                We&apos;ll visit your location, assess coverage gaps, and deliver a written proposal.
                            </p>
                            <Button asChild size="lg" className="w-full bg-accent text-accent-foreground font-bold hover:bg-accent/90">
                                <Link href="/contact">
                                    Request a Free Survey
                                </Link>
                            </Button>
                            <p className="text-center text-blue-200 text-sm mt-4">
                                Or call: <Link href="tel:6053893261" className="underline">(605) 389-3261</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Applications */}
            <section className="bg-gray-50 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Applications
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            We install business WiFi for companies across Rapid City
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {applications.map((app, index) => (
                            <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                                <app.icon className="w-10 h-10 text-blue-600 mb-4" />
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{app.title}</h3>
                                <p className="text-gray-600">{app.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Process */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Our Process
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {processSteps.map((step, index) => (
                        <div key={index} className="relative">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                                    {step.step}
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                                    <p className="text-gray-600">{step.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* What You Get */}
            <section className="bg-gray-900 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                What You Get
                            </h2>
                            <ul className="space-y-4">
                                {whatYouGet.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-200">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <div className="bg-gray-800 rounded-2xl p-8">
                                <h3 className="text-2xl font-bold text-white mb-4">Get a Quote</h3>
                                <p className="text-gray-300 mb-6">
                                    Tell us about your space and we&apos;ll design a network that fits.
                                </p>
                                <Button asChild size="lg" className="w-full bg-blue-600 text-white font-bold hover:bg-blue-700">
                                    <Link href="/contact">
                                        Request a Site Survey
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Brink */}
            <section className="py-16 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-gray-900 text-center mb-10">
                        Why Rapid City Businesses Choose Brink
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {whyChooseUs.map((item, index) => (
                            <div key={index} className="text-center">
                                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <item.icon className="w-7 h-7 text-blue-600" />
                                </div>
                                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                                <p className="text-gray-600 text-sm">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="bg-gray-50 py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Frequently Asked Questions
                        </h2>
                    </div>
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`faq-${index}`} className="bg-white rounded-xl border border-gray-200 px-6">
                                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:no-underline py-6">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-600 pb-6">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            {/* Internal Links */}
            <section className="bg-white py-12">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Services</h3>
                    <div className="flex flex-wrap gap-4">
                        <Link href="/commercial-security-cameras-rapid-city" className="text-blue-600 hover:underline">
                            Commercial Security Cameras →
                        </Link>
                        <Link href="/structured-cabling-rapid-city" className="text-blue-600 hover:underline">
                            Structured Cabling →
                        </Link>
                        <Link href="/services/low-voltage" className="text-blue-600 hover:underline">
                            All Network Services →
                        </Link>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="bg-blue-600 py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Ready to Fix Your Business WiFi?
                    </h2>
                    <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                        Request a free site survey. We&apos;ll assess your space and deliver a clear proposal.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button asChild size="lg" className="bg-accent text-accent-foreground font-bold hover:bg-accent/90">
                            <Link href="/contact">
                                Request a Free Site Survey
                            </Link>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                            <Link href="tel:6053893261">
                                Call (605) 389-3261
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
