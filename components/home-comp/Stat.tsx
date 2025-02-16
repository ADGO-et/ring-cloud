"use client";

import { Button } from "../ui/button";
import RotateWrapper from "../animation/RotateWrapper";
import FadeIn from "../animation/FadeIn";
import SlideFrom from "../animation/SlideFrom";

export default function Stat() {
  return (
    <section className="bg-primaryColor text-white py-12 px-6 lg:px-20 my-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div>
          <RotateWrapper direction="vertical">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Let The Number <br /> Speaks For You
            </h2>
          </RotateWrapper>
          <FadeIn className="mt-4 text-gray-300">
            Our track record speaks for itself – let us help you reach your goals.
          </FadeIn>
          <Button className="mt-6 bg-yellow-400 text-primaryColor font-bold py-2 px-6 rounded-lg hover:bg-yellow-500 transition text-3xl">
            +
          </Button>
        </div>

        {/* Right Stats */}
        <SlideFrom from="right" className="flex flex-col space-y-8 items-center w-full">
          <div className="flex flex-col md:flex-row items-center w-full gap-6 md:gap-0">
            <FadeIn className="text-center md:border-r md:border-gray-500 px-6">
              <p className="text-lg text-gray-300">Our Services</p>
              <p className="text-7xl font-bold">+15</p>
            </FadeIn>
            <FadeIn className="text-center px-6">
              <p className="text-lg text-gray-300">Clients</p>
              <p className="text-7xl font-bold">+16K</p>
            </FadeIn>
          </div>

          {/* Progress Bar */}
          <FadeIn className="relative w-full col-span-2">
            <div className="h-1 w-full bg-gray-500 rounded-full relative">
              <div className="h-1 bg-blue-400 w-1/3 rounded-full absolute left-0"></div>
            </div>
          </FadeIn>
        </SlideFrom>
      </div>
    </section>
  );
}
