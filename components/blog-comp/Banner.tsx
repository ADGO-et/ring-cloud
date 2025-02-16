'use client';

import React from 'react';
import RotateWrapper from "../animation/RotateWrapper";
import FadeIn from "../animation/FadeIn";
import SlideFrom from "../animation/SlideFrom";

const Banner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-primaryColor to-blue-800 rounded-xl p-12 m-8 flex flex-col md:flex-row justify-between items-center text-white relative overflow-hidden w-full max-w-6xl mx-auto shadow-lg">
      <div className="md:max-w-lg">
        <RotateWrapper direction="vertical">
          <h1 className="text-2xl font-bold">Lorem Ipsum Lorem Ipsum Lorem Ipsum</h1>
        </RotateWrapper>
        <FadeIn className="mt-2 text-sm text-gray-300">
          Find out how to make decisions, solve problems, and draw early-stage conclusions to run your own business.
        </FadeIn>
      </div>
      <SlideFrom from="right" className=''>
        <button className="bg-yellow-400 text-black font-semibold px-4 py-2 rounded-lg mt-4 md:mt-0 hover:bg-yellow-500 transition">
          Register Now
        </button>
      </SlideFrom>
      <div className="absolute top-6 right-6 grid grid-cols-4 gap-1 opacity-50">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 bg-white rounded-full opacity-40"></div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
