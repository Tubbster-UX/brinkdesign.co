import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "South Dakota AV Installer – Brink Design Western SD",
    description:
        "Brink Design delivers professional AV installation, security and network cabling solutions for businesses, churches and homes across South Dakota from our base in western South Dakota.",
    openGraph: {
        title: "South Dakota AV Installer – Brink Design Western SD",
        description:
            "Comprehensive audio, video and low voltage services for businesses, churches and homes across South Dakota.",
        url: "https://www.brinkdesign.co/south-dakota",
        type: "article",
        images: ["https://www.brinkdesign.co/og-image.jpg"],
    },
    alternates: { canonical: "https://www.brinkdesign.co/south-dakota" },
    twitter: {
        card: "summary_large_image",
        title: "South Dakota AV Installer – Brink Design Western SD",
        description:
            "Expert AV and low voltage integration for South Dakota businesses, churches and homes.",
        images: ["https://www.brinkdesign.co/og-image.jpg"],
    },
};

export default function SouthDakotaPage() {
    const cities = [
        "Rapid City",
        "Sioux Falls",
        "Pierre",
        "Spearfish",
        "Sturgis",
        "Deadwood",
        "Mitchell",
        "Brookings",
        "Aberdeen",
        "Watertown",
    ];
    const faqs = [
        {
            question: "Do you work with small businesses, churches and homes?",
            answer:
                "Absolutely. Our team designs right-sized systems for rural congregations, family-run companies and private residences as well as large commercial projects, making professional technology accessible across South Dakota.",
        },
        {
            question: "Can you upgrade existing cabling and equipment?",
            answer:
                "Yes. We frequently refresh outdated systems, reuse quality components when possible, and provide modern infrastructure that prepares your building for future growth.",
        },
        {
            question: "How far will your technicians travel?",
            answer:
                "We regularly cover the entire state. Whether your facility is in a major city or a remote prairie town, we schedule on-site visits and provide remote support when needed.",
        },
        {
            question: "What happens after installation?",
            answer:
                "Every project includes training, documentation and ongoing service options. Our clients rely on us long after the last cable is pulled for maintenance and future upgrades.",
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
            <div className="relative bg-gradient-to-r from-primary via-primary to-primary/95 text-white overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:40px_40px]"></div>
                </div>
                <div className="relative container mx-auto px-6 py-20">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-block px-4 py-2 bg-secondary/20 backdrop-blur-sm rounded-full text-secondary font-semibold text-sm mb-6 border border-secondary/30">
                            Serving South Dakota
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                            South Dakota AV Installation
                        </h1>
                        <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
                            From Rapid City to Sioux Falls, Brink Design Co. delivers professional AV installation and integrated systems across South Dakota for companies, churches and homes. Our team handles everything from design and cabling to configuration and support.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/services"
                                className="inline-flex items-center justify-center px-8 py-4 bg-secondary text-primary font-bold rounded-lg hover:bg-secondary/90 transition-all duration-200"
                            >
                                View Services
                            </Link>
                            <Link
                                href="/service-area"
                                className="inline-flex items-center justify-center px-8 py-4 border border-white/30 text-white hover:bg-white/10 rounded-lg transition-all duration-200"
                            >
                                Full Service Area
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6 py-20 space-y-20">
                <section>
                    <h2 className="text-3xl font-bold mb-6">AV and Technology Services in South Dakota</h2>
                    <p className="mb-4 text-lg leading-relaxed text-gray-700">
                        Businesses, schools, churches and homeowners across the state trust Brink Design Co. for complete technology integration. Our services range from
                        <Link href="/services/commercial-av" className="text-primary underline"> commercial audio and video systems</Link> that transform meeting rooms and sanctuaries to
                        <Link href="/services/security-cameras" className="text-primary underline"> security camera networks</Link> that keep facilities protected. We also provide
                        <Link href="/services/low-voltage" className="text-primary underline"> low-voltage cabling and infrastructure</Link> for new construction and renovation projects, ensuring that your network is fast, reliable and ready for future expansion.
                    </p>
                    <p className="mb-4 text-lg leading-relaxed text-gray-700">
                        Every installation begins with a detailed consultation to understand your goals and budget. From there we design a customized solution, source professional-grade equipment and handle installation with minimal disruption to your daily operations. Our technicians carefully terminate every connection, label wiring for future service and configure software so the system is intuitive to use. Whether you need a simple projector upgrade or a campus-wide audio distribution network, we approach each job with the same attention to detail.
                    </p>
                    <p className="text-lg leading-relaxed text-gray-700">
                        Many South Dakota organizations operate in rural areas where technical support is scarce. We bridge that gap by offering remote monitoring, scheduled maintenance and rapid on-site visits when issues arise. By partnering with Brink Design Co., you gain a long-term technology ally who understands the unique challenges faced by northern plains businesses and ministries.
                    </p>
                </section>

                <section>
                    <h2 className="text-3xl font-bold mb-6">Cities We Serve</h2>
                    <p className="mb-4 text-lg leading-relaxed text-gray-700">
                        Though our headquarters is in the Black Hills, our coverage extends to nearly every community in the state. We regularly work in the following cities and are always willing to travel farther when the project calls for it.
                    </p>
                    <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-gray-700">
                        {cities.map((city) => (
                            <li key={city} className="list-disc list-inside">
                                {city}
                            </li>
                        ))}
                    </ul>
                    <p className="mt-4 text-lg text-gray-700">
                        Don’t see your town listed? Contact us and we’ll let you know how we can help. Our <Link href="/service-area" className="text-primary underline">full service area</Link> spans the entire state of South Dakota and parts of the surrounding region.
                    </p>
                </section>

                <section>
                    <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
                    <div className="space-y-8">
                        {faqs.map((faq) => (
                            <div key={faq.question}>
                                <h3 className="text-2xl font-semibold mb-2">{faq.question}</h3>
                                <p className="text-lg leading-relaxed text-gray-700">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <div className="text-center">
                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center px-8 py-4 bg-secondary text-primary font-bold rounded-lg hover:bg-secondary/90 transition-all duration-200"
                    >
                        Request a Quote
                    </Link>
                </div>
            </div>
        </div>
    );
}
