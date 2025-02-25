// components/RingCloudPBX.tsx
import Image from "next/image";

import aboutImg from "@/public/assets/about.png";
import { Flag, Eye } from "lucide-react";

export default function RingCloudPBX() {
  return (
    <div className="bg-white text-gray-900 pt-24 pb-16">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto p-6">
        <Image
          src={aboutImg}
          alt="Ring Cloud PBX Building"
          width={1200}
          height={500}
          className="rounded-lg shadow-lg w-full max-h-[400px] object-cover"
        />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 mt-10">
          YOUR TRUSTED RING CLOUD PBX
        </h2>
        <p className="mt-4 text-gray-700 leading-relaxed">
          Welcome to Ring Cloud PBX, where your communication needs meet
          innovative solutions and dedicated support. Our journey in the cloud
          communication industry is defined by a commitment to excellence, a
          passion for empowering businesses, and an unwavering dedication to
          reliability and service. With us, you can trust that your
          communication is in expert hands, enabling you to focus on what truly
          matters—growing your business.
        </p>

        <h3 className="text-2xl font-semibold mt-8">OUR STORY</h3>
        <p className="mt-4 text-gray-700 leading-relaxed">
          Founded by seasoned communication experts, Ring Cloud PBX was created
          to transform business communication by prioritizing client needs.
          Recognizing the complexities of cloud technology, our founders aimed
          to simplify the process, empowering businesses with tailored solutions
          and essential support. At Ring Cloud PBX, your success drives
          everything we do.
        </p>
      </div>

      {/* Why Choose Us Section */}
      <div className=" py-12 mt-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold text-gray-900">
            WHY CHOOSE RING CLOUD PBX
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg shadow-md flex flex-col items-center"
              >
                <span className="text-4xl">{feature.icon}</span>
                <h4 className="font-semibold text-lg mt-4">{feature.title}</h4>
                <p className="text-gray-700 mt-2 text-center">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <div className="max-w-6xl mx-auto px-6 mt-12 text-center">
        <h3 className="text-3xl font-bold text-gray-900">ABOUT US</h3>
        <p className="mt-4 text-gray-700 leading-relaxed">
          At Ring Cloud PBX, we specialize in transforming communication for
          businesses through cutting-edge cloud technology. By offering tailored
          solutions, we improve organizations with reliable voice, automation,
          and collaboration tools. Our services facilitate better business
          careers, collaboration, and growth.
        </p>
      </div>

      {/* Mission and Vision Section */}
      <div className="max-w-6xl mx-auto px-6 mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 pb-24">
        {" "}
        {/* Added padding bottom for footer */}
        <div className="p-6 bg-white rounded-lg shadow-md text-center flex flex-col items-center">
          <div className="flex justify-center items-center w-16 h-16  rounded-full mb-4">
            <Flag className="w-10 h-10 text-blue-900" />
          </div>
          <h4 className="text-xl font-semibold">OUR MISSION</h4>
          <p className="text-gray-700 mt-2">
            To empower businesses with comprehensive cloud-based communication
            solutions, optimizing efficiency and customer engagement.
          </p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md text-center flex flex-col items-center">
          <div className="flex justify-center items-center w-16 h-16  rounded-full mb-4">
            <Eye className="w-10 h-10 text-blue-900" />
          </div>
          <h4 className="text-xl font-semibold">OUR VISION</h4>
          <p className="text-gray-700 mt-2">
            To be the leading provider of innovative communication solutions,
            setting benchmarks in reliability, scalability, and customer
            satisfaction.
          </p>
        </div>
      </div>
    </div>
  );
}

const features = [
  {
    icon: "📞",
    title: "Expertise",
    description:
      "Our team consists of industry experts dedicated to providing the best cloud communication solutions.",
  },
  {
    icon: "⚙️",
    title: "Tailored Solutions",
    description:
      "We customize our services to meet the unique needs of your business, ensuring maximum efficiency.",
  },
  {
    icon: "🔒",
    title: "Reliability",
    description:
      "Our solutions are built on robust technology, providing you with dependable communication that you can count on.",
  },
  {
    icon: "📈",
    title: "Scalability",
    description:
      "As your business grows, our solutions easily scale to accommodate changing needs without disruption.",
  },
  {
    icon: "💡",
    title: "Improved Support",
    description:
      "We offer ongoing support and guidance to ensure you get the most out of your communication tools.",
  },
  {
    icon: "🚀",
    title: "Innovative Technology",
    description:
      "We leverage the latest advancements in cloud technology to keep you ahead of the competition.",
  },
];
