/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Short = ({ className, divClassName, text = "Button" }) => {
  return (
    <button className={`short ${className}`}>
      <div className={`button ${divClassName}`}>{text}</div>
    </button>
  );
};

Short.propTypes = {
  text: PropTypes.string,
};
