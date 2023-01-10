import React from "react";

const OtherSources = ({ cfa, vetstreet, vca }) => {
  return (
    <div className="pb-4">
      <h2 className="font-bold text-xl text-white grid justify-items-center bg-second">
        Other Sources
      </h2>
      <div className="w-3/4 mx-auto grid justify-items-center space-x-4 pt-2">
        {cfa && (
          <a
            className="text-orange-700 rounded px-2 hover:bg-orange-200"
            href={cfa}
            target="_blank"
            rel="noreferrer noopener"
          >
            The Cat Fanciers&lsquo; Association
          </a>
        )}
        {vetstreet && (
          <a
            className="text-orange-700 rounded px-2 hover:bg-orange-200"
            href={vetstreet}
            target="_blank"
            rel="noreferrer noopener"
          >
            Vetstreet
          </a>
        )}
        {vca && (
          <a
            className="text-orange-700 rounded px-2 hover:bg-orange-200"
            href={vca}
            target="_blank"
            rel="noreferrer noopener"
          >
            VCA Animal Hospitals
          </a>
        )}
      </div>
    </div>
  );
};

export default OtherSources;
