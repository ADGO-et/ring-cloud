'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from '@/components/ui/dialog';
import { IoCheckmarkCircle } from "react-icons/io5";

const pricingPlans = [
  {
    name: 'Standard',
    price: '200birr',
    features: ['Call Presence', 'Call transfer', 'IVR menu', 'Mobile App'],
  },
  {
    name: 'Contact Center',
    price: '150birr',
    features: ['All Standard Features', 'Automated call', 'Reporting and Analytics', 'Call extensions'],
  },
  {
    name: 'Advanced',
    price: '1500birr',
    features: ['All Standard Features', 'Call forwarding', 'Call extensions', 'Call monitoring'],
  },
];

export default function PricingPage() {
  const [selectedPlan, setSelectedPlan] = useState('');

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="max-w-6xl my-20 mx-auto p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Plans & Pricing</h2>
        <div className="shadow-lg p-6 rounded-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-end">
            {pricingPlans.map((plan) => (
              <div
                key={plan.name}
                className={`p-6 rounded-2xl ${plan.name === 'Advanced' ? 'bg-blue-900 text-white min-h-[400px]' : 'bg-white text-gray-800 min-h-[350px]'} flex flex-col items-center text-center`}
              >
                {plan.name === 'Advanced' && (
                  <div className='flex w-full justify-end items-center mb-6'>
                    <p className='text-white bg-black w-fit py-1 px-3 text-end text-xs rounded-xl'>Most Popular</p>
                  </div>
                )}
                <h3 className="text-xl font-bold">{plan.price}/month</h3>
                <p className="mt-2 font-semibold">{plan.name}</p>
                <ul className="mt-4 space-y-4 text-left w-full">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <span className="text-lg"><IoCheckmarkCircle className={plan.name === 'Advanced' ? '' : 'text-primaryColor'}/></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Dialog>
                  <DialogTrigger asChild>
                    <button
                      className={`mt-4 w-full ${plan.name === 'Advanced' ? 'bg-black hover:text-white' : 'bg-gray-500 text-white cursor-pointer'} rounded-3xl py-2`}
                      onClick={() => setSelectedPlan(plan.name)}
                    >
                      Choose Plan
                    </button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Subscribe to {selectedPlan}</DialogTitle>
                      <DialogDescription>
                        Fill in your details to proceed with the subscription.
                      </DialogDescription>
                    </DialogHeader>
                    {/* Wrap input fields in a form */}
                    <form className="space-y-4">
                      <Input placeholder="Company Name" className="w-full" />
                      <Input placeholder="Address" className="w-full" />
                      <h4 className="font-semibold mt-4">Contact Personnel Information</h4>
                      <Input placeholder="Full Name" className="w-full" />
                      <Input type="email" placeholder="Email" className="w-full" />
                      <Input type="tel" placeholder="Phone Number" className="w-full" />
                      <Button type="submit" className="bg-yellow-500 text-black mt-4 hover:text-white w-full">
                        Register
                      </Button>
                    </form>
                    <DialogClose asChild>
                      <Button className="mt-4 w-full">Close</Button>
                    </DialogClose>
                  </DialogContent>
                </Dialog>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
