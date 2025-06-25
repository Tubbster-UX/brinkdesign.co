import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Network Cabling - Brink Design Co.",
    description:
        "Clean and reliable network cabling services in Rapid City. We install structured wiring, racks, patch panels, and Wi-Fi for offices and new builds.",
    openGraph: {
        title: "Network Cabling - Brink Design Co.",
        description:
            "Professional network cabling, labeling, and testing for businesses and homes across Rapid City.",
        url: "https://www.brinkdesign.co/network-cabling",
        type: "article",
        images: [
            {
                url: 'https://www.brinkdesign.co/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Brink Design Co. AV Services',
            },
        ],
    },
};

export default function NetworkCablingPage() {
    return (
        <div className="text-gray-900 px-6 py-12 max-w-5xl mx-auto">
            <header className="mb-12 text-center">
                <h1 className="text-4xl font-bold mb-2">
                    Clean & Reliable Network Cabling in Rapid City
                </h1>
                <p className="text-lg text-gray-600">
                    Structured wiring for offices, shops, and new builds.
                </p>
                <div className="mt-4">
                    <Link href="/contact">
                        <Button>
                            Schedule a Walkthrough
                        </Button>
                    </Link>
                </div>
            </header>

            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">What’s Included</h2>
                <ul className="list-disc pl-6 text-gray-700">
                    <li>Ethernet Drops</li>
                    <li>Wall Jacks & Faceplates</li>
                    <li>Network Racks & Cabinets</li>
                    <li>Patch Panels</li>
                    <li>Wi-Fi Access Point Installation</li>
                    <li>Labeling & Testing</li>
                </ul>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Project Highlights</h2>
                <p className="mb-4">We take pride in clean, professional installs. Every wire is labeled, tested, and organized for long-term reliability.</p>
                <ul className="list-disc pl-6 text-gray-700">
                    <li>Neat Cable Runs</li>
                    <li>Labeled Patch Panels</li>
                    <li>Organized Server Closets</li>
                </ul>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Why Choose Brink Design?</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="p-4 border rounded-xl">
                        <strong>5 Years in Business</strong>
                        <p className="text-sm text-gray-600">Experience you can trust for low-voltage installs.</p>
                    </div>
                    <div className="p-4 border rounded-xl">
                        <strong>Locally Owned</strong>
                        <p className="text-sm text-gray-600">Proudly serving Rapid City and surrounding areas.</p>
                    </div>
                    <div className="p-4 border rounded-xl">
                        <strong>5-Star Rated</strong>
                        <p className="text-sm text-gray-600">Our clients appreciate our clean work and attention to detail.</p>
                    </div>
                    <div className="p-4 border rounded-xl">
                        <strong>Commercial & Residential Projects</strong>
                        <p className="text-sm text-gray-600">From office suites to custom homes, we’ve done it all.</p>
                    </div>
                </div>
            </section>

            <footer className="text-center mt-12">
                <Link href="/contact">
                    <Button>
                        Schedule a Walkthrough
                    </Button>
                </Link>
            </footer>
        </div>
    );
}
