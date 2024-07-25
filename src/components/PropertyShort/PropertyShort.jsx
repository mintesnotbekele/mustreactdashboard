/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const PropertyShort = ({
  className,
  text = "Select",
  
}) => {
  return (
    <div className={`property-short ${className}`}>
      <div className="select">{text}</div>
    
    </div>
  );
};

PropertyShort.propTypes = {
  text: PropTypes.string,
  vector: PropTypes.string,
};
