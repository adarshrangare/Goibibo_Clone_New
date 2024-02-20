import React from "react";

const TrueIcon = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      height="1.5rem"
      width="1.5rem"
      margin="0px 1rem 0px 0px"
      fill="#46484d"
      className={className}
    >
      <path d="M8 0a8 8 0 110 16A8 8 0 018 0zm3.73 4.171a.857.857 0 00-.788.357L7.507 9.213a.176.176 0 01-.126.07.17.17 0 01-.135-.05L5.622 7.846A.859.859 0 004.408 9.06l2.473 2.234c.16.162.38.252.607.252h.069a.859.859 0 00.626-.348l4.144-5.655a.862.862 0 00-.596-1.372z"></path>
    </svg>
  );
};

const FalseIcon = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      height="1.5rem"
      width="1.5rem"
      fill="#46484d"
      margin="0 1rem 0 0"
      className={className}
    >
      <path d="M13.654 2.34a8 8 0 00-11.312.005A8 8 0 0013.654 13.66a8.013 8.013 0 000-11.318zm-2.52 7.847a.667.667 0 01-.94.944L8.119 9.057a.167.167 0 00-.236 0L5.81 11.13a.68.68 0 01-.944 0 .668.668 0 010-.944L6.94 8.113a.163.163 0 000-.235L4.866 5.804a.668.668 0 01.94-.944L7.88 6.934c.031.031.074.05.118.05s.087-.019.118-.05L10.19 4.86a.669.669 0 01.944.944L9.059 7.878a.166.166 0 000 .235l2.075 2.074z"></path>
    </svg>
  );
};
const ExeclametryIcon = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      height="1.5rem"
      width="1.5rem"
      fill="#46484d"
      margin="0 1rem 0 0"
      className={className}
    >
      <path
        d="M7.989.002a8.136 8.136 0 00-5.673 2.435A7.864 7.864 0 00.001 8.139 7.851 7.851 0 007.867 16h.142a8.073 8.073 0 007.99-8.138A7.84 7.84 0 007.99.002zM7 11.029a.98.98 0 01.27-.713.975.975 0 01.696-.307h.018c.547 0 .995.433 1.015.98a.983.983 0 01-.966 1.019h-.018A1.019 1.019 0 017 11.028zm.334-2.695v-4a.666.666 0 111.333.001v4a.667.667 0 01-1.333-.002z"
        fill="#46484d"
        fill-rule="evenodd"
      ></path>
    </svg>
  );
};

export { TrueIcon, FalseIcon, ExeclametryIcon };
