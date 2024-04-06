import React from 'react'
import { DatePicker } from "antd";
import dayjs from "dayjs";

import locale from "antd/es/date-picker/locale/en_US";
const DateSelect = ({value, handleDepartureDate,className, labelClass}) => {
  console.log(dayjs(value));
  console.log(Date(value));
  return (
    <label className="date relative flex-1 hover:cursor-pointer ">
    <div className={`bg-white font-medium text-sm text-slate-500 z-[1]  absolute left-7 ${labelClass}`}>
      Departure
    </div>
    <DatePicker
      locale={locale}
      format={"DD-MM-YYYY"}
      value={dayjs(value) }
      disabledDate={(current) =>
        current && current < dayjs().startOf("day")
      }
      onChange={(value) => {
        handleDepartureDate(value);
      }}
      allowClear= {false}
      className={`flex-1 w-11/12 relative rounded-lg m-3 focus:outline-none  border-2 border-solid focus:border-[rgb(34,118,227)] font-medium text-lg leading-7 text-[rgb(20, 24, 35)] py-3 px-4 md:py-5 md:px-4 border-slate-200 hover:border-slate-500
         ${className} `}
    />
  </label>
  )
}

export default DateSelect