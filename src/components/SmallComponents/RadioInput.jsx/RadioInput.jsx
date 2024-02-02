import React from 'react'

const RadioInput = ({checked, id,name,label,className, labelClass}) => {
  return (
    <div className={`w-fit flex gap-2 items-center cursor-pointer text-[rgb(34,118,227)]  px-4 py-2 rounded-[100px] bg-blue-100 ${className}`}>
        <input
            type="radio"
            id={id}
            checked={checked}
            className="scale-125 cursor-pointer"
            name={name}
          />
          <label
            htmlFor={id}
            className={`font-medium text-base cursor-pointer ${labelClass}`}
          >
            {label}
          </label>
        </div>
  )
}

export default RadioInput