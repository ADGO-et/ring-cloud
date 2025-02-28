'use client';

import React from 'react';
import RotateWrapper from "../animation/RotateWrapper";
import FadeIn from "../animation/FadeIn";
import SlideFrom from "../animation/SlideFrom";
import ornament from '@/public/assets/Ornament.png';
import { motion } from 'framer-motion'; // Added import statement
import PoppingWrapper from '../animation/Popping';

const Banner: React.FC = () => {
  return (
    <div
      className="bg-primaryColor rounded-3xl p-12 m-8 flex flex-col md:flex-row justify-between items-center text-white w-full max-w-7xl mx-auto shadow-lg py-28 mt-20"
      style={{ backgroundImage: `url(${ornament.src})` }}
    >
      <div className="md:max-w-lg">
        <RotateWrapper direction="vertical">
          <h1 className="text-2xl font-bold">Lorem Ipsum Lorem Ipsum Lorem Ipsum</h1>
        </RotateWrapper>
        <FadeIn className="mt-2 text-sm text-gray-300">
          Find out how to make decisions, solve problems, and draw early-stage conclusions to run your own business.
        </FadeIn>
      </div>
      <motion.div
        initial={{ y: 300 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center md:items-start"
      >
        <PoppingWrapper degree={2}>
          <button className="bg-white text-black font-semibold px-4 py-2 rounded-lg mt-4 md:mt-0 hover:bg-yellow-500 transition">
            Register Now
          </button>
        </PoppingWrapper>
      </motion.div>
    </div>
  );
};

export default Banner;
