import React from 'react'

interface newsType {
    person: string,
    role: string,
    tag: string,
    title: string,
    description: string
}

const BlogCard = ({person, role, tag, title, description}: newsType) => {

    const truncate = (str: string, n: number) => {
        return str.length > n ? str.slice(0, n - 1) + '...' : str;
    }

  return (
    <div className='space-y-3 border-b-2 border-l-2 p-4 rounded-xl'>
        <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="flex items-center gap-4">
                <div className='rounded-full w-12 h-12 bg-gray-300'/>
                <div className='flex flex-col items-start justify-center gap-1'>
                    <p className='font-bold'>{person}</p>
                    <p className='text-gray-500'>{role}</p>
                </div>
            </div>
            <span className='bg-gray-300 text-center text-gray-500 my-auto rounded-3xl py-1 px-6'>{tag}</span>
        </div>
        <h1 className='font-bold text-xl text-start'>{truncate(title, 30)}</h1>
        <p className='text-gray-600 text-start text-sm'>{truncate(description, 150)}</p>
    </div>
  )
}

export default BlogCard
