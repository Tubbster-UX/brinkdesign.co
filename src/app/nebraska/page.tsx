import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Nebraska AV Installer – Brink Design Western South Dakota",
    description:
        "Brink Design provides expert audio, video and cabling services for churches and businesses across Nebraska from our base in western South Dakota.",
    openGraph: {
        title: "Nebraska AV Installer – Brink Design Western South Dakota",
        description:
            "Professional AV integration and low voltage services for Nebraska facilities delivered by Brink Design.",
        url: "https://www.brinkdesign.co/nebraska",
        type: "article",
        images: ["https://www.brinkdesign.co/og-image.jpg"],
    },
    alternates: { canonical: "https://www.brinkdesign.co/nebraska" },
    twitter: {
        card: "summary_large_image",
        title: "Nebraska AV Installer – Brink Design Western South Dakota",
        description:
            "AV installation and structured cabling solutions for Nebraska organizations from Brink Design.",
        images: ["https://www.brinkdesign.co/og-image.jpg"],
    },
};

export default function NebraskaPage() {
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
                            Brink Design Co. brings professional AV installation to Nebraska. Our team installs cameras, WiFi, cabling, and AV systems for conference rooms, schools, houses of worship, and residential projects.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/services" className="inline-flex items-center justify-center px-8 py-4 bg-secondary text-primary font-bold rounded-lg hover:bg-secondary/90 transition-all duration-200">
                                View Services
                            </Link>
                            <Link href="/service-area" className="inline-flex items-center justify-center px-8 py-4 border border-white/30 text-white hover:bg-white/10 rounded-lg transition-all duration-200">
                                Full Service Area
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
