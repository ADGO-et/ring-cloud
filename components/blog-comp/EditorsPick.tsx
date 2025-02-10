'use client';

import React from 'react';
import Image from "next/image";
import { useRouter } from 'next/navigation';

const EditorsPick: React.FC = () => {
  const router = useRouter();
  const articles = [
    {
      id: 1,
      title: "The entrepreneurial mindset and business principles",
      image: "/assets/sample.png",
    },
    {
      id: 2,
      title: "Introducing emerging economies to entrepreneurship",
      image: "/assets/sample.png",
      pro: true,
    },
    {
      id: 3,
      title: "Fundamentals of entrepreneurship in the family business",
      image: "/assets/sample.png",
    },
    {
      id: 4,
      title: "Extraction industry contracts: Negotiating a good deal",
      image: "/assets/sample.png",
    },
  ];

  return (
    <div className="w-full p-2 max-w-6xl mx-auto mt-10">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-primaryColor">Editors Pick</h2>
        <a href="#" className="text-blue-600 hover:underline text-sm">View All</a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {articles.map((article, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer" onClick={() => router.push(`/blog/${article.id}`) }>
            <Image src={article.image} alt={article.title} width={281.2} height={277} className="w-full h-40 object-cover" />
            <div className="p-4">
              {article.pro && (
                <span className="bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded-full">Pro</span>
              )}
              <h3 className="text-sm font-semibold mt-2">{article.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EditorsPick;
