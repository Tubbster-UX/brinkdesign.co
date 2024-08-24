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

            <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
                <ContactForm onSuccess={setSuccessMessage} onError={setErrorMessage} />
                {successMessage && <p className="text-green-500 mt-4">{successMessage}</p>}
                {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}
            </div>
        </div>
    );
};

export default ContactContainer;