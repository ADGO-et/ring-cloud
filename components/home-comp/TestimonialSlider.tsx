"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  FaStar,
  FaStarHalfAlt,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

interface Feedback {
  name: string;
  role: string;
  title: string;
  rating: number;
  review: string;
}

const testimonials: Feedback[] = [
  {
    name: "GoodayOn",
    role: "Call center Manager",
    title: "It was a very good experience",
    rating: 4,
    review:
      "We’ve been using RingCloud's call center portal for some time now, and it has truly streamlined our operations. Initially, there were minor issues, but the updated test portal has exceeded our expectations.",
  },
  {
    name: "Sahel MicroFinanace",
    role: "Director",
    title: "It was a very good experience",
    rating: 4,
    review:
      "RingCloud has revolutionized our customer service operations. Their intuitive platform is incredibly easy to use and manage, empowering our team to handle calls efficiently.",
  },
  {
    name: "Globedock Academy",
    role: "Chief Exec. Officer",
    title: "It was a fantastic experience",
    rating: 4,
    review:
      "Here in Ethiopia, we have spent years looking for a call center solution that meets our operational needs and fits our budget, all while remaining flexible enough to grow with us.",
  },
  {
    name: "GoodayOn",
    role: "Call center Manager",
    title: "It was a very good experience",
    rating: 4,
    review:
      "We’ve been using RingCloud's call center portal for some time now, and it has truly streamlined our operations. Initially, there were minor issues, but the updated test portal has exceeded our expectations.",
  },
  {
    name: "Sahel MicroFinanace",
    role: "Director",
    title: "It was a very good experience",
    rating: 4,
    review:
      "RingCloud has revolutionized our customer service operations. Their intuitive platform is incredibly easy to use and manage, empowering our team to handle calls efficiently.",
  },
  {
    name: "Globedock Academy",
    role: "Chief Exec. Officer",
    title: "It was a fantastic experience",
    rating: 4,
    review:
      "Here in Ethiopia, we have spent years looking for a call center solution that meets our operational needs and fits our budget, all while remaining flexible enough to grow with us.",
  },
];

export default function TestimonialSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="py-6 md:py-12 px-4 relative flex flex-col items-center mb-10 md:mb-16 min-h-[400px] md:min-h-[550px]">
      <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-center text-[#002F6C] mb-4 md:mb-6">
        What Our Clients Say About Us
      </h2>
      <div className="relative w-full max-w-[95%] md:max-w-[80%] mx-auto pb-12">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          pagination={{
            el: ".custom-pagination",
            clickable: true,
            dynamicBullets: false,
          }}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
          slidesPerView={1} // Default to 1 slide on mobile
          centeredSlides={true}
          spaceBetween={10} // Smaller space on mobile
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 15 }, // Small screens
            768: { slidesPerView: 2, spaceBetween: 20 }, // Tablet
            1024: { slidesPerView: 3, spaceBetween: 20 }, // Desktop
          }}
          className="mt-4 md:mt-6"
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        >
          {testimonials.map((testimonial, index) => {
            let scaleClass = "scale-80";
            if (index === activeIndex) {
              scaleClass = "scale-100 md:scale-110 z-10"; // Larger on desktop, normal on mobile
            } else if (
              index === (activeIndex - 1 + testimonials.length) % testimonials.length ||
              index === (activeIndex + 1) % testimonials.length
            ) {
              scaleClass = "scale-90 md:scale-90"; // Slightly smaller neighbors
            }
            let heightClass = index === activeIndex ? "h-[280px] md:h-[300px]" : "h-[220px] md:h-64";

            return (
              <SwiperSlide key={index} className="flex items-end">
                <div
                  className={`bg-white p-4 md:p-6 lg:p-8 rounded-lg shadow-lg border w-full transition-all duration-300 ${scaleClass} ${heightClass} flex flex-col justify-center`}
                >
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
                    <p className="text-lg md:text-xl font-bold">{testimonial.name}</p>
                    <p className="text-gray-500 text-sm md:text-base mt-1 md:mt-0 md:ml-2">
                      {testimonial.role}
                    </p>
                  </div>
                  <div className="flex items-center mt-2 text-yellow-400 text-base md:text-lg">
                    {Array.from({ length: 5 }, (_, i) =>
                      i < testimonial.rating ? (
                        <FaStar key={i} />
                      ) : (
                        <FaStarHalfAlt key={i} />
                      )
                    )}
                  </div>
                  <p className="mt-2 md:mt-3 text-sm md:text-base font-semibold">
                    {testimonial.title}
                  </p>
                  <p className="text-gray-500 text-sm md:text-base mt-2 line-clamp-4">
                    {testimonial.review}
                  </p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* Pagination & Navigation Arrows */}
        <div className="absolute bottom-[-60px] md:bottom-[-70px] left-1/2 transform -translate-x-1/2 flex items-center space-x-2 md:space-x-4 pt-4 md:pt-5 w-fit justify-center">
          <button className="custom-prev p-2 md:p-3 text-primaryColor rounded-full hover:bg-opacity-80">
            <FaChevronLeft size={16} className="md:w-5 md:h-5" />
          </button>
          <div className="custom-pagination flex space-x-1 md:space-x-2"></div>
          <button className="custom-next p-2 md:p-3 text-primaryColor rounded-full hover:bg-opacity-80">
            <FaChevronRight size={16} className="md:w-5 md:h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}