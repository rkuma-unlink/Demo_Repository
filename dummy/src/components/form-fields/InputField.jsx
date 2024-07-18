import React from "react";
import './style.css';

const InputField = ({
  label,
  name,
  value,
  required,
  type = "text",
  placeholder,
  onChange,
  title,
  className,
}) => {
  return (
    <div className={`form-group mb-3 ${className}`}>
      <label className="label">{label}</label>
      <input
        name={name}
        type={type}
        value={value}
        className="form-control"
        placeholder={placeholder}
        required={required}
        title={title}
        onChange={(e) => onChange(name, e.target.value, e.target.title)}
      />
    </div>
  );
};

export default InputField;
