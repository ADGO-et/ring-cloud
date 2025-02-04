import React from "react";
import { Button } from "../ui/button";
import customer from '@/public/assets/customer.svg'
import Image from "next/image";

const CustomerService = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 bg-white">
      {/* Image Section */}
      <div className="w-full md:w-1/2 mb-6 md:mb-0">
        <div className="md:w-[70%] mx-auto">
            <Image
            src={customer} 
            alt="Customer Service"
            className="w-full rounded-lg shadow-md"
            />
        </div>
      </div>
      
      {/* Content Section */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
          Connect your customer<br/>with our <span className="text-primaryColor">services</span>
        </h2>
        <p className="text-gray-600 mb-6">
          Contact us or request a demo today to see how Ringcloud can streamline and elevate your business communications.
        </p>
        <Button className="bg-primaryColor text-white py-2 px-6 rounded-lg shadow-md hover:bg-blue-900 transition">
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default CustomerService;
