import React from "react";
import SearchField from "./SearchField";

const Navbar = ({ keyword, setKeyword }) => {
  return (
    <div className="w-full h-28 p-4 fixed top-0 left-0 right-0 bg-fourth shadow-md text-white flex flex-row justify-between items-center space-x-16">
      <div className="shrink-0">Logo here</div>
      <div className="w-full">
        <SearchField keyword={keyword} setKeyword={setKeyword} />
      </div>
      <div className="font-bold text-right text-xl space-x-6 shrink-0">
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </div>
    </div>
  );
};

export default Navbar;
