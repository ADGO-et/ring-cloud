import Image from 'next/image'
import React from 'react'
import BlogCard from './BlogCard'
import blogimage from '@/public/assets/blogimage.svg'

const MajorBlog = () => {

    const LatestNews = [
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


  return (
    <div className=''>
      <div className="w-full h-80 md:h-96 bg-yellow-400 flex justify-center items-center text-white rounded-b-3xl">
        <div className="w-[80%] flex flex-col items-start justify-center mt-12">
            <p className='font-bold text-3xl text-primaryColor'>Let&apos;s Become</p>
            <h1 className='text-3xl md:text-6xl font-bold text-primaryColor'>Success Entrepreneurs</h1>
            <p className='text-black font-bold'>With Lorem Ipsum</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center my-10 w-[85%] mx-auto">
        <div className="basis-2/3 md:-translate-y-28">
            <Image src={blogimage} alt='image' className='rounded-3xl'/>
        </div>
        <div className="basis-1/3 space-y-6">
            <p className='font-bold text-3xl text-primaryColor'>Latest Stories</p>
            <div className='space-y-5'>
                {
                    LatestNews.map((news, index) => (
                        <BlogCard key={index} role={news.role} tag={news.tag} person={news.person} title={news.title} description={news.description} />
                    ))
                }
            </div>
        </div>
      </div>
    </div>
  )
}

export default MajorBlog
