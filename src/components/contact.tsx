import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import ReCAPTCHA from "react-google-recaptcha";
import { User, Mail, MessageSquare, FileText, Send, Loader2, Phone, Building } from 'lucide-react';
import { trackEvent } from '@/lib/analytics';

interface ContactFormProps {
    onSuccess: (message: string) => void;
    onError: (message: string) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onSuccess, onError }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        propertyType: '',
        subject: '',
        message: '',
    });
    const [loading, setLoading] = useState(false);
    const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
    const [focusedField, setFocusedField] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleRecaptchaChange = (token: string | null) => {
        setRecaptchaToken(token);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        onSuccess('');
        onError('');

        if (!recaptchaToken) {
            onError('Please complete the reCAPTCHA verification.');
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
                onSuccess('Message sent successfully! We\'ll get back to you within 24 hours.');
                trackEvent('contact_form_submitted', { subject: formData.subject });
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    propertyType: '',
                    subject: '',
                    message: '',
                });
                setRecaptchaToken(null);
            } else {
                onError('Failed to send your message. Please try again or contact us directly.');
            }
        } catch (error) {
            onError('⚠️ Network error occurred. Please check your connection and try again.');
        } finally {
            setLoading(false);
        }
    };

    const inputClasses = (fieldName: string) => `
        w-full px-4 py-3 pl-12 bg-white border-2 border-gray-200 rounded-xl
        focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 
        transition-all duration-300 ease-in-out
        placeholder-gray-400 text-gray-900
        ${focusedField === fieldName ? 'border-blue-500 shadow-lg' : 'hover:border-gray-300'}
    `;

    const labelClasses = "block text-sm font-semibold text-gray-700 mb-2";

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div className="relative">
                <label className={labelClasses} htmlFor="name">
                    Full Name *
                </label>
                <div className="relative">
                    <User className={`absolute left-4 top-3.5 w-5 h-5 transition-colors duration-300 ${
                        focusedField === 'name' ? 'text-blue-500' : 'text-gray-400'
                    }`} />
                    <input
                        className={inputClasses('name')}
                        id="name"
                        type="text"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        required
                    />
                </div>
            </div>

            {/* Email Field */}
            <div className="relative">
                <label className={labelClasses} htmlFor="email">
                    Email Address *
                </label>
                <div className="relative">
                    <Mail className={`absolute left-4 top-3.5 w-5 h-5 transition-colors duration-300 ${
                        focusedField === 'email' ? 'text-blue-500' : 'text-gray-400'
                    }`} />
                    <input
                        className={inputClasses('email')}
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        required
                    />
                </div>
            </div>

            {/* Phone Field */}
            <div className="relative">
                <label className={labelClasses} htmlFor="phone">
                    Phone Number *
                </label>
                <div className="relative">
                    <Phone className={`absolute left-4 top-3.5 w-5 h-5 transition-colors duration-300 ${
                        focusedField === 'phone' ? 'text-blue-500' : 'text-gray-400'
                    }`} />
                    <input
                        className={inputClasses('phone')}
                        id="phone"
                        type="tel"
                        placeholder="(605) 555-1234"
                        value={formData.phone}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('phone')}
                        onBlur={() => setFocusedField(null)}
                        required
                    />
                </div>
            </div>

            {/* Property Type Field */}
            <div className="relative">
                <label className={labelClasses} htmlFor="propertyType">
                    Property Type *
                </label>
                <div className="relative">
                    <Building className={`absolute left-4 top-3.5 w-5 h-5 transition-colors duration-300 ${
                        focusedField === 'propertyType' ? 'text-blue-500' : 'text-gray-400'
                    }`} />
                    <select
                        className={inputClasses('propertyType')}
                        id="propertyType"
                        value={formData.propertyType}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('propertyType')}
                        onBlur={() => setFocusedField(null)}
                        required
                    >
                        <option value="">Select property type</option>
                        <option value="Business / Commercial">Business / Commercial</option>
                        <option value="Home / Residential">Home / Residential</option>
                        <option value="Church / Nonprofit">Church / Nonprofit</option>
                        <option value="New Construction">New Construction</option>
                    </select>
                </div>
            </div>

            {/* Subject Field */}
            <div className="relative">
                <label className={labelClasses} htmlFor="subject">
                    Project Type *
                </label>
                <div className="relative">
                    <FileText className={`absolute left-4 top-3.5 w-5 h-5 transition-colors duration-300 ${
                        focusedField === 'subject' ? 'text-blue-500' : 'text-gray-400'
                    }`} />
                    <select
                        className={inputClasses('subject')}
                        id="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('subject')}
                        onBlur={() => setFocusedField(null)}
                        required
                    >
                        <option value="">What do you need installed?</option>
                        <option value="Security Cameras">Security Cameras</option>
                        <option value="WiFi & Networking">WiFi & Network Cabling</option>
                        <option value="Church & Commercial AV">Church & Commercial AV</option>
                        <option value="Smart Home">Smart Home Automation</option>
                        <option value="Structured Cabling">Structured Cabling & Wiring</option>
                        <option value="Maintenance">System Maintenance & Support</option>
                        <option value="Other">Other / Not Sure Yet</option>
                    </select>
                </div>
            </div>

            {/* Message Field */}
            <div className="relative">
                <label className={labelClasses} htmlFor="message">
                    Project Details *
                </label>
                <div className="relative">
                    <MessageSquare className={`absolute left-4 top-3.5 w-5 h-5 transition-colors duration-300 ${
                        focusedField === 'message' ? 'text-blue-500' : 'text-gray-400'
                    }`} />
                    <textarea
                        className={`${inputClasses('message')} min-h-[120px] resize-y`}
                        id="message"
                        rows={5}
                        placeholder="Tell us what you need — cameras, WiFi, AV, cabling? Include the city and any relevant details."
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField(null)}
                        required
                    />
                </div>
                <div className="mt-2 text-xs text-gray-500">
                    Include your city and building type so we can give you a better answer.
                </div>
            </div>

            {/* reCAPTCHA */}
            <div className="flex justify-center">
                <div className="transform scale-90 sm:scale-100">
                    <ReCAPTCHA
                        sitekey="6Lc9FS4qAAAAALV1txIeKmMJY1qgV8THXLCMKk7C"
                        onChange={handleRecaptchaChange}
                        theme="light"
                    />
                </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
                <Button
                    type="submit"
                    disabled={loading || !recaptchaToken}
                    className="w-full"
                >
                    {loading ? (
                        <div className="flex items-center justify-center gap-2">
                            <Loader2 className="w-5 h-5 animate-spin" />
                            <span>Sending your message...</span>
                        </div>
                    ) : (
                        <div className="flex items-center justify-center gap-2">
                            <Send className="w-5 h-5" />
                            <span>Send Message</span>
                        </div>
                    )}
                </Button>
                <p className="text-center text-sm text-gray-500 mt-3">
                    🔒 Your information is secure and will never be shared with third parties.
                </p>
            </div>
        </form>
    );
};

export default ContactForm;