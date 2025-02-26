'use client';
import React from "react";
import CountUp from "react-countup";
// import coverimg from '@/public/assets/customer.svg';
// import Image from "next/image";
// import Link from "next/link";
// import RotateWrapper from "../animation/RotateWrapper";
// import FadeIn from "../animation/FadeIn";
// import SlideFrom from "../animation/SlideFrom";
import { useInView } from "react-intersection-observer";

const Statistics = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <div className="py-10 bg-[#003366] text-white text-center w-full mb-32" ref={ref}>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 w-full max-w-[1200px] mx-auto px-6">
        <div className="text-white">
          <h3 className="text-4xl font-bold">
            <CountUp start={0} end={99.1} duration={2} suffix="%" redraw={inView} />
          </h3>
          <p>Availability</p>
        </div>
        <div className="text-white">
          <h3 className="text-4xl font-bold">
            &gt;<CountUp start={0} end={4} duration={2.5} redraw={inView} />
          </h3>
          <p>Calls Made</p>
        </div>
        <div className="text-white">
          <h3 className="text-4xl font-bold">
            <CountUp start={0} end={10000} duration={2} redraw={inView} />
          </h3>
          <p>Simultaneous Calls</p>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
