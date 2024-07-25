/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const DoubleChevronRight1 = ({ color = "#F5F5F5", className }) => {
  return (
    <svg
      className={`double-chevron-right-1 ${className}`}
      fill="none"
      height="21"
      viewBox="0 0 20 21"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M8.33332 16.4531L10.1011 18.2208L16.5796 11.7424L16.5829 11.7457L18.3507 9.97797L18.3473 9.97461L18.3507 9.97126L16.5829 8.20349L16.5796 8.20684L10.1011 1.72839L8.33334 3.49616L14.8118 9.97461L8.33332 16.4531Z"
        fill={color}
      />
      <path
        className="path"
        d="M1.66666 16.4531L3.43442 18.2208L9.91289 11.7424L9.91625 11.7457L11.684 9.97797L11.6807 9.97461L11.684 9.97126L9.91624 8.20349L9.91289 8.20684L3.43444 1.72839L1.66667 3.49616L8.14512 9.97461L1.66666 16.4531Z"
        fill={color}
      />
    </svg>
  );
};

DoubleChevronRight1.propTypes = {
  color: PropTypes.string,
};
