import React from "react";

const services = [
  {
    title: "Cloud PBX",
    description: "High-quality call handling, voicemail, call recording, and reporting dashboards.",
    image: "/images/cloud-pbx.png",
  },
  {
    title: "Analytics and Reporting",
    description: "Gain actionable insights into call volumes, agent performance, and customer interactions.",
    image: "/images/analytics-reporting.png",
  },
  {
    title: "Contact Center",
    description: "Intelligent call distribution, advanced analytics, and omni-channel support.",
    image: "/images/contact-center.png",
  },
  {
    title: "Deliver",
    description: "...resulting in a tailored solution that provides you value.",
    image: "/images/deliver.png",
  },
];

const Experiences = () => {
  return (
    <div className="flex flex-col items-center p-6 md:p-12 text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">Experience the Power of Process.</h2>
      <p className="text-gray-600 mb-10 max-w-2xl">
        Instead of focusing just on the problem, we take the holistic approach so we can build a solution that works end to end.
      </p>
      <div className="grid gap-8 w-full max-w-4xl">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg p-6 gap-4">
            <div className="bg-yellow-400 p-4 rounded-xl">
              <img src={service.image} alt={service.title} className="w-24 h-24" />
            </div>
            <div className="text-left">
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="text-gray-600 mt-2">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experiences;
