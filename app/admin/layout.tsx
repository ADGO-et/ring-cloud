"use client";

import { ReactNode, useEffect } from "react";
import { MdAddBox } from "react-icons/md";
import { RiFileListFill } from "react-icons/ri";

import AdminSideBar from "@/app/admin/AdminSideBar";
import AdminNavBar from "@/app/admin/AdminNavBar";
import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";

interface Props {
  children: ReactNode;
}

const navLinks = [
  {
    href: "/admin/blogs",
    label: "Blogs",
    Icon: <RiFileListFill className="text-2xl" />,
  },

  {
    href: "/admin/blogs/new",
    label: "Add Blog",
    Icon: <MdAddBox className="text-2xl" />,
  },
];

const Layout = ({ children }: Props) => {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("authToken");

    if (!token) {
      router.push("/auth/login");
      return;
    }

    try {
      const decodedToken: any = jwtDecode(token);

      if (decodedToken.exp * 1000 < Date.now()) {
        localStorage.removeItem("authToken");
        router.push("/auth/login");
      }
    } catch (error) {
      localStorage.removeItem("authToken");
      router.push("/auth/login");
    }
  }, [router]);

  return (
    <div className="flex">
      <div className="hidden md:block">
        <AdminSideBar navLinks={navLinks} />
      </div>
      <div className="flex-1 flex flex-col h-screen ">
        <AdminNavBar navLinks={navLinks} />
        <div className="flex-1 flex flex-col overflow-auto">
          <div className="flex-1 container px-5 lg:px-10">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
