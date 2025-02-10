import React from "react";

interface ArticleCardProps {
  category: string;
  title: string;
  author: string;
  date: string;
  image: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  category,
  title,
  author,
  date,
  image,
}) => {
  return (
    <div className="flex flex-col items-center bg-white rounded-2xl shadow-lg overflow-hidden max-w-xs">
      <img src={image} alt="Article" className="w-full h-48 object-cover" />
      <div className="p-4 text-center">
        <p className="text-sm text-gray-500 uppercase font-medium">{category}</p>
        <h3 className="mt-2 text-lg font-bold text-gray-800">{title}</h3>
        <p className="mt-1 text-sm text-gray-600">
          written by <span className="text-yellow-500">{author}</span>
        </p>
        <p className="text-sm text-gray-400">published on {date}</p>
      </div>
    </div>
  );
};

const YouMightLoveSection: React.FC = () => {
  const articles = [
    {
      category: "Marketing",
      title: "Lorem ipsum dolor sit amet Lorem ipsum",
      author: "Lorem Ipsum",
      date: "29.01.2025",
      image: "/assets/sample.png",
    },
    {
      category: "Creative",
      title: "Lorem ipsum dolor sit amet Lorem ipsum",
      author: "Lorem Ipsum",
      date: "29.01.2025",
      image: "/assets/sample.png",
    },
    {
      category: "Brand",
      title: "Lorem ipsum dolor sit amet Lorem ipsum",
      author: "Lorem Ipsum",
      date: "29.01.2025",
      image: "/assets/sample.png",
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <h2 className="text-center text-2xl font-bold text-gray-800 mb-8">You might love</h2>
      <div className="flex justify-center gap-6 flex-wrap">
        {articles.map((article, index) => (
          <ArticleCard key={index} {...article} />
        ))}
      </div>
    </section>
  );
};

export default YouMightLoveSection;
