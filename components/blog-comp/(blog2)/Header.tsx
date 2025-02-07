import React from "react";
import Image from 'next/image';

const Header = () => {
    return (
      <div className="relative w-full h-[400px] flex items-center justify-center text-center text-white">
        <Image
            src='/assets/bgHeader(2).png'
            alt="Hero Image"
            layout="fill"
            objectFit="cover"
            className="brightness-75 h-screen"
        />
        <div className="relative z-10">
            <h1 className="text-3xl font-bold">User Innovation & Entrepreneurship</h1>
            <p className="text-lg">You Can Do It</p>
        </div>
        </div>
    );
  };
  
  export default Header;