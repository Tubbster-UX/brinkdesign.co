import type { Metadata } from "next";
import { Shield, Eye, Lock, FileText, Mail, CheckCircle, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy – Brink Design Western South Dakota",
  description: "How Brink Design protects your data when delivering AV and security installations across western South Dakota.",
  alternates: { canonical: "https://www.brinkdesign.co/privacy-policy" },
  openGraph: {
    title: "Privacy Policy – Brink Design Western South Dakota",
    description: "Understand how we safeguard customer information for projects across the Black Hills region.",
    images: ["https://www.brinkdesign.co/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy – Brink Design Western South Dakota",
    description: "Details on Brink Design's data practices and privacy protections.",
    images: ["https://www.brinkdesign.co/og-image.jpg"],
  },
};

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50">
            {/* Hero Section */}
            <div className="relative overflow-hidden bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:40px_40px] opacity-20"></div>
                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
                    <div className="text-center">
                        <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 text-blue-200 rounded-full text-sm font-medium mb-6 border border-blue-400/30">
                            <Shield className="w-4 h-4 mr-2" />
                            Your Privacy Matters
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Privacy Policy
                        </h1>
                        <p className="text-xl text-gray-300 mb-6 max-w-2xl mx-auto">
                            We&apos;re committed to protecting your privacy and being transparent about how we handle your information.
                        </p>
                        <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-lg text-white text-sm">
                            <FileText className="w-4 h-4 mr-2" />
                            <span>Effective Date: October 10th, 2024</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Introduction */}
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                        <Shield className="w-6 h-6 mr-3 text-blue-600" />
                        Our Commitment to Your Privacy
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                        Brink Design (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting your privacy.
                        This Privacy Policy outlines how we collect, use, disclose, and protect your
                        information when you interact with our websites, apps, games, logos, and other
                        products or services (&quot;Services&quot;). By using any of our Services, you agree to the
                        terms of this Privacy Policy.
                    </p>
                </div>

                {/* Information We Collect */}
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                        <Eye className="w-6 h-6 mr-3 text-blue-600" />
                        1. Information We Collect
                    </h2>
                    <p className="mb-4 text-gray-700 leading-relaxed">
                        We may collect personal information that you provide to us directly and information
                        collected automatically when you use our Services.
                    </p>
                    <div className="space-y-4">
                        <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                            <h4 className="font-semibold text-blue-900 mb-2 flex items-center">
                                <FileText className="w-4 h-4 mr-2" />
                                Information You Provide:
                            </h4>
                            <ul className="space-y-1 text-sm text-blue-800">
                                <li className="flex items-start"><CheckCircle className="w-3 h-3 mr-2 mt-1 flex-shrink-0" />Contact information: Name, email address, phone number, mailing address.</li>
                                <li className="flex items-start"><CheckCircle className="w-3 h-3 mr-2 mt-1 flex-shrink-0" />Account details: Username, password, profile details.</li>
                                <li className="flex items-start"><CheckCircle className="w-3 h-3 mr-2 mt-1 flex-shrink-0" />Payment information: Billing details, payment card information (for paid services).</li>
                                <li className="flex items-start"><CheckCircle className="w-3 h-3 mr-2 mt-1 flex-shrink-0" />Feedback and correspondence: Information you provide in surveys, support requests, or feedback forms.</li>
                            </ul>
                        </div>
                        <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                            <h4 className="font-semibold text-purple-900 mb-2 flex items-center">
                                <Eye className="w-4 h-4 mr-2" />
                                Information We Collect Automatically:
                            </h4>
                            <ul className="space-y-1 text-sm text-purple-800">
                                <li className="flex items-start"><CheckCircle className="w-3 h-3 mr-2 mt-1 flex-shrink-0" />Usage data: Information about how you interact with our websites, apps, or games, including IP address, browser type, device identifiers, and other similar data.</li>
                                <li className="flex items-start"><CheckCircle className="w-3 h-3 mr-2 mt-1 flex-shrink-0" />Cookies and tracking technologies: We use cookies, web beacons, and similar technologies to collect data about your usage patterns.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* How We Use Your Information */}
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                        <Shield className="w-6 h-6 mr-3 text-blue-600" />
                        2. How We Use Your Information
                    </h2>
                    <p className="mb-4 text-gray-700 leading-relaxed">We may use your information for purposes such as:</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                            <ul className="space-y-2 text-sm text-green-800">
                                <li className="flex items-start"><CheckCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0 text-green-600" /><span><strong>Providing services:</strong> To operate, maintain, and improve our websites, apps, and games.</span></li>
                                <li className="flex items-start"><CheckCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0 text-green-600" /><span><strong>Account management:</strong> To create, manage, and authenticate your account.</span></li>
                                <li className="flex items-start"><CheckCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0 text-green-600" /><span><strong>Customer support:</strong> To respond to inquiries, support requests, and feedback.</span></li>
                            </ul>
                        </div>
                        <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                            <ul className="space-y-2 text-sm text-blue-800">
                                <li className="flex items-start"><CheckCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0 text-blue-600" /><span><strong>Communications:</strong> To send you updates, marketing communications, or information about our Services.</span></li>
                                <li className="flex items-start"><CheckCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0 text-blue-600" /><span><strong>Legal and compliance:</strong> To comply with legal obligations and protect the rights of Brink Design.</span></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* How We Share Your Information */}
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                        <Lock className="w-6 h-6 mr-3 text-blue-600" />
                        3. How We Share Your Information
                    </h2>
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
                        <div className="flex items-center mb-2">
                            <AlertTriangle className="w-5 h-5 text-yellow-600 mr-2" />
                            <p className="font-semibold text-yellow-800">We do not sell or rent your personal information.</p>
                        </div>
                    </div>
                    <p className="mb-4 text-gray-700">We may share your information with:</p>
                    <div className="space-y-3">
                        <div className="flex items-start p-3 bg-gray-50 rounded-lg border border-gray-200">
                            <CheckCircle className="w-4 h-4 mr-3 mt-1 text-gray-600 flex-shrink-0" />
                            <div>
                                <strong className="text-gray-900">Service providers:</strong>
                                <span className="text-gray-700"> Third-party vendors who assist us in providing the Services (e.g., hosting, payment processing, analytics).</span>
                            </div>
                        </div>
                        <div className="flex items-start p-3 bg-gray-50 rounded-lg border border-gray-200">
                            <CheckCircle className="w-4 h-4 mr-3 mt-1 text-gray-600 flex-shrink-0" />
                            <div>
                                <strong className="text-gray-900">Legal authorities:</strong>
                                <span className="text-gray-700"> When required by law or to protect our rights and the rights of others.</span>
                            </div>
                        </div>
                        <div className="flex items-start p-3 bg-gray-50 rounded-lg border border-gray-200">
                            <CheckCircle className="w-4 h-4 mr-3 mt-1 text-gray-600 flex-shrink-0" />
                            <div>
                                <strong className="text-gray-900">Business transfers:</strong>
                                <span className="text-gray-700"> In the event of a merger, acquisition, or sale of assets.</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Your Choices */}
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                        <CheckCircle className="w-6 h-6 mr-3 text-green-600" />
                        4. Your Choices
                    </h2>
                    <p className="mb-4 text-gray-700">You have choices regarding your personal information:</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-green-50 rounded-lg p-4 border border-green-200 text-center">
                            <Eye className="w-8 h-8 text-green-600 mx-auto mb-2" />
                            <h4 className="font-semibold text-green-900 mb-1">Access & Correction</h4>
                            <p className="text-sm text-green-800">You may access and update your account information.</p>
                        </div>
                        <div className="bg-blue-50 rounded-lg p-4 border border-blue-200 text-center">
                            <Mail className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                            <h4 className="font-semibold text-blue-900 mb-1">Marketing Opt-out</h4>
                            <p className="text-sm text-blue-800">You can opt out of receiving marketing communications at any time.</p>
                        </div>
                        <div className="bg-purple-50 rounded-lg p-4 border border-purple-200 text-center">
                            <Shield className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                            <h4 className="font-semibold text-purple-900 mb-1">Cookie Settings</h4>
                            <p className="text-sm text-purple-800">Most web browsers allow you to manage cookie settings.</p>
                        </div>
                    </div>
                </div>

                {/* Security */}
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                        <Lock className="w-6 h-6 mr-3 text-red-600" />
                        5. Security of Your Information
                    </h2>
                    <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                        <p className="text-red-800 leading-relaxed">
                            We take reasonable measures to protect your personal information from unauthorized access, loss, or misuse. However, no security measure is perfect, and we cannot guarantee complete security.
                        </p>
                    </div>
                </div>

                {/* Children's Privacy */}
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                        <Shield className="w-6 h-6 mr-3 text-orange-600" />
                        6. Children&apos;s Privacy
                    </h2>
                    <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
                        <p className="text-orange-800 leading-relaxed">
                            Our Services are not directed to individuals under 13, and we do not knowingly collect personal information from children under 13.
                        </p>
                    </div>
                </div>

                {/* Changes to Policy */}
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                        <FileText className="w-6 h-6 mr-3 text-purple-600" />
                        7. Changes to This Privacy Policy
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                        We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. Your continued use of our Services after changes are made indicates your acceptance of the revised policy.
                    </p>
                </div>

                {/* Contact */}
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-lg p-8 text-white">
                    <h2 className="text-2xl font-bold mb-6 flex items-center">
                        <Mail className="w-6 h-6 mr-3" />
                        8. Contact Us
                    </h2>
                    <p className="mb-4 leading-relaxed">
                        If you have any questions about this Privacy Policy or your personal information, please contact us at:
                    </p>
                    <div className="bg-white/10 rounded-lg p-4 border border-white/20">
                        <a href="mailto:legal@brinkdesign.co" className="text-xl font-semibold hover:text-blue-200 transition-colors">
                            legal@brinkdesign.co
                        </a>
                    </div>
                </div>

                {/* Footer Note */}
                <div className="mt-12 text-center">
                    <div className="inline-flex items-center px-6 py-3 bg-gray-100 rounded-full text-gray-600 text-sm">
                        <Shield className="w-4 h-4 mr-2" />
                        <span>Last updated: October 10th, 2024</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
