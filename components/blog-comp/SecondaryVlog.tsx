import React from 'react'
import BlogCard from './BlogCard'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

const SecondaryVlog = () => {
    const LatestNews2 = [
        {
            person: "John Doe",
            role: "Development Manager",
            tag: "Personal",
            title: "Developing disciplined approaches to social entrepreneurship",
            description: "Etiam tempor orci eu lobortis elementum. Fames ac turpis egestas integer nulla pellentesque dignissim enim sit eut amet venenatis urna cursus eget purus faucibus."
        },
        {
            person: "Mary Darwin",
            role: "Management Analyst",
            tag: "Business",
            title: "Exploring and identifying entrepreneurial opportunities",
            description: "Etiam tempor orci eu lobortis elementum. Fames ac turpis egestas integer nulla pellentesque dignissim enim sit eut amet venenatis urna cursus eget purus faucibus."
        }
    ]

    const Tags = ['Creative', 'Personal', 'Digital Marketing', 'Brand', 'Tech']


  return (
    <div className='flex flex-col lg:flex-row items-center gap-10 w-[85%] mx-auto'>
      <div className="basis-full lg:basis-2/3 space-y-5">
        {
            LatestNews2.map((news, index) => (
                <BlogCard key={index} role={news.role} tag={news.tag} person={news.person} title={news.title} description={news.description} />
            ))
        }
      </div>
      <div className="basis-full lg:basis-1/3 space-y-6 flex flex-col items-center">
        <div className="bg-yellow-400 p-8 rounded-lg w-full">
            <div className="flex flex-col items-start space-y-2">
                <p className='font-bold text-md'>Signup to our newsletter</p>
                <p className='text-gray-500'>Fames ac turpis egestas integer nulla pellentesque dignissim enim.</p>
                <Input type='email' className='bg-white w-full'/>
                <div className='flex items-center justify-between gap-2 w-full'>
                    <div className="flex items-center gap-2">
                        <input type='checkbox'/>
                        <p className='text-gray-500 text-sm'>Agree to terms of services</p>
                    </div>
                    <Button variant='ghost' className='bg-primaryColor text-white py-1 px-6'>Subscribe</Button>
                </div>
            </div>
        </div>
        <div className="space-y-4 w-full">
            <p className='font-bold text-xl text-primaryColor'>Tags</p>
            <div className='flex flex-wrap gap-3'>
                {
                    Tags.map((tag, index) => (
                        <span key={index} className='bg-gray-300 text-center text-gray-500 my-auto rounded-3xl py-1 px-6 m-1'>{tag}</span>
                    ))
                }
            </div>
        </div>
      </div>
    </div>
  )
}

export default SecondaryVlog
