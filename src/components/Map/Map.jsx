const Map = () => {
    return ( 
        <div className="map w-full flex flex-col items-center py-10 px-4 xl:px-0 bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600">
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white mb-6 drop-shadow-lg">
                <p>Where to find us?</p>
            </div>
            <div className="address text-center text-sm sm:text-base md:text-lg lg:text-xl text-white mb-6 drop-shadow-md">
                <p>Bold Bauhaus, 27 Quay Street, Manchester, United Kingdom, M3 3GY</p>
            </div>
            <div className="mapswrapper w-full max-w-screen-xl h-64 sm:h-80 md:h-96 lg:h-[600px] rounded-lg overflow-hidden shadow-lg my-6 transition-all transform hover:shadow-2xl duration-300">
                <iframe
                    width="100%"
                    height="100%"
                    loading="lazy"
                    allowFullScreen
                    src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Bold%20Bauhaus%2C%2027%20Quay%20Street%2C%20Manchester%2C%20United%20Kingdom%2C%20M3%203GY&zoom=10&maptype=roadmap"
                    className="border-0 rounded-lg"
                    title="27 Quay St, Manchester M3 3GY, UK"
                ></iframe>
            </div>
        </div>
    );
};

export default Map;
