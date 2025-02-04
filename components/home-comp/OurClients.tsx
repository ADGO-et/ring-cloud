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

const clients = [
  { name: "National Bank of Ethiopia", logo: cbe },
  { name: "Ethio Telecom", logo: tele },
  { name: "Ethiopian Airlines", logo: ethiopian },
  { name: "Safaricom", logo: safaricom },
  { name: "Google", logo: google },
  { name: "Visa & Mastercard", logo: visa },
  { name: "Amazon", logo: amazon },
];

// Duplicate the items to create an infinite effect
const extendedClients = [...clients, ...clients];

const OurClients = () => {
  return (
    <section className="pb-8 text-center">
      <h2 className="text-3xl font-bold text-gray-800">Our Clients</h2>
      <p className="text-gray-600 mt-2">
        We are proud to partner with innovative companies. Take a look at some of
        the amazing brands that trust us to power their communications:
      </p>

      {/* Marquee Container */}
      <div className="overflow-hidden relative mt-10 w-full">
        <div className="flex whitespace-nowrap animate-marquee gap-8">
          {extendedClients.map((client, index) => (
            <div key={index} className="bg-white rounded-full flex items-center justify-center">
              <Image
                src={client.logo}
                alt={client.name}
                className="border-[#c8e0ff] border-2 rounded-full py-4 px-6 h-24 w-26 shadow-md"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurClients;
