import { getBlog } from "@/app/api/blogs/controllers/article";
import Image from "next/image";
import FadeIn from "../../animation/FadeIn"; // Import the FadeIn component

const BlogLayout = async ({ params }: { params: { id: string } }) => {
  const response = await getBlog({ params });

  if (!response || !response.ok) {
    return <p className="text-center text-red-500">Blog not found.</p>;
  }

  const data = await response.json();
  const blog = data.blog;

  return (
    <div className="container mx-auto my-12 p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="md:col-span-2 md:w-[75%] mx-auto">
        <FadeIn className="text-2xl font-bold">
          <h1>{blog.title}</h1>
        </FadeIn>
        <FadeIn className="font-semibold mt-4">
          <p>{blog.description}</p>
        </FadeIn>

        {blog.thumbnail && (
          <FadeIn className="mt-4 rounded-lg">
            <Image
              src={blog.thumbnail}
              alt={blog.title}
              width={800}
              height={400}
            />
          </FadeIn>
        )}

        {blog.content.map((section: any, index: number) => (
          <FadeIn key={index} className="mt-6 border-t pt-4">
            {section.type === "heading" && (
              <h2 className="text-lg font-bold">{section.value}</h2>
            )}
            {section.type === "paragraph" && (
              <p className="text-gray-700 mt-2">{section.value}</p>
            )}
            {section.type === "image" && (
              <Image
                src={section.value}
                alt="Blog Content Image"
                width={800}
                height={400}
                className="mt-4 rounded-lg"
              />
            )}
            {section.type === "youtube" && (
              <iframe
                width="100%"
                height="400"
                src={section.value}
                title="YouTube Video"
                className="mt-4 rounded-lg"
                allowFullScreen
              ></iframe>
            )}
          </FadeIn>
        ))}
      </div>

      {/* Sidebar */}
      <aside className="space-y-6">
        {/* Ad Banner */}
        <div className="bg-gray-200 flex items-center text-center w-[250px] h-[250px] p-6">
          <p className="text-sm font-bold">Ad Banner - </p>
          <p className="text-xs">250 × 250px</p>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-xl font-bold">Categories</h3>
          <ul className="mt-2 space-y-2 text-gray-600">
            <li>{blog.category}</li>
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
