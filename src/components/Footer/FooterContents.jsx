import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import AxiosInstance from "../../apis/axios-instance";
import { trainStations } from "../../utils/constants";

const FooterContents = () => {
  const [cities, setCities] = useState(null);
  const [airports, setAirports] = useState(null);
  useEffect(() => {
    // fetchAirports().then(data => console.log(data));

    (async () => {
      const response = await AxiosInstance.get(`city?limit=40`);
      // console.log(response?.data?.data?.cities);
      setCities(response?.data?.data?.cities);
    })();

    (async () => {
      const response = await AxiosInstance.get(`airport?limit=40`);
      // console.log(response?.data?.data);
      setAirports(response?.data?.data?.airports);
    })();
  }, []);

  return (
    <div className="w-full pb-6 my-4 border-b">
      <ul className="md:px-8 flex  gap-2 text-[0.55rem] md:text-xs flex-wrap ">
        <li className=" md:leading-3 leading-[0.4rem] font-bold">
          Top Hotels in Cities:
        </li>
        {cities?.map((city,index) => (
          <li key={city.cityState+index} className=" md:leading-3 leading-[0.4rem]  ">
            <span className="mx-1">|</span> {city.cityState}
          </li>
        ))}
      </ul>
      <br />

      <ul className="md:px-8 flex  gap-2 text-[0.55rem] md:text-xs flex-wrap ">
        <li className=" md:leading-3 leading-[0.4rem] font-bold">
          Top Flights in Cities:
        </li>
        {airports?.map((airport,index) => (
          <li key={airport.city+index} className=" md:leading-3 leading-[0.4rem]  ">
            <span className="mx-1">|</span>{" "}
            {`${airport.city} to
            ${airports[Math.round(Math.random() * 29)]?.city}`}
          </li>
        ))}
      </ul>
      <br />
      <ul className="md:px-8 flex  gap-2 text-[0.55rem] md:text-xs flex-wrap ">
        <li className=" md:leading-3 leading-[0.4rem] font-bold">
          Top Trains from Junctions:
        </li>
        {trainStations?.map((junction,index) => (
          <li key={junction+index} className=" md:leading-3 leading-[0.4rem]  ">
            <span className="mx-1">|</span>{" "}
            {`${junction} to
            ${
              trainStations[
                Math.round(Math.random() * (trainStations.length - 2))
              ]
            }`}
          </li>
        ))}
      </ul>
      <br />

      <ul className="md:px-8 flex  gap-2 text-[0.55rem] md:text-xs flex-wrap ">
        <li className=" md:leading-3 leading-[0.4rem] font-bold">
          Top Buses in Cities:
        </li>
        {cities?.map((city,index) => (
          <li key={city.cityState+index} className=" md:leading-3 leading-[0.4rem]  ">
            <span className="mx-1">|</span>{" "}
            {`${city?.cityState.split(" ")[0]} to
            ${
              cities[
                Math.round(Math.random() * (cities.length - 2))
              ].cityState.split(" ")[0]
            }`}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterContents;
