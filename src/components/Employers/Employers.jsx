const Employers = () => {
    return (
        <div className="employers py-10 sm:py-16 bg-gray-50 text-gray-800">
            <div className="max-w-screen-xl mx-auto px-2 md:px-6 lg:px-8 xl:px-0">
                <div className="title text-center mb-6">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                        About Our Team
                    </h2>
                </div>
                <div className="subtitle text-center text-sm sm:text-md md:text-lg mb-8 sm:mb-10 text-gray-700 leading-relaxed px-2 sm:px-4 md:px-0">
                    <p>
                        Our team is the foundation of <span className="font-bold">CLEARPATH GROUP LIMITED's</span> success. We are proud to have assembled a group of highly qualified professionals with extensive experience in finance and asset management. Each member of our team brings unique knowledge and expertise, allowing us to offer innovative solutions and reliable financial services to our clients.
                    </p>
                </div>
                <div className="expertise bg-white shadow-lg rounded-lg p-6 sm:p-8 md:p-10 lg:p-12">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 text-gray-800">
                        Areas of Expertise
                    </h3>
                    <ul className="list-disc list-inside space-y-3 sm:space-y-4 text-gray-700 px-4 md:px-0">
                        <li className="text-base sm:text-lg md:text-xl">
                            <strong>Financial Planning and Consulting:</strong> Offering tailored advice to help clients meet their financial goals.
                        </li>
                        <li className="text-base sm:text-lg md:text-xl">
                            <strong>Asset and Investment Management:</strong> Managing investments with a focus on growth and risk mitigation.
                        </li>
                        <li className="text-base sm:text-lg md:text-xl">
                            <strong>Corporate Finance:</strong> Assisting businesses in structuring, capital raising, and strategic decisions.
                        </li>
                        <li className="text-base sm:text-lg md:text-xl">
                            <strong>Market and Risk Analysis:</strong> Utilizing in-depth analysis to inform sound investment decisions.
                        </li>
                        <li className="text-base sm:text-lg md:text-xl">
                            <strong>Tax Planning and Legal Advice:</strong> Providing clients with guidance on tax-efficient strategies and compliance.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Employers;
