"use client";

import { useState } from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import Link from "next/link";
import RotateWrapper from "../animation/RotateWrapper";
import FadeIn from "../animation/FadeIn";

export default function FAQ() {
    const [openItem, setOpenItem] = useState<string | undefined>("item-0");

    const faqData = [
        {
          question: "What makes Ringcloud different from other communication platforms?",
          answer:
            "Ringcloud integrates multiple communication channels—voice, video, messaging—into one seamless, scalable platform. Our dedicated support and robust security measures give you peace of mind and reliability you can count on.",
        },
        {
          question: "Can Ringcloud services be customized to fit my business needs?",
          answer: "Yes! Ringcloud offers flexible customization options to tailor our services to your specific requirements.",
        },
        {
          question: "Is there a limit on how many users I can add?",
          answer: "No, there is no strict limit. Our platform scales with your business, whether you have a small team or thousands of users.",
        },
        {
          question: "How secure is Ringcloud’s platform?",
          answer: "Ringcloud employs industry-leading security measures, including end-to-end encryption and compliance with major security standards.",
        },
        {
          question: "What support options are available?",
          answer: "We offer 24/7 support via live chat, email, and phone to assist you whenever you need help.",
        },
      ];
  return (
    <section className="flex flex-col md:flex-row justify-between items-start">
      <div className="basis-full md:basis-2/5 text-center md:text-left">
        <RotateWrapper direction="vertical">
          <h2 className="text-4xl md:text-5xl font-bold">Frequently Asked <br/> Questions</h2>
        </RotateWrapper>
        <FadeIn className="mt-2 text-gray-500">
          Still need help? <Link href='' className="text-primaryColor font-semibold cursor-pointer hover:underline">Get Help Now</Link>
        </FadeIn>
      </div>

      <Accordion 
        value={openItem}
        type="single" 
        collapsible 
        className="mt-6 space-y-4 basis-full md:basis-3/5" 
        onValueChange={(value) => setOpenItem(value)}
      >
        {faqData.map((faq, index) => (
          <FadeIn key={index} className="">
            <AccordionItem 
              value={`item-${index}`} 
              className={`p-4 rounded-lg ${openItem === `item-${index}` ? "bg-gray-100 font-bold" : ""}`}
            >
              <AccordionTrigger className="text-lg">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-lg">{faq.answer}</AccordionContent>
            </AccordionItem>
          </FadeIn>
        ))}
      </Accordion>
    </section>
  );
}
