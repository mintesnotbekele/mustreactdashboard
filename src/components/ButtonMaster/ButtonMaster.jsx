/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const ButtonMaster = ({ className, regularClassName, text = "Button text" }) => {
  return (
    <div className={`button-master ${className}`}>
      <div className={`regular ${regularClassName}`}>{text}</div>
    </div>
  );
};

ButtonMaster.propTypes = {
  text: PropTypes.string,
};
