import {
  FaLock,
  FaUsers,
  FaBolt,
  FaLeaf,
  FaClock,
  FaGlobe,
} from "react-icons/fa";
import ServiceCard from "./ServiceCard";
import { LuBook, LuLeaf } from "react-icons/lu";
import { FaRegClock } from "react-icons/fa";
import { RiLightbulbFlashLine, RiSpeakLine } from "react-icons/ri";

export default function AllOurService() {
  const services = [
    {
      icon: <LuBook size={40} />,
      title: "Reliability & Security",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
      link: "/learn-more",
    },
    {
      icon: <RiSpeakLine size={40} />,
      title: "Remote Work Enablement",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
      link: "/learn-more",
    },
    {
      icon: <RiLightbulbFlashLine size={40} />,
      title: "Scalability & Cost Efficiency",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
      link: "/learn-more",
    },
    {
      icon: <LuLeaf size={40} />,
      title: "Advanced Features",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
      link: "/learn-more",
    },
    {
      icon: <FaRegClock size={40} />,
      title: "CRM Integration",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
      link: "/learn-more",
    },
    {
      icon: <FaGlobe size={40} />,
      title: "Explore More",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
      link: "/learn-more",
    },
  ];

  return (
    <div className="px-4 py-12 flex justify-center">
      <div className="w-[80%]">
        {/* Section Header */}
        <div className="items-center flex flex-col space-y-4 md:w-1/2 mx-auto">
          <p>ALL OUR SERVICES</p>
          <p className="font-bold text-2xl flex-wrap text-center">
            Our comprehensive services will cover all your needs.
          </p>
          <p className="text-md flex-wrap text-center">
            We don&apos;t just help with your IT needs. We focus on the entire
            ecosystem surrounding it. Bringing together people, process, and
            technology, we pride ourselves on delivering solutions that work in
            reality. Not theory.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-8 py-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
}
