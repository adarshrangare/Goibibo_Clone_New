import React from "react";
const ContentWrapper = ({ children }) => {
  return (
    <div className="contentWrapper w-full max-w-[1440px] mx-auto my-0 px-5 py-0">
      {children}
    </div>
  );
};

export default ContentWrapper;
