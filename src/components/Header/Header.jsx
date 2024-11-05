import logo from "./../../assets/CGL-removebg.png"

const Header = () => {
    return ( 
        <div className="header flex w-full justify-between sm:px-2 md:px-10 lg:px-20 xl:px-28 py-2 bg-[#121212] text-red z-10">
            <div className="logo flex items-center">
                <div className="logo__img w-20">
                    <img src={logo} alt="company_log" />
                </div>
                <div className="logo__name uppercase text-4xl text-[#fc291d]">
                    <p>CGL</p>
                </div>
            </div>
        </div>
     );
}
 
export default Header;