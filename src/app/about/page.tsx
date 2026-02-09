
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const AboutPage: React.FC = () => {
    return (
        <main className="min-h-screen bg-white px-4 py-10">
            {/* Hero */}
            <section className="max-w-3xl mx-auto mb-14">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Built in the Black Hills</h1>
                <p className="text-lg text-gray-700 mb-4">
                    Brink Design Co. is based in Rapid City and serves the Black Hills with security cameras, Wi-Fi networks, audio/video systems, and clean low-voltage cabling.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                    We are local. We answer the phone. We show up when we say we will.
                </p>
                <p className="text-base text-gray-600">
                    Our work is focused on installing systems that work long-term, whether that&apos;s a home camera system, a church livestream upgrade, or a business network that just needs to be reliable every day.
                </p>
            </section>

            {/* What We Do */}
            <section className="max-w-3xl mx-auto mb-14">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">What We Do (and Why It Works)</h2>
                <p className="text-base text-gray-700 mb-6">
                    Brink Design exists to do one thing well: professional low-voltage installation done right.
                </p>
                <div className="mb-6 space-y-2">
                    <p className="text-base text-gray-700">We don&apos;t sell subscriptions.</p>
                    <p className="text-base text-gray-700">We don&apos;t push unnecessary gear.</p>
                    <p className="text-base text-gray-700">We don&apos;t disappear after install day.</p>
                </div>
                <p className="text-base text-gray-700 mb-3">Our focus is on:</p>
                <ul className="list-disc list-inside space-y-2 text-base text-gray-700 mb-6">
                    <li>Designing systems that fit the space</li>
                    <li>Installing them cleanly and correctly</li>
                    <li>Leaving you with something you understand and can actually use</li>
                </ul>
                <p className="text-base text-gray-600">
                    That focus comes from years of hands-on installation work — fixing bad installs, cleaning up messy wiring, and replacing systems that were never set up properly to begin with.
                </p>
            </section>

            {/* The Brink Way */}
            <section className="max-w-3xl mx-auto mb-14">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">The Brink Way</h2>
                <p className="text-base text-gray-700 mb-4">We keep it simple and practical.</p>
                <p className="text-base text-gray-700 mb-3">That means:</p>
                <ul className="list-disc list-inside space-y-2 text-base text-gray-700 mb-6">
                    <li>Clean, labeled cable runs</li>
                    <li>Organized racks and enclosures</li>
                    <li>Equipment chosen for reliability, not hype</li>
                    <li>Controls that make sense for real people</li>
                    <li>Training so you aren&apos;t calling us every week</li>
                </ul>
                <p className="text-base text-gray-600 mb-2">
                    If something doesn&apos;t improve reliability or usability, we don&apos;t add it.
                </p>
                <p className="text-base text-gray-600">
                    Our goal is to leave you with a system that just works, not one that needs constant attention.
                </p>
            </section>

            {/* Who We Work With */}
            <section className="max-w-3xl mx-auto mb-14">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Who We Work With</h2>
                <p className="text-base text-gray-700 mb-3">We work best with:</p>
                <ul className="list-disc list-inside space-y-2 text-base text-gray-700 mb-6">
                    <li>Homeowners who want cameras or Wi-Fi that actually covers their property</li>
                    <li>Churches that need clear sound and reliable livestreams</li>
                    <li>Small and mid-sized businesses that need dependable networks and security</li>
                </ul>
                <p className="text-base text-gray-600">
                    If you care about clean work, clear communication, and doing things once instead of twice, we&apos;re a good fit.
                </p>
            </section>

            {/* CTA */}
            <section className="max-w-3xl mx-auto mb-12 bg-gray-50 rounded-xl p-8">
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Work With Brink</p>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Let&apos;s Build It Right</h2>
                <p className="text-base text-gray-700 mb-2">
                    If you need cameras, Wi-Fi, cabling, or AV, we start the same way every time:
                </p>
                <ol className="list-decimal list-inside space-y-1 text-base text-gray-700 mb-6">
                    <li>Walk the site</li>
                    <li>Identify problem areas</li>
                    <li>Map equipment locations</li>
                    <li>Give you clear options</li>
                </ol>
                <p className="text-base text-gray-600 mb-6">
                    Straightforward options. Clear pricing. A plan you can move forward with.
                </p>
                <Link href="/contact" className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                    Book a Site Visit & Quote
                </Link>
            </section>
        </main>
    );
};

export default AboutPage;
