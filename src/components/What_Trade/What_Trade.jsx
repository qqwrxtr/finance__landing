import first from "./../../assets/111.jpg"
import second from "./../../assets/222.jpg"
import third from "./../../assets/333.jpg"
import forth from "./../../assets/444.jpg"
import fith from "./../../assets/555.jpg"

const what_trade = [
    {
        "id": 1,
        "name": "Forex",
        "description": "Take part in the world's largest financial market with over $5 trillion daily trades. Choose between long-term or day trading on forex with a regulated online forex broker trusted by millions.",
        img:first
    },
    {
        "id":2,
        "name": "Stocks & Indices",
        "description": "Diversify your risk by trading the world's top performing stocks & indices. Our stocks & indices offer competitively priced equities and assets that you can trade outside the regular hours of major stock markets.",
        img:second
    },
    {
        "id":3,
        "name": "Commodities",
        "description": "You can trade commodities like gold, silver, crude oil & other assets. Profit from the price difference when the commodity market moves in your favour.",
        img:third
    },
    {
        "id":4,
        "name": "Derived",
        "description": "Trade on asset prices derived from real-world or simulated markets. Manage your exposure by selecting the volatility level to suit your risk appetite. Choose from our 24/7 synthetics and derived.",
        img:forth
    },
    {
        "id":5,
        "name": "Cryptocurrencies",
        "description": "Crypto trading allows you to benefit from correctly predicting the price movements of cryptocurrencies without owning them.",
        img:fith
    }
]

const What_Trade = () => {
    return ( 
        <div className="what_trade flex py-10 w-full justify-center text-center">
            <div className="items-center max-w-screen-xl flex flex-col">    
                <div className="title text-3xl sm:text-4xl md:text-4xl font-semibold mb-6">
                    <p>Trade whatever you want</p>
                </div>
                <div className="trade__info space-y-8">
                    {what_trade.map((item, index) => (
                        <div
                            key={item.id}
                            className={`flex flex-col-reverse ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-start md:items-center text-left space-y-4 md:space-y-0 px-4 md:px-0`}
                        >
                            <img src={item.img} alt={item.name} className="w-full md:w-1/2 rounded-lg shadow-md " />
                            <div className="text-container md:w-1/2 text-center md:text-left md:px-4 md:pb-0 pb-2">
                                <h3 className="text-xl font-semibold">{item.name}</h3>
                                <p className="mt-2 text-gray-600 text-base md:text-lg">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default What_Trade;
