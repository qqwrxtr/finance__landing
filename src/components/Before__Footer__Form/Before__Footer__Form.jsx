import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Terms_Conditions from "./../Terms_Condition/Terms_Conditions";

const Before__Footer__Form = () => {
    const [agreed, setAgreed] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const handleShowTerms = () => setShowModal(true);
    const handleCloseTerms = () => setShowModal(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!agreed) {
            toast.error("Please agree to the terms and conditions before signing in.");
            return;
        } else {
            toast.success("Correct");
            return;
        }
    };

    return (
        <>
            <ToastContainer position="bottom-right" />
            <div className="trade-method flex py-10 w-full justify-center text-center bg-[#121212] mt-10">
                <div className="form flex relative">
                    <form onSubmit={handleSubmit} className="form relative z-10 bg-opacity-10 text-white w-full flex flex-col items-center md:block">
                        <div className="form__title text-2xl sm:text-4xl text-center md:text-5xl font-bold ">
                            <p>Choose the market you want to trade</p>
                        </div>
                        <div className="form__undertitle py-5 sm:py-10 text-xs sm:text-sm text-center">
                            <p>Trade with CGL on multiple markets such as forex, derived, stocks & indices, cryptocurrencies, and commodities.</p>
                        </div>
                        <div className="form__capture__email text-sm rounded-md flex justify-center overflow-auto text-black w-full px-3 sm:px-0">
                            <input type="email" placeholder="Email address" className="pl-2 px-3 py-3 w-full rounded max-w-lg" />
                        </div>
                        
                        <div className="sign__in py-6 w-full px-3 sm:px-0">
                            <button type="submit" className="bg-[#fc291d] hover:bg-[#e7453c] text-white font-bold py-2 px-4 rounded w-full max-w-lg">Subscribe</button>
                        </div>
                        <div className="agree pb-6 text-xs md:text-md">
                            <input type="checkbox" id="agree" name="agree" checked={agreed} onChange={() => setAgreed(!agreed)} />
                            <label htmlFor="agree" className="pl-2">
                                I agree to the <button type="button" onClick={handleShowTerms} className="text-[#fc291d] underline">terms and conditions</button>
                            </label>
                        </div>
                        <div className="confirm__18  text-xs text-center">
                            <p>By pressing "Sign up", you confirm that you are 18 or older. You understand that we may use your email address to send <br/> you information about CGL products and services as well as market news</p>
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
