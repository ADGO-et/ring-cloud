import React, { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

import NavLink from "@/components/NavLink";

import Logo from "@/public/assets/ringLogo.svg";
import LogoutButton from "./LogoutButton";

interface Props {
  navLinks: { href: string; label: string; Icon: ReactNode }[];
}

const AdminSideBar = ({ navLinks }: Props) => {
  return (
    <nav className="border h-screen py-9 flex flex-col items-center gap-9">
      <Link href="/home" className="bg-[#003366] rounded-xl">
        <Image
          src={Logo}
          alt="imageLogo"
          width={100}
          height={200}
          className="w-[50px] h-[50px] md:w-[200px]  md:h-[100px]"
        />
      </Link>

      <div className="flex-1 flex flex-col gap-1">
        {navLinks.map(({ href, label, Icon }) => (
          <NavLink
            className=" flex justify-center mx-2 rounded-md"
            activeClassName="bg-primaryColor/20 hover:bg-primaryColor2/10  text-primaryColor"
            nonActiveClassName="bg-white hover:bg-gray-100"
            key={href}
            href={href}
          >
            <div className="flex gap-2 items-center py-2 px-12 w-full">
              {Icon}
              <span>{label}</span>
            </div>
          </NavLink>
        ))}
      </div>
      <LogoutButton />
    </nav>
  );
};

export default AdminSideBar;
