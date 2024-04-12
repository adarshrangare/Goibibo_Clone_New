import { DatePicker } from "antd";
import dayjs from "dayjs";
import React, { useState } from "react";
import { useEffect } from "react";
import { SwapButton } from "../../../components";
import { errorToast } from "../../../components/Toasts/toast";
import DateSelect from "../../Bus/components/DateSelect";
import InputArrays from "../../Bus/components/InputArrays";
import BusStationInput from "../../Bus/components/BusStationInput";
import { useNavigate } from "react-router-dom";

const SearchArea = ({ busSearchData, setBusSearchData }) => {
  //   console.log(busSearchData.departureDate);
  const [localInputData, setLocalInputData] = useState(busSearchData);
  const [swap, setSwap] = useState(false);

  useEffect(() => {
    let temp = localInputData.source;
    setLocalInputData((prev) => {
      prev.source = prev.destination;
      prev.destination = temp;
      return prev;
    });
  }, [swap]);

  const navigate = useNavigate();
  const handleSubmit = () => {
    if (localInputData.source === localInputData.destination) {
      errorToast("FROM and TO can not be the same");
      return;
    }

    setBusSearchData(localInputData);

    const dateParam = dayjs(localInputData?.departureDate).format(
      "YYYY-MM-DDTHH:mm:ss.SSS[Z]"
    );

    setTimeout(() => {
      navigate(`/bus/searchResults/${dateParam}`, { state: { ...busSearchData } });
    }, 200);
  };
  // console.log(busSearchData);
  return (
    <div className=" flex item-center md:flex-row flex-col md:gap-4 mx-auto ">
      <div className="locationInputs flex flex-col md:flex-row items-center ">
        <BusStationInput
          value={localInputData.source}
          label="FROM"
          handleLocation={(data) => {
            setLocalInputData((prev) => {
              prev.source = data;
              return { ...prev };
            });
          }}
          className={"h-12 bg-blue-700 text-white border-none "}
          labelClass="uppercase bg-blue-700 text-white trainLabels"
        />
        <SwapButton
          className={"h-fit p-2 rounded-md bg-white"}
          handleSwap={() => {
            setSwap((prev) => !prev);
          }}
        />
        <BusStationInput
          value={localInputData.destination}
          label="TO"
          handleLocation={(data) => {
            setLocalInputData((prev) => {
              prev.destination = data;
              return { ...prev };
            });
          }}
          className={"h-12 bg-blue-700 text-white border-none "}
          labelClass="uppercase bg-blue-700 text-white trainLabels"
        />
      </div>
      <div className="date flex max-md:mx-auto items-center justify-center ">
        <DateSelect
          className="h-12 bg-blue-700 border-none max-w-fit  text-white hover:bg-blue-700"
          labelClass=" hidden"
          value={localInputData?.departureDate}
          handleDepartureDate={(value) => {
            // console.log("handleDepartureDate");
            setLocalInputData((prev) => {
              return { ...prev, departureDate: value };
            });
            // console.log({ localInputData });
          }}
        />
      </div>
      <div className="submit flex max-md:mx-auto items-center justify-center ">
        <button
          className="bg-orange-600 h-12 px-8 mx-4 max-md:mb-4 font-medium text-slate-100 rounded-full active:bg-orange-700 outline-none"
          onClick={handleSubmit}
        >
          UPDATE SEARCH
        </button>
      </div>
    </div>
  );
};

export default SearchArea;
