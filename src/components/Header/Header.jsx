import logo from "./../../assets/CGL-removebg.png";
import email from "./../../assets/email.svg";

const Header = () => {
    return (
        <header className="header p-3 bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 backdrop-blur-md bg-opacity-20">
            <div className="glass__effect bg-white bg-opacity-10 rounded-lg backdrop-blur-md flex items-center justify-between py-4 px-6 sm:px-5 lg:px-5 w-full ">
            <div className="logo flex items-center">
                <a href="/" className="flex items-center group">
                    <div className="logo__img w-10 sm:w-10 md:w-14">
                        <img
                            src={logo}
                            alt="Company Logo"
                            className="w-full transition-transform duration-300 group-hover:scale-105"
                        />
                    </div>
                    <div className="logo__name text-2xl ml-3 sm:text-3xl md:text-4xl font-bold text-white group-hover:text-yellow-300 drop-shadow-md">
                        <p>C<span className="hidden md:!inline">learpath</span> G<span className="hidden md:!inline">roup</span> L<span className="hidden md:!inline">imited</span></p>
                    </div>
                </a>
            </div>
            <div className="email flex items-center">
                <a
                    href="mailto:support@cglimited.org"
                    className="flex items-center gap-3 px-3 py-2 bg-white bg-opacity-10 rounded-lg shadow-lg backdrop-blur-md hover:bg-opacity-30 transition-all duration-300"
                >
                    <div className="email__img w-6 sm:w-8">
                        <img
                            src={email}
                            alt="Email Icon"
                            className="w-full drop-shadow-md"
                        />
                    </div>
                    <div className="email__text hidden lg:!block text-white text-sm sm:text-base md:text-lg font-medium group-hover:text-yellow-300">
                        <p>support@cglimited.org</p>
                    </div>
                </a>
            </div>
            </div>
        </header>
    );
};

export default Header;
