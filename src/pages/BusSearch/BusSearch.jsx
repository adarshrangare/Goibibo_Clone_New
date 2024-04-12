import React, { useState } from "react";
import { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { ContentWrapper } from "../../components";
import { FilterTwoTone } from "@ant-design/icons";
import { Pagination } from "antd";
import MainSection from "./components/MainSection";
import SearchArea from "./components/SearchArea";
// import "./style.css";
import dayjs from "dayjs";
import { fetchBuses } from "../../apis/fetchBuses";

const BusSearch = () => {
  const location = useLocation();

  const { source, destination } = location.state;

  const {departureDate} = useParams();

  // console.log({ source, destination, departureDate });
  const [sort, setSort] = useState({});

  const [fare, setFare] = useState({});
  const [filter, setFilter] = useState({});

  const [busSearchData, setBusSearchData] = useState({
    source,
    destination,
    departureDate : dayjs(departureDate),
  });

  

  const [busesList, setBusesList] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(10);
  
  const day = dayjs(Date(departureDate)).format("ddd");
  // console.log(day);
  const [filterChange,setFilterChange]= useState(false);
  useEffect(() => {
    
    setIsLoading(true);
    fetchBuses(
      busSearchData.source,
      busSearchData.destination,
      day,
      sort,
      filter,
      10,
      page
    ).then((res) => {
      // console.log(res);
      setBusesList(res?.data?.buses);
      setIsLoading(false);
      setTotalResults(res?.totalResults);
    });
    // console.log("filter in TrainSearch", filter);
  }, [busSearchData, page, sort,filter,filterChange]);

  const handleFilter = (type,value) => {
    setFilterChange(prev=>!prev);
    // console.log("handleFilter called")

    

    if (type == "busType") {
      setFilter((prev) => {
        if(value.length > 0){
          prev["type"] = value
        } else{
          delete prev["type"]
        }
        return prev;
      });
    }

    if (type == "price") {
      console.log(filter);
      setFilter((prev) => {
        if(value.length > 0){
          prev["fare"] = {"$gte": parseInt(value[0]),"$lte": parseInt(value[1])}
        } 
        return prev;
      });
    }
    
    setPage(1);
  };
  


  return (
    <div id="container" className="mx-auto w-full">
      <div
        className={`sticky p-0 m-0 top-0 left-0 right-0 z-10 bg-blue-600 w-screen  h-fit md:h-32  `}
      >
        <ContentWrapper>
          <div className="flex item-center w-full h-fit md:h-32 mx-auto justify-center ">
            <SearchArea
              busSearchData={busSearchData}
              setBusSearchData={setBusSearchData}
            />
          </div>
        </ContentWrapper>
      </div>

      <MainSection
        setPage={setPage}
        setSort={setSort}
        filter={filter}
         setFilter = {setFilter}
         handleFilter = {handleFilter}
        totalResults={totalResults}
        busesList={busesList}
        departureDate={departureDate}
        isLoading={isLoading}
      />
    </div>
  );
};

export default BusSearch;
