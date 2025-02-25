import React from "react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  link,
}) => {
  return (
    <div className="p-6 rounded-lg transition-shadow duration-300 hover:shadow-lg">
      <div className="w-10 h-10 mb-4 text-[#003366]">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="text-gray-500 text-sm mt-2 flex-wrap">{description}</p>
      <a
        href={link}
        className="mt-4 inline-flex items-center text-yellow-500 font-medium hover:underline"
      >
        Learn More <span className="ml-2">→</span>
      </a>
    </div>
  );
};

export default ServiceCard;
