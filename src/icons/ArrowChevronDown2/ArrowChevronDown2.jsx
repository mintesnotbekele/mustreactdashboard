/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const ArrowChevronDown2 = ({ color = "#F5F5F5", className }) => {
  return (
    <svg
      className={`arrow-chevron-down-2 ${className}`}
      fill="none"
      height="21"
      viewBox="0 0 20 21"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M6.5722 16.5401L8.33997 18.3079L14.8184 11.8294L14.8218 11.8328L16.5896 10.065L16.5862 10.0616L16.5895 10.0583L14.8218 8.29052L14.8184 8.29387L8.33999 1.81542L6.57222 3.58318L13.0507 10.0616L6.5722 16.5401Z"
        fill={color}
      />
    </svg>
  );
};

ArrowChevronDown2.propTypes = {
  color: PropTypes.string,
};
