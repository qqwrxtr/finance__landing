import one from "./../../assets/1.png";
import two from "./../../assets/2.png";
import three from "./../../assets/3.png";

const blocks = [
    {
        img: one,
        text: '100+ assets, low spreads and 0% commission',
    },
    {
        img: two,
        text: "30+ withdrawal methods",
    },
    {
        img: three,
        text: "24/7 security",
    },
];

const Why_Trade = () => {
    return (
        <div className="why_trade text-center py-10 w-full flex justify-center">
            <div className="items max-w-screen-xl flex flex-col justify-center">
                <div className="title text-3xl sm:text-4xl md:text-4xl font-semibold">
                    <p>Why trade with CGL?</p>
                </div>
                <div className="blocks grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
                    {blocks.map((block, index) => (
                        <div
                            key={index}
                            className={`block p-4 bg-white rounded-lg shadow-md ${index === 2 && blocks.length === 3 && 'sm:col-span-2 md:col-span-1'
                                }`}
                        >
                            <img src={block.img} alt={block.text} className="w-20 h-22 mx-auto" />
                            <p className="mt-4 text-md sm:text-xl">{block.text}</p>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Why_Trade;
