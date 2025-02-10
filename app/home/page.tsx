import React from 'react'
import HeroSection from '@/components/home-comp/HeroSection'
import OurClients from '@/components/home-comp/OurClients'
import Stat from '@/components/home-comp/Stat'
import ServicesPage from '@/components/home-comp/OurServices'
import FAQ from '@/components/home-comp/FAQ'
import CustomerService from '@/components/home-comp/CustomerService'
import Experiences from '@/components/home-comp/Experiences'

const page = () => {
  return (
    <div className=''>
      <div className="md:m-20 mx-6 my-20">
        <HeroSection />
        <OurClients/>
      </div>
      <Stat/>
      <ServicesPage/>
      <Experiences/>
      <div className='md:my-20 md:mx-40 mx-6 my-20'>
        <FAQ/>
      </div>
      <CustomerService/>
    </div>
  )
}

export default page
