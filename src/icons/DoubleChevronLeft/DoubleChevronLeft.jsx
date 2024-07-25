/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const DoubleChevronLeft = ({ color = "#9599A1", className }) => {
  return (
    <svg
      className={`double-chevron-left ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M14.0205 19.6696L11.8992 21.7909L4.12503 14.0168L4.12099 14.0208L1.99967 11.8995L2.00371 11.8955L1.99969 11.8914L4.12101 9.77013L4.12503 9.77414L11.8992 2.00001L14.0205 4.12132L6.24635 11.8955L14.0205 19.6696Z"
        fill={color}
      />
      <path
        className="path"
        d="M22.0205 19.6696L19.8992 21.7909L12.125 14.0168L12.121 14.0208L9.99967 11.8995L10.0037 11.8955L9.99969 11.8914L12.121 9.77013L12.125 9.77414L19.8992 2.00001L22.0205 4.12132L14.2463 11.8955L22.0205 19.6696Z"
        fill={color}
      />
    </svg>
  );
};

DoubleChevronLeft.propTypes = {
  color: PropTypes.string,
};
