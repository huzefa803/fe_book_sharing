"use client";
import Image from "next/image";
import { SearchComponent } from "../search/search.component";
import Link from "next/link";
import { LoginCardComponent } from "../login/login-card.component";
import { getCookie } from "nextjs-cookie";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    setLoggedIn(getCookie("session-data") ? true : false);
  }, []);

  return (
    <header className="w-full flex items-center p-5 mb-12 bg-gray-200 shadow-md sticky top-0 z-50">
      <div>
        <Link href="/">
          <Image
            src={"/text_logo.png"}
            alt="Logo"
            width={1000}
            height={100}
            className="max-w-24 h-auto"
            loading="eager"
            priority={true}
          />
        </Link>
      </div>
      <div className="px-10 basis-1/2">
        <SearchComponent></SearchComponent>
      </div>
      <div className="ml-auto">
        {loggedIn ? (
          <button className="bg-orange-400 rounded-full p-1">
            <Image
              src="/user.svg"
              height={100}
              width={25}
              alt="user-icon"
            ></Image>
          </button>
        ) : (
          <LoginCardComponent></LoginCardComponent>
        )}
      </div>
    </header>
  );
};
