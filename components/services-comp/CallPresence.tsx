import React from "react";
import coverimg from '@/public/assets/customer.svg';
import Image from "next/image";
import Link from "next/link";
import RotateWrapper from "../animation/RotateWrapper";
import FadeIn from "../animation/FadeIn";
import SlideFrom from "../animation/SlideFrom";

const Statistics = () => {
  return (
    <div className="py-3 bg-[#003366] text-white text-center w-full mb-32">
      <div className="flex justify-around w-full max-w-[1200px] mx-auto px-6">
        <div className="text-white">
          <h3 className="text-4xl font-bold">99.1%</h3>
          <p>Availability</p>
        </div>
        <div className="text-white">
          <h3 className="text-4xl font-bold">&gt;4M</h3>
          <p>Calls Made</p>
        </div>
        <div className="text-white">
          <h3 className="text-4xl font-bold">10,000</h3>
          <p>Simultaneous Calls</p>
        </div>
      </div>
    </div>
  );
};

export default Statistics