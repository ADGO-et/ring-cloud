'use client';
import React from "react";
import Image from "next/image";
import sideimg from '@/public/assets/sidepic.svg'
import cardimage from '@/public/assets/customer.svg'
import Compimg from "./Compimg";

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
        <h2 className="text-2xl lg:text-3xl font-bold mb-4">Experience the Power of Process.</h2>
        <p className="text-gray-600 max-w-2xl"> Instead of focusing just on the problem, we take the holistic approach so we can build a.</p>
        <p className="text-gray-600 mb-10 max-w-2xl">solution that works end to end</p>
      </div>
      <div className="w-full lg:w-[70%]">
        {services.map((service, index) => (
          <Compimg key={index} image={service.image} title={service.title} description={service.description} clsx={index} />
        ))}
      </div>
    </div>
  );
};

export default Experiences;
