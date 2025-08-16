import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Nebraska AV Installer – Brink Design Western South Dakota",
    description:
        "Brink Design provides expert audio, video and cabling services for churches, businesses and homes across Nebraska from our base in western South Dakota.",
    openGraph: {
        title: "Nebraska AV Installer – Brink Design Western South Dakota",
        description:
            "Professional AV integration and low voltage services for Nebraska businesses, churches and homes delivered by Brink Design.",
        url: "https://www.brinkdesign.co/nebraska",
        type: "article",
        images: ["https://www.brinkdesign.co/og-image.jpg"],
    },
    alternates: { canonical: "https://www.brinkdesign.co/nebraska" },
    twitter: {
        card: "summary_large_image",
        title: "Nebraska AV Installer – Brink Design Western South Dakota",
        description:
            "AV installation and structured cabling solutions for Nebraska businesses, churches and homes from Brink Design.",
        images: ["https://www.brinkdesign.co/og-image.jpg"],
    },
};

export default function NebraskaPage() {
    const cities = [
        "Omaha",
        "Lincoln",
        "Grand Island",
        "Kearney",
        "North Platte",
        "Scottsbluff",
        "Norfolk",
        "Fremont",
        "Hastings",
        "Columbus",
    ];
    const faqs = [
        {
            question: "Do you only take on large commercial installations?",
            answer:
                "No. While we handle major projects, a significant portion of our work in Nebraska involves helping small businesses, farms, churches and homeowners upgrade individual rooms or modest campuses with reliable technology.",
        },
        {
            question: "Can you coordinate with general contractors on new builds?",
            answer:
                "Yes. We frequently collaborate with construction teams to design structured cabling and AV systems that are installed alongside other trades, keeping schedules on track and avoiding costly rework.",
        },
        {
            question: "What brands of equipment do you install?",
            answer:
                "We are brand agnostic and choose gear based on performance and budget. From trusted manufacturers like QSC and Shure to cost-effective solutions for community centers, we match the product to the application.",
        },
        {
            question: "How do you support clients after the project is finished?",
            answer:
                "Our relationship doesn’t end at commissioning. We provide training sessions, remote support and periodic maintenance visits to keep your system running smoothly year after year.",
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
                            Serving Nebraska
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                            Nebraska AV Installation
                        </h1>
                        <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
                            Brink Design Co. brings professional AV installation and integrated system expertise to Nebraska. Our team installs custom solutions for conference rooms, schools, houses of worship, and residential projects.
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
                    <h2 className="text-3xl font-bold mb-6">Technology Services Across Nebraska</h2>
                    <p className="mb-4 text-lg leading-relaxed text-gray-700">
                        From the bustling streets of Omaha to quiet river towns along the Missouri, Nebraska organizations rely on Brink Design Co. for dependable technology. We deliver
                        <Link href="/services/commercial-av" className="text-primary underline"> commercial audio and video installations</Link>,
                        <Link href="/services/security-cameras" className="text-primary underline"> security camera deployments</Link> and
                        <Link href="/services/low-voltage" className="text-primary underline"> low-voltage wiring</Link> that is built to handle harsh Midwestern winters and demanding workloads. Each system is tailored to the client, whether it is a co-op needing paging throughout multiple buildings or a growing church seeking clear sound in a new sanctuary.
                    </p>
                    <p className="mb-4 text-lg leading-relaxed text-gray-700">
                        We take pride in careful planning and communication. Our designers coordinate with leadership and IT staff to ensure new technology integrates with existing networks and fits the culture of each organization. On installation day we arrive with everything needed, clean up thoroughly and test every component before turning the system over. You receive diagrams, passwords and training so your team can operate with confidence.
                    </p>
                    <p className="text-lg leading-relaxed text-gray-700">
                        Nebraska’s wide-open spaces mean help is often hours away. To provide peace of mind, we offer remote support packages, scheduled equipment inspections and priority service calls. Clients know that one phone call or email connects them to technicians who understand their system and can respond quickly.
                    </p>
                </section>

                <section>
                    <h2 className="text-3xl font-bold mb-6">Cities We Serve</h2>
                    <p className="mb-4 text-lg leading-relaxed text-gray-700">
                        We cover the entire Cornhusker State and frequently work in the communities listed below. Our team is also available for travel to smaller towns and rural projects throughout Nebraska.
                    </p>
                    <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-gray-700">
                        {cities.map((city) => (
                            <li key={city} className="list-disc list-inside">
                                {city}
                            </li>
                        ))}
                    </ul>
                    <p className="mt-4 text-lg text-gray-700">
                        If you are outside these areas, reach out anyway. Our <Link href="/service-area" className="text-primary underline">full service area</Link> includes much of the surrounding region, and we regularly travel for the right project.
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
