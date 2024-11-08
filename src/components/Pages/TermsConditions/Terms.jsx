import React from 'react';
import { Link } from 'react-router-dom';

const TermsOfService = () => {
    return (
        <div className="terms-of-service flex flex-col items-center px-6 py-10 sm:px-12 lg:px-24 bg-[#242424] text-white min-h-screen">
            <div className="w-full max-w-4xl flex justify-between items-center mb-4">
                <Link to="/" className="text-[#fc291d] hover:underline">
                    ← Go Back
                </Link>
            </div>
            <hr className="w-full max-w-4xl border-t border-gray-700 mb-8" />

            <div className="content w-full max-w-4xl space-y-8 text-left">
                <h1 className="text-3xl md:text-5xl font-extrabold text-[#fc291d] text-center">Terms of Service</h1>
                
                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-[#f0f0f0]">Acceptance of Terms</h2>
                    <p className="text-gray-300 leading-relaxed">
                        By accessing or using our website cglimited.org ("Site"), you agree to comply with and be
                        bound by these Terms of Service. If you do not agree to these terms, you may not use the Site.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-[#f0f0f0]">1. User Responsibilities</h2>
                    <p className="text-gray-300 leading-relaxed">
                        You are responsible for your use of the Site and agree to use it lawfully, respecting the rights
                        of others and adhering to our community standards.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-[#f0f0f0]">2. Limitation of Liability</h2>
                    <p className="text-gray-300 leading-relaxed">
                        We are not liable for any damages resulting from your use of our Site. This limitation applies to
                        all claims, whether based on contract, tort, or other legal theories.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-[#f0f0f0]">3. Intellectual Property</h2>
                    <p className="text-gray-300 leading-relaxed">
                        All content on the Site is the property of CLEARPATH GROUP LIMITED or its licensors. Unauthorized
                        use of the content may violate copyright, trademark, and other laws.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-[#f0f0f0]">4. Changes to Terms</h2>
                    <p className="text-gray-300 leading-relaxed">
                        We reserve the right to modify these Terms of Service at any time. Changes will be posted on this
                        page, and your continued use of the Site constitutes your acceptance of the new terms.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-[#f0f0f0]">5. Governing Law</h2>
                    <p className="text-gray-300 leading-relaxed">
                        These terms are governed by the laws of the United Kingdom. Any disputes arising from the use of
                        our Site will be resolved in accordance with these laws.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-[#f0f0f0]">6. Contact Information</h2>
                    <p className="text-gray-300 leading-relaxed">
                        If you have any questions or concerns about these Terms of Service, please contact us at:
                    </p>
                    <p className="text-gray-300">Email: support@cglimited.org</p>
                    <p className="text-gray-300">
                        Address: Bold Bauhaus, 27 Quay Street, Manchester, United Kingdom, M3 3GY
                    </p>
                </section>
            </div>
        </div>
    );
};

export default TermsOfService;
