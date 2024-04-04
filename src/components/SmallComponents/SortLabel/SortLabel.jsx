import React from "react";

const SortLabel = ({ heading, subheading }) => {
  return (
    <span className="font-medium">
      {heading}{" "}
      <span className="font-normal text-slate-400 text-xs">({subheading})</span>{" "}
    </span>
  );
};

export default SortLabel;
