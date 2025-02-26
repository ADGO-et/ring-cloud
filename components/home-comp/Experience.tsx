import t from "@/public/assets/toparc.png";
import b from "@/public/assets/bottomarc.png";
import Image from "next/image";

export default function Experience() {
  return (
    <div className="bg-experience flex flex-col items-center">
      <Image src={t} alt="arc" />
      <div className="w-[80%] flex flex-col">
        {/* Left-Aligned Text Section */}
        <div className="text-white px-4 md:px-24 pt-16 space-y-2 flex flex-col items-start text-left">
          <p className="text-2xl font-bold">Experience the Power of Process.</p>
          <p className="max-w-2xl">
            Instead of focusing just on the problem, we take the holistic
            approach so we can build a solution that works end to end.
          </p>
        </div>

        {/* Grid Section with Centered Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 md:px-20 py-8 place-items-center">
          {[
            {
              title: "Cloud PBX",
              description:
                "High-quality call handling, voicemail, call recording, and reporting dashboards.",
            },
            {
              title: "Analytics and Reporting",
              description:
                "Gain actionable insights into call volumes, agent performance, and customer interactions.",
            },
            {
              title: "Deliver",
              description:
                "Resulting in a tailored solution that provides you value.",
            },
            {
              title: "Contact Center",
              description:
                "Intelligent call distribution, advanced analytics, and omni-channel support.",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-white w-full max-w-md p-6 rounded-lg shadow-md flex flex-col items-center text-center mx-auto"
            >
              <p className="text-lg font-semibold text-gray-900">
                {service.title}
              </p>
              <p className="text-gray-500 text-sm mt-2">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Image src={b} alt="arc" />
    </div>
  );
}
