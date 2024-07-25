/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Property1Alert = ({ color = "#FEF0C7", stroke = "#FFFAEB", fill = "#D46B08", className }) => {
  return (
    <svg
      className={`property-1-alert ${className}`}
      fill="none"
      height="32"
      viewBox="0 0 32 32"
      width="32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect className="rect" fill={color} height="30" rx="15" width="30" />
      <rect className="rect" height="30" rx="15" stroke={stroke} strokeWidth="4" width="30" />
      <path
        className="path"
        d="M13.5166 15.6853C13.5736 16.2785 13.6702 16.7194 13.803 17.0102C13.9376 17.3002 14.1764 17.4448 14.5212 17.4448C14.5856 17.4448 14.6433 17.4347 14.7005 17.423C14.7591 17.4347 14.8165 17.4448 14.8814 17.4448C15.2252 17.4448 15.4648 17.3002 15.5986 17.0102C15.7322 16.7194 15.8271 16.2785 15.8852 15.6853L16.1913 11.1052C16.2483 10.2124 16.2773 9.57188 16.2773 9.18305C16.2773 8.65383 16.1393 8.24086 15.8623 7.94437C15.5843 7.64789 15.2191 7.5 14.7668 7.5C14.7427 7.5 14.7246 7.50539 14.7009 7.50633C14.6784 7.50539 14.6599 7.5 14.6365 7.5C14.1832 7.5 13.8187 7.64789 13.5412 7.94437C13.264 8.24133 13.125 8.65453 13.125 9.18328C13.125 9.57211 13.1534 10.2127 13.2113 11.1054L13.5166 15.6853ZM14.7124 19.1189C14.2732 19.1189 13.9001 19.2574 13.5902 19.5345C13.2806 19.8117 13.1255 20.1483 13.1255 20.5434C13.1255 20.9895 13.2825 21.3405 13.5942 21.5955C13.9073 21.8505 14.2725 21.978 14.6899 21.978C15.1148 21.978 15.4854 21.8524 15.8023 21.6005C16.1187 21.3492 16.2769 20.9963 16.2769 20.5439C16.2769 20.1488 16.1255 19.8122 15.8227 19.5349C15.5198 19.2574 15.1498 19.1189 14.7117 19.1189"
        fill={fill}
      />
    </svg>
  );
};

Property1Alert.propTypes = {
  color: PropTypes.string,
  stroke: PropTypes.string,
  fill: PropTypes.string,
};
