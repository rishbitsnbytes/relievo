import { Box } from "@mui/material";
import {
  GeneratorBoxTextField,
  GeneratorBoxColorInput,
  GeneratorBoxSubsectionHeading,
  GeneratorBoxDropdown,
  GeneratorBoxSlider,
} from ".";
import {
  generatorBoxSubsectionInputContainer,
  typographyStyle,
} from "../../utils/commonStyles";
import { useBoxShadow } from "contexts";
import { useAppTheme } from "providers/RelievoThemeProvider";

const BoxShadowGenerators = () => {
  const { boxShadowState, boxShadowDispatch } = useBoxShadow();

  const { mode } = useAppTheme();

  const labelColor = mode === "light" ? "#1a1a24" : "#d4d4d4";

  const changeHandler = (event, actionType) => {
    boxShadowDispatch({
      type: actionType,
      payload: event.target.value,
    });
  };

  console.log("boxShadowState", boxShadowState);

  return (
    <Box
      sx={{
        p: "0.5rem 0rem",
        display: "flex",
        flexDirection: "column",
        gap: 5,
      }}
    >
      <Box>
        <GeneratorBoxSubsectionHeading subsectionHeading="Box Shadow" />
        <Box sx={generatorBoxSubsectionInputContainer}>
          <GeneratorBoxSlider
            sliderLabel="Vertical :"
            changeHandler={changeHandler}
            actionType="UPDATE_BOX_SHADOW_VERTICAL"
            value={boxShadowState.hover.vertical}
            step={1}
            marks={true}
            min={0}
            max={100}
          />
          <GeneratorBoxSlider
            sliderLabel="Horizontal :"
            changeHandler={changeHandler}
            actionType="UPDATE_BOX_SHADOW_HORIZONTAL"
            value={boxShadowState.boxShadow.horizontal}
            step={1}
            marks={true}
            min={0}
            max={100}
          />
          <GeneratorBoxSlider
            sliderLabel="Blur Radius :"
            changeHandler={changeHandler}
            actionType="UPDATE_BOX_SHADOW_BLUR_RADIUS"
            value={boxShadowState.boxShadow.blurRadius}
            step={1}
            marks={true}
            min={0}
            max={100}
          />
          <GeneratorBoxSlider
            sliderLabel="Spread Radius :"
            changeHandler={changeHandler}
            actionType="UPDATE_BOX_SHADOW_SPREAD_RADIUS"
            value={boxShadowState.boxShadow.spreadRadius}
            step={1}
            marks={true}
            min={0}
            max={100}
          />
          <GeneratorBoxColorInput
            inputLabel="Color :"
            changeHandler={changeHandler}
            actionType="UPDATE_BOX_SHADOW_COLOR"
          />

          <label
            style={{
              ...typographyStyle,
              alignItems: "center",
              color: `${labelColor}`,
              display: "flex",
              gap: 5,
            }}
          >
            <input
              type="checkbox"
              value={boxShadowState.inset}
              onChange={(event) => changeHandler(event, "UPDATE_INSET")}
            />
            Inset
          </label>
        </Box>
      </Box>

      <Box>
        <GeneratorBoxSubsectionHeading subsectionHeading="Hover" />
        <Box sx={generatorBoxSubsectionInputContainer}>
          <GeneratorBoxSlider
            sliderLabel="Vertical :"
            changeHandler={changeHandler}
            actionType="UPDATE_HOVER_BOX_SHADOW_VERTICAL"
            value={boxShadowState.hover.vertical}
            step={1}
            marks={true}
            min={0}
            max={100}
          />
          <GeneratorBoxSlider
            sliderLabel="Horizontal :"
            changeHandler={changeHandler}
            actionType="UPDATE_HOVER_BOX_SHADOW_HORIZONTAL"
            value={boxShadowState.hover.horizontal}
            step={1}
            marks={true}
            min={0}
            max={100}
          />
          <GeneratorBoxSlider
            sliderLabel="Blur Radius :"
            changeHandler={changeHandler}
            actionType="UPDATE_HOVER_BOX_SHADOW_BLUR_RADIUS"
            value={boxShadowState.hover.blurRadius}
            step={1}
            marks={true}
            min={0}
            max={100}
          />
          <GeneratorBoxSlider
            sliderLabel="Spread Radius :"
            changeHandler={changeHandler}
            actionType="UPDATE_HOVER_BOX_SHADOW_SPREAD_RADIUS"
            value={boxShadowState.hover.spreadRadius}
            step={1}
            marks={true}
            min={0}
            max={100}
          />
          <GeneratorBoxColorInput
            inputLabel="Color :"
            changeHandler={changeHandler}
            actionType="UPDATE_HOVER_BOX_SHADOW_COLOR"
          />
        </Box>
      </Box>

      <Box>
        <GeneratorBoxSubsectionHeading subsectionHeading="Box" />
        <Box sx={generatorBoxSubsectionInputContainer}>
          <GeneratorBoxColorInput
            inputLabel="Box Color :"
            changeHandler={changeHandler}
            actionType="UPDATE_BOX_COLOR"
          />
        </Box>
      </Box>

      <Box>
        <GeneratorBoxSubsectionHeading subsectionHeading="Preview Box" />
        <Box sx={generatorBoxSubsectionInputContainer}>
          <GeneratorBoxColorInput
            inputLabel="Background Color :"
            changeHandler={changeHandler}
            actionType="UPDATE_BG_COLOR"
          />
        </Box>
      </Box>

      <Box>
        <GeneratorBoxSubsectionHeading subsectionHeading="Border" />
        <Box sx={generatorBoxSubsectionInputContainer}>
          <GeneratorBoxSlider
            sliderLabel="Border Size :"
            changeHandler={changeHandler}
            actionType="UPDATE_BORDER_SIZE"
            value={boxShadowState.border.size}
            step={1}
            marks={true}
            min={0}
            max={10}
          />
          <GeneratorBoxSlider
            sliderLabel="Border Radius :"
            changeHandler={changeHandler}
            actionType="UPDATE_BORDER_RADIUS"
            value={boxShadowState.border.radius}
            step={1}
            marks={true}
            min={0}
            max={100}
          />
          <GeneratorBoxColorInput
            inputLabel="Border Color :"
            changeHandler={changeHandler}
            actionType="UPDATE_BORDER_COLOR"
          />
        </Box>
      </Box>
    </Box>
  );
};

export { BoxShadowGenerators };
