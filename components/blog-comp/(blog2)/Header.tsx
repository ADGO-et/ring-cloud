import React from "react";
import Image from 'next/image';
import TitleFadeIn from '../../animation/TitleFadeIn';
import SlideFrom from '../../animation/SlideFrom';
import RotateWrapper from '../../animation/RotateWrapper';

const Header = () => {
    return (
      <div className="relative w-full h-[400px] flex items-center justify-center text-center text-white">
        <Image
            src='/assets/bgHeader(2).png'
            alt="Hero Image"
            layout="fill"
            objectFit="cover"
            className="brightness-75 object-cover"
        />
        <div className="relative z-10">
            <RotateWrapper>
                <SlideFrom from="left" className="text-3xl font-bold">
                    <TitleFadeIn title="User Innovation & Entrepreneurship" className=""/>
                </SlideFrom>
            </RotateWrapper>
            <SlideFrom from="right" className="text-lg" delay={0.5}>
                <TitleFadeIn title="You Can Do It" className="" />
            </SlideFrom>
        </div>
        </div>
    );
  };
  
  export default Header;