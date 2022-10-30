import { Slider, Typography } from "@mui/material";
import { typographyStyle } from "../../utils/commonStyles";
import { useAppTheme } from "providers/RelievoThemeProvider";

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
  const { mode } = useAppTheme();

  const labelColor = mode === "light" ? "#1a1a24" : "#d4d4d4";

  return (
    <label
      style={{
        ...typographyStyle,
        alignItems: "center",
        color: `${labelColor}`,
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
