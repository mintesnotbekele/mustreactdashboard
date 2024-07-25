import React from "react";
import "./component.css";

export const Component = ({ className }) => {
  return (
    <div className={`component ${className}`}>
      <button className="button">확인</button>
    </div>
  );
};