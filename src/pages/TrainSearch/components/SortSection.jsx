import React from "react";
import { Select } from "antd";
import { SortLabel } from "../../../components";
const SortSection = ({ results, setSortValue, total }) => {
  return (
    <div className="sort mb-2">
      {
        <span className="text-xs px-6 my-2 inline-block text-slate-400">
          {results ? `Showing ${results} of ${total}` : "No Results Found"}
        </span>
      }

      <Select
        defaultValue="Select to Sort"
        className="min-w-32"
        label="Sort"
        onClear={() => {
          setSortValue("{}");
        }}
        allowClear={true}
        onChange={(value) => {
          // console.log(value);
          setSortValue(value);
        }}
        options={[
          {
            value: JSON.stringify({ fare: 1 }),
            label: <SortLabel heading="Price" subheading="Low to High" />,
          },
          {
            value: JSON.stringify({ fare: -1 }),
            label: <SortLabel heading="Price" subheading="High to Low" />,
          },
          {
            value: JSON.stringify({ departureTime: 1 }),
            label: (
              <SortLabel heading="Departure Time" subheading="Low to High" />
            ),
          },
          {
            value: JSON.stringify({ departureTime: -1 }),
            label: (
              <SortLabel heading="Departure Time" subheading="High to Low" />
            ),
          },
          {
            value: JSON.stringify({ arrivalTime: 1 }),
            label: <SortLabel heading="Arrival Time" subheading="Low toHigh" />,
          },
          {
            value: JSON.stringify({ arrivalTime: -1 }),
            label: (
              <SortLabel heading="Arrival Time" subheading="High to Low" />
            ),
          },
        ]}
      />
    </div>
  );
};

export default SortSection;
