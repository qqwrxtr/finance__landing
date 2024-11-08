import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
    return (
        <div className="privacy-policy flex flex-col items-center px-6 py-10 sm:px-12 lg:px-24 bg-[#242424] text-white min-h-screen">
            <div className="w-full max-w-4xl flex justify-between items-center mb-4">
                <Link to="/" className="text-[#fc291d] hover:underline">
                    ← Go Back
                </Link>
            </div>
            <hr className="w-full max-w-4xl border-t border-gray-700 mb-8" />

            <div className="content w-full max-w-4xl space-y-8 text-left">
                <h1 className="text-3xl md:text-5xl font-extrabold text-[#fc291d] text-center">Privacy Policy</h1>
                
                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-[#f0f0f0]">Introduction</h2>
                    <p className="text-gray-300 leading-relaxed">
                        At CLEARPATH GROUP LIMITED ("Company," "we," "us," or "our"), we take your privacy seriously.
                        This Privacy Policy explains how we collect, use, disclose, and protect your personal information
                        when you visit our website cglimited.org ("Site") and use our services ("Services"). By using
                        our Site, you agree to the terms of this Privacy Policy.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-[#f0f0f0]">1. Information We Collect</h2>
                    <div className="space-y-2">
                        <h3 className="font-semibold">a) Information You Provide Directly</h3>
                        <p className="text-gray-300 leading-relaxed">
                            When you use our Services, you may provide us with personal information, including but not
                            limited to: Name, Email address.
                        </p>
                    </div>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-[#f0f0f0]">2. How We Use Your Information</h2>
                    <p className="text-gray-300 leading-relaxed">
                        We use your personal information for the following purposes: Providing Services, Customer
                        Support, Communication, Improving our Services, Compliance, Security.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-[#f0f0f0]">3. How We Share Your Information</h2>
                    <p className="text-gray-300 leading-relaxed">
                        We do not sell your personal information to third parties. However, we may share your information
                        with third parties in certain situations such as with Service Providers, for Legal Compliance,
                        and in the event of Business Transfers.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-[#f0f0f0]">4. Your Data Protection Rights</h2>
                    <p className="text-gray-300 leading-relaxed">
                        Depending on your jurisdiction, you may have rights regarding your personal information, such as
                        the Right to Access, Rectification, Erasure, Restrict Processing, Data Portability, and the Right
                        to Object. To exercise these rights, contact us at support@cglimited.org.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-[#f0f0f0]">6. Data Retention</h2>
                    <p className="text-gray-300 leading-relaxed">
                        We will retain your personal information as long as necessary for the purposes outlined in this
                        Privacy Policy unless a longer retention period is required or permitted by law.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-[#f0f0f0]">7. Data Security</h2>
                    <p className="text-gray-300 leading-relaxed">
                        We take reasonable technical and organizational measures to protect your personal information
                        from unauthorized access, use, or disclosure. While we strive to protect your personal
                        information, no security system is entirely foolproof.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-[#f0f0f0]">8. Children's Privacy</h2>
                    <p className="text-gray-300 leading-relaxed">
                        Our Site and Services are not intended for individuals under the age of 18. If you believe a
                        child has provided us with personal information, please contact us, and we will delete it.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-[#f0f0f0]">9. International Data Transfers</h2>
                    <p className="text-gray-300 leading-relaxed">
                        Your personal information may be transferred to, stored, and processed in a country with
                        different data protection laws. By using our Site, you consent to these transfers.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-[#f0f0f0]">10. Changes to This Privacy Policy</h2>
                    <p className="text-gray-300 leading-relaxed">
                        We reserve the right to update or modify this Privacy Policy at any time. Significant changes
                        will be notified via email or by posting a prominent notice on our Site.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-[#f0f0f0]">11. Contact Us</h2>
                    <p className="text-gray-300 leading-relaxed">
                        If you have any questions or concerns about this Privacy Policy, please contact us at:
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

export default PrivacyPolicy;
