import { Button } from "../ui/button";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
export default function Hero() {
  return (
    <div className=" w-full h-full bg-gradient-to-b from-black via-black to-white">
      <div className="bg-hero-bg bg-center bg-cover items-center flex flex-col justify-center space-y-6 text-white md:px-28 px-4 py-16 lg:bg-bottom lg:h-[86vh] lg:space-y-6 lg:my-5 pb-5">
        <p className="text-white text-2xl md:text-4xl font-bold text-center mt-10 md:pt-20 flex-wrap lg:text-5xl">
          We are a <span className="text-primaryColor">group of experts</span>{" "}
          dedicated to helping businesses leverage cloud technology for
          transformative communication.
        </p>
        <p className="flex-wrap text-center lg:text-2xl">
          We do this through a number of services to provide comprehensive<br/>
          solutions for your business. Scroll down to read about what we can do
          for you.
        </p>
        <Button className="bg-white text-black w-fit px-4 lg:text-lg hover:text-white hover:bg-primaryColor">
          Create Account
        </Button>
        <p className="text-2xl">Find us on</p>
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
