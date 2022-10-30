import { Box, Typography } from "@mui/material";
import { previewBox, typographyStyle } from "../../utils/commonStyles";
import { useState } from "react";
import { useBoxShadow } from "contexts";
import { useAppTheme } from "providers/RelievoThemeProvider";
import { useEffect } from "react";

const BoxShadowCompPreviewBox = () => {
  const [isPreviewedBoxHovered, setIsPreviewedBoxHovered] = useState(false);

  const { mode } = useAppTheme();

  const { boxShadowState, boxShadowDispatch } = useBoxShadow();

  useEffect(() => {
    if (mode === "light") {
      boxShadowDispatch({
        type: "UPDATE_BG_COLOR",
        payload: "#ffffff",
      });
    }
    if (mode === "dark") {
      boxShadowDispatch({
        type: "UPDATE_BG_COLOR",
        payload: "#212121",
      });
    }
    // eslint-disable-next-line
  }, [mode]);

  const handleMouseEnter = (e) => {
    setIsPreviewedBoxHovered(true);
  };

  const handleMouseLeave = (e) => {
    setIsPreviewedBoxHovered(false);
  };

  return (
    <Box sx={{ ...previewBox, backgroundColor: `${boxShadowState.bgColor}` }}>
      <Typography
        sx={{
          ...typographyStyle,
          color: "secondary.main",
          fontSize: "1.1rem",
          position: "absolute",
          top: "10px",
        }}
      >
        Preview
      </Typography>
      <div
        id={boxShadowState?.boxId}
        onMouseEnter={(e) => handleMouseEnter(e)}
        onMouseLeave={(e) => handleMouseLeave(e)}
        style={
          isPreviewedBoxHovered
            ? {
                backgroundColor: boxShadowState?.boxColor,
                border: `${boxShadowState?.border?.size}px solid ${boxShadowState?.hover?.borderColor}`,
                color: boxShadowState?.hover?.fontColor,
                borderRadius: `${boxShadowState?.border?.radius}px`,
                display: "inline-block",
                cursor: "pointer",
                fontFamily: boxShadowState?.font?.type,
                fontSize: `${boxShadowState?.font?.size}px`,
                fontWeight: boxShadowState?.font?.weight,
                padding: `${boxShadowState?.padding?.vertical}px ${boxShadowState?.padding?.horizontal}px`,
                boxShadow: `${boxShadowState?.hover?.horizontal}px ${boxShadowState?.hover?.vertical}px ${boxShadowState?.hover?.blurRadius}px ${boxShadowState?.hover?.spreadRadius}px ${boxShadowState?.hover?.color}`,
              }
            : {
                backgroundColor: boxShadowState?.boxColor,
                borderRadius: `${boxShadowState?.border?.radius}px`,
                border: `${boxShadowState?.border?.size}px solid ${boxShadowState?.border?.color}`,
                color: boxShadowState?.font?.color,
                display: "inline-block",
                cursor: "pointer",
                fontFamily: boxShadowState?.font?.type,
                fontSize: `${boxShadowState?.font?.size}px`,
                fontWeight: boxShadowState?.font?.weight,
                padding: `${boxShadowState?.padding?.vertical}px ${boxShadowState?.padding?.horizontal}px`,
                boxShadow: `${boxShadowState?.boxShadow?.horizontal}px ${boxShadowState?.boxShadow?.vertical}px ${boxShadowState?.boxShadow?.blurRadius}px ${boxShadowState?.boxShadow?.spreadRadius}px ${boxShadowState?.boxShadow?.color}`,
              }
        }
      >
        {boxShadowState?.boxText}
      </div>
    </Box>
  );
};

export { BoxShadowCompPreviewBox };
