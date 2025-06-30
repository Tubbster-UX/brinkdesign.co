"use client"
import React, { useState } from 'react';
import ContactForm from '@/components/contact';
import {
    CheckCircle,
    AlertCircle,
    ShieldCheck,
    Home,
    Star,
    Phone,
    Mail,
    MapPin,
    Clock,
    MessageSquare,
    Zap,
    Award,
    Users
} from 'lucide-react';

const ContactContainer = () => {
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const contactMethods = [
        {
            icon: Phone,
            title: "Call Us",
            description: "Speak directly with our team",
            value: "(605) 381-8290",
            href: "tel:+16053818290",
            color: "bg-blue-500"
        },
        {
            icon: Mail,
            title: "Email Us",
            description: "Send us a detailed message",
            value: "contact@brinkdesign.co",
            href: "mailto:contact@brinkdesign.co",
            color: "bg-green-500"
        }
    ];

    const trustSignals = [
        {
            icon: ShieldCheck,
            title: "No Hidden Fees",
            description: "Transparent pricing, no subscriptions",
            color: "text-green-600"
        },
        {
            icon: Home,
            title: "Local Experts",
            description: "South Dakota owned & operated",
            color: "text-blue-600"
        },
        {
            icon: Star,
            title: "5-Star Rated",
            description: "Trusted by satisfied clients",
            color: "text-yellow-500"
        },
        {
            icon: Zap,
            title: "Fast Response",
            description: "Same-day replies guaranteed",
            color: "text-orange-500"
        },
        {
            icon: Award,
            title: "Expert Team",
            description: "Certified professionals",
            color: "text-indigo-600"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
            {/* Hero Section */}
            <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-purple-600/5" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
                    <div className="text-center">
                        <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6 animate-pulse">
                            <MessageSquare className="w-4 h-4 mr-2" />
                            We typically respond within 2 hours
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">
                            Let's Create Something Amazing Together
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Ready to transform your space with cutting-edge AV, networking, or security solutions?
                            Our team of experts is here to bring your vision to life.
                        </p>
                    </div>
                </div>
            </div>

            {/* Contact Methods */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 mb-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {contactMethods.map((method, index) => (
                        <a
                            key={index}
                            href={method.href}
                            className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-blue-50/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="relative">
                                <div className={`${method.color} w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                    <method.icon className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">{method.title}</h3>
                                <p className="text-gray-600 text-sm mb-3">{method.description}</p>
                                <p className="text-blue-600 font-medium group-hover:text-blue-700 transition-colors">
                                    {method.value}
                                </p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>

            {/* Main Contact Form Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Form */}
                    <div className="lg:col-span-2">
                        <div className="relative bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-purple-50/50" />
                            <div className="relative p-8 lg:p-12">
                                <div className="mb-8">
                                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Send Us a Message</h2>
                                    <p className="text-gray-600">Fill out the form below and we'll get back to you within 24 hours.</p>
                                </div>

                                <ContactForm onSuccess={setSuccessMessage} onError={setErrorMessage} />

                                {/* Feedback Messages */}
                                {successMessage && (
                                    <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3 animate-in slide-in-from-top duration-300">
                                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                                        <span className="text-green-800 font-medium">{successMessage}</span>
                                    </div>
                                )}
                                {errorMessage && (
                                    <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3 animate-in slide-in-from-top duration-300">
                                        <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                                        <span className="text-red-800 font-medium">{errorMessage}</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        {/* Business Hours */}
                        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 border border-gray-100">
                            <div className="flex items-center gap-3 mb-4">
                                <Clock className="w-6 h-6 text-blue-600" />
                                <h3 className="text-lg font-semibold text-gray-900">Business Hours</h3>
                            </div>
                            <div className="space-y-2 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Monday - Friday</span>
                                    <span className="text-gray-900 font-medium">8:00 AM - 6:00 PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Saturday</span>
                                    <span className="text-gray-900 font-medium">9:00 AM - 4:00 PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Sunday</span>
                                    <span className="text-gray-900 font-medium">Emergency Only</span>
                                </div>
                            </div>
                            <div className="mt-4 p-3 bg-green-50 rounded-lg">
                                <p className="text-sm text-green-800">
                                    <span className="font-medium">Emergency Support:</span> Available 24/7 for critical issues
                                </p>
                            </div>
                        </div>

                        {/* Service Areas */}
                        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                            <div className="flex items-center gap-3 mb-4">
                                <MapPin className="w-6 h-6 text-purple-600" />
                                <h3 className="text-lg font-semibold text-gray-900">Service Areas</h3>
                            </div>
                            <div className="space-y-2 text-sm text-gray-600">
                                <p>• Western South Dakota</p>
                                <p>• Wyoming</p>
                                <p>• Nebraska</p>
                                <p>• Custom quotes for other areas</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Trust Signals Grid */}
            <div className="bg-gradient-to-r from-gray-50 to-blue-50 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Brink Design Co?</h2>
                        <p className="text-xl text-gray-600">Trusted by businesses and homeowners across South Dakota</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {trustSignals.map((signal, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
                            >
                                <signal.icon className={`w-8 h-8 ${signal.color} mb-4`} />
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">{signal.title}</h3>
                                <p className="text-gray-600 text-sm">{signal.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ContactContainer;
