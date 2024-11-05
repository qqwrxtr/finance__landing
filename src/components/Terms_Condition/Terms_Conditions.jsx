const termsContent = [
    {
        title: "Acceptance of Terms",
        text: "By accessing the Site or using our Services, you agree to these Terms and any updates or modifications made to them. Your continued use of the Site following the posting of any changes to the Terms will mean that you accept those changes."
    },
    {
        title: "Eligibility",
        text: "To use our Site or Services, you must be at least 18 years old and have the legal capacity to enter into this agreement. If you are accessing the Site on behalf of a company or other legal entity, you represent that you have the authority to bind that entity to these Terms."
    },
    {
        title: "Financial Information and Advice Disclaimer",
        text: "All financial content, tools, and resources available on the Site are provided for informational purposes only. CLEARPATH GROUP LIMITED is not a licensed financial advisor, and any financial decisions based on the information provided on the Site are made at your own risk.",
        list: [
            {
                subheading: "No Professional Advice",
                details: "The information on this Site does not constitute financial, investment, tax, or legal advice. We recommend consulting with a licensed financial advisor or other professional before making any financial decisions."
            },
            {
                subheading: "Risk Disclaimer",
                details: "Financial markets are inherently risky. Past performance is not indicative of future results. By using our Site and Services, you acknowledge the risks associated with investments, market fluctuations, and financial decisions."
            }
        ]
    },
    {
        title: "Account Registration",
        text: "To access certain features of the Site, you may be required to create an account. You agree to provide accurate and complete information during the registration process and keep your account credentials secure. You are responsible for all activities that occur under your account.",
        list: [
            {
                subheading: "Account Termination",
                details: "We reserve the right to terminate your account at any time, for any reason, including for violations of these Terms."
            }
        ]
    },
    {
        title: "Services and Fees",
        text: "Certain financial tools and services provided through our Site may require payment. These will be clearly indicated, and by using any paid Services, you agree to the terms and pricing specified.",
        list: [
            {
                subheading: "Payment Methods",
                details: "We accept payments via secure payment methods as listed on our Site. All fees are non-refundable, unless otherwise specified in our Refund Policy."
            },
            {
                subheading: "Changes to Fees",
                details: "We reserve the right to modify the prices of our Services at any time. You will be notified of any changes before they take effect."
            }
        ]
    },
    {
        title: "Prohibited Activities",
        text: "By using the Site, you agree to refrain from:",
        list: [
            {
                subheading: "",
                details: "Using the Site for illegal or unauthorized purposes."
            },
            {
                subheading: "",
                details: "Engaging in any activities that violate intellectual property rights."
            },
            {
                subheading: "",
                details: "Uploading viruses, malware, or other harmful software."
            },
            {
                subheading: "",
                details: "Interfering with or disrupting the functionality of the Site."
            }
        ]
    },
    {
        title: "Intellectual Property",
        text: "All content on the Site, including text, graphics, logos, and software, is the property of CLEARPATH GROUP LIMITED and protected by copyright, trademark, and other intellectual property laws. You may not use, reproduce, or distribute any content without our prior written consent."
    },
    {
        title: "Limitation of Liability",
        text: "To the fullest extent permitted by law, CLEARPATH GROUP LIMITED will not be liable for any direct, indirect, incidental, or consequential damages arising from your use of the Site or Services."
    },
    {
        title: "Privacy Policy",
        text: "Your use of the Site is also governed by our [Privacy Policy], which outlines how we collect, store, and use personal information. By using our Site, you consent to the collection and use of information in accordance with our Privacy Policy."
    },
    {
        title: "Third-Party Links",
        text: "Our Site may contain links to third-party websites that are not owned or controlled by CLEARPATH GROUP LIMITED. We are not responsible for the content or practices of any third-party websites. Accessing these sites is at your own risk."
    },
    {
        title: "Changes to Terms",
        text: "We reserve the right to modify these Terms at any time. Any changes will be effective immediately upon posting on the Site, with the date of the last update listed at the top of this document. It is your responsibility to review these Terms periodically."
    },
    {
        title: "Termination of Use",
        text: "We reserve the right to terminate your access to the Site or Services at our sole discretion, without notice, for conduct that we believe violates these Terms or is harmful to other users or the Company."
    },
    {
        title: "Governing Law and Jurisdiction",
        text: "These Terms and any disputes arising from or relating to these Terms or your use of the Site will be governed by and construed in accordance with the laws of England and Wales. Any legal action related to these Terms shall be brought exclusively in the courts of England and Wales."
    },
    {
        title: "Contact Information",
        text: "If you have any questions or concerns regarding these Terms, please contact us at:",
        list: [
            {
                subheading: "Email",
                details: "[Insert company email]"
            },
            {
                subheading: "Phone",
                details: "[Insert company phone]"
            },
            {
                subheading: "Address",
                details: "26 Berryscroft Lane, Romiley, Stockport, Cheshire, United Kingdom, SK6 3AU"
            }
        ]
    },
    {
        title: "Entire Agreement",
        text: "These Terms, along with our Privacy Policy, constitute the entire agreement between you and CLEARPATH GROUP LIMITED regarding the use of the Site and Services and supersede any prior agreements."
    }
];

const Terms_Conditions = () => {
    return (
        <div className="terms-conditions space-y-4 text-sm text-gray-800 overflow-y-auto">
            <p>Welcome to CLEARPATH GROUP LIMITED ("Company," "we," "us," or "our"). By accessing or using our website ("Site") and any of the services provided ("Services"), you agree to comply with and be bound by the following Terms and Conditions ("Terms"). Please review these carefully. If you do not agree to these Terms, you should not use the Site or the Services.</p>

            {termsContent.map((section, index) => (
                <div key={index} className="space-y-2">
                    <h3 className="font-semibold">{section.title}</h3>
                    <p>{section.text}</p>

                    {section.list && (
                        <ul className="list-disc pl-5 space-y-2">
                            {section.list.map((item, idx) => (
                                <li key={idx}>
                                    <strong>{item.subheading}:</strong> {item.details}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Terms_Conditions;
