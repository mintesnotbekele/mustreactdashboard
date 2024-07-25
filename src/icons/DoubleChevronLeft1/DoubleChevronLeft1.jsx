/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const DoubleChevronLeft1 = ({ color = "#F5F5F5", className }) => {
  return (
    <svg
      className={`double-chevron-left-1 ${className}`}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M11.6838 16.3914L9.91599 18.1592L3.43753 11.6807L3.43416 11.6841L1.66639 9.91633L1.66976 9.91296L1.66641 9.90961L3.43418 8.14185L3.43753 8.1452L9.91597 1.66675L11.6837 3.43451L5.20529 9.91296L11.6838 16.3914Z"
        fill={color}
      />
      <path
        className="path"
        d="M18.3504 16.3914L16.5827 18.1592L10.1042 11.6807L10.1008 11.6841L8.33306 9.91633L8.33643 9.91296L8.33308 9.90961L10.1008 8.14185L10.1042 8.1452L16.5826 1.66675L18.3504 3.43451L11.872 9.91296L18.3504 16.3914Z"
        fill={color}
      />
    </svg>
  );
};

DoubleChevronLeft1.propTypes = {
  color: PropTypes.string,
};
