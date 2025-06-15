import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CommercialAVPage() {
    return (
        <div className="text-gray-900 px-6 py-12 max-w-5xl mx-auto">
            <header className="mb-12 text-center">
                <h1 className="text-4xl font-bold mb-2">
                    Custom AV Installations for Rapid City Businesses
                </h1>
                <p className="text-lg text-gray-600">
                    We design and install systems that just work — no guesswork.
                </p>
                <div className="mt-4">
                    <Link href="/contact">
                        <Button>
                            Start Your AV Project Today
                        </Button>
                    </Link>
                </div>
            </header>

            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">AV Services We Offer</h2>
                <ul className="list-disc pl-6 text-gray-700">
                    <li>Professional Sound System Installation</li>
                    <li>TVs & Display Mounting</li>
                    <li>Live Streaming Systems</li>
                    <li>Control Panels & Automation</li>
                    <li>Wireless Presentation Setups</li>
                </ul>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Project Highlights</h2>
                <p className="mb-4">From houses of worship to classrooms and conference rooms, we deliver AV systems built for clarity and simplicity.</p>
                <ul className="list-disc pl-6 text-gray-700">
                    <li>Church Sound & Video Systems</li>
                    <li>Classroom & Educational Displays</li>
                    <li>Audio Racks with Clean Cable Management</li>
                </ul>
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Why Choose Brink Design?</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="p-4 border rounded-xl">
                        <strong>5 Years in Business</strong>
                        <p className="text-sm text-gray-600">Trusted by businesses and churches across the region.</p>
                    </div>
                    <div className="p-4 border rounded-xl">
                        <strong>Locally Owned</strong>
                        <p className="text-sm text-gray-600">We understand the needs of Rapid City businesses.</p>
                    </div>
                    <div className="p-4 border rounded-xl">
                        <strong>5-Star Rated</strong>
                        <p className="text-sm text-gray-600">Our work speaks for itself — and so do our reviews.</p>
                    </div>
                    <div className="p-4 border rounded-xl">
                        <strong>Designed for Your Space</strong>
                        <p className="text-sm text-gray-600">Custom AV solutions tailored to your environment and needs.</p>
                    </div>
                </div>
            </section>

            <footer className="text-center mt-12">
                <Link href="/contact">
                    <Button>
                        Start Your AV Project Today
                    </Button>
                </Link>
            </footer>
        </div>
    );
}
