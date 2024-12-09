import logo from "./../../assets/CGL-removebg.png";

const Footer = () => {
    return (
        <footer className="footer p-3 bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 backdrop-blur-md bg-opacity-20 shadow-2xl">
            <div className="glass__effect bg-white bg-opacity-10 rounded-lg backdrop-blur-md flex flex-col items-center sm:flex-row sm:justify-between py-4 px-6 sm:px-10 lg:px-16 w-full">
                <div className="logo flex items-center mb-4 sm:mb-0">
                    <div className="logo__img w-14 sm:w-16 md:w-20">
                        <img src={logo} alt="Company Logo" className="w-full" />
                    </div>
                    <div className="logo__name text-2xl sm:text-3xl md:text-4xl font-bold text-white ml-3 drop-shadow-md">
                        <p>
                            C
                            <span className="hidden md:!inline">learpath</span> G
                            <span className="hidden md:!inline">roup</span> L
                            <span className="hidden md:!inline">imited</span>
                        </p>
                    </div>
                </div>

                {/* Links Section */}
                <div className="links flex flex-col sm:flex-row items-center sm:items-end gap-4 sm:gap-6 text-white text-sm sm:text-base md:text-lg">
                    <div className="privacy">
                        <a
                            href="/privacy-policy"
                            className="relative pb-2 after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-300 hover:after:w-full hover:after:left-0"
                        >
                            Privacy Policy
                        </a>
                    </div>
                    <div className="terms">
                        <a
                            href="/terms-conditions"
                            className="relative pb-2 after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-300 hover:after:w-full hover:after:left-0"
                        >
                            Terms & Conditions
                        </a>
                    </div>
                    <div className="contact_us">
                        <a
                            href="/contact-us"
                            className="relative pb-2 after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-300 hover:after:w-full hover:after:left-0"
                        >
                            Contact Us
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
