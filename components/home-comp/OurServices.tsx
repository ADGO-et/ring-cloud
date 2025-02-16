'use client';
import React from "react";
import { FaPhone, FaVideo, FaComments, FaHeadset, FaNetworkWired, FaCogs } from "react-icons/fa";
import Link from "next/link";
import RotateWrapper from "../animation/RotateWrapper";
import FadeIn from "../animation/FadeIn";
import SlideFrom from "../animation/SlideFrom";

const services = [
  { name: "Cloud Phone System", icon: <FaPhone />, link: "#" },
  { name: "Video Conferencing", icon: <FaVideo />, link: "#" },
  { name: "Unified Communications", icon: <FaComments />, link: "#" },
  { name: "Contact Center Solutions", icon: <FaHeadset />, link: "#" },
  { name: "Remote Work Enablement", icon: <FaNetworkWired />, link: "#" },
  { name: "CRM Integration", icon: <FaCogs />, link: "#" },
];

const ServicesPage = () => {
  return (
    <div className="p-16 bg-yellow-400 text-center text-gray-900">
      <RotateWrapper direction="vertical">
        <h3 className="text-sm uppercase tracking-wide">All Our Services</h3>
      </RotateWrapper>
      <RotateWrapper direction="vertical">
        <h2 className="text-3xl font-bold mt-2">Our comprehensive services <br/> will cover all your needs.</h2>
      </RotateWrapper>
      <FadeIn className="mt-4 max-w-2xl mx-auto">
        Simplify your workflow and drive efficiency with our communication solutions. Our specialized services support businesses of all sizes.
      </FadeIn>
      <div className="w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 justify-items-center mt-14">
        {services.map((service, index) => (
          <SlideFrom key={index} from={index % 2 === 0 ? "left" : "right"} className="flex flex-col items-center gap-2">
            <div className="text-3xl">{service.icon}</div>
            <p className="mt-2 font-semibold">{service.name}</p>
            <Link href={service.link} className="text-sm hover:underline">Learn More &gt;</Link>
          </SlideFrom>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
