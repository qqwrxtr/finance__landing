const lessons = [
    {
        id: 1,
        name: "Mastering Money Management",
        price: "£499",
        description: [
            "📚 Expert-led video lessons",
            "🧩 Interactive exercises and quizzes",
            "📝 Real-life case studies and examples",
            "💼 Personalized financial planning templates",
            "🧪 Practical case studies and simulations",
        ],
    },
    {
        id: 2,
        name: "Advanced Financial Mastery",
        price: "£999",
        description: [
            "🎥 Advanced video tutorials led by industry experts",
            "🛠️ Hands-on workshops with real-world financial scenarios",
            "📊 Exclusive templates for advanced financial planning",
            "🌐 Access to webinars and Q&A sessions with professionals",
        ],
    },
    {
        id: 3,
        name: "Premium Financial Strategies",
        price: "£2,499",
        description: [
            "👨‍💼 Private one-on-one coaching sessions with financial experts",
            "🤝 Access to a members-only mastermind group",
            "🔍 In-depth case studies of ultra-high-net-worth strategies",
            "🛎️ VIP support and direct access to course instructors",
            "🔄 Lifetime access to course updates",
        ],
    },
];

const What_Help = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className="what_help flex py-10 w-full justify-center text-center px-4 lg:px-8 xl:px-0 bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600">
            <div className="max-w-screen-xl flex flex-col items-center">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8 drop-shadow-lg">
                    Courses We Provide
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full px-4 md:px-0">
                    {lessons.map((lesson, index) => (
                        <div
                            key={lesson.id}
                            className={`group relative flex flex-col items-center p-6 rounded-lg shadow-2xl bg-gradient-to-br from-white/5 to-white/20 backdrop-blur-md border border-white/30 transition-all transform hover:scale-105 hover:shadow-2xl duration-300 ${index === 2 && 'md:col-span-2 md:justify-self-center lg:col-span-1'
                                }`}
                        >
                            <div className="absolute inset-0 z-[-1] bg-gradient-to-tr from-blue-500 via-purple-500 to-indigo-600 opacity-10 rounded-lg group-hover:opacity-30 transition-opacity duration-300"></div>
                            <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-2 group-hover:text-yellow-300 transition-colors duration-300">
                                {lesson.name}
                            </h3>
                            <p className="text-lg sm:text-xl md:text-2xl font-bold text-yellow-300 mb-4">
                                {lesson.price}
                            </p>
                            <div className="text-sm sm:text-base md:text-lg text-white/80 group-hover:text-white whitespace-pre-line leading-loose text-start min-h-40 h-full">
                                {lesson.description.map((line, idx) => (
                                    <p key={idx} className="mb-2">
                                        {line}
                                    </p>
                                ))}
                            </div>
                            <button
                                onClick={scrollToTop}
                                className="mt-6 bg-yellow-300 hover:bg-yellow-200 text-black font-bold py-2 px-5 rounded-full shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 text-base sm:text-lg"
                            >
                                Enroll Now
                            </button>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="cta mt-12 text-center">
                    <p className="text-lg sm:text-xl md:text-2xl text-white mb-6">
                        Did you decide which lesson you'd like to take? <br />
                        Complete the form above, and we’ll call you!
                    </p>
                    <button
                        onClick={scrollToTop}
                        className="bg-yellow-300 hover:bg-yellow-200 text-black font-bold py-3 px-6 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300"
                    >
                        Complete the Form
                    </button>
                </div>
            </div>
        </div>
    );
};

export default What_Help;
