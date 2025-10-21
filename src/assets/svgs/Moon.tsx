import React from "react";

const Moon: React.FC<{ color?: string }> = ({ color = "#757575" }) => {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.750002 10.199C0.748458 12.5783 1.55169 14.8883 3.02914 16.7533C4.50659 18.6183 6.57139 19.9288 8.88799 20.4718C11.2045 21.0147 13.6366 20.7582 15.789 19.744C17.9412 18.7297 19.6873 17.0173 20.7431 14.8852C11.2942 14.8852 6.60799 10.1979 6.60799 0.75C4.84842 1.62311 3.36767 2.97033 2.33266 4.63981C1.29765 6.3093 0.749502 8.23469 0.750002 10.199Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Moon;
