import React from 'react'
import { Select } from 'antd';
const SortSection = ({results,setSortValue,total}) => {
  return (
    <div className="sort mb-2">
            {results && (
              <span className="text-xs px-6 my-2 inline-block text-slate-400">
                Showing {results} of {total}
              </span>
            )}

            <Select
              defaultValue="Select to Sort"
              className='min-w-32'
              label="Sort"
              onClear={()=>{
                setSortValue("{}");
              }}
              allowClear = {true}
              onChange={(value) => {
                console.log(value);
                setSortValue(value);
              }}

              options={[
                {
                  value: `{"avgCostPerNight":-1}`,
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
                  value: `{"avgCostPerNight":1}`,
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
                  value: `{"rating":1}`,
                  label: (
                    <span className="font-medium">
                      Rating{" "}
                      <span className="font-normal text-slate-400 text-xs">
                        (Low to High)
                      </span>{" "}
                    </span>
                  ),
                },
                {
                  value: `{"rating":-1}`,
                  label: (
                    <span className="font-medium">
                      Rating{" "}
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