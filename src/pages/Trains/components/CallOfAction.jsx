import React from "react";
import { trainFeatures } from "../../../utils/constants";
const CallOfAction = () => {
  return (
    <div className="my-8 w-11/12 mx-auto bg-[#eef2f8] rounded-lg py-6 ">
      <div className="heading text-center py-4">
        <h1 className="font-semibold text-2xl md:text-3xl">
          1 million+ customers
        </h1>
        <p className="text-sm md:text-lg">book train tickets with us because</p>
      </div>
      <div className="flex md:flex-row flex-col gap-4 p-4 justify-center">
        {trainFeatures.map((feature, index) => (
          <div key={index} className="flex items-center gap-4 md:gap-2 md:max-w-[30%]  ">
            <div className="rounded-full p-1 aspect-square bg-blue-100 shrink-0 w-16 h-16 flex justify-center items-center ">
              <img
                src={feature.icon}
                alt={feature.title}
                width={60}
                height={60}
                className="w-full h-full "
              />
            </div>
            <div className="">
              <h1 className="font-medium text-xl text-wrap text-slate-800">{feature.title}</h1>
              <p className="text-wrap text-slate-700">{feature.description}</p>
              {feature.link && (
                <a href={feature.link.url} target="_blank" className="text-blue-700 font-medium text-sm">{feature.link.alt} </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CallOfAction;
