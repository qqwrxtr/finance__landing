import { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import background from "./../../assets/download.svg";

const Form = () => {
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [agreed, setAgreed] = useState(false);
    const navigate = useNavigate();

    const handlePhoneNumberChange = (e) => {
        let input = e.target.value.replace(/\D/g, "");
        
        if (input.length <= 3) {
            input = input;
        } else if (input.length <= 6) {
            input = input.slice(0, 3) + "-" + input.slice(3, 6);
        } else if (input.length <= 9) {
            input = input.slice(0, 3) + "-" + input.slice(3, 6) + "-" + input.slice(6, 9);
        } else {
            input = input.slice(0, 3) + "-" + input.slice(3, 6) + "-" + input.slice(6, 9) + "-" + input.slice(9, 13);
        }
    
        setPhoneNumber(input);
    };
    

    const handleSubmit = (e) => {
        e.preventDefault();

        if (name.trim() === "") {
            toast.error("Please enter your name.");
            return;
        }

        if (phoneNumber.trim() === "") {
            toast.error("Please enter your phone number.");
            return;
        }

        if (!agreed) {
            toast.error("Please agree to the terms and conditions.");
            return;
        }

        toast.success("Subscription successful!");
        setName("");
        setPhoneNumber("");
        setAgreed(false);
    };

    return (
        <>
            <div className="form flex min-h-[600px] md:min-h-[750px] relative">
                <div className="background__form -z-10 absolute top-0 left-0 w-full h-full bg-[#121212]">
                    <img src={background} alt="" className="w-full h-full object-cover brightness-50 md:brightness-100" />
                </div>
                <div className="flex text-white flex-col items-center justify-center w-full -mt-6 px-4">
                    <div className="introduction__text lg:pb-10">
                        <div className="form__title text-2xl sm:text-4xl text-center md:text-5xl xl:text-6xl font-bold max-w-full">
                            <p>Get Financial Advice from Our Experts</p>
                        </div>
                        <div className="form__undertitle py-5 sm:py-3 text-xs sm:text-sm md:text-base xl:text-lg max-w-full text-center">
                            <p>Receive personalized financial guidance on investments, retirement planning, and asset management.</p>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit} className="form relative z-10 bg-opacity-10 text-white w-full flex flex-col items-center justify-center px-4">
                        <div className="form__capture__name text-sm max-w-lg rounded-md overflow-auto text-black w-full px-3 sm:px-0 mb-4">
                            <input
                                type="text"
                                placeholder="Full Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="pl-2 px-3 py-3 w-full rounded"
                            />
                        </div>
                        <div className="form__capture__phone text-sm max-w-lg rounded-md overflow-auto text-black w-full px-3 sm:px-0 mb-4">
                            <input
                                type="text"
                                placeholder="Phone Number (e.g., 123-456-7890)"
                                value={phoneNumber}
                                onChange={handlePhoneNumberChange}
                                className="pl-2 px-3 py-3 w-full rounded"
                            />
                        </div>
                        <div className="sign__in pb-7 max-w-lg w-full px-3 sm:px-0">
                            <button type="submit" className="bg-[#fc291d] hover:bg-[#e7453c] text-white font-bold py-2 px-4 rounded w-full max-w-lg hover:scale-105 duration-300">Request Consultation</button>
                        </div>
                        <div className="agree pb-6 text-center md:text-start text-xs md:text-base">
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
                        <div className="confirm__18 max-w-2xl text-xs text-center md:text-center md:text-sm">
                            <p>By pressing "Request Consultation", you confirm that you are 18 or older. You understand that we may use your phone number to contact you regarding our financial advisory services.</p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Form;
