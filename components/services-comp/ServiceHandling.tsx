import React from 'react'
import { CardHoverEffect } from './CardHoverEffect'
import RotateWrapper from "../animation/RotateWrapper";


import servicesHandling from '@/public/assets/servicesHandling.png';

import Image from 'next/image';
import FadeIn from '../animation/FadeIn';
import SlideFrom from '../animation/SlideFrom';
const ServiceHandling = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8 py-12 ml-50 mr-50">
      {/* Left Column - Image */}
      <div className="w-full md:w-1/2">
      <SlideFrom from="left" className="md:w-3/4 mt-6 md:mt-0 flex justify-center basis-3/4 ml-10">
        <Image src = {servicesHandling} alt="Service Handling" width={500} height={300} className="rounded-2xl shadow-lg" /> </SlideFrom>
      </div>
      {/* Right Column - Text */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <RotateWrapper direction="vertical">
        <h2 className="text-3xl font-bold mb-5 ml-10 mr-10">What Our Service is Currently Handling</h2>
        </RotateWrapper>
        <FadeIn className="text-gray-700 mb-4 text-lg ml-10 mr-10">With our current infrastructure and software solution, enhancing communication efficiency and customer interaction through innovative cloud technology, here are some of the metrics we keep track of.</FadeIn>
      </div>
    </div>
  );
};


export default ServiceHandling;


