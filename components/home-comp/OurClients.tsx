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
    <section className="pb-8 text-center">
      <FadeIn className="inline-block">
        <RotateWrapper direction="vertical">
          <TitleFadeIn title="Our Clients" className="text-3xl font-bold text-gray-800" />
        </RotateWrapper>
      </FadeIn>
      <FadeIn className="text-gray-600 mt-2">
        We are proud to partner with innovative companies. Take a look at some of
        the amazing brands that trust us to power their communications:
      </FadeIn>

      {/* Marquee Effect Container */}
      <div className="overflow-hidden relative mt-10 w-full">
        <div className="flex gap-8 animate-marquee">
          {extendedClients.map((client, index) => (
            <div
              key={index}
              className="bg-white rounded-full flex items-center justify-center flex-none w-[200px] sm:w-[220px] md:w-[250px] lg:w-[300px]"
            >
              <Image
                src={client.logo}
                alt={client.name}
                className="border-[#c8e0ff] border-2 rounded-full py-4 px-6 h-24 w-26 shadow-md"
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
              className="bg-white rounded-full flex items-center justify-center flex-none w-[200px] sm:w-[220px] md:w-[250px] lg:w-[300px]"
            >
              <Image
                src={client.logo}
                alt={client.name}
                className="border-[#c8e0ff] border-2 rounded-full py-4 px-6 h-24 w-26 shadow-md"
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
          animation: marquee 12s linear infinite;
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
          animation: marquee-reverse 12s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default OurClients;
