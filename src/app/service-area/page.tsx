import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Service Area - Brink Design Co.",
    description: "Brink Design Co. provides professional AV and low voltage installations throughout Rapid City and the Black Hills. Explore our coverage area and services.",
    openGraph: {
        title: "Service Area - Brink Design Co.",
        description: "Professional AV installations and low voltage solutions across Rapid City, Sturgis, Spearfish, and the Black Hills.",
        url: "https://www.brinkdesign.co/service-area",
        type: "website",
    },
};



export default function ServiceArea() {
    return (
        <div className="min-h-screen bg-white text-gray-900 px-4 py-12 md:px-20">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-4xl text-center font-bold mb-4">Service Area – Where We Work</h1>
                <p className="text-lg text-center mb-8">
                    Brink Design Co. provides professional AV and low voltage installations across the Black Hills. We serve homes, churches, and businesses with expert security, networking, and AV solutions.
                </p>

                <Card className="mb-12">
                    <CardContent className="py-6 px-4 md:px-8">
                        <h2 className="text-2xl font-semibold mb-4">Areas We Serve</h2>
                        <ul className="grid grid-cols-2 md:grid-cols-3 gap-3 text-base">
                            <li>Rapid City, SD</li>
                            <li>Box Elder, SD</li>
                            <li>Sturgis, SD</li>
                            <li>Spearfish, SD</li>
                            <li>Hill City, SD</li>
                            <li>Custer, SD</li>
                            <li>Hot Springs, SD</li>
                            <li>Deadwood, SD</li>
                            <li>Keystone, SD</li>
                            <li>Black Hawk, SD</li>
                            <li>Piedmont, SD</li>
                            <li>Hermosa, SD</li>
                        </ul>
                    </CardContent>
                </Card>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <Card>
                        <CardContent className="py-6 px-4 md:px-8">
                            <h2 className="text-2xl font-semibold mb-4">Services Offered</h2>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Security Camera Installation</li>
                                <li>Sound System Setup</li>
                                <li>Wi-Fi & Network Installation</li>
                                <li>Door Access Control Systems</li>
                                <li>Live Stream & Broadcast Integration</li>
                                <li>Residential & Commercial Installations</li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent className="py-6 px-4 md:px-8">
                            <h2 className="text-2xl font-semibold mb-4">Need Help in Your Area?</h2>
                            <p className="mb-6">Reach out to schedule a free consultation or site visit. We're here to help bring your AV vision to life.</p>
                            <div className="flex flex-col gap-4">
                                <Link href="tel:6053818290" className="w-full flex items-center gap-2"><Button className="w-full gap-2"><Phone size={18} /> Call Now</Button></Link>
                                <Link href="mailto:contact@brinkdesign.co" className="w-full flex items-center gap-2"><Button variant="outline" className="w-full gap-2"><Mail size={18} /> Send Email</Button></Link>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
