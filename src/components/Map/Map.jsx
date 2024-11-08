const Map = () => {
    return ( 
        <div className="map w-full flex flex-col items-center py-10 px-4 xl:px-0">
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center">
                <p>Where to find us?</p>
            </div>
            <div className="address text-center text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 mt-4">
                <p>26 Berrycroft Lane, Romiley, Stockport, Cheshire, United Kingdom, SK6 3AU</p>
            </div>
            <div className="mapswrapper w-full max-w-screen-xl h-64 sm:h-80 md:h-96 lg:h-[600px] rounded-lg overflow-hidden shadow-lg my-6">
                <iframe
                    width="100%"
                    height="100%"
                    loading="lazy"
                    allowFullScreen
                    src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Bold%20Bauhaus%2C%2027%20Quay%20Street%2C%20Manchester%2C%20United%20Kingdom%2C%20M3%203GY&zoom=10&maptype=roadmap"
                    className="border-0"
                    title="company address"
                ></iframe>
            </div>
        </div>
    );
};

export default Map;
