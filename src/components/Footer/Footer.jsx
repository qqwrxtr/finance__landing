import logo from "./../../assets/CGL-removebg.png"

const Footer = () => {
    return (
        <div className="footer flex w-full items-center flex-col text-center min-h-32 sm:flex-row sm:text-right justify-between sm:px-2 md:px-10 lg:px-20 xl:px-28 py-2 bg-[#121212] text-[#fc291d]">
            <div className="logo flex items-center">
                <div className="logo__img w-20">
                    <img src={logo} alt="company_log" />
                </div>
                <div className="logo__name uppercase text-4xl text-[#fc291d]">
                    <p>CGL</p>
                </div>
            </div>
            <div className="links flex gap-5 px-3 flex-col mt-4 sm:mt-0 sm:flex-row text-sm sm:px-0 md:text-lg">
                <div className="privacy">
                    <a href="/privacy-policy" className="relative pb-2 after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-300 hover:after:w-full hover:after:left-0 sm:hover:after:left-0">
                        Privacy Policy
                    </a>
                </div>
                <div className="terms">
                    <a href="/terms-conditions" className="relative pb-2 after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-300 hover:after:w-full hover:after:left-0 sm:hover:after:left-0">
                        Terms & Conditions
                    </a>
                </div>
                <div className="contact_us">
                    <a href="/contact-us" className="relative pb-2 after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-300 hover:after:w-full hover:after:left-0 sm:hover:after:left-0">
                        Contact Us
                    </a>
                </div>
            </div>

        </div>
    );
}

export default Footer;