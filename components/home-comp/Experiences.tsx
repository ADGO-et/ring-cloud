'use client';
import React from "react";
import Image from "next/image";
import sideimg from '@/public/assets/sidepic.svg';
import cardimage from '@/public/assets/customer.svg';
import Compimg from "./Compimg";
import RotateWrapper from "../animation/RotateWrapper";
import FadeIn from "../animation/FadeIn";
import SlideFrom from "../animation/SlideFrom";

const services = [
  {
    title: "Cloud PBX",
    description: "High-quality call handling, voicemail, call recording, and reporting dashboards.",
    image: cardimage,
  },
  {
    title: "Analytics and Reporting",
    description: "Gain actionable insights into call volumes, agent performance, and customer interactions.",
    image: cardimage,
  },
  {
    title: "Contact Center",
    description: "Intelligent call distribution, advanced analytics, and omni-channel support.",
    image: cardimage,
  },
  {
    title: "Deliver",
    description: "...resulting in a tailored solution that provides you value.",
    image: cardimage,
  },
];

const Experiences = () => {
  return (
    <div className="flex flex-col items-center p-6 lg:p-12 text-center">
      <div className="flex flex-col lg:items-end lg:w-[70%]">
        <Image src={sideimg} alt="side image" className="lg:block hidden top-28 left-10 w-20 h-20" />
              <style jsx global>{`
                  img[alt="side image"]:hover {
                      transform: rotate(360deg);
                      transition: transform 0.5s;
                  }
              `}</style>
        <RotateWrapper direction="vertical">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">Experience the Power of Process.</h2>
        </RotateWrapper>
        <FadeIn className="text-gray-600 max-w-2xl">
          Instead of focusing just on the problem, we take the holistic approach so we can build a solution that works end to end.
        </FadeIn>
      </div>
      <div className="w-full lg:w-[70%]">
        {services.map((service, index) => (
          <SlideFrom key={index} from={index % 2 === 0 ? "left" : "right"} className="mb-8">
            <Compimg image={service.image} title={service.title} description={service.description} clsx={index} />
          </SlideFrom>
        ))}
      </div>
    </div>
  );
};

export default Experiences;
