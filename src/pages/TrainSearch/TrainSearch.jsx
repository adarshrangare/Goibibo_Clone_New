import React, { useState } from "react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { fetchTrains } from "../../apis/fetchTrains";
import { ContentWrapper } from "../../components";
import { FilterTwoTone } from "@ant-design/icons";
import { Pagination } from "antd";
import MainSection from "./components/MainSection";
import SearchArea from "./components/SearchArea";
import "./style.css";
const TrainSearch = () => {
  const location = useLocation();

  const { source, destination, departureDate } = location.state;

  console.log({ source, destination, departureDate });
  const [sort, setSort] = useState({});

  const [fare, setFare] = useState({});
  const [filter, setFilter] = useState({});

  const [trainSearchData, setTrainSearchData] = useState({
    source,
    destination,
    departureDate,
  });

  const [trainsList, setTrainsList] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(10);


  useEffect(() => {}, [trainSearchData]);

  useEffect(() => {
    setIsLoading(true);
    fetchTrains(
      trainSearchData.source,
      trainSearchData.destination,
      "Mon",
      sort,
      filter,
      10,
      page
    ).then((res) => {
      console.log(res);
      setTrainsList(res?.data?.trains);
      setIsLoading(false);
      setTotalResults(res?.totalResults)
      
    });
  }, [trainSearchData,page]);

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

      <MainSection setPage={setPage} totalResults={totalResults} trainsList={trainsList} />
    </div>
  );
};

export default TrainSearch;
