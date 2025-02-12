import { fetchBlogsFromController } from "@/app/api/blogs/controllers/article";
import ArticleCard from "./ArticleCard";

const YouMightLoveSection = async () => {
  const { success, blogs } = await fetchBlogsFromController();

  if (!success || blogs.length === 0) {
    return <p className="text-center text-red-500">No articles found.</p>;
  }

  return (
    <section className="py-12 bg-gray-50">
      <h2 className="text-center text-2xl font-bold text-gray-800 mb-8">
        You might love
      </h2>
      <div className="flex justify-center gap-6 flex-wrap">
        {blogs.slice(0, 3).map((article, index) => (
          <ArticleCard
            key={index}
            category={article.category}
            title={article.title}
            author={article.author || "Unknown"} // Assuming author info is added later
            date={new Date(article.createdAt).toLocaleDateString()}
            image={article.thumbnail}
          />
        ))}
      </div>
    </section>
  );
};

export default YouMightLoveSection;
