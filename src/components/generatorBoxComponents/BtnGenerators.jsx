import { Box } from "@mui/material";
import {
  GeneratorBoxTextField,
  GeneratorBoxColorInput,
  GeneratorBoxSubsectionHeading,
  GeneratorBoxDropdown,
  GeneratorBoxSlider,
} from "./";
import { generatorBoxSubsectionInputContainer } from "../../utils/commonStyles";
import { useBtn } from "contexts";

const BtnGenerators = () => {
  const { btnState, btnDispatch } = useBtn();

  const changeHandler = (event, actionType) => {
    btnDispatch({
      type: actionType,
      payload: event.target.value,
    });
  };

  console.log("btnState", btnState);

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
        <GeneratorBoxSubsectionHeading subsectionHeading="Button" />
        <Box sx={generatorBoxSubsectionInputContainer}>
          <GeneratorBoxTextField />
          <GeneratorBoxColorInput
            inputLabel="Button Color :"
            changeHandler={changeHandler}
            actionType="UPDATE_BUTTON_COLOR"
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
        <GeneratorBoxSubsectionHeading subsectionHeading="Text" />
        <Box sx={generatorBoxSubsectionInputContainer}>
          <GeneratorBoxDropdown
            changeHandler={changeHandler}
            actionType="UPDATE_FONT_TYPE"
          />
          <GeneratorBoxSlider
            sliderLabel="Font Size :"
            changeHandler={changeHandler}
            actionType="UPDATE_FONT_SIZE"
            value={btnState.font.size}
          />
          <GeneratorBoxSlider
            sliderLabel="Font Weight :"
            changeHandler={changeHandler}
            actionType="UPDATE_FONT_WEIGHT"
            value={btnState.font.weight}
            step={100}
            marks={true}
            min={100}
            max={900}
          />
          <GeneratorBoxColorInput
            inputLabel="Text Color :"
            changeHandler={changeHandler}
            actionType="UPDATE_FONT_COLOR"
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
            value={btnState.border.size}
            step={1}
            marks={true}
            min={0}
            max={10}
          />
          <GeneratorBoxSlider
            sliderLabel="Border Radius :"
            changeHandler={changeHandler}
            actionType="UPDATE_BORDER_RADIUS"
            value={btnState.border.radius}
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

      <Box>
        <GeneratorBoxSubsectionHeading subsectionHeading="Padding" />
        <Box sx={generatorBoxSubsectionInputContainer}>
          <GeneratorBoxSlider
            sliderLabel="Vertical :"
            changeHandler={changeHandler}
            actionType="UPDATE_PADDING_VERTICAL"
            value={btnState.padding.vertical}
            step={1}
            marks={true}
            min={0}
            max={50}
          />
          <GeneratorBoxSlider
            sliderLabel="Horizontal :"
            changeHandler={changeHandler}
            actionType="UPDATE_PADDING_HORIZONTAL"
            value={btnState.padding.horizontal}
            step={1}
            marks={true}
            min={0}
            max={50}
          />
        </Box>
      </Box>

      <Box>
        <GeneratorBoxSubsectionHeading subsectionHeading="Box Shadow" />
        <Box sx={generatorBoxSubsectionInputContainer}>
          <GeneratorBoxSlider
            sliderLabel="Vertical :"
            changeHandler={changeHandler}
            actionType="UPDATE_BOX_SHADOW_VERTICAL"
            value={btnState.boxShadow.vertical}
            step={1}
            marks={true}
            min={0}
            max={100}
          />
          <GeneratorBoxSlider
            sliderLabel="Horizontal :"
            changeHandler={changeHandler}
            actionType="UPDATE_BOX_SHADOW_HORIZONTAL"
            value={btnState.boxShadow.horizontal}
            step={1}
            marks={true}
            min={0}
            max={100}
          />
          <GeneratorBoxSlider
            sliderLabel="Blur Radius :"
            changeHandler={changeHandler}
            actionType="UPDATE_BOX_SHADOW_BLUR_RADIUS"
            value={btnState.boxShadow.blurRadius}
            step={1}
            marks={true}
            min={0}
            max={100}
          />
          <GeneratorBoxSlider
            sliderLabel="Spread Radius :"
            changeHandler={changeHandler}
            actionType="UPDATE_BOX_SHADOW_SPREAD_RADIUS"
            value={btnState.boxShadow.spreadRadius}
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
        </Box>
      </Box>

      <Box>
        <GeneratorBoxSubsectionHeading subsectionHeading="Hover" />
        <Box sx={generatorBoxSubsectionInputContainer}>
          <GeneratorBoxColorInput
            inputLabel="Button Color :"
            changeHandler={changeHandler}
            actionType="UPDATE_HOVER_BUTTON_COLOR"
          />
          <GeneratorBoxColorInput
            inputLabel="Border Color :"
            changeHandler={changeHandler}
            actionType="UPDATE_HOVER_FONT_COLOR"
          />
          <GeneratorBoxColorInput
            inputLabel="Text Color :"
            changeHandler={changeHandler}
            actionType="UPDATE_HOVER_BORDER_COLOR"
          />
        </Box>
      </Box>
    </Box>
  );
};

export { BtnGenerators };
