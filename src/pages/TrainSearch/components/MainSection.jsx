import React, { useState } from "react";
import { FilterTwoTone } from "@ant-design/icons";
import { Pagination } from "antd";
import SortSection from "./SortSection";
import TrainContainer from "./TrainContainer";
const MainSection = ({ trainsList, totalResults, setPage, departureDate }) => {
  const [showFilter, setShowFilter] = useState(false);
  return (
    <div className=" w-full mx-auto mt-10 flex gap-4 flex-col md:flex-row md:w-11/12 lg:w-9/12">
      <div className="filterSection basis-1/4 ">
        <button
          className="px-4 md:hidden"
          onClick={() => {
            setShowFilter((prev) => !prev);
          }}
        >
          <FilterTwoTone /> Filter Hotels
        </button>
        <div className="px-4 max-md:hidden">
          {" "}
          <FilterTwoTone /> Filter Hotels
        </div>

        <div
          className={` ${
            showFilter ? "max-md:scale-100" : "max-md:scale-0"
          } w-10/12 md:w-full  bg-white md:h-[120vh] h-fit md:mt-4 rounded-xl border hover:shadow-even transition-all origin-top-left absolute left-8 md:left-auto md:relative p-4 z-[2] `}
        >
          <div className="w-full h-full relative">
            <button
              className="md:hidden absolute -top-6 -right-6 w-6 h-6 bg-white rounded-full shadow-even "
              onClick={() => {
                console.log("Clicked Cross");
                setShowFilter(false);
              }}
            >
              x
            </button>

            {/* <Filter
            flightsList={flightsList}
            setFlightsList={setFlightsList}
            filterValue={filterValue}
            setFilterValue={setFilterValue}
            filter = {filter}
          /> */}
          </div>
        </div>
      </div>

      <div className="basis-3/4">
        <SortSection
          results={"results"}
          total={"total"}
          setSortValue={(value) => {
            "setSortValue(value)";
          }}
        />

        {/* <HotelContainer isLoading ={isLoading} hotelsList={hotelsList}/> */}
        <TrainContainer trainsList={trainsList} departureDate={departureDate} />

        <Pagination
          className="my-4 flex items-center justify-center"
          total={20}
          onChange={(page) => {
            setPage(page);
            window.scrollBy(0, -window.innerHeight);
            document.getElementById("trainContainer").scrollTop = 0;
          }}
        />
      </div>
    </div>
  );
};

export default MainSection;
