import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "./PageFlow-Logo.png";

const Navbar = () => {
  return (
    <nav className="max-w-7xl mx-auto flex items-center justify-between py-4 border-b">
      <div>
        <Link href={"/"}>
          <div>
            <div className="text-2xl font-bold tracking-wide flex items-center">
              <Image src={logo} alt="logo-image" width={50} />
              <span className="text-slate-500">Page</span>
              <span className="text-blue-400">Flow</span>
            </div>
          </div>
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <button className="h-10 rounded-md border-2 border-blue-400 px-4 py-2 text-sm font-medium transition-all hover:bg-blue-400 hover:border-blue-950 active:bg-blue-600 hover:text-black hover:font-medium">
          sign in
        </button>
        <button className="h-10 rounded-md border-2 border-blue-400 px-4 py-2 text-sm font-medium transition-all hover:bg-blue-400 hover:border-blue-950 active:bg-blue-600 hover:text-black hover:font-medium">
          sign up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
