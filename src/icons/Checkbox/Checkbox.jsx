/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const Checkbox = ({ className }) => {
  return (
    <svg
      className={`checkbox ${className}`}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" clipPath="url(#clip0_1_2397)">
        <rect className="rect" fill="#DDE0E6" height="24" rx="6" width="24" />
        <path
          className="path"
          d="M13.3333 7.5L8.74996 12.0833L6.66663 10"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </g>
      <rect className="rect" height="19" rx="5.5" stroke="#B1B4BB" width="19" x="0.5" y="0.5" />
      <defs className="defs">
        <clipPath className="clip-path" id="clip0_1_2397">
          <rect className="rect" fill="white" height="20" rx="6" width="20" />
        </clipPath>
      </defs>
    </svg>
  );
};
