import React from "react";
const ContentWrapper = ({ children, className }) => {
  return (
    <div className={"contentWrapper w-full max-w-[1440px] mx-auto my-0 px-5 py-0 "+className}>
      {children}
    </div>
  );
};

export default ContentWrapper;
