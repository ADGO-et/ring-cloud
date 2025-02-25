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
import pro from "@/public/assets/user.png";
import Image from "next/image";

interface Feedback {
  name: string;
  image: string;
  title: string;
  rating: number;
  review: string;
}

const testimonials: Feedback[] = [
  {
    name: "Leo",
    image: pro,
    title: "It was a very good experience",
    rating: 4,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas...",
  },
  {
    name: "Leo",
    image: pro,
    title: "It was a very good experience",
    rating: 4,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas...",
  },
  {
    name: "Leo",
    image: pro,
    title: "It was a very good experience",
    rating: 4,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas...",
  },
  {
    name: "Leo",
    image: pro,
    title: "It was a very good experience",
    rating: 4,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas...",
  },
  {
    name: "Leo",
    image: pro,
    title: "It was a very good experience",
    rating: 4,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas...",
  },
];

export default function TestimonialSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="py-12 px-4 relative flex flex-col items-center">
      <h2 className="text-2xl font-bold text-center text-[#002F6C]">
        What Our Clients Say About Us
      </h2>
      <div className="relative w-full max-w-4xl pb-3">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          pagination={{
            el: ".custom-pagination",
            clickable: true,
            dynamicBullets: false, // Ensures all dots stay fixed
          }}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="mt-6"
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div
                className={`bg-white p-6 rounded-lg shadow-lg w-full max-w-sm mx-auto transition-all duration-300 ${
                  index === activeIndex + 1
                    ? "scale-110 "
                    : "scale-95 opacity-80"
                }`}
              >
                <div className="flex items-center">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full mr-3"
                    width={10}
                    height={10}
                  />
                  <p className="text-lg font-bold">{testimonial.name}</p>
                </div>
                <div className="flex items-center mt-2 text-yellow-400">
                  {Array.from({ length: 5 }, (_, i) =>
                    i < testimonial.rating ? (
                      <FaStar key={i} />
                    ) : (
                      <FaStarHalfAlt key={i} />
                    )
                  )}
                </div>
                <p className="mt-3 text-sm font-semibold">
                  {testimonial.title}
                </p>
                <p className="text-gray-500 text-sm mt-2">
                  {testimonial.review}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Fixed Pagination & Navigation Arrows */}
        <div className="absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 flex items-center space-x-4 pt-5">
          <button className="custom-prev p-3  text-primaryColor rounded-full hover:bg-opacity-80">
            <FaChevronLeft size={20} />
          </button>

          {/* Fixed Pagination Dots */}
          <div className="custom-pagination flex space-x-2"></div>

          <button className="custom-next p-3 text-primaryColor  rounded-full hover:bg-opacity-80">
            <FaChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
