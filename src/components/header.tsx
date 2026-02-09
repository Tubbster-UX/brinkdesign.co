'use client';
import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { usePathname } from 'next/navigation';
import Logo from "./logo";
import { Phone, MapPin, Clock, Menu, X, ChevronDown } from "lucide-react";

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [servicesDropdownAnchor, setServicesDropdownAnchor] = useState<HTMLButtonElement | null>(null);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isProjectsPage, setIsProjectsPage] = useState(false);
    const path = usePathname();

    useEffect(() => {
        setIsProjectsPage(path === '/keystatic');
    }, [path]);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        if (!isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    };

    // Close mobile menu when clicking outside or on link
    useEffect(() => {
        if (isMobileMenuOpen) {
            const handleClickOutside = () => {
                setIsMobileMenuOpen(false);
                document.body.style.overflow = 'unset';
            };
            document.addEventListener('click', handleClickOutside);
            return () => document.removeEventListener('click', handleClickOutside);
        }
    }, [isMobileMenuOpen]);

    // Close services dropdown when clicking outside
    useEffect(() => {
        if (isServicesOpen) {
            const handleClickOutside = (event: MouseEvent) => {
                if (
                    servicesDropdownAnchor &&
                    !servicesDropdownAnchor.contains(event.target as Node) &&
                    !(document.getElementById('services-dropdown')?.contains(event.target as Node))
                ) {
                    setIsServicesOpen(false);
                }
            };
            document.addEventListener('mousedown', handleClickOutside);
            return () => document.removeEventListener('mousedown', handleClickOutside);
        }
    }, [isServicesOpen, servicesDropdownAnchor]);

    const serviceLinks = [
        { href: "/services/smart-home", label: "Smart Home & Automation" },
        { href: "/services/commercial-av", label: "Audio/Video" },
        { href: "/services/low-voltage", label: "WiFi & Wiring" },
        { href: "/services/security-cameras", label: "Security Systems" },
    ];

    if (isProjectsPage) return null;

    return (
        <>
            {/* Top Info Bar */}
            <div className="bg-primary text-white py-2 px-4 text-sm hidden lg:block">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <div className="flex items-center space-x-6">
                        <div className="flex items-center space-x-2">
                            <Phone className="w-4 h-4" />
                            <span>(605) 389-3261</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <MapPin className="w-4 h-4" />
                            <span>Serving South Dakota</span>
                        </div>
                    </div>
                    <div className="text-sm">
                        <span className="font-medium">Licensed & Insured • 2-Year Labor Warranty</span>
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <nav 
                className={`sticky top-0 left-0 w-full z-50 transition-all duration-200 ${
                    isScrolled 
                        ? 'bg-white shadow-md border-b border-gray-200' 
                        : 'bg-white border-b border-gray-100'
                }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-28">
                        {/* Logo */}
                                <Link href="/" className="flex items-center space-x-3">
                                    <Logo className="h-20 w-auto" />
                                </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center space-x-8">
                            <Link 
                                href="/about" 
                                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
                            >
                                About
                            </Link>
                            
                            {/* Services Dropdown - open on hover or click */}
                            <div className="relative">
                                <button
                                    ref={setServicesDropdownAnchor}
                                    className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
                                    onMouseEnter={() => setIsServicesOpen(true)}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setIsServicesOpen((open) => !open);
                                    }}
                                    aria-haspopup="true"
                                    aria-expanded={isServicesOpen}
                                >
                                    <span>Services</span>
                                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
                                </button>
                                {isServicesOpen && (
                                    <div
                                        id="services-dropdown"
                                        className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200"
                                    >
                                        <div className="p-2">
                                            {serviceLinks.map((service) => (
                                                <Link
                                                    key={service.href}
                                                    href={service.href}
                                                    className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
                                                    onClick={() => setIsServicesOpen(false)}
                                                >
                                                    {service.label}
                                                </Link>
                                            ))}
                                            <Link
                                                href="/services"
                                                className="block px-4 py-3 text-blue-600 font-medium hover:bg-gray-50 rounded-md transition-colors duration-200 border-t border-gray-100 mt-2"
                                                onClick={() => setIsServicesOpen(false)}
                                            >
                                                View All Services →
                                            </Link>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <Link 
                                href="/projects" 
                                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
                            >
                                Projects
                            </Link>
                            
                            <Link 
                                href="/blog" 
                                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
                            >
                                Blog
                            </Link>
                            
                            <Link 
                                href="/linecard" 
                                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
                            >
                                Line Card
                            </Link>
                        </div>

                        {/* CTA Buttons */}
                        <div className="hidden lg:flex items-center space-x-4">
                            <a
                                href="tel:6053893261"
                                className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
                            >
                                <Phone className="w-4 h-4" />
                                <span className="font-medium">(605) 389-3261</span>
                            </a>
                            <Button asChild >
                                <Link href="/contact">Contact Us</Link>
                            </Button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                toggleMobileMenu();
                            }}
                            className="lg:hidden p-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors duration-200"
                            aria-label="Toggle mobile menu"
                        >
                            {isMobileMenuOpen ? (
                                <X className="w-6 h-6" />
                            ) : (
                                <Menu className="w-6 h-6" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden bg-white border-t border-gray-200 shadow-md">
                        <div className="px-4 py-6 space-y-4">
                            {/* Mobile Contact Info */}
                            <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                                <div className="flex items-center space-x-3">
                                    <Phone className="w-5 h-5 text-blue-600" />
                                    <a href="tel:6053893261" className="text-blue-600 font-semibold text-lg">
                                        (605) 389-3261
                                    </a>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <MapPin className="w-5 h-5 text-blue-600" />
                                    <span className="text-gray-700">Serving South Dakota</span>
                                </div>
                            </div>

                            {/* Mobile Navigation Links */}
                            <nav className="space-y-2">
                                <Link 
                                    href="/about" 
                                    className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg font-medium transition-colors duration-200"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    About
                                </Link>
                                
                                <div className="space-y-1">
                                    <div className="px-4 py-2 text-sm font-semibold text-gray-500 uppercase tracking-wide">
                                        Services
                                    </div>
                                    {serviceLinks.map((service) => (
                                        <Link
                                            key={service.href}
                                            href={service.href}
                                            className="block px-6 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            {service.label}
                                        </Link>
                                    ))}
                                    <Link
                                        href="/services"
                                        className="block px-6 py-2 text-blue-600 font-medium hover:bg-gray-50 rounded-lg transition-colors duration-200"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        View All Services →
                                    </Link>
                                </div>
                                
                                <Link 
                                    href="/projects" 
                                    className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg font-medium transition-colors duration-200"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Projects
                                </Link>
                                
                                <Link 
                                    href="/blog" 
                                    className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg font-medium transition-colors duration-200"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Blog
                                </Link>
                                
                                <Link 
                                    href="/linecard" 
                                    className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg font-medium transition-colors duration-200"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Line Card
                                </Link>
                                
                                <Link 
                                    href="/service-area" 
                                    className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg font-medium transition-colors duration-200"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Service Area
                                </Link>
                                
                                <Link 
                                    href="/faq" 
                                    className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg font-medium transition-colors duration-200"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    FAQ
                                </Link>
                            </nav>

                            {/* Mobile CTA */}
                            <div className="pt-4 border-t border-gray-200">
                                <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg shadow-sm">
                                    <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                                        Schedule Free Site Visit
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </>
    );
}