import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Security Cameras - Brink Design Co.",
    description:
        "Learn about the camera options and monitoring setups we install for homes and businesses across the Black Hills.",
    alternates: { canonical: "https://www.brinkdesign.co/services/security-cameras" },
    twitter: {
        card: "summary_large_image",
        title: "Security Cameras - Brink Design Co.",
        description:
            "Learn about the camera options and monitoring setups we install for homes and businesses across the Black Hills.",
        images: ["https://www.brinkdesign.co/og-image.jpg"],
    },
};

export default function SecurityCamerasPage() {
    return (
        <div className="text-gray-900 px-6 py-12 max-w-5xl mx-auto">
            <header className="mb-12 text-center">
                <h1 className="text-4xl font-bold mb-2">
                    Security Camera Systems
                </h1>
                <p className="text-lg text-gray-600">
                    Reliable surveillance with local recording and remote access.
                </p>
                <div className="mt-4">
                    <Link href="/contact">
                        <Button>Get a Free Security Assessment</Button>
                    </Link>
                </div>
            </header>

            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Camera Types</h2>
                <ul className="list-disc pl-6 text-gray-700">
                    <li>Dome and turret cameras</li>
                    <li>Weatherproof bullet cameras</li>
                    <li>Pan–tilt–zoom (PTZ) models</li>
                    <li>Fisheye 360° coverage</li>
                </ul>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Monitoring Options</h2>
                <ul className="list-disc pl-6 text-gray-700">
                    <li>On-site network video recorders</li>
                    <li>Smartphone and desktop apps</li>
                    <li>Motion alerts and playback</li>
                    <li>No monthly subscription fees</li>
                </ul>
            </section>

            <footer className="text-center mt-12">
                <Link href="/contact">
                    <Button>Get a Free Security Assessment</Button>
                </Link>
            </footer>
        </div>
    );
}