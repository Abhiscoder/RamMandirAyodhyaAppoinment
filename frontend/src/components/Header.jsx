import React, { useEffect, useState } from 'react';
import { assets } from '../assets/assets';

const sliderImages = [
  assets.header_img,
  assets.header_img_2,
  assets.header_img_3,
  assets.header_img_4,
  assets.header_img_5,
];

const Header = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevIndex(currentIndex);
      setCurrentIndex((prev) =>
        prev === sliderImages.length - 1 ? 0 : prev + 1
      );
      setIsSliding(true);
      setTimeout(() => setIsSliding(false), 1000); 
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="flex flex-col md:flex-row flex-wrap bg-orange-400 rounded-lg px-6 md:px-8 pt-2 pb-2 md:pt-4 md:pb-4 lg:pt-6 lg:pb-6 overflow-hidden">
      
      {/* Left Section */}
      <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 pb-6 md:py-[4vw]">
        <p className="text-3xl sm:text-4xl lg:text-5xl text-white font-semibold leading-tight">
          Book Appointment <br /> With Visit RamMandir
        </p>
        <div className="flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light">
          <p>
            Simply explore our curated list of trusted Ayodhya guides and services,
            <br className="hidden sm:block" />
            and plan your visit to Ram Mandir and explore Ayodhya.
          </p>
        </div>
        <a
          href="#speciality"
          className="flex items-center gap-2 bg-orange-100 px-8 py-3 rounded-full text-gray-600 text-sm hover:scale-105 transition-all duration-300"
        >
          Book Appointment <img className="w-3" src={assets.arrow_icon} alt="icon" />
        </a>
      </div>

      {/* Right Section - Slider */}
      <div className="md:w-1/2 relative h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] w-full overflow-hidden rounded-lg">
        {sliderImages.map((img, index) => {
          const isCurrent = index === currentIndex;
          const isPrevious = index === prevIndex && isSliding;

          let classes = 'absolute top-0 left-0 w-full h-full transition-all duration-1000 ease-in-out';
          if (isCurrent) {
            classes += ' z-20 translate-x-0 opacity-100';
          } else if (isPrevious) {
            classes += ' z-10 translate-x-full opacity-100';
          } else {
            classes += ' -translate-x-full opacity-0 z-0';
          }

          return (
            <div key={index} className={classes}>
              <img
                src={img}
                alt={`slide_${index}`}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Header;