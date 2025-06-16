"use client"
import React, { useState } from 'react';
import ContactForm from '@/components/contact';
import { CheckCircle, AlertCircle, ShieldCheck, Home, Star } from 'lucide-react';

const ContactContainer = () => {
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    return (
        <div className="w-fit mx-auto px-4 py-12">
            <div className="text-center mb-10">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900">Let’s Talk</h1>
                <p className="mt-2 text-lg text-gray-600">Send us a message — we typically reply within the same day.</p>
            </div>

            <div className="relative max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-xl border border-gray-200">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 opacity-70 rounded-2xl pointer-events-none" />
                <div className="relative z-10">
                    <ContactForm onSuccess={setSuccessMessage} onError={setErrorMessage} />

                    {/* ✅ Feedback */}
                    {successMessage && (
                        <div className="mt-6 flex items-center gap-2 text-green-600">
                            <CheckCircle className="w-5 h-5" />
                            <span>{successMessage}</span>
                        </div>
                    )}
                    {errorMessage && (
                        <div className="mt-6 flex items-center gap-2 text-red-600">
                            <AlertCircle className="w-5 h-5" />
                            <span>{errorMessage}</span>
                        </div>
                    )}
                </div>
            </div>

            {/* 🛡 Trust Signals */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-gray-700">
                <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg shadow-sm border">
                    <ShieldCheck className="w-5 h-5 text-green-600 mt-0.5" />
                    <span className="leading-snug">No subscriptions, no ongoing fees.</span>
                </div>

                <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg shadow-sm border">
                    <Home className="w-5 h-5 text-blue-600 mt-0.5" />
                    <span className="leading-snug">Locally owned & operated in South Dakota.</span>
                </div>

                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg shadow-sm border">
                    <Star className="w-5 h-5 text-yellow-500 mt-0.5" />
                    <span className="leading-snug">5-Star Rated</span>
                </div>
            </div>

            <div className="text-center mt-10">
                <p className="text-gray-600">
                    Prefer email? Reach us directly at{" "}
                    <a href="mailto:contact@brinkdesign.co" className="text-blue-600 font-medium hover:underline">
                        contact@brinkdesign.co
                    </a>
                </p>
                <p className="mt-2 text-sm text-gray-400">No spam. No pressure. Just expert advice.</p>
            </div>
        </div>
    );
};

export default ContactContainer;
