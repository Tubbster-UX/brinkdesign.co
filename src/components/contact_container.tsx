"use client"
import React, { useState } from 'react';
import ContactForm from '@/components/contact';

const ContactContainer = () => {
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    return (
        <div className="container mx-auto p-4 my-8">
            <div className="text-center mb-8">
                <h2 className="text-4xl font-bold">Get in Touch</h2>
            </div>

            <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg relative overflow-hidden">
                <div className="absolute inset-0"></div>
                <div className="relative z-10">
                    <ContactForm onSuccess={setSuccessMessage} onError={setErrorMessage} />
                    {successMessage && <p className="text-green-500 mt-4">{successMessage}</p>}
                    {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}
                </div>
            </div>

            <div className="text-center mt-8">
                <p className="text-lg">
                    Or email me directly at <a href="mailto:alexavierb@brinkdesign.co" className="text-blue-500 underline">alexavierb@brinkdesign.co</a>
                </p>
            </div>
        </div>
    );
};

export default ContactContainer;