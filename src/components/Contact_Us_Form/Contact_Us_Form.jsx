import { useState } from "react";
import { toast } from "react-hot-toast";

const Contact_Us = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Field validations
        if (!formData.name.trim()) {
            toast.error("Please enter your name.");
            return;
        }
        if (!/\S+@\S+\.\S+/.test(formData.email)) {
            toast.error("Please enter a valid email address.");
            return;
        }
        if (!formData.subject.trim()) {
            toast.error("Please enter a subject.");
            return;
        }
        if (!formData.message.trim()) {
            toast.error("Please enter a message.");
            return;
        }

        toast.success("Message sent successfully!");

        setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
        });
    };

    return (
        <div className="contact-method py-10 w-full bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 backdrop-blur-md bg-opacity-20 flex justify-center items-center">
            <div className="form glass__effect bg-white bg-opacity-10 rounded-lg shadow-lg backdrop-blur-md mx-8 p-6 sm:p-10 lg:p-12 max-w-screen-xl w-full">
                <form
                    onSubmit={handleSubmit}
                    className="form flex flex-col items-center"
                >
                    {/* Title */}
                    <div className="form__title text-3xl sm:text-4xl lg:text-5xl text-white font-bold text-center mb-4">
                        <p>Contact Us</p>
                    </div>

                    {/* Subtitle */}
                    <div className="form__undertitle text-sm sm:text-base text-white text-center mb-8">
                        <p>
                            If you have any questions or need further assistance, feel free to
                            reach out to us. We’re here to help!
                        </p>
                    </div>

                    {/* Name Input */}
                    <div className="form__capture__name w-full max-w-lg mb-4">
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-md text-black placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-opacity-50"
                        />
                    </div>

                    {/* Email Input */}
                    <div className="form__capture__email w-full max-w-lg mb-4">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-md text-black placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-opacity-50"
                        />
                    </div>

                    {/* Subject Input */}
                    <div className="form__capture__subject w-full max-w-lg mb-4">
                        <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-md text-black placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-opacity-50"
                        />
                    </div>

                    {/* Message Input */}
                    <div className="form__capture__message w-full max-w-lg mb-4">
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-md text-black placeholder-gray-400 shadow-sm h-32 resize-none focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-opacity-50"
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="sign__in w-full max-w-lg">
                        <button
                            type="submit"
                            className="w-full bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-3 px-4 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300"
                        >
                            Send Message
                        </button>
                    </div>

                    {/* Disclaimer */}
                    <div className="confirm__18 text-xs text-center text-white mt-4">
                        <p>
                            By submitting this form, you agree that we may contact you
                            regarding your inquiry and send you updates about our services.
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact_Us;
