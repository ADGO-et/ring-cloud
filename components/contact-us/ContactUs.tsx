import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { FaYoutube, FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import Image from "next/image";
import MapComponent from "./MapComponent";

export default function ContactUs() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-10 max-w-4xl w-full">
        <h2 className="text-center text-xl font-bold text-blue-900 border-b pb-2">
          Get In Touch
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-6">
          {/* Contact Form */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Leave us a message</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1">
                  Name
                </label>
                <Input
                  type="text"
                  placeholder="First Name, Last Name"
                  className="w-full"
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1">
                  Email Address
                </label>
                <Input
                  type="email"
                  placeholder="Email Address"
                  className="w-full"
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1">
                  Your Message
                </label>
                <Textarea
                  placeholder="Your Message"
                  className="w-full"
                  rows={4}
                />
              </div>
              <Button className="w-full bg-blue-900 text-white">Send</Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <p className="text-gray-700">
              Ring Cloud PBX, Lorum Ipsum A.A, Ethiopia.
            </p>
            <p className="text-gray-700">+251 999-999-9999</p>
            <p className="text-gray-700">Ringcloudpbx@gmail.com</p>

            {/* Social Icons using react-icons */}
            <div className="flex space-x-4">
              <FaYoutube className="w-6 h-6 text-gray-700 hover:text-blue-500 cursor-pointer" />
              <FaInstagram className="w-6 h-6 text-gray-700 hover:text-blue-500 cursor-pointer" />
              <FaFacebook className="w-6 h-6 text-gray-700 hover:text-blue-500 cursor-pointer" />
              <FaTwitter className="w-6 h-6 text-gray-700 hover:text-blue-500 cursor-pointer" />
            </div>

            {/* Embedded Map */}
            <MapComponent />
          </div>
        </div>
      </div>
    </div>
  );
}
