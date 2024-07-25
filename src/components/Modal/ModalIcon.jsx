import PropTypes from "prop-types";
import React from "react";
import "./modal-icon.css";
import check from './check-circle.svg';
export const ModalIcon = ({ property1, propertyAlertClassName }) => {
  return (
    <>
    

    
        <div className={`modal-icon property-completed ${propertyAlertClassName}`}>
          <img className="check-circle" alt="Check circle" src={check} />
        </div>
      
    </>
  );
};

ModalIcon.propTypes = {
  property1: PropTypes.oneOf(["alert", "completed"]),
};