'use client'

import Image from "next/image";
import { SearchComponent } from "../search/search.component";
import Link from "next/link";
import { useState } from "react";
import { LoginComponent } from "../login/login.component";

export const Navbar = () => {

  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleLoginClick = () => {
    setShowLoginModal(true);
  }

  
  return (
    <header className="w-full flex items-center p-5 mb-5">
      <div>
        <Image src={"/text_logo.png"} alt="Logo" width={100} height={200} />
      </div>
      <div className="px-10 basis-1/2">
        <SearchComponent></SearchComponent>
      </div>
      <div className="ml-auto">
        {/* <Link href="/login">Sign In</Link> */}
        <button className="button-primary" onClick={handleLoginClick}>Log In</button>
      </div>
      {showLoginModal && <LoginComponent />}
    </header>
  );
};
