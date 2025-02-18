"use client";

import Image from "next/image";
import React from "react";
import cbe from "@/public/assets/cbe.svg";
import tele from "@/public/assets/tele.svg";
import ethiopian from "@/public/assets/etair.svg";
import safaricom from "@/public/assets/safari.svg";
import google from "@/public/assets/google.svg";
import visa from "@/public/assets/visa.svg";
import amazon from "@/public/assets/amazon.svg";
import TitleFadeIn from "../animation/TitleFadeIn";
import RotateWrapper from "../animation/RotateWrapper";
import FadeIn from "../animation/FadeIn";

const clients = [
  { name: "National Bank of Ethiopia", logo: cbe },
  { name: "Ethio Telecom", logo: tele },
  { name: "Ethiopian Airlines", logo: ethiopian },
  { name: "Safaricom", logo: safaricom },
  { name: "Google", logo: google },
  { name: "Visa & Mastercard", logo: visa },
  { name: "Amazon", logo: amazon },
];

const clients2 = [
  { name: "National Bank of Ethiopia", logo: cbe },
  { name: "Ethio Telecom", logo: tele },
  { name: "Ethiopian Airlines", logo: ethiopian },
  { name: "Safaricom", logo: safaricom },
  { name: "Google", logo: google },
  { name: "Visa & Mastercard", logo: visa },
  { name: "Amazon", logo: amazon },
];

const extendedClients = [...clients, ...clients];

const OurClients = () => {
  return (
    <section className="text-center md:py-40 shadow-custom mb-10 py-6">
      <FadeIn className="inline-block">
        <RotateWrapper direction="vertical">
          <TitleFadeIn title="Our Clients" className="text-3xl font-bold text-gray-800" />
        </RotateWrapper>
      </FadeIn>
      <FadeIn className="text-gray-600 mt-2 text-lg">
        We are proud to partner with innovative companies. Take a look at some of
        the amazing brands that trust us to power their communications:
      </FadeIn>

      {/* Marquee Effect Container */}
      <div className="overflow-hidden relative mt-10 w-full">
        <div className="flex gap-8 animate-marquee">
          {extendedClients.map((client, index) => (
            <div
              key={index}
              className="bg-white rounded-full flex items-center justify-center flex-none w-[250px] sm:w-[270px] md:w-[300px] lg:w-[350px]"
            >
              <Image
                src={client.logo}
                alt={client.name}
                className="border-[#c8e0ff] border-2 rounded-full h-24 w-26 shadow-md"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="overflow-hidden relative mt-10 w-full">
        <div className="flex gap-8 animate-marquee-reverse">
          {extendedClients.map((client, index) => (
            <div
              key={index}
              className="bg-white rounded-full flex items-center justify-center flex-none w-[250px] sm:w-[270px] md:w-[300px] lg:w-[350px]"
            >
              <Image
                src={client.logo}
                alt={client.name}
                className="border-[#c8e0ff] border-2 rounded-full shadow-md h-24 w-26"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Keyframes Animation */}
      <style jsx>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 18s linear infinite;
        }
        @keyframes marquee-reverse {
          from {
            transform: translateX(-50%);
          }
          to {
            transform: translateX(0);
          }
        }
        .animate-marquee-reverse {
          display: flex;
          width: max-content;
          animation: marquee-reverse 18s linear infinite;
        }
        .shadow-custom {
          box-shadow: 0 0 25px rgba(0, 0, 0, 0.4);
        }
      `}</style>
    </section>
  );
};

export default OurClients;
