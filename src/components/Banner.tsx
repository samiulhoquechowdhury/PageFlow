import React from "react";
import Image from "next/image";
import Book from "./book.png";

const Banner = () => {
  return (
    <div className="max-w-7xl mx-auto border border-slate-200 mt-6 rounded-lg p-14">
      <div className="flex">
        <div className="text-6xl font-extrabold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent leading-normal">
          <h1 className="font-bold uppercase text-6xl p-3 max-w-screen-lg">
            Connect share and trade your favourite reads
          </h1>
        </div>
        <div>
          <Image src={Book} alt="Book banner" width={200} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
