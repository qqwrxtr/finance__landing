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
        <div className="contact-method flex py-10 w-full justify-center text-center bg-[#121212]">
            <div className="form flex relative">
                <form onSubmit={handleSubmit} className="form relative z-10 bg-opacity-10 text-white w-full flex flex-col items-center md:block">
                    <div className="form__title text-2xl sm:text-4xl text-center md:text-5xl font-bold">
                        <p>Contact Us</p>
                    </div>
                    <div className="form__undertitle py-5 sm:py-10 text-xs sm:text-sm text-center">
                        <p>If you have any questions or need further assistance, feel free to reach out to us. We’re here to help!</p>
                    </div>
                    <div className="form__capture__name text-sm rounded-md flex justify-center text-black w-full px-3 sm:px-0">
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            className="pl-2 px-3 py-3 w-full rounded max-w-lg"
                        />
                    </div>
                    <div className="form__capture__email text-sm rounded-md flex justify-center text-black w-full px-3 sm:px-0 mt-4">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={handleChange}
                            className="pl-2 px-3 py-3 w-full rounded max-w-lg"
                        />
                    </div>
                    <div className="form__capture__subject text-sm rounded-md flex justify-center text-black w-full px-3 sm:px-0 mt-4">
                        <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="pl-2 px-3 py-3 w-full rounded max-w-lg"
                        />
                    </div>
                    <div className="form__capture__message text-sm rounded-md flex justify-center text-black w-full px-3 sm:px-0 mt-4">
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={handleChange}
                            className="pl-2 px-3 py-3 w-full rounded max-w-lg h-32 resize-none"
                        />
                    </div>
                    <div className="sign__in py-6 w-full px-3 sm:px-0">
                        <button type="submit" className="bg-[#fc291d] hover:bg-[#e7453c] text-white font-bold py-2 px-4 rounded w-full max-w-lg hover:scale-105 duration-300">Send Message</button>
                    </div>
                    <div className="confirm__18 text-xs text-center">
                        <p>By submitting this form, you agree that we may contact you regarding your inquiry and send you updates about our services.</p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact_Us;
