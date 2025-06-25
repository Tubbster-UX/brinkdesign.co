import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Photo Booth Opt-In Policy - Brink Design Co.",
    description:
        "Details on how we send your photo booth images via SMS and how to manage your consent and privacy preferences.",
    openGraph: {
        title: "Photo Booth Opt-In Policy - Brink Design Co.",
        description:
            "Learn about our SMS photo delivery and privacy practices for Brink Design Co.'s photo booth.",
        url: "https://www.brinkdesign.co/photo-booth-opt-in",
        type: "article",
    },
};

export default function PhotoBoothOptInPolicy() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
            <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        Photo Booth Opt-In Policy
                    </h1>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Welcome to our photo booth! By submitting your phone number below, you are consenting to receive a link to your photos via SMS shortly after your photo session.
                    </p>
                </div>

                <div className="space-y-8">
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                            <span className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                                1
                            </span>
                            How It Works:
                        </h2>
                        <ul className="space-y-3 ml-11">
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span className="text-gray-700">
                                    Provide your phone number at the photo booth to receive a link to your photos.
                                </span>
                            </li>
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span className="text-gray-700">
                                    You will receive an SMS message with a link to view and download your photos.
                                </span>
                            </li>
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span className="text-gray-700">
                                    To opt-out from future messages, reply &ldquo;STOP&rdquo; to any message.
                                </span>
                            </li>
                        </ul>
                    </section>

                    <section className="bg-gray-50 rounded-lg p-6">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                            <svg className="w-6 h-6 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            Privacy and Data Handling:
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            We respect your privacy. For more information on how we handle your personal data, please refer to our{' '}
                            <a
                                href="/privacy-policy"
                                className="text-blue-600 hover:text-blue-800 underline font-medium transition-colors duration-200"
                            >
                                Privacy Policy
                            </a>.
                        </p>
                    </section>

                    <div className="text-center pt-6 border-t border-gray-200">
                        <p className="text-gray-600">
                            If you have any questions or need assistance, feel free to contact us.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}