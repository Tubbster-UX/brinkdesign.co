import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Service Area – Brink Design Western South Dakota",
    description: "Brink Design provides AV installation and low voltage services throughout western South Dakota and nearby states.",
    openGraph: {
        title: "Service Area – Brink Design Western South Dakota",
        description: "AV, security, and cabling installs across South Dakota, Wyoming, and Nebraska.",
        url: "https://www.brinkdesign.co/service-area",
        type: "website",
        images: ["https://www.brinkdesign.co/og-image.jpg"],
    },
    alternates: { canonical: "https://www.brinkdesign.co/service-area" },
    twitter: {
        card: "summary_large_image",
        title: "Service Area – Brink Design Western South Dakota",
        description: "Learn where Brink Design offers AV and security installations across the Black Hills region and beyond.",
        images: ["https://www.brinkdesign.co/og-image.jpg"],
    },
};



export default function ServiceArea() {
    const serviceAreas = [
        { name: "Rapid City", description: "Home base — fastest response times", isMain: true },
        { name: "Box Elder", description: "Residential and military housing", isMain: false },
        { name: "Sturgis", description: "Commercial and event venues", isMain: false },
        { name: "Spearfish", description: "Businesses and schools", isMain: false },
        { name: "Hill City", description: "Lodges, shops, and homes", isMain: false },
        { name: "Custer", description: "Rural homes and businesses", isMain: false },
        { name: "Hot Springs", description: "Facilities and residences", isMain: false },
        { name: "Deadwood", description: "Casinos and entertainment", isMain: false },
        { name: "Keystone", description: "Tourism and hospitality", isMain: false },
        { name: "Black Hawk", description: "Casinos and commercial", isMain: false },
        { name: "Piedmont", description: "Rural and residential", isMain: false },
        { name: "Hermosa", description: "Ag properties and homes", isMain: false },
    ];

    const services = [
        {
            title: "Security Cameras",
            icon: "🔒",
            description: "Local recording, phone alerts, no monthly fees",
            areas: "All service areas"
        },
        {
            title: "Sound & AV Systems",
            icon: "🔊",
            description: "Church audio, conference rooms, and livestreaming",
            areas: "Churches, venues, businesses"
        },
        {
            title: "Wi-Fi & Cabling",
            icon: "📶",
            description: "Reliable coverage and clean cable runs",
            areas: "Homes and businesses"
        },
        {
            title: "Door Access Control",
            icon: "🚪",
            description: "Keycard, fob, and smart lock systems",
            areas: "Commercial and residential"
        },
        {
            title: "Livestreaming",
            icon: "📹",
            description: "Multi-camera streaming and recording",
            areas: "Churches, events, businesses"
        },
        {
            title: "Smart Home",
            icon: "🏠",
            description: "Lighting, shades, audio, and control in one app",
            areas: "Residential"
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-r from-primary via-primary to-primary/95 text-white overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:40px_40px]"></div>
                </div>

                <div className="relative container mx-auto px-6 py-20">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-block px-4 py-2 bg-secondary/20 backdrop-blur-sm rounded-full text-secondary font-semibold text-sm mb-6 border border-secondary/30">
                            Local Experts
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                            Serving the <span className="text-secondary">Black Hills</span>
                        </h1>

                        <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
                            Cameras, Wi-Fi, cabling, and AV for homes and businesses across the Black Hills. Based in Rapid City, serving the whole region.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-secondary text-primary font-bold rounded-lg hover:bg-secondary/90 transition-all duration-200 hover:shadow-lg">
                                Book a Site Visit & Quote
                            </Link>
                            <Link href="tel:6053893261" className="inline-flex items-center justify-center px-8 py-4 border border-white/30 text-white hover:bg-white/10 rounded-lg transition-all duration-200">
                                <Phone className="mr-2" size={20} />
                                Call (605) 389-3261
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div className="space-y-2">
                            <div className="text-3xl md:text-4xl font-bold text-secondary">12+</div>
                            <div className="text-gray-300">Cities Served</div>
                        </div>
                        <div className="space-y-2">
                            <div className="text-3xl md:text-4xl font-bold text-secondary">50+</div>
                            <div className="text-gray-300">Mile Radius</div>
                        </div>
                        <div className="space-y-2">
                            <div className="text-3xl md:text-4xl font-bold text-secondary">24hr</div>
                            <div className="text-gray-300">Response Time</div>
                        </div>
                        <div className="space-y-2">
                            <div className="text-3xl md:text-4xl font-bold text-secondary">10+</div>
                            <div className="text-gray-300">Years Local</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Service Areas Section */}
            <div className="container mx-auto px-6 py-20">
                <div className="text-center mb-16">
                    <div className="inline-block px-4 py-2 bg-secondary/70 rounded-full font-semibold text-sm mb-4">
                        Coverage Map
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Areas We Serve
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        We serve the Black Hills and surrounding communities from our home base in Rapid City.
                    </p>
                </div>

                {/* Service Areas Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-20">
                    {serviceAreas.map((area, index) => (
                        <div key={area.name} className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border ${area.isMain ? 'bg-gradient-to-br from-accent to-accent/90 text-white border-secondary' : 'bg-white border-gray-100'}`}>
                            <div className="p-6">
                                {area.isMain && (
                                    <div className="absolute top-4 right-4">
                                        <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold">
                                            Main Hub
                                        </div>
                                    </div>
                                )}

                                <h3 className={`text-xl font-bold mb-2 ${area.isMain ? 'text-white' : 'text-gray-900 group-hover:text-primary'} transition-colors`}>
                                    {area.name}, SD
                                </h3>
                                <p className={`text-sm leading-relaxed ${area.isMain ? 'text-white/90' : 'text-gray-600'}`}>
                                    {area.description}
                                </p>

                                {/* Bottom Border Animation */}
                                {!area.isMain && (
                                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary to-secondary/60 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* State-Specific Pages Section */}
                <div className="mb-20">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Explore Service in Your State
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            We also travel to Wyoming and Nebraska for larger projects.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link href="/service-area/south-dakota" className="inline-flex items-center px-6 py-3 bg-primary text-secondary font-bold rounded-lg hover:bg-primary/90 transition-colors">
                            South Dakota
                        </Link>
                        <Link href="/service-area/wyoming" className="inline-flex items-center px-6 py-3 bg-primary text-secondary font-bold rounded-lg hover:bg-primary/90 transition-colors">
                            Wyoming
                        </Link>
                        <Link href="/service-area/nebraska" className="inline-flex items-center px-6 py-3 bg-primary text-secondary font-bold rounded-lg hover:bg-primary/90 transition-colors">
                            Nebraska
                        </Link>
                    </div>
                </div>

                {/* Services Section */}
                <div className="mb-20">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Services Available <span className="text-accent">Everywhere</span>
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Professional installation and support across all service areas
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((service, index) => (
                            <div key={service.title} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 p-6">
                                <div className="text-3xl mb-4">{service.icon}</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                                    {service.description}
                                </p>
                                <div className="text-xs text-accent font-semibold">
                                    {service.areas}
                                </div>

                                {/* Bottom Border Animation */}
                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary to-secondary/60 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Local Expertise Section */}
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 md:p-16 text-white">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Local?</h2>
                        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                            Deep Black Hills knowledge and community commitment
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: 'Local Knowledge',
                                desc: 'Understanding unique challenges of Black Hills terrain and climate',
                            },
                            {
                                title: 'Fast Response',
                                desc: 'Quick on-site support with local technicians and inventory',
                            },
                            {
                                title: 'Community Trust',
                                desc: '10+ years serving our neighbors with proven reliability',
                            },
                        ].map((benefit, index) => (
                            <div key={index} className="text-center group">
                                <h3 className="text-xl font-semibold mb-3 group-hover:text-secondary transition-colors">{benefit.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{benefit.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Contact CTA Section */}
            <div className="bg-gradient-to-r from-secondary via-secondary to-secondary/90 text-primary py-20">
                <div className="container mx-auto px-6 text-center">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Ready to Get Started?
                        </h2>
                        <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                            Whether you&apos;re in downtown Rapid City or the remote Black Hills, we&apos;ll walk your site and give you a clear plan.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-8">
                            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-primary text-secondary font-bold rounded-lg hover:bg-primary/90 transition-all duration-200 hover:shadow-lg">
                                <Mail className="mr-2" size={20} />
                                Book a Site Visit & Quote
                            </Link>
                            <Link href="tel:6053893261" className="inline-flex items-center justify-center px-8 py-4 border border-primary text-primary hover:bg-primary hover:text-secondary rounded-lg transition-all duration-200">
                                <Phone className="mr-2" size={20} />
                                Call (605) 389-3261
                            </Link>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                            <div className="flex items-center justify-center space-x-2">
                                <div className="w-2 h-2 bg-primary rounded-full"></div>
                                <span>On-Site Visits Available</span>
                            </div>
                            <div className="flex items-center justify-center space-x-2">
                                <div className="w-2 h-2 bg-primary rounded-full"></div>
                                <span>Local Technicians</span>
                            </div>
                            <div className="flex items-center justify-center space-x-2">
                                <div className="w-2 h-2 bg-primary rounded-full"></div>
                                <span>Same-Day Response</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
