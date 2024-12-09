import React from 'react';
import CGL_certificate from './../../assets/Certificate CGL1.png';

const Why_ChooseUs = () => {
  return (
    <div className="why-choose-us py-14 sm:py-20 bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 backdrop-blur-md bg-opacity-20 text-white flex justify-center px-4 sm:px-6">
      <div className="max-w-screen-xl w-full px-4 sm:px-6 lg:px-8 py-8 md:pb-12 xl:pb-20 flex flex-col items-center bg-white bg-opacity-10 rounded-lg backdrop-blur-md">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-10 tracking-wide text-white drop-shadow-lg text-center">
          Why Choose Us?
        </h2>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16 w-full">
          {/* Text Section */}
          <div className="text-section text-center lg:text-left max-w-lg">
            <p className="text-base sm:text-lg lg:text-xl font-light leading-relaxed mb-4 sm:mb-6 text-white/90">
              Clearpath Group Limited stands out as a trusted leader in financial education, known for its innovative course designs, expert instructors, and a results-driven approach that sets the standard in the industry.
            </p>
            <p className="text-base sm:text-lg lg:text-xl font-medium leading-relaxed text-white/90">
              This acknowledgment celebrates the company’s dedication to professionalism, integrity, and its impact on advancing financial literacy and expertise.
            </p>
          </div>

          {/* Certificate Image */}
          <div className="certificate-image relative w-full sm:w-3/4 lg:w-1/2 flex justify-center">
            <div className="bg-gradient-to-br from-white/20 to-white/10 p-3 rounded-3xl shadow-xl transform hover:scale-105 transition-all duration-300">
              <div className="bg-white/10 rounded-2xl p-4 border border-white/10 backdrop-blur-lg">
                <img
                  src={CGL_certificate}
                  alt="Certificate of Competence of Clearpath Group Limited"
                  className="rounded-xl object-cover shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why_ChooseUs;
