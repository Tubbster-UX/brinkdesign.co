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
            value: "(605) 389-3261",
            href: "tel:+16053893261",
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
            description: "Clear pricing, no subscriptions",
            color: "text-green-600"
        },
        {
            icon: Home,
            title: "Local Crew",
            description: "Based in Rapid City, SD",
            color: "text-blue-600"
        },
        {
            icon: Star,
            title: "5-Star Rated",
            description: "Trusted by real clients",
            color: "text-yellow-500"
        },
        {
            icon: Zap,
            title: "24hr Response",
            description: "We get back to you fast",
            color: "text-orange-500"
        },
        {
            icon: Award,
            title: "Licensed & Insured",
            description: "Full coverage on every job",
            color: "text-indigo-600"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
            <div className="max-w-xl mx-auto px-4 text-center pt-12 pb-6">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Contact Brink Design</h1>
                <p className="text-base text-gray-600 mb-2">We&apos;re here to help with AV, security, and cabling projects—big or small.</p>
                <p className="text-sm text-gray-500">Fill out the form or reach out directly. We respond within 24 hours.</p>
            </div>

            {/* Contact Methods */}
            <div className="max-w-xl mx-auto px-4 mb-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {contactMethods.map((method, index) => (
                        <a
                            key={index}
                            href={method.href}
                            className="group relative bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100"
                        >
                            <div className="relative">
                                <div className={`${method.color} w-10 h-10 rounded-lg flex items-center justify-center mb-3`}>
                                    <method.icon className="w-5 h-5 text-white" />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-1">{method.title}</h3>
                                <p className="text-gray-600 text-xs mb-2">{method.description}</p>
                                <p className="text-blue-600 font-medium group-hover:text-blue-700 transition-colors text-sm">
                                    {method.value}
                                </p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>

            {/* Main Contact Form Section */}
            <div className="max-w-xl mx-auto px-4 pb-16">
                <div className="bg-white rounded-2xl shadow border border-gray-100 p-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-2">Send Us a Message</h2>
                    <p className="text-gray-600 text-sm mb-4">We&apos;ll get back to you soon.</p>
                    <ContactForm onSuccess={setSuccessMessage} onError={setErrorMessage} />
                    {/* Feedback Messages */}
                    {successMessage && (
                        <div className="mt-6 p-3 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                            <span className="text-green-800 font-medium text-sm">{successMessage}</span>
                        </div>
                    )}
                    {errorMessage && (
                        <div className="mt-6 p-3 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3">
                            <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                            <span className="text-red-800 font-medium text-sm">{errorMessage}</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ContactContainer;
