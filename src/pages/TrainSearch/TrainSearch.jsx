import React, { useState } from "react";
import { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { fetchTrains } from "../../apis/fetchTrains";
import { ContentWrapper } from "../../components";
import { FilterTwoTone } from "@ant-design/icons";
import { Pagination } from "antd";
import MainSection from "./components/MainSection";
import SearchArea from "./components/SearchArea";
import "./style.css";
import dayjs from "dayjs";
const TrainSearch = () => {
  const location = useLocation();

  const { source, destination } = location.state;

  // console.log({ source, destination, departureDate });
  const [sort, setSort] = useState({});

  const [fare, setFare] = useState({});
  const [filter, setFilter] = useState({});

  const {departureDate} = useParams();
  

  const [trainSearchData, setTrainSearchData] = useState({
    source,
    destination,
    departureDate : dayjs(departureDate),
  });

  const [trainsList, setTrainsList] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(10);

  const day = dayjs(Date(departureDate)).format("ddd");
  // console.log(day);
  const [filterChange, setFilterChange] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    fetchTrains(
      trainSearchData.source,
      trainSearchData.destination,
      day,
      sort,
      filter,
      10,
      page
    ).then((res) => {
      // console.log(res);
      setTrainsList(res?.data?.trains);
      setIsLoading(false);
      setTotalResults(res?.totalResults);
    });
    // console.log("filter in TrainSearch", filter);
  }, [trainSearchData, page, sort, filter, filterChange]);

  const handleFilter = (type, value) => {
    setFilterChange((prev) => !prev);
    // console.log("handleFilter called")

    if (type == "coachType") {
      setFilter((prev) => {
        // console.log("inside setFilter")
        if (value.length > 0) {
          prev["coaches.coachType"] = value;
        } else {
          delete prev["coaches.coachType"];
        }
        return prev;
      });
    }

    if (type == "trainType") {
      setFilter((prev) => {
        if (value.length > 0) {
          prev["trainType"] = value;
        } else {
          delete prev["trainType"];
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
        className={`sticky p-0 m-0 top-0 left-0 right-0 z-10 bg-orange-500 w-screen  h-fit md:h-32  `}
      >
        <ContentWrapper>
          <div className="flex item-center w-full h-fit md:h-32 mx-auto justify-center ">
            <SearchArea
              trainSearchData={trainSearchData}
              setTrainSearchData={setTrainSearchData}
            />
          </div>
        </ContentWrapper>
      </div>

      <MainSection
        setPage={setPage}
        setSort={setSort}
        filter={filter}
        setFilter={setFilter}
        handleFilter={handleFilter}
        totalResults={totalResults}
        trainsList={trainsList}
        departureDate={departureDate}
        isLoading={isLoading}
      />
    </div>
  );
};

export default TrainSearch;
