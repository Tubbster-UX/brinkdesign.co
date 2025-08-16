
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Shield, Wrench, GraduationCap, DollarSign, Users } from 'lucide-react';

const ideals = [
    {
        icon: <Shield className="w-8 h-8 text-red-600" />,
        title: 'Safety',
        description: 'Safety is our top priority. We follow strict protocols and industry standards to ensure every project is completed safely and reliably.'
    },
    {
        icon: <Wrench className="w-8 h-8 text-red-600" />,
        title: 'Equipment',
        description: 'We use well-maintained, professional-grade equipment for every job. Maintenance and repairs are performed promptly to keep projects on track.'
    },
    {
        icon: <GraduationCap className="w-8 h-8 text-red-600" />,
        title: 'Training',
        description: 'Our team is highly trained and certified, with ongoing education to stay current on the latest technologies and best practices.'
    },
    {
        icon: <DollarSign className="w-8 h-8 text-red-600" />,
        title: 'Financial',
        description: 'We have the financial stability to handle large projects and provide reliable service to our customers.'
    }
];

const AboutPage: React.FC = () => {
    return (
        <main className="min-h-screen bg-white px-4 py-10">
            {/* Location */}
            <section className="max-w-3xl mx-auto mb-12">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Our Location</h1>
                <p className="text-base text-gray-700 mb-4">
                    Brink Design Co. is headquartered in Western SD, serving homes, churches, and businesses across western South Dakota and beyond.
                </p>
            </section>

            {/* History */}
            <section className="max-w-3xl mx-auto mb-12">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="flex-1">
                        <h2 className="text-2xl font-bold mb-2">Our History</h2>
                        <ul className="list-disc list-inside text-gray-800 space-y-2 mb-2">
                            <li><span className="font-semibold">2013:</span> Brink Design Co. begins serving South Dakota with AV and cabling solutions.</li>
                            <li><span className="font-semibold">2023:</span> Alexavier Brink takes over the family business, expanding services and reach.</li>
                            <li><span className="font-semibold">Today:</span> We continue to grow, helping clients with honest advice and quality work.</li>
                        </ul>
                    </div>
                    <div className="flex-1 flex justify-center">
                        <Image src="/images/about/rack.png" alt="Brink Design history" width={300} height={200} className="rounded-lg shadow-md" />
                    </div>
                </div>
            </section>

            {/* People */}
            <section className="max-w-3xl mx-auto mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Our People</h2>
                <p className="text-base text-gray-700">
                    Brink Design Co. is built on hard-working values. Our team brings decades of experience in AV, security, and cabling, with a commitment to friendly service and professional results.
                </p>
            </section>

            {/* Work With Brink CTA */}
            <section className="max-w-3xl mx-auto mb-12">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="flex-1 flex justify-center mb-4 md:mb-0">
                        <Image src="/images/about/network.webp" alt="Work with Brink" width={300} height={200} className="rounded-lg shadow-md" />
                    </div>
                    <div className="flex-1">
                        <h2 className="text-xl font-bold text-blue-900 mb-2">Work With Brink</h2>
                        <p className="text-base text-blue-800 mb-4">
                            Become a part of the Brink team or let us help you with your next AV, security, or cabling project. We offer honest advice, professional service, and a commitment to quality.
                        </p>
                        <Link href="/contact" className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default AboutPage;
