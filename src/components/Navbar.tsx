import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="max-w-7xl mx-auto flex items-center justify-between py-4 border-b">
      <div>
        <Link href={"/"}>
          <div>
            <div className="text-2xl font-bold tracking-wide">
              <span className="text-slate-500">Page</span>
              <span className="text-red-800">.</span>
              <span className="text-green-400">Flow</span>
            </div>
          </div>
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <button className="h-10 rounded-md border-2 border-green-700 px-4 py-2 text-sm font-medium transition-all hover:bg-green-400 hover:border-green-950 active:bg-green-600 hover:text-black hover:font-medium">
          sign in
        </button>
        <button className="h-10 rounded-md border-2 border-green-700 px-4 py-2 text-sm font-medium transition-all hover:bg-green-400 hover:border-green-950 active:bg-green-600 hover:text-black hover:font-medium">
          sign up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
