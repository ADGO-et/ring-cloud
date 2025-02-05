'use client'
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const pricingPlans = [
  {
    name: "Standard",
    price: "200birr",
    features: [
      "Call process",
      "Call transfer",
      "IVR menu",
      "Web App",
      "Mobile App",
    ],
  },
  {
    name: "Contact Center",
    price: "150birr",
    features: [
      "All Standard Features",
      "Automated call",
      "Call forwarding",
      "Reporting and Analytics",
      "Call extensions",
    ],
  },
  {
    name: "Advanced",
    price: "1500birr",
    features: [
      "All Standard Features",
      "Call forwarding",
      "Call extensions",
      "Call monitoring",
    ],
  },
];

export default function PricingPage() {
  const [selectedPlan, setSelectedPlan] = useState("Advanced");

  return (
    <div className="max-w-6xl my-20 mx-auto p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Plans & Pricing
      </h2>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {pricingPlans.map((plan) => (
          <div
            key={plan.name}
            className={`p-6 rounded-lg shadow-md transition-all ${
              selectedPlan === plan.name
                ? "bg-blue-900 text-white"
                : "bg-white text-gray-800"
            } flex flex-col items-center text-center`}
          >
            <h3 className="text-xl font-bold">{plan.price}/month</h3>
            <p className="mt-2 font-semibold">{plan.name}</p>
            <ul className="mt-4 space-y-2 text-left w-full">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <span className="text-lg">✔️</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Button
              className={`mt-4 w-full hover:text-white ${
                selectedPlan === plan.name
                  ? "bg-black"
                  : "bg-gray-200 text-gray-800"
              }`}
              onClick={() => setSelectedPlan(plan.name)}
            >
              Choose Plan
            </Button>
          </div>
        ))}
      </div>

      {/* Subscription Form */}
      <div className="bg-white shadow-lg rounded-lg p-16 mt-10 w-full max-w-xl mx-auto ">
        {/* <h3 className="text-xl font-bold mb-4 text-center">Register</h3> */}
        <div className="space-y-6">
          <Input placeholder="Company Name" className="w-full" />
          <Input placeholder="Address" className="w-full" />
          <h4 className="font-semibold mt-4">Contact Personnel Information</h4>
          <Input placeholder="Full Name" className="w-full" />
          <Input type="email" placeholder="Email" className="w-full" />
          <Input type="tel" placeholder="Phone Number" className="w-full" />

          <h4 className="font-semibold mt-4">Subscription Plan</h4>
          <div className="flex flex-wrap gap-2 justify-center">
            {pricingPlans.map((plan) => (
              <Button
                key={plan.name}
                className={`px-4 py-2 hover:text-white ${
                  selectedPlan === plan.name
                    ? "bg-blue-900 text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
                onClick={() => setSelectedPlan(plan.name)}
              >
                {plan.name}
              </Button>
            ))}
          </div>

          <Button className=" bg-yellow-500 text-black mt-4 hover:text-white">
            Register
          </Button>
        </div>
      </div>
    </div>
  );
}
