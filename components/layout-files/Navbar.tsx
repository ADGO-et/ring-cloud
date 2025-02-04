"use client";

import React, { useState, useEffect } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import logo from '@/public/assets/ringLogo.svg'
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {

    const links = [
        {name: "Home", url: "/home"},
        {name: "About us", url: "/about"},
        {name: "Services", url: "/services"},
        {name: "Blog", url: "/blog"},
        {name: "Pricing", url: "/pricing"},
        {name: "Contact us", url: "/contact"},
    ]

    const pathname = usePathname();

    // New scroll state
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

  return (
    <nav className={`bg-primaryColor text-white px-6 py-3 fixed top-0 w-full transition-shadow duration-300 ${scrolled ? "shadow-primaryColor shadow-3xl" : ""} z-50`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center relative">
        {/* Logo */}
        <Link href='/home' className="flex items-center text-2xl font-bold">
           <Image src={logo} alt="logo image"/>
           <span>RingCloud</span>
        </Link>
        {
            scrolled && (
                <style jsx global>{`
                    img[alt="logo image"] {
                        transform: rotate(720deg);
                        transition: transform 1s;
                    }
                `}</style>
            )
        }

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {links.map(
            (item) => (
              <Link href={item.url} key={item.url} className={`hover:text-gray-300 cursor-pointer ${pathname === item.url ? 'border-b-2' : ''}`} >
                {item.name}
              </Link>
            )
          )}
        </ul>

        {/* Buttons */}
        <div className="hidden md:flex space-x-4">
          <Link href='' className="bg-white text-primary px-4 py-1 rounded-md hover:bg-primaryColor hover:text-white">
            Login
          </Link>
          <Link href='' className="text-white px-4 py-1 rounded-md">
            Sign up
          </Link>
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger className="md:hidden">
            <Menu className="w-6 h-6" />
          </SheetTrigger>
          <SheetContent side="left" className="bg-primaryColor text-white">
            <ul className="flex flex-col space-y-4 text-lg">
              {links.map(
                (item) => (
                    <Link href={item.url} key={item.url} className="hover:text-gray-300 cursor-pointer">
                    {item.name}
                  </Link>
                )
              )}
            </ul>
            <div className="mt-6 space-y-3 flex flex-col">
              <Link href='' className="w-full bg-white text-primary px-4 py-2 rounded-md hover:bg-primaryColor hover:text-white">
                Login
              </Link>
              <Link href='' className="w-full text-white border border-white px-4 py-2 rounded-md">
                Sign up
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
