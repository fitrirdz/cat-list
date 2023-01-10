import React from "react";
import SearchField from "./SearchField";

const Navbar = ({ keyword, setKeyword }) => {
  return (
    <div className="w-full h-28 py-4 pl-4 pr-12 fixed top-0 left-0 right-0 bg-fourth shadow-md text-white flex flex-row justify-between items-center">
      <div className="shrink-0 bg--300">
        <img alt="cat-logo" src="./cat-logo.webp" height={100} width={100} />
      </div>
      <div className="w-full">
        <SearchField keyword={keyword} setKeyword={setKeyword} />
      </div>
    </div>
  );
};

export default Navbar;
