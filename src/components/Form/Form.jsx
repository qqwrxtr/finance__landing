import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import background from "./../../assets/123.png";
import Terms_Conditions from "./../Terms_Condition/Terms_Conditions";

const Form = () => {
    const [agreed, setAgreed] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const handleShowTerms = () => setShowModal(true);
    const handleCloseTerms = () => setShowModal(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!agreed) {
            toast.error("Please agree to the terms and conditions before subsribing.");
            return;
        } else {
            toast.success("Corect");
            return;
        }
    };

    return (
        <>
            <ToastContainer position="bottom-right" />
            <div className="form flex min-h-[500px] md:min-h-[875px] relative">
                <div className="background__form -z-10 absolute top-0 left-0 w-full h-full">
                    <img src={background} alt="" className="w-full h-full object-cover brightness-50 md:brightness-100" />
                </div>
                <form onSubmit={handleSubmit} className="form relative z-10 bg-opacity-10 text-white w-full py-10 md:px-20 md:py-32 xl:px-80 flex flex-col items-center md:block sm:px-0 sm:py-16">
                    <div className="form__title text-2xl sm:text-4xl text-center md:text-start md:text-5xl font-bold max-w-lg">
                        <p>Choose the market you want to trade</p>
                    </div>
                    <div className="form__undertitle py-5 sm:py-10 text-xs sm:text-sm max-w-md text-center md:text-start">
                        <p>Trade with CGL on multiple markets such as forex, derived, stocks & indices, cryptocurrencies, and commodities.</p>
                    </div>
                    <div className="form__capture__email text-sm max-w-lg rounded-md overflow-auto text-black w-full px-3 sm:px-0">
                        <input type="email" placeholder="Email address" className="pl-2 px-3 py-3 w-full rounded" />
                    </div>
                    <div className="sign__in py-6 max-w-lg w-full px-3 sm:px-0">
                        <button type="submit" className="bg-[#fc291d] hover:bg-[#e7453c] text-white font-bold py-2 px-4 rounded w-full max-w-lg">Subscribe</button>
                    </div>
                    <div className="agree pb-6 text-center md:text-start text-xs md:text-md">
                        <input type="checkbox" id="agree" name="agree" checked={agreed} onChange={() => setAgreed(!agreed)} />
                        <label htmlFor="agree" className="pl-2">
                            I agree to the <button type="button" onClick={handleShowTerms} className="text-[#fc291d] underline">terms and conditions</button>
                        </label>
                    </div>
                    <div className="confirm__18 max-w-lg text-xs text-center md:text-start">
                        <p>By pressing "Subscribe", you confirm that you are 18 or older. You understand that we may use your email address to send you information about CGL products and services as well as market news</p>
                    </div>
                </form>

                {showModal && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
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
        </>
    );
};

export default Form;
