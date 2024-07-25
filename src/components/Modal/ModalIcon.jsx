import PropTypes from "prop-types";
import React from "react";
import "./modal-icon.css";

export const ModalIcon = ({ property1, propertyAlertClassName,url }) => {
  return (
    <>
    

    
        <div className={`modal-icon property-completed ${propertyAlertClassName}`}>
          <img className="check-circle" alt="Check circle" src={url} />
        </div>
      
    </>
  );
};

ModalIcon.propTypes = {
  property1: PropTypes.oneOf(["alert", "completed"]),
};