'use client'
import { FaShieldAlt, FaLightbulb, FaLeaf, FaLaptopHouse, FaUserTie } from "react-icons/fa";
import RotateWrapper from "../animation/RotateWrapper";
import FadeIn from "../animation/FadeIn";
import leaf from "@/public/assets/leaf.png"
import clock from "@/public/assets/clock.png"
import bulb from "@/public/assets/bulb.png"
import face from "@/public/assets/face.png"
import scroll from "@/public/assets/scroll.png"

import Image from "next/image";

const features = [
  {
    title: "Reliability & Security",
    description: "Our robust infrastructure ensures continuity and compliance to safeguard sensitive data.",
    icon: scroll ,
  },
  {
    title: "Scalability & Cost Efficiency",
    description: "Easily scale your system and reduce costs with our pay-as-you-go model.",
    icon: bulb,
  },
  {
    title: "Advanced Features",
    description: "Intuitive interfaces, customizable call routing, IVR, and real-time analytics.",
    icon: leaf,
  },
  {
    title: "Remote Work Enablement",
    description: "Access softphones from anywhere in Ethiopia for remote teams.",
    icon: face,
  },
  {
    title: "CRM Integration",
    description: "Seamless workflows with customer data access for personalized interactions.",
    icon: clock,
  },
];

const Offers = () => {
  return (
    <section className="py-16 bg-white mb-10 space-y-8">
      <div className="w-full flex justify-center">
        <RotateWrapper direction="vertical">
          <h1 className="text-primaryColor text-3xl font-bold mb-5 mt-5">WHAT WE OFFER</h1>
        </RotateWrapper>
      </div>
      <div className="container mx-auto px-6 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-16 mb-16">
          {features.slice(0, 3).map((feature, index) => (
            <FadeIn key={index} className="bg-white shadow-lg rounded-lg p-6 text-center flex flex-col items-center transition-transform transform hover:scale-105">           
              <Image src={feature.icon} alt={feature.title} width={70} height={70} />
  
              <h3 className="text-lg font-semibold text-gray-800 mt-4">{feature.title}</h3>
              <p className="text-gray-600 mt-2">{feature.description}</p>
            </FadeIn>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:w-[70%] mx-auto mt-6">
          {features.slice(3).map((feature, index) => (
            <FadeIn key={index} className="bg-white shadow-lg rounded-lg p-6 text-center flex flex-col items-center transition-transform transform hover:scale-105">
              <Image src={feature.icon} alt={feature.title} width={70} height={70} />
              <h3 className="text-lg font-semibold text-gray-800 mt-4">{feature.title}</h3>
              <p className="text-gray-600 mt-2">{feature.description}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offers;
