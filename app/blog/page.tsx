import React from 'react'
import MajorBlog from '@/components/blog-comp/MajorBlog'
import SecondaryVlog from '@/components/blog-comp/SecondaryVlog'
import Banner from '@/components/blog-comp/Banner'
import EditorsPick from '@/components/blog-comp/EditorsPick'
import NewsletterSection from '@/components/blog-comp/NewsletterSection'
import Header from '@/components/blog-comp/(blog2)/Header'
import BlogLayout from '@/components/blog-comp/(blog2)/BlogLayout'
import YouMightLoveSection from '@/components/blog-comp/(blog2)/YouMightLoveSection'

const page = () => {
  return (
    <div>
      <YouMightLoveSection />
      <Header />
      <BlogLayout />
      <MajorBlog/>
      <SecondaryVlog/>
      <Banner />
      <EditorsPick />
      <NewsletterSection />
    </div>
  )
}

export default page
