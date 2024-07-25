/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const ArrowChevronDown4 = ({ color = "#F5F5F5", className }) => {
  return (
    <svg
      className={`arrow-chevron-down-4 ${className}`}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M13.4278 3.52167L11.66 1.75391L5.18155 8.23237L5.17818 8.22901L3.41042 9.99677L3.41378 10.0001L3.41044 10.0035L5.1782 11.7712L5.18155 11.7679L11.66 18.2463L13.4278 16.4786L6.94932 10.0001L13.4278 3.52167Z"
        fill={color}
      />
    </svg>
  );
};

ArrowChevronDown4.propTypes = {
  color: PropTypes.string,
};
