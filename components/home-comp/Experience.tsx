import t from "@/public/assets/toparc.png";
import b from "@/public/assets/bottomarc.png";
import Image from "next/image";
export default function Experience() {
  return (
    <div className="bg-experience ">
      <Image src={t} alt="arc" />
      <div className="">
        <div className="text-white px-24 pt-16 space-y-2 ">
          <p className="text-2xl font-bold">Experience the Power of Process.</p>
          <p className="">
            Instead of focusing just on the problem, we take the holistic
            approach so we can build a solution that works end to end.{" "}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 md:px-20 py-8">
          <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-md">
            <p className="text-lg font-semibold text-gray-900">Cloud PBX</p>
            <p className="text-gray-500 text-sm mt-2">
              High-quality call handling, voicemail, call recording, and
              reporting dashboards.
            </p>
          </div>

          <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-md">
            <p className="text-lg font-semibold text-gray-900">
              Analytics and Reporting
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Gain actionable insights into call volumes, agent performance, and
              customer interactions.
            </p>
          </div>

          <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-md">
            <p className="text-lg font-semibold text-gray-900">Deliver</p>
            <p className="text-gray-500 text-sm mt-2">
              Resulting in a tailored solution that provides you value.
            </p>
          </div>

          <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-md">
            <p className="text-lg font-semibold text-gray-900">
              Contact Center
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Intelligent call distribution, advanced analytics, and omni
              channel support.
            </p>
          </div>
        </div>
      </div>
      <Image src={b} alt="arc" className="" />
    </div>
  );
}
