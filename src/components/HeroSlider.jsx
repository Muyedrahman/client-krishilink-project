import React from 'react';

import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';




import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// slide data 
const slides = [
  {
    img: "https://i.ibb.co.com/8Dgg3r5B/slider1.jpg",
    title: "Sell Your Harvest Easily",
    subtitle: "Post your crops and attract buyers instantly.",
  },
  {
    img: "https://i.ibb.co.com/8gymbwJw/slid1.jpg",
    title: "Connect with Local Farmers",
    subtitle: "Find fresh crops directly from growers near you.",
  },
  {
    img: "https://i.ibb.co.com/DH5Tdny3/Strawberry8.jpg",
    title: "Fresh Fruits for Sale",
    subtitle: "Explore seasonal fruits straight from the farm to your table.",
  },
];




const HeroSlider = () => {
    return (
      <Swiper
        modules={[Pagination, Autoplay, Navigation]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        pagination={{ clickable: true }}
        Navigation
        className="h-[500px]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-[500px] flex flex-col justify-center items-center bg-cover bg-center text-white relative"
              style={{ backgroundImage: `url(${slide.img})` }}
            >
            
              <div className="absolute inset-0 bg-black/40"></div>

             
              <div className="relative z-10 text-center px-4">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  {slide.title}
                </h2>
                <p className="text-lg md:text-xl">{slide.subtitle}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    );
};

export default HeroSlider;