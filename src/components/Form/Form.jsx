import { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import background from "./../../assets/123.png";

const Form = () => {
    const [email, setEmail] = useState("");
    const [agreed, setAgreed] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!/\S+@\S+\.\S+/.test(email)) {
            toast.error("Please enter a valid email address.");
            return;
        }

        if (!agreed) {
            toast.error("Please agree to the terms and conditions.");
            return;
        }

        toast.success("Subscription successful!");
        setEmail("")
        setAgreed(false)
    };

    return (
        <>
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
                        <input
                            type="email"
                            placeholder="Email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="pl-2 px-3 py-3 w-full rounded"
                        />
                    </div>
                    <div className="sign__in py-6 max-w-lg w-full px-3 sm:px-0">
                        <button type="submit" className="bg-[#fc291d] hover:bg-[#e7453c] text-white font-bold py-2 px-4 rounded w-full max-w-lg">Subscribe</button>
                    </div>
                    <div className="agree pb-6 text-center md:text-start text-xs md:text-md">
                        <input
                            type="checkbox"
                            id="agree"
                            name="agree"
                            checked={agreed}
                            onChange={() => setAgreed(!agreed)}
                        />
                        <label htmlFor="agree" className="pl-2">
                            I agree to the{" "}
                            <button
                                type="button"
                                onClick={() => navigate("/terms-conditions")}
                                className="text-[#fc291d] underline"
                            >
                                terms and conditions
                            </button>
                        </label>
                    </div>
                    <div className="confirm__18 max-w-lg text-xs text-center md:text-start">
                        <p>By pressing "Subscribe", you confirm that you are 18 or older. You understand that we may use your email address to send you information about CGL products and services as well as market news.</p>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Form;
