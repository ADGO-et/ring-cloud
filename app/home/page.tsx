import React from "react";
import HeroSection from "@/components/home-comp/HeroSection";
import OurClients from "@/components/home-comp/OurClients";
import Stat from "@/components/home-comp/Stat";
import ServicesPage from "@/components/home-comp/OurServices";
import FAQ from "@/components/home-comp/FAQ2";
import CustomerService from "@/components/home-comp/CustomerService";
import Experiences from "@/components/home-comp/Experiences";
import Hero from "@/components/home-comp/Hero";
import Clients from "@/components/home-comp/Clients";
import AllOurService from "@/components/home-comp/AllOurService";
import Experience from "@/components/home-comp/Experience";
import TestimonialSlider from "@/components/home-comp/TestimonialSlider";
// import ClientsSection from '@/components/home-comp/ClientsSection'

const page = () => {
  return (
    <div className="">
      <Hero />
      <Clients />
      <AllOurService />
      <Experience />
      <TestimonialSlider />
      <FAQ />
      {/* <div className="md:m-24 mx-6 my-20">
        <HeroSection /> */}
      {/* <ClientsSection/> */}
      {/* </div>
      <OurClients/>
      <Stat/>
      <ServicesPage/>
      <Experiences/>
      <div className='md:my-24 md:mx-44 mx-6 my-20'>
        <FAQ/>
      </div>
      <CustomerService/> */}
    </div>
  );
};

export default page;
