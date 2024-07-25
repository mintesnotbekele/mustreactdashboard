/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Basic = ({ property1, className, text = "대기", text1 = "승인", text2 = "거부" }) => {
  return (
    <div className={`basic ${property1} ${className}`}>
      <div className="text">
        {property1 === "approval" && <>{text1}</>}

        {property1 === "waiting" && <>{text}</>}

        {property1 === "refusal" && <>{text2}</>}

        {property1 === "check" && <>확인</>}

        {property1 === "schedule" && <>예정</>}
      </div>
    </div>
  );
};

Basic.propTypes = {
  property1: PropTypes.oneOf(["waiting", "schedule", "refusal", "approval", "check"]),
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
};
