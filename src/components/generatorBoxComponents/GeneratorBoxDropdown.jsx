import { generatorBoxTextField } from "../../utils/commonStyles";
import { TextField, MenuItem } from "@mui/material";
import { useState } from "react";

const GeneratorBoxDropdown = ({ changeHandler, actionType }) => {
  const fontTypesList = [
    {
      value: "Arial",
      label: "Arial",
    },
    {
      value: "Gruppo",
      label: "Gruppo",
    },
    {
      value: "Raleway",
      label: "Raleway",
    },
    {
      value: "sans-serif",
      label: "sans-serif",
    },
    {
      value: "Roboto",
      label: "Roboto",
    },
  ];

  const [fontType, setFontType] = useState("Arial");

  const handleChange = (event) => {
    setFontType(event.target.value);
  };

  return (
    <TextField
      id="fontType"
      select
      label="Font Type"
      value={fontType}
      onChange={(event) => {
        handleChange(event);
        changeHandler(event, actionType);
      }}
      variant="filled"
      size="small"
      sx={generatorBoxTextField}
    >
      {fontTypesList.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
};

export { GeneratorBoxDropdown };
