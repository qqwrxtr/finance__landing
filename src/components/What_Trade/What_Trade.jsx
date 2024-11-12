import first from "./../../assets/111.svg";
import second from "./../../assets/222.svg";
import third from "./../../assets/333.svg";
import forth from "./../../assets/444.svg";
import fith from "./../../assets/555.svg";
import six from "./../../assets/666.svg";

const what_help = [
    {
        "id": 1,
        "name": "Investing",
        "description": "Create an investment strategy to help you achieve your long-term financial goals.",
        img: first
    },
    {
        "id": 2,
        "name": "Budget",
        "description": "Build a personalized spending plan to track your finances and align your priorities, including reducing debt.",
        img: second
    },
    {
        "id": 3,
        "name": "Retirement",
        "description": "Plan effectively for retirement, ensuring you can live comfortably in the future without compromising your current lifestyle.",
        img: third
    },
    {
        "id": 4,
        "name": "Insurance",
        "description": "Ensure you have the right insurance policies to protect you and your loved ones from unexpected life events.",
        img: forth
    },
    {
        "id": 5,
        "name": "Stewardship",
        "description": "Handle your finances responsibly, using principles of wisdom and generosity.",
        img: fith
    },
    {
        "id": 6,
        "name": "Family",
        "description": "Secure your family’s future by planning for education, inheritance, and other key life events.",
        img: six
    }
];


const What_Help = () => {
    return ( 
        <div className="what_help flex py-10 w-full justify-center text-center px-2 md:px-6 lg:px-8 xl:px-0">
            <div className="items-center max-w-screen-xl flex flex-col">    
                <div className="title text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                    <p>How We Can Help You</p>
                </div>
                <div className="help__info grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 md:px-0 ">
                    {what_help.map((item) => (
                        <div
                            key={item.id}
                            className="flex flex-col items-center text-center p-4 rounded-lg shadow-md hover:scale-105 duration-300"
                        >
                            <img src={item.img} alt={item.name} className="w-16 h-16 mb-4" />
                            <h3 className="text-xl font-semibold">{item.name}</h3>
                            <p className="mt-2 text-gray-600 text-base md:text-lg">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default What_Help;
