"use client";

import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";
import Image from "next/image";
import logo from '@/public/assets/ringLogo.svg'
import Link from "next/link";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import PoppingWrapper from "../animation/Popping";

export default function Footer() {
  return (
    <footer className="bg-primaryColor text-white pt-36 pb-10 px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12 w-[95%] mx-auto">
        {/* Left Section - About */}
        <div>
          <h2 className="text-2xl font-bold flex items-center">
            <Image src={logo} alt="logo"/>
            <span>RingCloud</span>
          </h2>
          <p className="mt-2 text-gray-300">
            We do this through number of services to provide comprehensive
            solutions for your business.
          </p>
        </div>

        {/* Center Section - Contact & Social Media */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-yellow-400">Get In Touch</h3>
          <ul className="space-y-4 text-gray-300">
            <li className="flex items-center">
              <MapPin className="w-5 h-5 text-yellow-400 mr-2" />
              1234 Addis Ababa St, Bole, 0123
            </li>
            <li className="flex items-center">
              <Mail className="w-5 h-5 text-yellow-400 mr-2" />
              RingCloud@hello.com
            </li>
            <li className="flex items-center">
              <Phone className="w-5 h-5 text-yellow-400 mr-2" />
              +251 987-654-321
            </li>
            <li className="flex items-center">
              <MessageCircle className="w-5 h-5 text-yellow-400 mr-2" />
              12345 Text for support
            </li>
          </ul> 
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-yellow-400">Social Media</h3>
          <div className="flex space-x-4">
            <Link href="#" className="text-gray-300 hover:text-white">
              <FaFacebookF />
            </Link>
            <Link href="#" className="text-gray-300 hover:text-white">
              <FaInstagram />
            </Link>
            <Link href="#" className="text-gray-300 hover:text-white">
              <FaXTwitter />
            </Link>
            <Link href="#" className="text-gray-300 hover:text-white">
              <FaYoutube />
            </Link>
          </div>
        </div>

        {/* Right Section - Newsletter */}
        <form className="space-y-4">
          <PoppingWrapper degree={2}>
            <h3 className="text-lg font-semibold text-yellow-400">Join Link Newsletter</h3>
          </PoppingWrapper>
          <p className="text-gray-300">Your Email</p>
          <Input
            type="email"
            placeholder="Enter Your Email"
            className="mt-2 w-full bg-gray-700 text-white px-4 py-2 rounded-md outline-none"
          />
          <Button className="mt-3 w-full bg-yellow-400 text-black px-4 py-2 rounded-md hover:bg-yellow-500">
            Subscribe
          </Button>
        </form>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-gray-600 pt-4 text-center text-gray-400">
        Copyright © 2025 Ring Cloud Cloud PBX
      </div>
    </footer>
  );
}
