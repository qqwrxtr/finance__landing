import { Link, useNavigate } from "react-router-dom";

const Contact_Us = () => {
    const navigate = useNavigate();

    return (
        <div className="contact-us flex flex-col items-center px-4 py-10 sm:px-10 lg:px-20 bg-[#1d1d1d] text-white">
            <div className="w-full max-w-3xl flex justify-between items-center mb-[5px]">
                <Link to="/" className="text-[#fc291d] hover:underline">
                    ← Go Back
                </Link>
            </div>
            <hr className="w-full max-w-3xl border-t border-gray-700 mb-8" />

            <div className="content w-full max-w-3xl text-center">
                <h1 className="text-3xl md:text-4xl font-bold text-[#fc291d] mb-6">Contact Us</h1>
                <p className="text-base md:text-lg text-gray-300 mb-4">
                    We're here to help. Reach out with any questions or inquiries, and our team will get back to you promptly.
                </p>
                <p className="text-base md:text-lg text-gray-300 mb-8">
                    You can also reach us directly at{" "}
                    <a href="mailto:support@cglimited.org" className="text-[#fc291d] hover:underline">
                        support@cglimited.org
                    </a>.
                </p>
                <form className="space-y-6">
                    <div>
                        <label className="block text-left text-sm font-medium text-gray-400 mb-1">Name</label>
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full px-4 py-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-[#fc291d]"
                        />
                    </div>
                    <div>
                        <label className="block text-left text-sm font-medium text-gray-400 mb-1">Email</label>
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full px-4 py-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-[#fc291d]"
                        />
                    </div>
                    <div>
                        <label className="block text-left text-sm font-medium text-gray-400 mb-1">Message</label>
                        <textarea
                            placeholder="Your Message"
                            rows="5"
                            className="w-full px-4 py-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-[#fc291d]"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 px-4 rounded-md bg-[#fc291d] text-white font-semibold hover:bg-red-700 transition duration-300"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact_Us;
