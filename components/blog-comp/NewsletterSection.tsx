import React from "react";
import { FaArrowTrendUp, FaBell } from "react-icons/fa6";

const NewsletterSection: React.FC = () => {
  return (
    <div className="bg-primaryColor">
      <div className="bg-primaryColor text-white py-16 px-6 md:px-16 w-[85%] my-6 mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Left Section */}
        <div className="md:w-2/3 space-y-8">
          <div className="flex items-center space-x-2 mb-4">
            <div className="bg-yellow-400 p-2 rounded-full">
              <FaArrowTrendUp />
            </div>
            <span className="text-sm font-semibold uppercase text-yellow-400">
              Get in touch with us to see how to
            </span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold">
            Start from the best proven <br /> Lorem Ipsum
          </h1>
          <p className="mt-2 text-gray-300 text-sm">
            Molestie nunc non blandit massa enim. Venenatis urna cursus eget
            nunc scelerisque viverra mauris in. Id aliquet risus feugiat in ante
            metus dictum at tempor.
          </p>
          <div className="mt-4 flex">
            <input
              type="email"
              placeholder="Type your email address..."
              className="p-3 rounded-l-lg w-64 text-gray-900 focus:outline-none"
            />
            <button className="bg-yellow-400 flex items-center gap-2 text-black font-semibold px-4 py-3 rounded-r-lg hover:bg-yellow-500 transition">
              <FaBell />
              <p> Get Updates </p>
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="md:w-1/3 mt-8 md:mt-0 space-y-8">
          <h2 className="text-yellow-400 text-lg font-bold">Top Columnist</h2>
          <div className="mt-4 space-y-8">
            {[
              { name: "Lorem Ipsum", title: "CTO of Great Company Inc." },
              { name: "Lorem Ipsum", title: "Digital Marketing Manager" },
              { name: "Lorem Ipsum", title: "Development Manager" },
            ].map((columnist, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                <div>
                  <h3 className="font-semibold">{columnist.name}</h3>
                  <p className="text-sm text-gray-300">{columnist.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSection;
