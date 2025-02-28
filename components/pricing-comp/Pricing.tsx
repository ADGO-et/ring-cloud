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
import TitleFadeIn from '@/components/animation/TitleFadeIn';
import SlideFrom from '@/components/animation/SlideFrom';
import PoppingWrapper from '@/components/animation/Popping';

const pricingPlans = [
  {
    name: 'Contact Center',
    price: '1500birr',
    features: ['All advanced features', 'Automated call distribution', 'Reporting and Analytics', 'Call restrictions'],
  },
  {
    name: 'Advanced',
    price: '300birr',
    features: ['All Standard Features', 'Call conferencing', 'Call distribution', 'Call recording'],
  },
];

export default function PricingPage() {
  const [selectedPlan, setSelectedPlan] = useState('');

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="max-w-6xl my-20 mx-auto p-6">
        <TitleFadeIn title="Plans & Pricing" className="text-2xl font-bold text-gray-800 mb-6 text-center" />
        <div className="shadow-lg p-8 rounded-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-end">
            {pricingPlans.map((plan, planIndex) => (
              <SlideFrom key={plan.name} from="left" className={`p-8 rounded-2xl ${plan.name === 'Contact Center' ? 'bg-blue-900 text-white min-h-[400px]' : 'bg-white text-gray-800 min-h-[350px]'} flex flex-col items-center text-center`} delay={planIndex * 0.2}>
                {plan.name === 'Contact Center' && (
                  <div>
                    <div className='flex w-full justify-end items-center mb-6'>
                      <p className='w-fit py-3 px-3'></p>
                    </div>
                  </div>
                )}
                <h3 className="text-xl font-bold">{plan.price}/month</h3>
                <p className="mt-2 font-semibold">{plan.name}</p>
                <ul className="mt-4 space-y-4 text-left w-full">
                  {plan.features.map((feature, featureIndex) => (
                    <SlideFrom key={featureIndex} from="left" className="flex items-center space-x-2" delay={planIndex * 0.2 + featureIndex * 0.1}>
                      <span className="text-lg"><IoCheckmarkCircle className={plan.name === 'Contact Center' ? '' : 'text-primaryColor'}/></span>
                      <span>{feature}</span>
                    </SlideFrom>
                  ))}
                </ul>
                <Dialog>
                  <DialogTrigger asChild>
                    <button
                      className={`mt-4 w-full ${plan.name === 'Contact Center' ? 'bg-black hover:text-white' : 'bg-gray-500 text-white cursor-pointer'} rounded-3xl py-2`}
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
              </SlideFrom>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
