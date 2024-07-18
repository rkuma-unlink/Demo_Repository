import React from "react";
import "./style.css";

const Card = ({ title, onClick, className }) => {
  return (
    <div className={`ag-courses_item ${className}`} onClick={onClick}>
      <div className="ag-courses-item_link">
        <div className="ag-courses-item_bg"></div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="ag-courses-item_title"
        >
          {title}
        </div>
      </div>
    </div>
  );
};

export default Card;
