import React from 'react'
import { CardHoverEffect } from './CardHoverEffect'
import RotateWrapper from "../animation/RotateWrapper";

const Features = () => {
  return (
    <div className='space-y-4 md:py-10'>
      <RotateWrapper direction="vertical">
        <h1 className='text-primaryColor text-3xl font-bold text-center'>Features We Provide</h1>
      </RotateWrapper>
      <p className='text-center'>We will help a client&apos;s problem to develop the products they have with high quality</p>
      <CardHoverEffect/>
    </div>
  )
}

export default Features
