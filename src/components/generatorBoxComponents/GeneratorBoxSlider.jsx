import { Slider, Typography } from "@mui/material";
import { typographyStyle } from "../../utils/commonStyles";

const GeneratorBoxSlider = ({
  sliderLabel,
  changeHandler,
  actionType,
  value,
  step,
  marks,
  min,
  max,
}) => {
  return (
    <label
      style={{
        ...typographyStyle,
        alignItems: "center",
        color: "#d4d4d4",
        display: "flex",
        gap: 5,
      }}
    >
      {sliderLabel}
      <Slider
        color="secondary"
        defaultValue={value}
        valueLabelDisplay="auto"
        step={step}
        marks={marks}
        min={min}
        max={max}
        sx={{ width: "10rem" }}
        onChange={(event) => changeHandler(event, actionType)}
      />
      <Typography sx={{ pl: "0.5rem", width: "1rem" }}>{value}</Typography>
    </label>
  );
};

export { GeneratorBoxSlider };
