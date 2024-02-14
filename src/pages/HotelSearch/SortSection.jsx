import React from 'react'
import { Select } from 'antd';
const SortSection = ({results,setSort,total}) => {
  return (
    <div className="sort mb-2">
            {results && (
              <span className="text-xs px-6 my-2 inline-block text-slate-400">
                Showing {results} of {total}
              </span>
            )}

            <Select
              defaultValue="Select to Sort"
              onChange={(value) => {
                console.log(value);
                setSortValue(value);
              }}
              options={[
                {
                  value: `"ticketPrice":1`,
                  label: (
                    <span className="font-medium">
                      Price{" "}
                      <span className="font-normal text-slate-400 text-xs">
                        (Low to High)
                      </span>{" "}
                    </span>
                  ),
                },
                {
                  value: `"ticketPrice":-1`,
                  label: (
                    <span className="font-medium">
                      Price{" "}
                      <span className="font-normal text-slate-400 text-xs">
                        (High to Low)
                      </span>{" "}
                    </span>
                  ),
                },
                {
                  value: `"duration":1`,
                  label: (
                    <span className="font-medium">
                      Duration{" "}
                      <span className="font-normal text-slate-400 text-xs">
                        (Low to high)
                      </span>{" "}
                    </span>
                  ),
                },
                {
                  value: `"duration":-1`,
                  label: (
                    <span className="font-medium">
                      Duration{" "}
                      <span className="font-normal text-slate-400 text-xs">
                        (High to Low)
                      </span>{" "}
                    </span>
                  ),
                },
                {
                  value: `"departureTime":1`,
                  label: (
                    <span className="font-medium">
                      Departure{" "}
                      <span className="font-normal text-slate-400 text-xs">
                        (Low to high)
                      </span>{" "}
                    </span>
                  ),
                },
                {
                  value: `"departureTime":-1`,
                  label: (
                    <span className="font-medium">
                      Departure{" "}
                      <span className="font-normal text-slate-400 text-xs">
                        (High to Low)
                      </span>{" "}
                    </span>
                  ),
                },
                {
                  value: `"arrivalTime":1`,
                  label: (
                    <span className="font-medium">
                      Arrival{" "}
                      <span className="font-normal text-slate-400 text-xs">
                        (Low to high)
                      </span>{" "}
                    </span>
                  ),
                },
                {
                  value: `"arrivalTime":-1`,
                  label: (
                    <span className="font-medium">
                      Arrival{" "}
                      <span className="font-normal text-slate-400 text-xs">
                        (High to Low)
                      </span>{" "}
                    </span>
                  ),
                },
              ]}
            />
          </div> 
  )
}

export default SortSection