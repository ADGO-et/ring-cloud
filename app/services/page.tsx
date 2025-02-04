import CallPresence from '@/components/services-comp/CallPresence'
import Features from '@/components/services-comp/Features'
import Offers from '@/components/services-comp/Offers'
import React from 'react'

const page = () => {
  return (
    <div className='md:m-20 mx-6 my-20'>
      <Offers/>
      <Features/>
      <CallPresence/>
    </div>
  )
}

export default page
