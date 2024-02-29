"use client";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import { toast } from "../ui/use-toast";
import { useRouter } from "next/navigation";

export const LoginComponent = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter()

  const login = (e: any) => {
    e.preventDefault();
    const body = {
      username: username,
      password: password,
    };
    axios
      .post("api/auth", body)
      .then((result) => {
        console.log('logged in')
        router.push('/')
      })
      .catch((err) => {
        console.log("login failed");
        if (err.response.status === 401) {
          toast({
            title: "Login Failed",
            description: `Invalid username or password`,
            variant: "destructive",
          });
        } else {
          toast({
            title: "Login Failed",
            description: `An error occurred`,
            variant: "destructive",
          });
        }
      });
  };

  return (
    <div className="flex h-full flex-col justify-center px-6 py-12 lg:px-8 align-middle">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full button-primary"
              onClick={login}
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
