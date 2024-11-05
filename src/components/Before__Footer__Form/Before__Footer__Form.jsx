import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Terms_Conditions from "./../Terms_Condition/Terms_Conditions";

const Before__Footer__Form = () => {
    const [agreed, setAgreed] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleShowTerms = () => setShowModal(true);
    const handleCloseTerms = () => setShowModal(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!agreed) {
            toast.error("Please agree to the terms and conditions before sending your message.");
            return;
        } else {
            toast.success("Message sent successfully!");
            return;
        }
    };

    return (
        <>
            <ToastContainer position="bottom-right" />
            <div className="contact-method flex py-10 w-full justify-center text-center bg-[#121212] mt-10">
                <div className="form flex relative">
                    <form onSubmit={handleSubmit} className="form relative z-10 bg-opacity-10 text-white w-full flex flex-col items-center md:block">
                        <div className="form__title text-2xl sm:text-4xl text-center md:text-5xl font-bold ">
                            <p>Contact Us</p>
                        </div>
                        <div className="form__undertitle py-5 sm:py-10 text-xs sm:text-sm text-center">
                            <p>If you have any questions or need further assistance, feel free to reach out to us. We’re here to help!</p>
                        </div>
                        
                        <div className="form__capture__name text-sm rounded-md flex justify-center overflow-auto text-black w-full px-3 sm:px-0">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                className="pl-2 px-3 py-3 w-full rounded max-w-lg"
                            />
                        </div>
                        
                        <div className="form__capture__email text-sm rounded-md flex justify-center overflow-auto text-black w-full px-3 sm:px-0 mt-4">
                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                value={formData.email}
                                onChange={handleChange}
                                className="pl-2 px-3 py-3 w-full rounded max-w-lg"
                            />
                        </div>

                        <div className="form__capture__subject text-sm rounded-md flex justify-center overflow-auto text-black w-full px-3 sm:px-0 mt-4">
                            <input
                                type="text"
                                name="subject"
                                placeholder="Subject"
                                value={formData.subject}
                                onChange={handleChange}
                                className="pl-2 px-3 py-3 w-full rounded max-w-lg"
                            />
                        </div>

                        <div className="form__capture__message text-sm rounded-md flex justify-center overflow-auto text-black w-full px-3 sm:px-0 mt-4">
                            <textarea
                                name="message"
                                placeholder="Your Message"
                                value={formData.message}
                                onChange={handleChange}
                                className="pl-2 px-3 py-3 w-full rounded max-w-lg h-32 resize-none"
                            />
                        </div>

                        <div className="sign__in py-6 w-full px-3 sm:px-0">
                            <button type="submit" className="bg-[#fc291d] hover:bg-[#e7453c] text-white font-bold py-2 px-4 rounded w-full max-w-lg">Send Message</button>
                        </div>

                        <div className="agree pb-6 text-xs md:text-md">
                            <input type="checkbox" id="agree" name="agree" checked={agreed} onChange={() => setAgreed(!agreed)} />
                            <label htmlFor="agree" className="pl-2">
                                I agree to the <button type="button" onClick={handleShowTerms} className="text-[#fc291d] underline">terms and conditions</button>
                            </label>
                        </div>
                        <div className="confirm__18 text-xs text-center">
                            <p>By submitting this form, you agree that we may contact you regarding your inquiry and send you updates about our services.</p>
                        </div>
                    </form>

                    {showModal && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center text-start bg-black bg-opacity-50">
                            <div className="bg-white w-full max-w-xl p-6 pt-0 rounded-lg shadow-lg overflow-y-auto max-h-[90vh]">
                                <div className="sticky top-0 bg-white flex justify-between items-center py-4 border-b border-gray-200 z-10">
                                    <h2 className="text-xl font-bold">Terms and Conditions</h2>
                                    <button
                                        onClick={handleCloseTerms}
                                        className="bg-[#fc291d] text-white px-4 py-2 rounded hover:bg-[#e7453c] transition ease-in-out duration-300 shadow-lg"
                                    >
                                        Close
                                    </button>
                                </div>
                                <div className="mt-4">
                                    <Terms_Conditions />
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Before__Footer__Form;
