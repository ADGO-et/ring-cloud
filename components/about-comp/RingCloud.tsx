'use client';
import Image from "next/image";
import aboutImg from "@/public/assets/about.png";
import RotateWrapper from "../animation/RotateWrapper";
import FadeIn from "../animation/FadeIn";
import SlideFrom from "../animation/SlideFrom";

export default function RingCloudPBX() {
  return (
    <div className="bg-white text-gray-900 my-20">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto p-6 grid md:grid-cols-2 gap-6 items-start">
        {/* Left Side - Image */}
        <SlideFrom from="left" className="flex justify-center">
          <Image
            src={aboutImg}
            alt="Ring Cloud PBX Building"
            width={300}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </SlideFrom>
        {/* Right Side - Content */}
        <div className="space-y-6">
          <div className="border-l-2 border-b-2 border-black pl-4 pb-4">
            <RotateWrapper direction="vertical">
              <h2 className="text-2xl font-bold">YOUR TRUSTED<br/>RING CLOUD PBX</h2>
            </RotateWrapper>
            <FadeIn className="mt-4 text-gray-700">
              Welcome to Ring Cloud PBX, where your communication needs meet
              innovative solutions and dedicated support. Our journey in the
              cloud communication industry is defined by a commitment to
              excellence, a passion for empowering businesses, and an unwavering
              dedication to reliability and service. With us, you can trust that
              your communication is in expert hands, enabling you to focus on
              what truly matters—growing your business.
            </FadeIn>
          </div>
          <div>
            <RotateWrapper direction="vertical">
              <h2 className="text-2xl font-bold">OUR STORY</h2>
            </RotateWrapper>
            <FadeIn className="mt-4 text-gray-700">
              Founded by seasoned communication experts, Ring Cloud PBX was
              created to transform business communication by prioritizing client
              needs. Recognizing the complexities of cloud technology, our
              founders aimed to simplify the process, empowering businesses with
              tailored solutions and essential support. At Ring Cloud PBX, your
              success drives everything we do.
            </FadeIn>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-yellow-400 py-10 px-6 mt-10 rounded-2xl shadow-lg max-w-6xl mx-auto">
        <RotateWrapper direction="vertical">
          <h3 className="text-2xl font-bold text-center mb-6">
            WHY CHOOSE RING CLOUD PBX
          </h3>
        </RotateWrapper>
        <div className="grid grid-cols-1 md:grid-cols-3 rounded-lg p-6">
          {features.map((feature, index) => (
            <FadeIn key={index} className="border border-black p-4">
              <h4 className="font-semibold text-lg">{feature.title}</h4>
              <p className="text-gray-700 mt-2">{feature.description}</p>
            </FadeIn>
          ))}
        </div>
      </div>
      {/* About Us Section */}
      <div className="max-w-6xl mx-auto mt-10 p-6">
        <RotateWrapper direction="vertical">
          <h3 className="text-xl font-bold pb-2">ABOUT US</h3>
        </RotateWrapper>
        <FadeIn className="mt-4 text-gray-700 shadow-md p-4 shadow-primaryColor rounded-xl">
          At Ring Cloud PBX, we specialize in transforming communication for
          businesses through cutting-edge cloud technology. In partnership with
          WebSprix, we empower organizations with reliable, secure, and scalable
          solutions designed to enhance efficiency and customer engagement. With
          a commitment to innovation and excellence, our services redefine how
          businesses connect, collaborate, and grow.
        </FadeIn>
      </div>

      {/* Our Mission Section */}
      <div className="max-w-6xl mx-auto mt-5 p-6">
        <RotateWrapper direction="vertical">
          <h3 className="text-xl font-bold pb-2">OUR MISSION</h3>
        </RotateWrapper>
        <FadeIn className="mt-4 text-gray-700 shadow-md p-4 shadow-primaryColor rounded-xl">
          To empower businesses with comprehensive cloud-based communication
          solutions that enhance collaboration, optimize service excellence, and
          transform customer engagement.
        </FadeIn>
      </div>

      {/* Our Vision Section */}
      <div className="max-w-6xl mx-auto mt-5 p-6">
        <RotateWrapper direction="vertical">
          <h3 className="text-xl font-bold pb-2">OUR VISION</h3>
        </RotateWrapper>
        <FadeIn className="mt-4 text-gray-700 shadow-md p-4 shadow-primaryColor rounded-xl">
          To be the leading provider of innovative communication
          solutions, setting benchmarks in reliability, scalability, and
          customer satisfaction.
        </FadeIn>
      </div>
    </div>
  );
}

const features = [
  {
    title: "EXPERTISE",
    description:
      "Our team consists of industry experts dedicated to providing the best cloud communication solutions.",
  },
  {
    title: "TAILORED SOLUTIONS",
    description:
      "We customize our services to meet the unique needs of your business, ensuring maximum efficiency.",
  },
  {
    title: "RELIABILITY",
    description:
      "Our solutions are built on robust technology, providing you with dependable communication that you can count on.",
  },
  {
    title: "SCALABILITY",
    description:
      "As your business grows, our solutions easily scale to accommodate changing needs without disruption.",
  },
  {
    title: "EXCEPTIONAL SUPPORT",
    description:
      "We offer ongoing support and guidance to ensure you get the most out of your communication tools.",
  },
  {
    title: "INNOVATIVE TECHNOLOGY",
    description:
      "We leverage the latest advancements in cloud technology to keep you ahead of the competition.",
  },
];
