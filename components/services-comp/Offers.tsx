'use client'
import { FaShieldAlt, FaLightbulb, FaLeaf, FaLaptopHouse, FaUserTie } from "react-icons/fa";
import RotateWrapper from "../animation/RotateWrapper";
import FadeIn from "../animation/FadeIn";

const features = [
  {
    title: "Reliability & Security",
    description: "Our robust infrastructure ensures continuity and compliance to safeguard sensitive data.",
    icon: <FaShieldAlt className="text-purple-600 text-3xl" />,
  },
  {
    title: "Scalability & Cost Efficiency",
    description: "Easily scale your system and reduce costs with our pay-as-you-go model.",
    icon: <FaLightbulb className="text-green-600 text-3xl" />,
  },
  {
    title: "Advanced Features",
    description: "Intuitive interfaces, customizable call routing, IVR, and real-time analytics.",
    icon: <FaLeaf className="text-blue-600 text-3xl" />,
  },
  {
    title: "Remote Work Enablement",
    description: "Access softphones from anywhere in Ethiopia for remote teams.",
    icon: <FaLaptopHouse className="text-pink-600 text-3xl" />,
  },
  {
    title: "CRM Integration",
    description: "Seamless workflows with customer data access for personalized interactions.",
    icon: <FaUserTie className="text-orange-600 text-3xl" />,
  },
];

const Offers = () => {
  return (
    <section className="py-16 bg-white mb-10 space-y-8">
      <RotateWrapper direction="vertical">
        <h1 className="text-primaryColor text-3xl font-bold text-center">WHAT WE OFFER</h1>
      </RotateWrapper>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.slice(0, 3).map((feature, index) => (
            <FadeIn key={index} className="bg-white shadow-lg rounded-lg p-6 text-center flex flex-col items-center transition-transform transform hover:scale-105">
              <div className="p-4 bg-gray-100 rounded-full">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 mt-4">{feature.title}</h3>
              <p className="text-gray-600 mt-2">{feature.description}</p>
            </FadeIn>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:w-[70%] mx-auto mt-6">
          {features.slice(3).map((feature, index) => (
            <FadeIn key={index} className="bg-white shadow-lg rounded-lg p-6 text-center flex flex-col items-center transition-transform transform hover:scale-105">
              <div className="p-4 bg-gray-100 rounded-full">{feature.icon}</div>
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
