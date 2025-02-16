"use client";

import React, { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { useRouter } from "next/navigation";
import { Alert, AlertDescription } from "@/components/ui/alert";

const LoginForm = () => {
  const router = useRouter();

  const [formState, setFormState] = useState({
    userName: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formState),
        }
      );

      const data = await response.json();
      if (!data.success) setError(data.error);
      else {
        const token = data.token;
        localStorage.setItem("authToken", token);

        // Optimistic navigation
        setIsLoading(true); // Ensures loading spinner remains visible

        router.replace("/admin/posts");
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unexpected error occurred");
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    router.prefetch("/admin/posts");
  }, [router]);

  return (
    <form
      onSubmit={handleSubmit}
      className="m-auto w-4/5 flex flex-col items-center gap-10 "
    >
      <div className="w-full flex flex-col items-center gap-2">
        <div className="w-4/5 md:w-full">
          <Label htmlFor="username" className="text-sm md:text-md">
            Username
          </Label>
          <Input
            type="text"
            required
            id="username"
            placeholder="Your Username"
            className="text-sm ring-0 focus-visible:ring-offset-0 focus-visible:ring-0"
            value={formState.userName}
            onChange={(e) =>
              setFormState({ ...formState, userName: e.target.value })
            }
          />
        </div>
        <div className="w-4/5 md:w-full">
          <Label htmlFor="password" className="text-sm md:text-md">
            Password
          </Label>
          <Input
            id="password"
            required
            type="password"
            placeholder="Your Password"
            className="text-sm w-full ring-0 focus-visible:ring-offset-0 focus-visible:ring-0"
            value={formState.password}
            onChange={(e) =>
              setFormState({ ...formState, password: e.target.value })
            }
          />
        </div>
      </div>

      {!isLoading && error && (
        <Alert variant={"destructive"}>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      <Button
        className="flex w-4/5 md:w-full gap-3 bg-[#003366] hover:bg-[#1e4e7e]"
        type="submit"
        disabled={isLoading}
      >
        {isLoading && <span className="text-md">Logging in...</span>}
        {!isLoading && <span>Login</span>}
      </Button>
    </form>
  );
};

export default LoginForm;
