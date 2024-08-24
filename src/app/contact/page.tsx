"use client";
import { Button } from '@/components/ui/button';
import React, { useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleRecaptchaChange = (token: string | null) => {
        setRecaptchaToken(token);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setSuccessMessage('');
        setErrorMessage('');

        if (!recaptchaToken) {
            setErrorMessage('Please complete the reCAPTCHA.');
            setLoading(false);
            return;
        }

        try {
            const response = await fetch('https://formie.io/form/dd3d73a7-e8e4-4d63-b0b8-44957379456a', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ...formData, recaptchaToken }),
            });

            if (response.ok) {
                setSuccessMessage('Your message has been sent successfully!');
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: '',
                });
                setRecaptchaToken(null);
            } else {
                setErrorMessage('Failed to send your message. Please try again.');
            }
        } catch (error) {
            setErrorMessage('An error occurred. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <div className='bg-[url("/hero.avif")] bg-cover bg-center bg-fixed h-96 py-10'>
                <div className="container flex flex-col justify-end items-start h-full">
                    <h1 className="text-3xl font-bold text-white">Contact</h1>
                </div>
            </div>

            <div className="container mx-auto p-4 my-8">
                <div className="text-center mb-8">
                    <h2 className="text-4xl font-bold">Get in Touch</h2>
                </div>

                <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                Name
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="name"
                                type="text"
                                placeholder="Your name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="email"
                                type="email"
                                placeholder="Your email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subject">
                                Subject
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="subject"
                                type="text"
                                placeholder="Subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                                Message
                            </label>
                            <textarea
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="message"
                                rows={5}
                                placeholder="Your message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        <div className="mb-4">
                            <ReCAPTCHA
                                sitekey="6Lc9FS4qAAAAALV1txIeKmMJY1qgV8THXLCMKk7C"
                                onChange={handleRecaptchaChange}
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <Button
                                type="submit"
                                disabled={loading}
                            >
                                {loading ? 'Sending...' : 'Send Message'}
                            </Button>
                        </div>
                    </form>
                    {successMessage && <p className="text-green-500 mt-4">{successMessage}</p>}
                    {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}
                </div>
            </div>
        </div>
    );
}