import React from 'react'
import HeroSection from '@/components/home-comp/HeroSection'
import OurClients from '@/components/home-comp/OurClients'
import Stat from '@/components/home-comp/Stat'
import ServicesPage from '@/components/home-comp/OurServices'
import FAQ from '@/components/home-comp/FAQ'
import CustomerService from '@/components/home-comp/CustomerService'
import Experiences from '@/components/home-comp/Experiences'
// import ClientsSection from '@/components/home-comp/ClientsSection'

const page = () => {
  return (
    <div className=''>
      <div className="md:m-24 mx-6 my-20">
        <HeroSection />
        {/* <ClientsSection/> */}
      </div>
      <OurClients/>
      <Stat/>
      <ServicesPage/>
      <Experiences/>
      <div className='md:my-24 md:mx-44 mx-6 my-20'>
        <FAQ/>
      </div>
      <CustomerService/>
    </div>
  )
}

export default page
