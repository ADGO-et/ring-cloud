import CallPresence from '@/components/services-comp/CallPresence'
import Features from '@/components/services-comp/ServiceHandling'
import Offers from '@/components/services-comp/Offers'
import React from 'react'

const page = () => {
  return (
    <div>
      <div className='md:m-20 mx-6 my-20'>
        <Offers/>
        <Features/> 
      </div>
      <CallPresence/>
    </div>
  )
}

export default page
