import { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

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
        } else {
            input = input.slice(0, 3) + "-" + input.slice(3, 6) + "-" + input.slice(6, 10);
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
        <div className="form min-h-[600px] md:min-h-[750px] flex items-center justify-center relative bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600">
            <div className="w-full max-w-screen-xl px-6 sm:px-8 lg:px-12 text-white bg-white/10 backdrop-blur-lg rounded-xl shadow-2xl py-8 sm:py-12 lg:py-16 m-4 sm:m-8 lg:m-12">
                <div className="div pb-2">
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-2">
                        Empower Your Finances—From Beginner to Expert!
                    </h1>
                    <p className="text-sm sm:text-base lg:text-lg text-center mb-8">
                        Don’t wait. Enroll now and start gaining the confidence to manage your money like a pro!
                    </p>
                </div>
                <form onSubmit={handleSubmit} className="flex flex-col items-center w-full space-y-4">
                    <input
                        type="text"
                        placeholder="Full Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full sm:w-4/5 lg:w-3/5 p-3 sm:p-4 text-black rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-purple-400"
                    />
                    <input
                        type="text"
                        placeholder="Phone Number (e.g., 123-456-7890)"
                        value={phoneNumber}
                        onChange={handlePhoneNumberChange}
                        className="w-full sm:w-4/5 lg:w-3/5 p-3 sm:p-4 text-black rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />

                    <button
                        type="submit"
                        className="bg-yellow-300 hover:bg-yellow-200 text-black font-bold py-2 sm:py-4 px-4 sm:px-6 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 active:scale-95 transition duration-300 w-full sm:w-4/5 lg:w-3/5"
                    >
                        Secure Your Spot
                    </button>

                    <div className="flex flex-row items-center justify-center sm:w-4/5 lg:w-3/5 text-sm sm:text-base pt-4">
                        <input
                            type="checkbox"
                            id="agree"
                            name="agree"
                            checked={agreed}
                            onChange={() => setAgreed(!agreed)}
                            className="mr-2 w-4 h-4 sm:w-5 sm:h-5 focus:ring focus:ring-indigo-400"
                        />
                        <label htmlFor="agree" className="text-center sm:text-left text-xs sm:text-base pt-[3px]">
                            I agree to the{" "}
                            <button
                                type="button"
                                onClick={() => navigate("/terms-conditions")}
                                className="text-yellow-300 underline"
                            >
                                terms and conditions
                            </button>
                        </label>
                    </div>
                </form>
                <p className="text-xs sm:text-sm text-center mt-3 md:mx-20">
                    By pressing "Secure Your Spot", you confirm that you are 18 or older. You understand that we may
                    use your phone number to contact you regarding our financial advisory services.
                </p>
            </div>
        </div>
    );
};

export default Form;
