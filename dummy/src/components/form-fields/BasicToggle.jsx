import React from "react";
import "./style.css"

const BasicToggle = ({ checked=false,onClick,label }) => {
  return (
    <div className="form-group mb-3">
      <label className="label">{label}</label><br/>
      <div className="switch" onClick={onClick}>
        <input value="2" type="checkbox" onChange={()=>{}} checked={checked} />
        <span className="slider round"></span>
      </div>
    </div>
  );
};

export default BasicToggle;
