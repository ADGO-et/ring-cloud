import React from "react";
import BlogCard from "./BlogCard";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { getBlogs } from "@/app/api/blogs/controllers/article";
import { Blog } from "@/interfaces/Blog";
import RotateWrapper from "../animation/RotateWrapper";
import FadeIn from "../animation/FadeIn";

const Tags = ["Creative", "Personal", "Digital Marketing", "Brand", "Tech"];

const SecondaryVlog = async () => {
  const response = await getBlogs();
  const data = await response.json();

  return (
    <div className="flex flex-col lg:flex-row items-center gap-10 w-[85%] mx-auto">
      <div className="basis-full lg:basis-2/3 space-y-5">
        {data.success && data.blogs.length > 0 ? (
          data.blogs.map((blog: Blog, index: number) => (
            <FadeIn key={index} className="">
              <BlogCard
                role="Author" // Default value
                tag={blog.category}
                person="Unknown" // Default value
                title={blog.title}
                description={blog.description}
              />
            </FadeIn>
          ))
        ) : (
          <p>No blogs found.</p>
        )}
      </div>

      <div className="basis-full lg:basis-1/3 space-y-6 flex flex-col items-center">
        <div className="bg-primaryColor p-8 rounded-lg w-full">
          <div className="flex flex-col items-start space-y-2">
            <RotateWrapper direction="vertical">
              <p className="font-bold text-md text-white">Signup to our newsletter</p>
            </RotateWrapper>
            <FadeIn className="text-white">
              Fames ac turpis egestas integer nulla pellentesque dignissim enim.
            </FadeIn>
            <Input type="email" className="bg-white w-full" />
            <div className="flex items-center justify-between gap-2 w-full">
              <div className="flex items-center gap-2">
                <input type="checkbox" />
                <p className="text-white text-sm">
                  Agree to terms of services
                </p>
              </div>
              <Button
                variant="ghost"
                className="bg-primaryColor text-white py-1 px-6"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="space-y-4 w-full">
          <RotateWrapper direction="vertical">
            <p className="font-bold text-xl text-primaryColor">Tags</p>
          </RotateWrapper>
          <div className="flex flex-wrap gap-3">
            {Tags.map((tag, index) => (
              <FadeIn key={index} className="">
                <span
                  className="bg-gray-300 text-center text-gray-500 my-auto rounded-3xl py-1 px-6 m-1"
                >
                  {tag}
                </span>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondaryVlog;
