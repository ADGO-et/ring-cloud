import React from 'react'
import Image from 'next/image'

interface cardProps {
    image: string;
    title: string;
    description: string;
    clsx: number;
}

const Compimg = ({image, title, description, clsx}: cardProps) => {
  return (
    <div className={`relative w-full ${clsx % 2 === 1 ? 'flex justify-end' : 'flex justify-start'} mb-4`}>
        <div className={`flex flex-col lg:flex-row items-center p-6 gap-12 lg:w-[60%] border-b-2 md:border-0`}>
            <Image 
              src={image} 
              alt="" 
              width={400} 
              height={300} 
              className={`${
                clsx % 2 === 1 ? 'lg:order-2' : ''
              } border-[#FFD700] sm:border-[10px] md:border-[15px] lg:border-[28px] shadow-lg rounded-3xl`} 
            />
            <div className={`flex flex-col place-items-start gap-2`}>
                <h1 className='font-bold text-primaryColor text-lg'>{title}</h1>
                <p className='text-start'>{description}</p>
            </div>
        </div>
        <div className={`rounded-full w-16 h-16 absolute bg-[#FFD700] 
          top-[-0.5rem] md:top-0 ${clsx % 2 === 0 ? "left-0" : "right-0"}`}/>
    </div>
  )
}

export default Compimg
