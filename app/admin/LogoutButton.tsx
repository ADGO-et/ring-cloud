"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { IoLogOut } from "react-icons/io5";

const LogoutButton = () => {
  const router = useRouter();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = async () => {
    setIsLoggingOut(true);
    localStorage.removeItem("authToken");
    router.replace("/auth/login");
  };

  return (
    <Button
      variant={"default"}
      className="bg-[#003366] hover:bg-[#1e4e7e] "
      onClick={handleLogout}
      disabled={isLoggingOut}
    >
      <div className="flex gap-2 items-center">
        {isLoggingOut ? (
          <span className="text-md">Logging out...</span>
        ) : (
          <>
            <IoLogOut className="text-2xl" />
            <span className="text-md">Logout</span>
          </>
        )}
      </div>
    </Button>
  );
};

export default LogoutButton;
