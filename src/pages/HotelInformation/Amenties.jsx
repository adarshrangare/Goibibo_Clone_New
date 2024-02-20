import React from "react";
import { TrueIcon } from "../../assets/svgs";
import { ContentWrapper } from "../../components";
import { BiSolidDrink, BiWifi , BiSolidSpa } from "react-icons/bi";
import { MdPool } from "react-icons/md";
import { FaDumbbell } from "react-icons/fa6";
import { IoFastFood } from "react-icons/io5";


const icons = {
  "Free WiFi": <BiWifi className="inline-block w-4 basis-[15px] shrink-0"/> ,
  "Bar": <BiSolidDrink className="inline-block w-4 basis-[15px] shrink-0"/>,
  "Swimming Pool": <MdPool className="inline-block w-4 basis-[15px] shrink-0"/>,
  "Spa": <BiSolidSpa className="inline-block w-4 basis-[15px] shrink-0"/>,
  "Gym": <FaDumbbell className="inline-block w-4 basis-[15px] shrink-0"/>,
  "Restaurant":<IoFastFood className="inline-block w-4 basis-[15px] shrink-0"/>
};

const Amenties = ({ name, amenities }) => {
  return (
    <div className="rooms mx-auto bg-transparent my-8" id="amentiesSection">
      <ContentWrapper>
        <div className=" bg-white md:w-9/12 mx-auto rounded-lg border shadow-md ">
          <div className="flex gap-6 p-4  items-center border-b-2">
            <h1 className="font-semibold text-lg text-nowrap md:text-xl ">
              {`Amenties at ${name}`}
            </h1>
          </div>

          <ul className="m-4 ml-8  flex flex-col gap-2">
            {amenities &&
              amenities?.map((amenity, index) => (
                <li key={index} className="flex gap-3 text-slate-700 items-center">
                  {icons[amenity]}{" "}
                  {amenity}
                </li>
              ))}
          </ul>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default Amenties;
