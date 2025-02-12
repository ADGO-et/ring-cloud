import React from "react";
import Header from "@/components/blog-comp/(blog2)/Header";
import BlogLayout from "@/components/blog-comp/(blog2)/BlogLayout";
import YouMightLoveSection from "@/components/blog-comp/(blog2)/YouMightLoveSection";

const page = ({ params }: { params: { id: string } }) => {
  return (
    <div>
      <Header />
      <BlogLayout params={params} />
      <YouMightLoveSection />
    </div>
  );
};

export default page;
