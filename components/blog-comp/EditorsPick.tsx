import Image from "next/image";
import { fetchBlogsFromController } from "@/app/api/blogs/controllers/article";
import Link from "next/link";

const EditorsPick = async () => {
  const { success, blogs } = await fetchBlogsFromController();

  return (
    <div className="w-full p-2 max-w-7xl mx-auto mt-10">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-primaryColor">Editors Pick</h2>
        <Link href="/blog" className="text-blue-600 hover:underline text-sm">
          View All
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {success && blogs.length > 0 ? (
          blogs.map((article, index) => (
            <Link
              key={index}
              href={`/blog/${article.id}`}
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
            >
              <Image
                src={article.thumbnail || "/assets/sample.png"} // Use blog thumbnail or fallback
                alt={article.title}
                width={281.2}
                height={277}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                {index === 1 && (
                  <span className="bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded-full">
                    Pro
                  </span>
                )}
                <h3 className="text-sm font-semibold mt-2">{article.title}</h3>
              </div>
            </Link>
          ))
        ) : (
          <p>No blogs available.</p>
        )}
      </div>
    </div>
  );
};

export default EditorsPick;
