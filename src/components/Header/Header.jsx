import logo from "./../../assets/CGL-removebg.png"
import email from "./../../assets/email.svg"


const Header = () => {
    return ( 
        <div className="header flex w-full items-center justify-between sm:px-2 md:px-10 lg:px-20 xl:px-28 py-2 bg-[#121212] text-red z-10">
            <div className="logo">
                <a href="/" className="flex items-center">
                    <div className="logo__img w-20">
                        <img src={logo} alt="company_log" />
                    </div>
                    <div className="logo__name uppercase text-4xl text-[#fc291d]">
                        <p>CGL</p>
                    </div>
                </a>
            </div>
            <div className="email">
                <a href="mailto:support@cglimited.org" className="flex gap-2 px-3 sm:px-0">
                    <div className="email__img w-8 sm:w-6">
                        <img src={email} alt="" />
                    </div>
                    <div className="email__text text-white sm:!inline hidden">
                        <p>support@cglimited.org</p>
                    </div>
                </a>
            </div>
        </div>
     );
}
 
export default Header;