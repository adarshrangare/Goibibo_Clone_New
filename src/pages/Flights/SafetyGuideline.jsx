import React from "react";

const SafetyGuideline = () => {
  return (
    <section className="w-10/12 my-6 md:my-10 px-10 py-4 items-center justify-between flex flex-col md:flex-row mx-auto bg-gradient-to-r from-white to-yellow-100 rounded-2xl shadow-even ">
      <img src="https://gos3.ibcdn.com/gosafe-1654247477.svg" alt="safety" />
      <div>
        Read the latest domestic & international travel guidelines here before
        you travel. Stay safe, travel safe.
      </div>
      <a
        href="https://www.goibibo.com/info/gosafe/"
        target="_blank"
        className="font-medium text-blue-600"
      >
        Read More
      </a>
    </section>
  );
};

export default SafetyGuideline;
