import Image from "next/image";
import React from "react";
import BlogCard from "./BlogCard";
import blogimage from "@/public/assets/blogimage.svg";
import { getBlogs } from "@/app/api/blogs/controllers/article";
import { Blog } from "@/interfaces/Blog";
import RotateWrapper from "../animation/RotateWrapper";
import FadeIn from "../animation/FadeIn";

const MajorBlog = async () => {
  const response = await getBlogs();
  const data = await response.json();
  // console.log(data, "data");

  return (
    <div className="">
      <div className="w-full h-80 md:h-96 bg-primaryColor flex justify-center items-center text-white rounded-b-3xl">
        <div className="w-[80%] flex flex-col items-start justify-center mt-12">
          <RotateWrapper direction="vertical">
            <p className="font-bold text-3xl text-white">
              Let&apos;s Become
            </p>
          </RotateWrapper>
          <RotateWrapper direction="vertical">
            <h1 className="text-3xl md:text-6xl font-bold text-white">
              Success Entrepreneurs
            </h1>
          </RotateWrapper>
          <FadeIn className="text-white font-bold">
            With Lorem Ipsum
          </FadeIn>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center my-10 w-[85%] mx-auto">
        <div className="basis-2/3 md:-translate-y-28">
          <Image src={blogimage} alt="image" className="rounded-3xl" />
        </div>
        <div className="basis-1/3 space-y-6">
          <RotateWrapper direction="vertical">
            <p className="font-bold text-3xl text-primaryColor">Latest Stories</p>
          </RotateWrapper>
          <div className="space-y-5">
            {data.success && data.blogs.length > 0 ? (
              data.blogs.map((blog: Blog, index: number) => (
                <FadeIn key={index} className="">
                  <BlogCard
                    role="Author" // Default
                    tag={blog.category}
                    person="Unknown" // Default
                    title={blog.title}
                    description={blog.description}
                  />
                </FadeIn>
              ))
            ) : (
              <p>No blogs found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MajorBlog;
