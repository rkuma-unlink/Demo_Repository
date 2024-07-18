import { FormControl, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";

const BasicSelect = ({
  className,
  name,
  placeholder,
  onChange,
  label,
  options,
  defaultValue = "",
}) => {
  const [selected, setSelected] = useState(defaultValue);
  return (
    <div className={className}>
      <FormControl className={`form-group`} fullWidth>
        <label className="label">{label}</label>
        <Select
          name={name}
          sx={{
            background: "#f2f2f2",
            borderRadius: "50px",
            height: "3rem",
            paddingLeft: ".5rem",
          }}
          value={selected}
          onChange={(event) => {
            console.log(event);
            onChange(event.target.name, event.target.value);
            setSelected(event.target.value);
          }}
        >
          {options?.map((itm, index) => (
            <MenuItem key={index} value={itm.value}>
              {itm.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default BasicSelect;
