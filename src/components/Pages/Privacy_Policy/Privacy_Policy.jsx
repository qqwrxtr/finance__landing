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
                        At Clearpath Group Limited ("we," "us," or "our"), we respect your privacy and are committed to
                        protecting your personal information. This Privacy Policy explains how we collect, use, and share
                        your personal data when you use our website cglimited.org ("Site") and any related services
                        (collectively, "Services"). It also outlines your rights regarding your personal information and
                        how you can exercise them.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                        By using our Site, you agree to the terms of this Privacy Policy.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-[#f0f0f0]">1. Information We Collect</h2>
                    <div className="space-y-2">
                        <h3 className="font-semibold">1.1. Personal Data You Provide</h3>
                        <p className="text-gray-300 leading-relaxed">
                            Contact Information: When you fill out forms, subscribe to newsletters, or contact us, we may
                            collect your name, email address, phone number, and any other information you voluntarily
                            provide.
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                            Financial Information: If you use our paid services, we may collect billing information (e.g.,
                            payment card details), though we use third-party payment processors to handle these
                            transactions securely.
                        </p>
                    </div>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-[#f0f0f0]">2. How We Use Your Information</h2>
                    <p className="text-gray-300 leading-relaxed">
                        We use your personal data for the following purposes:
                    </p>
                    <ul className="list-disc pl-6 text-gray-300">
                        <li>Providing Services: To manage your account, process payments, and provide personalized financial advice or other services you request.</li>
                        <li>Communication: To respond to your inquiries, provide customer support, and send administrative or promotional communications (with your consent).</li>
                        <li>Improving Our Site: To analyze usage trends and improve the functionality and performance of our Site and Services.</li>
                        <li>Marketing: To send you marketing communications that may be of interest to you, based on your preferences. You can opt out at any time by following the instructions in the communication.</li>
                        <li>Compliance: To comply with applicable laws, regulations, and legal requests.</li>
                    </ul>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-[#f0f0f0]">3. How We Share Your Information</h2>
                    <p className="text-gray-300 leading-relaxed">
                        We may share your personal data with:
                    </p>
                    <ul className="list-disc pl-6 text-gray-300">
                        <li>Service Providers: Third-party vendors who provide services on our behalf, such as payment processing, analytics, and marketing. These service providers are bound by confidentiality agreements and may not use your personal data for any purpose other than to provide services to us.</li>
                        <li>Legal and Regulatory Authorities: If required by law, or to protect our rights, we may disclose your data to governmental authorities or other third parties.</li>
                        <li>Business Transfers: In the event of a merger, acquisition, or sale of assets, your data may be transferred as part of that transaction. We will notify you of any such change.</li>
                    </ul>
                    <p className="text-gray-300 leading-relaxed">
                        We do not sell your personal information to third parties.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-[#f0f0f0]">4. Data Security</h2>
                    <p className="text-gray-300 leading-relaxed">
                        We take the security of your personal information seriously and have implemented appropriate technical and organizational measures to protect it from unauthorized access, loss, misuse, or alteration. However, no method of data transmission or storage is 100% secure, and we cannot guarantee absolute security.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-[#f0f0f0]">5. Data Retention</h2>
                    <p className="text-gray-300 leading-relaxed">
                        We retain your personal information for as long as necessary to fulfill the purposes for which it was collected, or to comply with legal, regulatory, or contractual obligations. When your data is no longer needed, we will securely delete or anonymize it.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-[#f0f0f0]">6. Your Data Protection Rights</h2>
                    <p className="text-gray-300 leading-relaxed">
                        Under the General Data Protection Regulation (GDPR), you have the following rights:
                    </p>
                    <ul className="list-disc pl-6 text-gray-300">
                        <li>Right to Access: You can request a copy of the personal data we hold about you.</li>
                        <li>Right to Rectification: You can ask us to correct any inaccurate or incomplete personal data.</li>
                        <li>Right to Erasure: You can request that we delete your personal data, subject to certain conditions.</li>
                        <li>Right to Restrict Processing: You can request that we limit how we process your data in certain situations.</li>
                        <li>Right to Data Portability: You can request a copy of your data in a structured, machine-readable format.</li>
                        <li>Right to Object: You can object to the processing of your data for certain purposes, including marketing.</li>
                        <li>Right to Withdraw Consent: If we process your data based on consent, you can withdraw it at any time.</li>
                    </ul>
                    <p className="text-gray-300 leading-relaxed">
                        To exercise these rights, please contact us using the information provided in the Contact Us section below.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-[#f0f0f0]">7. International Data Transfers</h2>
                    <p className="text-gray-300 leading-relaxed">
                        As a company based in the United Kingdom, your data may be transferred to and processed in countries outside the European Economic Area (EEA). When we transfer data outside the EEA, we ensure that appropriate safeguards are in place to protect your personal information, in accordance with GDPR requirements.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-[#f0f0f0]">8. Children's Privacy</h2>
                    <p className="text-gray-300 leading-relaxed">
                        Our Site is not intended for children under the age of 18, and we do not knowingly collect personal data from minors. If we become aware that a child has provided us with personal data, we will take steps to delete such information.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-[#f0f0f0]">9. Changes to This Privacy Policy</h2>
                    <p className="text-gray-300 leading-relaxed">
                        We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. We will notify you of any material changes by posting the updated policy on our Site with an updated "Effective Date."
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                        We encourage you to review this Privacy Policy periodically to stay informed about how we protect your data.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-[#f0f0f0]">10. Contact Us</h2>
                    <p className="text-gray-300 leading-relaxed">
                        If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                        <strong>Email:</strong> support@cglimited.org
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                        <strong>Address:</strong> Clearpath Group Limited, 123 Business Street, London, UK
                    </p>
                </section>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
