import ceo from "./../../assets/ded_serios.jpg";
import manager from "./../../assets/teolca.png";
import team_leader from "./../../assets/perdun.png";

const employers_data = [
    {
        id: 1,
        position: "CEO",
        name: "Bradley Paul",
        description: "Oversees the overall strategic direction of CLEARPATH GROUP LIMITED.",
        img: ceo
    },
    {
        id: 2,
        position: "Manager",
        name: "Beatrice Netta",
        description: "Leads daily operations and ensures smooth workflow across departments.",
        img: manager
    },
    {
        id: 3,
        position: "Team Leader",
        name: "Chester Morris",
        description: "Guides project teams to achieve key business goals and client satisfaction.",
        img: team_leader
    },
];

const Employers = () => {
    return (
        <div className="employers py-10 sm:py-16 text-gray-800">
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
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-10">
                    {employers_data.map((employer, index) => (
                        <div
                            key={employer.id}
                            className={`text-center bg-white shadow-lg rounded-lg p-6 transform transition hover:scale-105 ${
                                employers_data.length % 2 !== 0 && index === employers_data.length - 1 ? 'sm:col-span-2 md:col-span-1' : ''
                            }`}
                        >
                            <img
                                src={employer.img}
                                alt={`${employer.name} - ${employer.position}`}
                                className="w-24 h-24 md:w-32 md:h-32 mx-auto rounded-full mb-4 object-cover shadow-md"
                            />
                            <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                                {employer.name}
                            </h3>
                            <p className="text-gray-500 text-sm font-medium mb-2">
                                {employer.position}
                            </p>
                            <p className="text-gray-700 text-sm leading-relaxed">
                                {employer.description}
                            </p>
                        </div>
                    ))}
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
