import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FilterTwoTone } from "@ant-design/icons";
import { ContentWrapper } from "../../components";
import { Pagination, Skeleton } from "antd";
import SearchArea from "./SearchArea";
import HotelContainer from "./HotelContainer";

import dayjs from "dayjs";
import { fetchHotels } from "../../apis/fetchHotels";
import SortSection from "./SortSection";
import { BiBody } from "react-icons/bi";
import SkeletonAvatar from "antd/es/skeleton/Avatar";
import HotelCardSkeleton from "./HotelCardSkeleton";
import FilterHotels from "./FilterHotels";

const HotelSearch = () => {
  const { hotelSearchQuery } = useParams();

  let [locationQuery, checkInQuery, checkOutQuery, roomDataQuery, nightQuery] =
    hotelSearchQuery.split("&");

  locationQuery = locationQuery.replaceAll("+", " ");
  checkInQuery = JSON.parse(checkInQuery);
  checkOutQuery = JSON.parse(checkOutQuery);
  roomDataQuery = JSON.parse(roomDataQuery);

  // console.log({checkInQuery,checkOutQuery});

  // console.log(dayjs(checkInQuery))

  const [location, setLocation] = useState(locationQuery);
  const [checkIn, setCheckIn] = useState(dayjs(checkInQuery));
  const [checkOut, setCheckOut] = useState(dayjs(checkOutQuery));
  const [roomData, setRoomData] = useState(roomDataQuery);
  const [night, setNight] = useState(nightQuery);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(10);
  const [hotelsList, setHotelList] = useState(null);
  const [results, setResults] = useState(0);
  const [showFilter, setShowFilter] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [filterChange, setFilterChange] = useState("{}");
  const [sort, setSort] = useState({});
  const [filter, setFilter] = useState({});

  useEffect(() => {
    const token = localStorage.getItem("token");

    setIsLoading(true);

    fetchHotels(location, sort, filter, 10, page, token).then((res) => {
      // console.log("res", res);
      setTotal(res?.totalResults);
      setResults(res?.results);
      setHotelList(res?.data?.hotels);
      setIsLoading(false);
    });
  }, [location, page, sort,filterChange]);

  const handleFilter = (type, value) => {
    setFilterChange((prev) => !prev);
    // console.log("handleFilter called");

    if (type == "coupleFriendly") {
      setFilter((prev) => {
        // console.log("inside setFilter");
        if (value.length > 0) {
          prev["houseRules.guestProfile.unmarriedCouplesAllowed"] = value;
        } else {
          delete prev["houseRules.guestProfile.unmarriedCouplesAllowed"];
        }
        return prev;
      });
    }

    if (type == "rating") {
      setFilter((prev) => {
        if (value.length > 0) {
          prev["rating"] = value;
        } else {
          delete prev["rating"];
        }
        return prev;
      });
    }

    if (type == "price") {
      setFilter((prev) => {
        if (value.length > 0) {
          prev["fare"] = { $gte: parseInt(value[0]), $lte: parseInt(value[1]) };
        }
        return prev;
      });
    }
    setPage(1);
  };

  return (
    <div id="container" className="mx-auto w-full">
      <div
        className={`sticky p-0 m-0 top-0 left-0 right-0 z-10 bg-blue-500 w-screen  h-48 md:h-32  `}
      >
        <ContentWrapper>
          <SearchArea
            location={location}
            checkIn={checkIn}
            checkOut={checkOut}
            roomData={roomData}
            night={night}
            setLocation={setLocation}
            setCheckIn={setCheckIn}
            setCheckOut={setCheckOut}
            setRoomData={setRoomData}
            setNight={setNight}
          />
        </ContentWrapper>
      </div>

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
                  // console.log("Clicked Cross");
                  setShowFilter(false);
                }}
              >
                x
              </button>

              
              <FilterHotels
                filter={filter}
                setFilter={setFilter}
                handleFilter={handleFilter}
              />
            </div>
          </div>
        </div>

        <div className="basis-3/4">
          <SortSection
            results={results}
            total={total}
            setSortValue={(value) => {
              // console.log({ value });
              setSort(JSON.parse(value));
            }}
          />

          <HotelContainer isLoading={isLoading} hotelsList={hotelsList} />

          <Pagination
            className="my-4 flex items-center justify-center"
            total={total}
            onChange={(page) => {
              setPage(page);
              window.scrollBy(0, -window.innerHeight);
              document.getElementById("hotelContainer").scrollTop = 0;
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default HotelSearch;
