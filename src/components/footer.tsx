import React from 'react';
import Logo from './logo';
import Link from 'next/link';
import { Button } from './ui/button';

const Footer: React.FC = () => {
    return (
        <footer className="bg-primary text-gray-300 pt-14 pb-10">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
                {/* Logo and Tagline */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <Logo className="w-32 mb-4 mx-auto" />
                    <p className="text-sm mx-auto text-gray-400">
                        Low Voltage Done right.
                    </p>
                </div>

                {/* Navigation */}
                <div>
                    <h2 className="text-lg font-semibold mb-4 text-white">Quick Links</h2>
                    <ul>
                        <li className="mb-2"><Link href="/" className="hover:text-white">Home</Link></li>
                        <li className="mb-2"><Link href="/services" className="hover:text-white">Services</Link></li>
                        <li className="mb-2"><Link href="/projects" className="hover:text-white">Projects</Link></li>
                        <li className="mb-2"><Link href="/blog" className="hover:text-white">Blog</Link></li>
                        <li className="mb-2"><Link href="/linecard" className="hover:text-white">Line Card</Link></li>
                        <li className="mb-2"><Link href="/services/low-voltage" className="hover:text-white">Low Voltage Cabling</Link></li>
                        <li className="mb-2"><Link href="/services/security-cameras" className="hover:text-white">Security Cameras</Link></li>
                        <li className="mb-2"><Link href="/#about" className="hover:text-white">About</Link></li>
                        <li className="mb-2"><Link href="/contact" className="hover:text-white">Contact</Link></li>
                        <li className="mb-2"><Link href="/service-area" className="hover:text-white">Service Area</Link></li>
                        <li className="mb-2"><Link href="/faq" className="hover:text-white">FAQ</Link></li>
                        <li className="mb-2"><Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h2 className="text-lg font-semibold mb-4 text-white">Contact</h2>
                    <p className="text-gray-400">contact@brinkdesign.co</p>
                    <p className="text-gray-400 mt-2">Based in South Dakota</p>
                </div>

                {/* Optional: Newsletter or CTA */}
                <div>
                    <h2 className="text-lg font-semibold mb-4 text-white">Get a Free Quote</h2>
                    <p className="text-sm mb-4 text-gray-400">No pressure. Just expert advice.</p>
                    <Link
                        href="/contact"
                    >
                        <Button className="w-full"
                            variant="secondary">
                            Book a Free Site Visit
                        </Button>
                    </Link>
                </div>
            </div>

            {/* Legal and Disclaimer */}
            <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-500 px-6">
                <p className="mt-2">
                    Product names, logos, brands, and other trademarks are the property of their respective owners.
                </p>
                <p className="mt-2">
                    &copy; {new Date().getFullYear()} Skytab Innovations LLC DBA Brink Design.
                </p>
            </div>
        </footer>
    );
};

export default Footer;