import React, { useState } from "react";

const SearchField = ({ keyword, setKeyword }) => {
  const [tempKeyword, setTempKeyword] = useState("");
  return (
    <div className="">
      <div className="w-full flex flex-row space-x-2 items-center">
        <h2 className="text-xl font-bold pb-2 text-center shrink-0">
          Find a cat
        </h2>
        <input
          type="text"
          className="h-12 w-full bg-first outline-none border-4 border-white rounded-lg p-3 text-black font-semibold"
          placeholder="Type your cat breed"
          onChange={(e) => setTempKeyword(e.target.value)}
        />
        <button
          className="h-12 w-28 bg-second rounded-lg outline-none text-black font-semibold"
          style={{ borderRadius: "none" }}
          onClick={() => setKeyword(tempKeyword)}
        >
          SEARCH
        </button>
      </div>
    </div>
  );
};

export default SearchField;
