import { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

import AdminNavBarMobile from "./AdminNavBarMobile";

import Logo from "../../public/assets/ringLogo.svg";

interface Props {
  navLinks: { href: string; label: string; Icon: ReactNode }[];
}

const AdminNavbar = ({ navLinks }: Props) => {
  return (
    <nav className="border px-2">
      <div className="container flex items-center justify-between py-3 ">
        <div className="hidden md:flex flex-col lg:flex-row lg:justify-end ">
          <div className="flex flex-col">
            <span className=" font-medium text-lg">Admin panel, </span>
          </div>
        </div>
        <Link
          href={"/blogs"}
          className="hidden md:inline-block bg-[#003366] rounded-xl"
        >
          <Button className=" bg-primaryColor hover:bg-primaryColor2">
            Visit On Website
          </Button>
        </Link>
        <Link href="/home" className="md:hidden">
          <Image
            src={Logo}
            alt="imageLogo"
            width={100}
            height={100}
            className="relative w-[100px] h-[50px]"
          />
        </Link>
        <h1 className="md:hidden">Admin Panel</h1>
        <AdminNavBarMobile navLinks={navLinks} />
      </div>
    </nav>
  );
};

export default AdminNavbar;
