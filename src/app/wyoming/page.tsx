import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Wyoming AV Installer – Brink Design Western South Dakota",
    description:
        "Professional AV and low voltage services for organizations and homes throughout Wyoming delivered from nearby western South Dakota.",
    openGraph: {
        title: "Wyoming AV Installer – Brink Design Western South Dakota",
        description:
            "Expert audio, video and security solutions for Wyoming churches, businesses and homes.",
        url: "https://www.brinkdesign.co/wyoming",
        type: "article",
        images: ["https://www.brinkdesign.co/og-image.jpg"],
    },
    alternates: { canonical: "https://www.brinkdesign.co/wyoming" },
    twitter: {
        card: "summary_large_image",
        title: "Wyoming AV Installer – Brink Design Western South Dakota",
        description:
            "Custom AV installation and cabling services for Wyoming businesses, churches and homes from Brink Design.",
        images: ["https://www.brinkdesign.co/og-image.jpg"],
    },
};

export default function WyomingPage() {
    const cities = [
        "Cheyenne",
        "Casper",
        "Gillette",
        "Laramie",
        "Rock Springs",
        "Sheridan",
        "Green River",
        "Evanston",
        "Cody",
        "Jackson",
    ];
    const faqs = [
        {
            question: "Do you service remote ranches and mountain towns?",
            answer:
                "Yes. Wyoming’s geography is vast, and we routinely travel long distances to bring modern technology to lodges, ranches, private homes and small communities that lack local AV support.",
        },
        {
            question: "What types of projects do you handle in the energy sector?",
            answer:
                "Our team has experience with control rooms, paging systems and security cameras for mines, oil field offices and other industrial facilities common throughout the state.",
        },
        {
            question: "Can you integrate new equipment with existing systems?",
            answer:
                "Absolutely. We evaluate current infrastructure and design upgrades that build on what you already have, saving costs while improving reliability and usability.",
        },
        {
            question: "Do you offer training for staff?",
            answer:
                "Every installation includes personalized training sessions and easy-to-follow documentation so your team can operate the technology confidently without constant outside assistance.",
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
                            Serving Wyoming
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                            Wyoming AV Installation
                        </h1>
                        <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
                            Brink Design Co. is your trusted AV installer and systems integrator throughout Wyoming. From conference rooms, churches and homes to security systems and network cabling, we design and install technology that works.
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
                    <h2 className="text-3xl font-bold mb-6">Technology Services for the Cowboy State</h2>
                    <p className="mb-4 text-lg leading-relaxed text-gray-700">
                        Wyoming businesses, municipalities, ministries and homeowners face unique challenges—from high-altitude weather to long distances between facilities. Brink Design Co. delivers solutions built for these conditions. We design and install
                        <Link href="/services/commercial-av" className="text-primary underline"> commercial AV systems</Link> for city council chambers and school auditoriums,
                        <Link href="/services/security-cameras" className="text-primary underline"> surveillance networks</Link> that withstand tough climates and
                        <Link href="/services/low-voltage" className="text-primary underline"> low-voltage cabling</Link> that supports modern networking demands.
                    </p>
                    <p className="mb-4 text-lg leading-relaxed text-gray-700">
                        Before any cable is pulled, we consult with your team to understand the environment and future growth plans. Our proposals outline equipment options, timelines and budgets in plain language so decision makers can move forward confidently. During installation we work efficiently and safely, coordinating with other trades and following all relevant codes.
                    </p>
                    <p className="text-lg leading-relaxed text-gray-700">
                        After the system is operational, we remain available for maintenance and upgrades. Many Wyoming clients choose remote monitoring or seasonal checkups to ensure their technology is ready for tourist seasons, rodeo events or new academic years. Our goal is to provide a dependable partnership that keeps your organization connected and secure.
                    </p>
                </section>

                <section>
                    <h2 className="text-3xl font-bold mb-6">Cities We Serve</h2>
                    <p className="mb-4 text-lg leading-relaxed text-gray-700">
                        From the southern plains to Yellowstone country, our team travels statewide to deliver professional service. We frequently work in the following communities and are happy to visit others.
                    </p>
                    <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-gray-700">
                        {cities.map((city) => (
                            <li key={city} className="list-disc list-inside">
                                {city}
                            </li>
                        ))}
                    </ul>
                    <p className="mt-4 text-lg text-gray-700">
                        Even if your town is off the beaten path, reach out. Our <Link href="/service-area" className="text-primary underline">full service area</Link> extends well beyond these major hubs.
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
