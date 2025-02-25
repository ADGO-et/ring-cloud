import { Button } from "../ui/button";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
export default function Hero() {
  return (
    <div className="bg-black w-full ">
      <div className="bg-hero-bg bg-center bg-cover pt-12 items-center flex flex-col justify-center space-y-6 text-white md:px-28 px-4">
        <p className="text-white text-2xl md:text-4xl font-bold text-center pt-10 md:pt-20 flex-wrap">
          We are a <span className="text-primaryColor">group of experts</span>{" "}
          dedicated to helping businesses leverage cloud technology for
          transformative communication.
        </p>
        <p className="flex-wrap text-center">
          We do this through a number of services to provide comprehensive
          solutions for your business. Scroll down to read about what we can do
          for you.
        </p>
        <Button className="bg-white text-black w-fit px-4">
          Create Account
        </Button>
        <p>Find us on</p>
        <div className="flex space-x-4 pb-8">
          <Link href="#" className="lg:text-white text-black hover:text-white">
            <FaFacebookF />
          </Link>
          <Link href="#" className="lg:text-white text-black hover:text-white">
            <FaInstagram />
          </Link>
          <Link href="#" className="lg:text-white text-black hover:text-white">
            <FaXTwitter />
          </Link>
          <Link href="#" className="lg:text-white text-black hover:text-white">
            <FaYoutube />
          </Link>
        </div>
      </div>
    </div>
  );
}
