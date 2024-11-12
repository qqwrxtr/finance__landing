const Why_ChooseUs = () => {
    return (
        <div className="why_choose_us py-10 sm:py-16 text-black">
            <div className="max-w-screen-xl mx-auto px-6 lg:px-8 xl:px-0">
                <div className="title text-center mb-8">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                        Why Choose Clearpath Group Limited?
                    </h2>
                    <p className="mt-4 text-xl sm:text-2xl ">
                        Empowering You with Trusted Financial Expertise
                    </p>
                </div>
                <div className="description text-center sm:text-left text-sm sm:text-md md:text-lg mb-8 sm:mb-12 leading-relaxed">
                    <p>
                        At <span className="font-bold">Clearpath Group Limited</span>, we provide a combination of expert
                        financial guidance, innovative strategies, and a client-centered approach to help you achieve your
                        financial goals. Whether you’re planning for retirement, investing in your future, or managing your
                        wealth, we are here to make sure you are equipped with the right tools for success.
                    </p>
                </div>
                <div className="features grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-16">
                    <div className="feature-item text-center bg-white p-6 rounded-xl shadow-lg hover:scale-105 transition duration-300">
                        <div className="icon mb-4">
                            <i className="fas fa-users fa-3x text-[#fc291d]"></i>
                        </div>
                        <h3 className="text-xl font-semibold text-[#242424]">Personalized Approach</h3>
                        <p className="mt-2 text-gray-700">
                            We take the time to understand your unique needs, crafting tailored financial strategies for your
                            specific situation.
                        </p>
                    </div>

                    <div className="feature-item text-center bg-white p-6 rounded-xl shadow-lg hover:scale-105 transition duration-300">
                        <div className="icon mb-4">
                            <i className="fas fa-shield-alt fa-3x text-[#fc291d]"></i>
                        </div>
                        <h3 className="text-xl font-semibold text-[#242424]">Trust & Security</h3>
                        <p className="mt-2 text-gray-700">
                            With years of experience, we pride ourselves on providing transparent and secure processes to
                            protect your assets.
                        </p>
                    </div>

                    <div className="feature-item text-center bg-white p-6 rounded-xl shadow-lg hover:scale-105 transition duration-300 sm:col-span-2 md:col-span-1">
                        <div className="icon mb-4">
                            <i className="fas fa-chart-line fa-3x text-[#fc291d]"></i>
                        </div>
                        <h3 className="text-xl font-semibold text-[#242424]">Comprehensive Guidance</h3>
                        <p className="mt-2 text-gray-700">
                            From investment strategies to retirement planning, we offer a full spectrum of services to guide
                            you toward financial success.
                        </p>
                    </div>
                </div>
                <div className="closing text-center">
                    <p className="text-lg md:text-xl font-semibold mb-4">
                        Choose Clearpath Group Limited as your trusted financial partner and unlock the potential for a
                        prosperous future.
                    </p>
                    <p className=" mb-4">
                        With a deep commitment to integrity and a passion for helping clients, we’re here to ensure your
                        financial journey is smooth and successful.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Why_ChooseUs;
