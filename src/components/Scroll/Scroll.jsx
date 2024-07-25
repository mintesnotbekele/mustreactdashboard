/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Scroll = ({ property1, className, rectangleClassName }) => {
  return (
    <div className={`scroll ${property1} ${className}`}>
      <div className={`rectangle ${rectangleClassName}`} />
    </div>
  );
};

Scroll.propTypes = {
  property1: PropTypes.oneOf(["width", "lenght"]),
};
