"use client";

import Image from "next/image";

const BlogLayout = () => {
  return (
    <div className="container mx-auto my-12 p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Main Content */}
      <div className="md:col-span-2 md:w-[75%] mx-auto">
        <h1 className="text-2xl font-bold">
          Lorem ipsum dolor sit amet consectetur. Ullamcorper quam enim et fringilla rhoncus massa mauris enim. Vitae malesuada amet integer neque non duis sed quis. Ultricies dui in faucibus sit in volutpat quis eu. Libero sit cursus bibendum et id enim.
        </h1>
        <p className="font-semibold mt-4">
          Lorem ipsum dolor sit amet consectetur. Nunc sed lacus ultrices tincidunt. Gravida vel scelerisque id tellus. Felis cras orci volutpat vivamus porttitor viverra. Sagittis sem felis enim donec purus.
        </p>
        <p className="mt-4 text-gray-700">
          Lorem ipsum dolor sit amet consectetur. Mattis mollis nisl rhoncus semper lacus cursus. In rutrum pulvinar sapien non massa neque lorem habitant. Non ultrices pharetra penatibus laoreet. Pharetra risus faucibus fermentum ultricies commodo dolor eu.
        </p>

        {/* Repeated Blog Sections */}
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="mt-6 border-t pt-4">
            <h2 className="text-lg font-bold">
              Lorem ipsum dolor sit amet consectetur. Pharetra pellentesque luctus amet fermentum vel.
            </h2>
            <p className="text-gray-700 mt-2">
              Lorem ipsum dolor sit amet consectetur. Ultricies dictum amet massa urna. Dignissim amet venenatis posuere integer a ultricies magna in in. Sed eu sapien ac sodales amet libero nisl nibh. Elementum nunc in auctor in vestibulum.
            </p>
          </div>
        ))}
      </div>

      {/* Sidebar */}
      <aside className="space-y-6">
        {/* Ad Banner */}
        <div className="bg-gray-200 flex items-center text-center w-[250px] h-[250px] text-center p-6">
          <p className="text-sm font-bold">Ad Banner - </p>
          <p className="text-xs">250 × 250px</p>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-xl font-bold">Categories</h3>
          <ul className="mt-2 space-y-2 text-gray-600">
            <li>All categories</li>
            <li>Design</li>
            <li>Brand</li>
            <li>Process</li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-xl font-bold">Share Article</h3>
          <ul className="mt-2 space-y-2 text-gray-600">
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Email</li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default BlogLayout;
