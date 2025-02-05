import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Youtube,Instagram, Facebook, Twitter } from "lucide-react";
import Image from "next/image";

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

            {/* Social Icons */}
            <div className="flex space-x-4">
              <Youtube className="w-6 h-6 text-gray-700 hover:text-blue-500 cursor-pointer" />
              <Instagram className="w-6 h-6 text-gray-700 hover:text-blue-500 cursor-pointer" />
              <Facebook className="w-6 h-6 text-gray-700 hover:text-blue-500 cursor-pointer" />
              <Twitter className="w-6 h-6 text-gray-700 hover:text-blue-500 cursor-pointer" />
            </div>

            {/* Embedded Google Map */}
            <div className="rounded-lg overflow-hidden">
              <iframe
                title="Google Map"
                className="w-full h-48 rounded-lg"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093747!2d144.9537363159043!3d-37.81720987975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce7e33!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1601965371557!5m2!1sen!2sus"
                allowFullScreen={true}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
