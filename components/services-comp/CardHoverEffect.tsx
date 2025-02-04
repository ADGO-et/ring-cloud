'use client';
import { HoverEffect } from "../ui/card-hover-effect";

export function CardHoverEffect() {
  return (
    <div className="px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Call presence",
  },
  {
    title: "Call transfer",
  },
  {
    title: "IVR Menu",
  },
  {
    title: "Mobile app",
  },
  {
    title: "All Standard Features",
  },
  {
    title: "Automated Conferencing",
  },
  {
    title: "Reporing and Analytics",
  },
  {
    title: "Call Restrictions",
  },
  {
    title: "Mobile app",
  },
  {
    title: "Call Conferencing",
  },
  {
    title: "Call recording",    
  },
  {
    title: "Call distribution",
  },
];
