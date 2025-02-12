import Image from "next/image";
import React from "react";
import BlogCard from "./BlogCard";
import blogimage from "@/public/assets/blogimage.svg";
import { getBlogs } from "@/app/api/blogs/controllers/article";
import { Blog } from "@/interfaces/Blog";

const MajorBlog = async () => {
  const response = await getBlogs();
  const data = await response.json();
  // console.log(data, "data");

  return (
    <div className="">
      <div className="w-full h-80 md:h-96 bg-yellow-400 flex justify-center items-center text-white rounded-b-3xl">
        <div className="w-[80%] flex flex-col items-start justify-center mt-12">
          <p className="font-bold text-3xl text-primaryColor">
            Let&apos;s Become
          </p>
          <h1 className="text-3xl md:text-6xl font-bold text-primaryColor">
            Success Entrepreneurs
          </h1>
          <p className="text-black font-bold">With Lorem Ipsum</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center my-10 w-[85%] mx-auto">
        <div className="basis-2/3 md:-translate-y-28">
          <Image src={blogimage} alt="image" className="rounded-3xl" />
        </div>
        <div className="basis-1/3 space-y-6">
          <p className="font-bold text-3xl text-primaryColor">Latest Stories</p>
          <div className="space-y-5">
            {data.success && data.blogs.length > 0 ? (
              data.blogs.map((blog: Blog, index: number) => (
                <BlogCard
                  key={index}
                  role="Author" // Default
                  tag={blog.category}
                  person="Unknown" // Default
                  title={blog.title}
                  description={blog.description}
                />
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
