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
                        Welcome to Clearpath Group Limited "cglimited.org". These Terms and Conditions (“Terms”) govern your use of our website and any associated services (collectively, “the Services”). By accessing or using our Site, you agree to be bound by these Terms. If you do not agree to these Terms, please discontinue your use of the Site.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-[#f0f0f0]">1. General Information</h2>
                    <p className="text-gray-300 leading-relaxed">
                        The Site is owned and operated by Clearpath Group Limited (“we,” “us,” or “our”), a company registered in the United Kingdom. Our goal is to provide financial information, tools, and advice to help users make informed decisions. However, we are not responsible for the financial decisions you make based on the content provided on this Site.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-[#f0f0f0]">2. Financial Advice Disclaimer</h2>
                    <p className="text-gray-300 leading-relaxed">
                        The information provided on this Site is for informational purposes only and should not be construed as financial, investment, or legal advice. While we strive to provide accurate and up-to-date information, we cannot guarantee the accuracy, reliability, or completeness of any information found on the Site. The use of our Site does not create a financial advisory relationship between you and Clearpath Group Limited. Always seek advice from a licensed financial advisor before making any financial decisions.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-[#f0f0f0]">3. Eligibility</h2>
                    <p className="text-gray-300 leading-relaxed">
                        By using our Site, you confirm that you:
                        <ul className="list-disc pl-6">
                            <li>Are at least 18 years of age.</li>
                            <li>Have the legal capacity to enter into a binding agreement under applicable law.</li>
                        </ul>
                        If you do not meet these eligibility criteria, you must discontinue use of our Site.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-[#f0f0f0]">4. Use of Services</h2>
                    <p className="text-gray-300 leading-relaxed">
                        You agree to use the Site and Services only for lawful purposes. You are prohibited from using the Site:
                        <ul className="list-disc pl-6">
                            <li>In a way that violates any applicable laws or regulations.</li>
                            <li>To transmit any material that is unlawful, harmful, or violates the rights of any third party.</li>
                            <li>For unauthorized commercial purposes, including advertising or solicitation.</li>
                        </ul>
                        We reserve the right to suspend or terminate your access to the Site for any violation of these Terms.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-[#f0f0f0]">5. Third-Party Links and Services</h2>
                    <p className="text-gray-300 leading-relaxed">
                        The Site may contain links to third-party websites or services that are not owned or controlled by Clearpath Group Limited. We are not responsible for the content, privacy policies, or practices of any third-party websites. You acknowledge that you access third-party websites at your own risk and should review their respective terms and conditions.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-[#f0f0f0]">6. Limitation of Liability</h2>
                    <p className="text-gray-300 leading-relaxed">
                        To the fullest extent permitted by law, Clearpath Group Limited shall not be liable for any damages arising from your use of the Site or Services, including but not limited to:
                        <ul className="list-disc pl-6">
                            <li>Loss of profits, revenues, or data.</li>
                            <li>Financial losses.</li>
                            <li>Any indirect, incidental, special, consequential, or punitive damages.</li>
                        </ul>
                        We do not guarantee that the Site will always be available or free from technical issues.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-[#f0f0f0]">7. Indemnification</h2>
                    <p className="text-gray-300 leading-relaxed">
                        You agree to indemnify and hold Clearpath Group Limited, its affiliates, directors, officers, employees, and agents harmless from any claims, liabilities, damages, or expenses (including legal fees) arising out of your use of the Site, your violation of these Terms, or your infringement of any third-party rights.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-[#f0f0f0]">8. Changes to Terms</h2>
                    <p className="text-gray-300 leading-relaxed">
                        We may update these Terms from time to time to reflect changes in our policies or applicable laws. We will notify you of any material changes by posting the revised Terms on the Site with an updated “Effective Date.” Your continued use of the Site following the posting of the revised Terms constitutes your acceptance of the changes.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-[#f0f0f0]">9. Governing Law and Jurisdiction</h2>
                    <p className="text-gray-300 leading-relaxed">
                        These Terms are governed by and construed in accordance with the laws of England and Wales. Any disputes arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts located in London, England.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-[#f0f0f0]">10. Privacy Policy</h2>
                    <p className="text-gray-300 leading-relaxed">
                        Your use of the Site is also governed by our [Privacy Policy], which can be found at [insert link to your privacy policy]. Please review this document for information on how we collect, use, and protect your personal data.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-[#f0f0f0]">11. Termination</h2>
                    <p className="text-gray-300 leading-relaxed">
                        We reserve the right to terminate or suspend your access to the Site at any time and for any reason, including for violation of these Terms, without notice or liability.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-[#f0f0f0]">12. Contact Us</h2>
                    <p className="text-gray-300 leading-relaxed">
                        If you have any questions about these Terms, please contact us at:
                    </p>
                    <p className="text-gray-300">Email: support@cglimited.org</p>
                    <p className="text-gray-300">Address: Bold Bauhaus, 27 Quay Street, Manchester, United Kingdom, M3 3GY</p>
                </section>
            </div>
        </div>
    );
};

export default TermsOfService;
