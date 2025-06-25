import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Security System Installation - Brink Design Co.",
    description:
        "Professional security camera and access control installation in Rapid City. Modern, scalable systems with no monthly fees.",
    openGraph: {
        title: "Security System Installation - Brink Design Co.",
        description:
            "Protect your home or business with reliable security systems installed by Brink Design Co.",
        url: "https://www.brinkdesign.co/security-installation",
        type: "article",
    },
};

export default function SecurityInstallationPage() {
    return (
        <div className="text-gray-900 px-6 py-12 max-w-5xl mx-auto">
            <header className="mb-12 text-center">
                <h1 className="text-4xl font-bold mb-2">
                    Professional Security System Installation in Rapid City
                </h1>
                <p className="text-lg text-gray-600">
                    Protect your home or business with expert security solutions.
                </p>
                <div className="mt-4">
                    <Link href="/contact" >
                        <Button>
                            Get a Free Security Assessment
                        </Button>
                    </Link>
                </div>
            </header>

            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
                <p className="mb-4">
                    We provide complete security system installation, including surveillance cameras, alarm systems, door access control, and more. Whether it’s residential or commercial, we build systems you can count on.
                </p>
                <ul className="list-disc pl-6 text-gray-700">
                    <li>Security Camera Installation</li>
                    <li>Motion Detectors & Sensors</li>
                    <li>Access Control Systems</li>
                    <li>App-Based Monitoring Setup</li>
                </ul>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Why Us</h2>
                <p className="mb-4">
                    We believe security should be simple, effective, and affordable. Our systems are modern, scalable, and easy to use — with no monthly fees. Once installed, the system is yours. We include free remote support, and only charge if on-site service is requested or required.
                </p>
                <ul className="list-disc pl-6 text-gray-700">
                    <li>Reliable, high-resolution camera systems</li>
                    <li>Remote access and monitoring through mobile apps</li>
                    <li>Expandable setups to grow with your property</li>
                    <li>No subscriptions or ongoing fees</li>
                    <li>Transparent pricing and friendly support</li>
                </ul>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Why Choose Brink Design?</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="p-4 border rounded-xl">
                        <strong>5 Years in Business</strong>
                        <p className="text-sm text-gray-600">Proven experience you can trust.</p>
                    </div>
                    <div className="p-4 border rounded-xl">
                        <strong>Locally Owned</strong>
                        <p className="text-sm text-gray-600">We know Rapid City and the Black Hills region.</p>
                    </div>
                    <div className="p-4 border rounded-xl">
                        <strong>5-Star Rated</strong>
                        <p className="text-sm text-gray-600">Our clients love the work we do.</p>
                    </div>
                    <div className="p-4 border rounded-xl">
                        <strong>Clean & Professional Installs</strong>
                        <p className="text-sm text-gray-600">No messy wires or shortcuts — just quality work.</p>
                    </div>
                </div>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Service Area</h2>
                <p>
                    We serve Rapid City, Box Elder, and the greater Black Hills area with top-tier security installation services.
                </p>
            </section>

            <footer className="text-center mt-12">
                <Link href="/contact">
                    <Button>
                        Book Your Free Estimate Today
                    </Button>
                </Link>
            </footer>
        </div>
    );
}
