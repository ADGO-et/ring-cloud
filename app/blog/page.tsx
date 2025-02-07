import React from 'react'
import MajorBlog from '@/components/blog-comp/MajorBlog'
import SecondaryVlog from '@/components/blog-comp/SecondaryVlog'
import Banner from '@/components/blog-comp/Banner'
import EditorsPick from '@/components/blog-comp/EditorsPick'
import NewsletterSection from '@/components/blog-comp/NewsletterSection'

const page = () => {
  return (
    <div>
      <MajorBlog/>
      <SecondaryVlog/>
      <Banner />
      <EditorsPick />
      <NewsletterSection />
    </div>
  )
}

export default page
