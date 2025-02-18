import React from "react";
import coverimg from '@/public/assets/customer.svg';
import Image from "next/image";
import Link from "next/link";
import RotateWrapper from "../animation/RotateWrapper";
import FadeIn from "../animation/FadeIn";
import SlideFrom from "../animation/SlideFrom";

const CallPresence = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto p-6 md:p-12 gap-12">
      {/* Text Section */}
      <div className="md:w-1/2 text-center md:text-left">
        <RotateWrapper direction="vertical">
          <h2 className="text-2xl md:text-3xl font-bold text-primaryColor mb-4">
            Perfect solution for your Call Presence
          </h2>
        </RotateWrapper>
        <FadeIn className="text-gray-700 mb-4 text-lg">
          Develop a website by finding a product identity that has value and branding to become a characteristic of a company. We will also facilitate the business marketing of these products with our SEO experts so that they become a ready-to-use website and help sell a product from the company.
        </FadeIn>
        <FadeIn className="">
          <Link href="" className="text-yellow-600 font-semibold hover:underline">
            Learn More
          </Link>
        </FadeIn>
      </div>
      
      {/* Image Section */}
      <SlideFrom from="right" className="md:w-1/2 mt-6 md:mt-0 flex justify-center basis-4/5">
        <Image 
          src={coverimg}
          alt="Call Presence" 
          className="w-full max-w-lg md:max-w-full rounded-lg shadow-lg" 
        />
      </SlideFrom>
    </div>
  );
};

export default CallPresence;
