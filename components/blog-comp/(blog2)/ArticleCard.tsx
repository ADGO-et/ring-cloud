import Image from "next/image";

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
      <Image
        src={image}
        alt="Article"
        width={300}
        height={200}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 text-center">
        <p className="text-sm text-gray-500 uppercase font-medium">
          {category}
        </p>
        <h3 className="mt-2 text-lg font-bold text-gray-800">{title}</h3>
        <p className="mt-1 text-sm text-gray-600">
          written by <span className="text-yellow-500">{author}</span>
        </p>
        <p className="text-sm text-gray-400">published on {date}</p>
      </div>
    </div>
  );
};

export default ArticleCard;
