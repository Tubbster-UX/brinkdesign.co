import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import ReCAPTCHA from "react-google-recaptcha";
import { User, Mail, MessageSquare, FileText, Send, Loader2 } from 'lucide-react';
import { trackEvent } from '@/lib/analytics';

interface ContactFormProps {
    onSuccess: (message: string) => void;
    onError: (message: string) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onSuccess, onError }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
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
                        placeholder="Tell us about your project... What are your goals? Timeline? Any specific requirements?"
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField(null)}
                        required
                    />
                </div>
                <div className="mt-2 text-xs text-gray-500">
                    The more details you provide, the better we can help you!
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