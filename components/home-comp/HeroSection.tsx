"use client";

import { CheckCircle } from "lucide-react";
import Image from "next/image";
import heroimg from '@/public/assets/hero.svg'
import sideimg from '@/public/assets/sidepic.svg'

export default function HeroSection() {

    const Points = [
        "Enjoy effortless compatibility with your existing systems.",
        "Tailor our services to suit your business’s unique needs.",
        "Count on our expert team for guidance at every step.",
      ];

  return (
    <div className="bg-white py-12 lg:px-20">
        <div className="relatve md:w-3/5 lg:px-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Empower Your Communications with Ringcloud
          </h1>
          <p className="mt-4 text-gray-600">
            At Ringcloud, we believe in simplifying and elevating the way businesses connect. Our
            state-of-the-art communication solutions help you stay agile, secure, and efficient—no
            matter your size or industry.
          </p>
          <Image src={sideimg} alt="side image" className="absolute md:block hidden top-28 left-10" />
            <style jsx global>{`
                img[alt="side image"]:hover {
                    transform: rotate(360deg);
                    transition: transform 0.5s;
                }
            `}</style>
        </div>

        {/* Right Image & Features */}
        <div className="flex flex-col md:flex-row items-center justify-between md:justify-center mt-14">
            <div className="">
            <Image
              src={heroimg} 
              alt="Team meeting"
              className="object-cover"
            />
            </div>

          {/* Features List */}
          <ul className="flex flex-col items-start space-y-3 md:ml-8">
            {Points.map((text, index) => (
              <li key={index} className="flex items-center text-gray-700">
                <CheckCircle className="text-primaryColor w-5 h-5 mr-2" />
                {text}
              </li>
            ))}
          </ul>
        </div>
    </div>
  );
}
