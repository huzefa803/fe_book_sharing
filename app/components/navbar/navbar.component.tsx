"use client";
import Image from "next/image";
import { SearchComponent } from "../search/search.component";
import Link from "next/link";
import { LoginCardComponent } from "../login/login-card.component";
import { getCookie } from "nextjs-cookie";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { loginUser } from "@/lib/feature/user.slice";
import { UserMenuComponent } from "./user-menu.component";

export const Navbar = () => {
  const userState = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loginUser(getCookie("session-data")?.valueOf()));
  }, [dispatch]);

  return (
    <header className="w-full flex items-center p-5 mb-12 bg-gray-200 shadow-md sticky top-0 z-40">
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
        {userState.userData ? (
          <UserMenuComponent></UserMenuComponent>
        ) : (
          <LoginCardComponent></LoginCardComponent>
        )}
      </div>
    </header>
  );
};
