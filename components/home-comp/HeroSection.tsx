"use client";

import { CheckCircle } from "lucide-react";
import Image from "next/image";
import heroimg from '@/public/assets/hero.svg';
import sideimg from '@/public/assets/sidepic.svg';
import FadeIn from "../animation/FadeIn";
import SlideFrom from "../animation/SlideFrom";
import RotateWrapper from "../animation/RotateWrapper";

export default function HeroSection() {

    const Points = [
        "Enjoy effortless compatibility with your existing systems.",
        "Tailor our services to suit your business’s unique needs.",
        "Count on our expert team for guidance at every step.",
      ];

  return (
    <div className="bg-white py-12 lg:px-20">
        <div className="relatve md:w-3/5 lg:px-12">
          <RotateWrapper direction="vertical">
            <FadeIn className="text-3xl md:text-4xl font-bold text-gray-900">
              Empower Your Communications with Ringcloud
            </FadeIn>
          </RotateWrapper>
          <FadeIn className="mt-4 text-gray-600">
            At Ringcloud, we believe in simplifying and elevating the way businesses connect. Our
            state-of-the-art communication solutions help you stay agile, secure, and efficient—no
            matter your size or industry.
          </FadeIn>
          <Image src={sideimg} alt="side image" className="absolute md:block hidden top-28 left-10" />
            <style jsx global>{`
                img[alt="side image"]:hover {
                    transform: rotate(360deg);
                    transition: transform 0.5s;
                }
            `}</style>
        </div>

        <div className="mt-14 flex flex-col md:flex-row items-center md:justify-between">
          <SlideFrom from="left" className="w-fit md:w-1/2">
            <Image
              src={heroimg} 
              alt="Team meeting"
              className="object-cover rounded-lg w-[700px]"
            />
          </SlideFrom>

          <ul className="mt-8 md:mt-0 flex flex-col space-y-3">
            {Points.map((text, index) => (
              <FadeIn key={index} className="flex items-start text-gray-700" delay={index * 0.3}>
                <CheckCircle className="text-primaryColor w-5 h-5 mr-2 flex-shrink-0" />
                <span>{text}</span>
              </FadeIn>
            ))}
          </ul>
        </div>
    </div>
  );
}
