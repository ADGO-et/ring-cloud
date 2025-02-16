import { ReactNode } from "react";
import Link from "next/link";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import NavLink from "@/components/NavLink";
import LogoutButton from "./LogoutButton";

import { HiMenuAlt2 } from "react-icons/hi";

interface Props {
  navLinks: { href: string; label: string; Icon: ReactNode }[];
}

const AdminNavBarMobile = ({ navLinks }: Props) => {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger>
          <HiMenuAlt2 className="text-3xl" />
        </SheetTrigger>
        <SheetContent className="flex flex-col">
          <div className="flex-1 pt-6 flex flex-col gap-2">
            <Link href="/blogs">
              <Button className=" bg-primaryColor hover:bg-primaryColor2">
                Visit On Website
              </Button>
            </Link>
            {navLinks.map(({ href, label, Icon }) => (
              <NavLink
                className=" flex justify-center py-2"
                activeClassName="bg-primaryColor/10 hover:bg-orange-100  text-primaryColor"
                nonActiveClassName="bg-gray-400/10 hover:bg-gray-200"
                key={href}
                href={href}
              >
                <SheetClose>
                  <div className="flex gap-2 items-center">
                    {Icon}
                    <span>{label}</span>
                  </div>
                </SheetClose>
              </NavLink>
            ))}
            <div className="flex-1 flex flex-col justify-end">
              <LogoutButton />
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default AdminNavBarMobile;
