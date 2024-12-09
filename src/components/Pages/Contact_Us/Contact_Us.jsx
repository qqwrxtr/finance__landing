import { Link } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-hot-toast";

const Contact_Us = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        let formValid = true;

        // Simple validation checks
        if (!formData.name) {
            toast.error("Name is required.");
            formValid = false;
        }
        if (!formData.email) {
            toast.error("Email is required.");
            formValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            toast.error("Please enter a valid email address.");
            formValid = false;
        }
        if (!formData.message) {
            toast.error("Message is required.");
            formValid = false;
        }

        if (!formValid) {
            return; // Stop the form submission if validation fails
        }

        try {
            // Simulate form submission (you can replace this with an API call)
            toast.success("Your message has been sent successfully!");

            // Clear form data after submission
            setFormData({
                name: "",
                email: "",
                message: ""
            });
        } catch (error) {
            toast.error("Something went wrong. Please try again.");
        }
    };

    return (
        <div className="contact-us flex flex-col items-center px-6 py-10 sm:px-12 lg:px-24 bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 text-white">
            <div className="w-full max-w-7xl flex justify-between items-center mb-4">
                <Link to="/" className="text-yellow-300 hover:underline text-lg sm:text-xl">
                    ← Go Back
                </Link>
            </div>
            <hr className="w-full max-w-7xl border-t border-white-700 mb-8" />

            <div className="content w-full max-w-7xl space-y-8 text-left bg-white bg-opacity-10 p-10 rounded-lg">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white text-center mb-6 drop-shadow-lg">
                    Contact Us
                </h1>
                <p className="text-base md:text-lg text-white-300 mb-4">
                    We're here to help. Reach out with any questions or inquiries, and our team will get back to you promptly.
                </p>
                <p className="text-base md:text-lg text-white-300 mb-8">
                    You can also reach us directly at{" "}
                    <a href="mailto:support@cglimited.org" className="text-yellow-300 hover:underline">
                        support@cglimited.org
                    </a>.
                </p>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-left text-sm font-medium text-white-400 mb-1">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Your Name"
                            className="w-full px-4 py-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-yellow-300"
                        />
                    </div>
                    <div>
                        <label className="block text-left text-sm font-medium text-white-400 mb-1">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Your Email"
                            className="w-full px-4 py-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-yellow-300"
                        />
                    </div>
                    <div>
                        <label className="block text-left text-sm font-medium text-white-400 mb-1">Message</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            placeholder="Your Message"
                            rows="5"
                            className="w-full px-4 py-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-yellow-300"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-4 px-4 rounded-md bg-yellow-300 text-black font-semibold hover:scale-105 transition duration-300"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact_Us;
