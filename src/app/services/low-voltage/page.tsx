import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Low Voltage Cabling - Brink Design Co.",
    description:
        "Professional low voltage cabling for data, voice, and video. Clean installs for homes and businesses in Rapid City and the Black Hills.",
    alternates: { canonical: "https://www.brinkdesign.co/services/low-voltage" },
    twitter: {
        card: "summary_large_image",
        title: "Low Voltage Cabling - Brink Design Co.",
        description:
            "Professional low voltage cabling for data, voice, and video. Clean installs for homes and businesses in Rapid City and the Black Hills.",
        images: ["https://www.brinkdesign.co/og-image.jpg"],
    },
};

export default function LowVoltageCablingPage() {
    return (
        <div className="text-gray-900 px-6 py-12 max-w-5xl mx-auto">
            <header className="mb-12 text-center">
                <h1 className="text-4xl font-bold mb-2">
                    Professional Low Voltage Cabling
                </h1>
                <p className="text-lg text-gray-600">
                    Structured wiring for reliable networks and AV systems.
                </p>
                <div className="mt-4">
                    <Link href="/contact">
                        <Button>Schedule a Walkthrough</Button>
                    </Link>
                </div>
            </header>

            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Services Include</h2>
                <ul className="list-disc pl-6 text-gray-700">
                    <li>Ethernet and fiber cabling</li>
                    <li>Coax and speaker wire runs</li>
                    <li>Patch panels and network racks</li>
                    <li>Labeling and certification testing</li>
                </ul>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Why Brink Design Co.?</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="p-4 border rounded-xl">
                        <strong>Clean Installations</strong>
                        <p className="text-sm text-gray-600">Wires neatly organized and documented.</p>
                    </div>
                    <div className="p-4 border rounded-xl">
                        <strong>Commercial & Residential</strong>
                        <p className="text-sm text-gray-600">Solutions for offices, shops, and custom homes.</p>
                    </div>
                    <div className="p-4 border rounded-xl">
                        <strong>Locally Owned</strong>
                        <p className="text-sm text-gray-600">Serving Rapid City and the Black Hills region.</p>
                    </div>
                    <div className="p-4 border rounded-xl">
                        <strong>5-Star Support</strong>
                        <p className="text-sm text-gray-600">Friendly service before and after the install.</p>
                    </div>
                </div>
            </section>

            <footer className="text-center mt-12">
                <Link href="/contact">
                    <Button>Schedule a Walkthrough</Button>
                </Link>
            </footer>
        </div>
    );
}