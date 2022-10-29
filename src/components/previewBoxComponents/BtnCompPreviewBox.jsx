import { Box, Typography } from "@mui/material";
import { previewBox, typographyStyle } from "../../utils/commonStyles";
import { useState } from "react";
import { useBtn } from "contexts";
import { useAppTheme } from "providers/RelievoThemeProvider";
import { useEffect } from "react";

const BtnCompPreviewBox = () => {
  const [isPreviewedBtnHovered, setIsPreviewedBtnHovered] = useState(false);

  const { mode } = useAppTheme();

  const { btnState, btnDispatch } = useBtn();

  useEffect(() => {
    if (mode === "light") {
      btnDispatch({
        type: "UPDATE_BG_COLOR",
        payload: "#ffffff",
      });
    }
    if (mode === "dark") {
      btnDispatch({
        type: "UPDATE_BG_COLOR",
        payload: "#212121",
      });
    }
  }, [mode]);

  const handleMouseEnter = (e) => {
    setIsPreviewedBtnHovered(true);
  };

  const handleMouseLeave = (e) => {
    setIsPreviewedBtnHovered(false);
  };

  return (
    <Box sx={{ ...previewBox, backgroundColor: `${btnState.bgColor}` }}>
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
      <button
        id={btnState?.buttonId}
        onMouseEnter={(e) => handleMouseEnter(e)}
        onMouseLeave={(e) => handleMouseLeave(e)}
        style={
          isPreviewedBtnHovered
            ? {
                backgroundColor: btnState?.hover?.buttonColor,
                border: `${btnState?.border?.size}px solid ${btnState?.hover?.borderColor}`,
                color: btnState?.hover?.fontColor,
                borderRadius: `${btnState?.border?.radius}px`,
                display: "inline-block",
                cursor: "pointer",
                fontFamily: btnState?.font?.type,
                fontSize: `${btnState?.font?.size}px`,
                fontWeight: btnState?.font?.weight,
                padding: `${btnState?.padding?.vertical}px ${btnState?.padding?.horizontal}px`,
                boxShadow: `${btnState?.boxShadow?.vertical}px ${btnState?.boxShadow?.horizontal}px ${btnState?.boxShadow?.blurRadius}px ${btnState?.boxShadow?.spreadRadius}px ${btnState?.boxShadow?.color}`,
              }
            : {
                backgroundColor: btnState?.buttonColor,
                borderRadius: `${btnState?.border?.radius}px`,
                border: `${btnState?.border?.size}px solid ${btnState?.border?.color}`,
                color: btnState?.font?.color,
                display: "inline-block",
                cursor: "pointer",
                fontFamily: btnState?.font?.type,
                fontSize: `${btnState?.font?.size}px`,
                fontWeight: btnState?.font?.weight,
                padding: `${btnState?.padding?.vertical}px ${btnState?.padding?.horizontal}px`,
                boxShadow: `${btnState?.boxShadow?.vertical}px ${btnState?.boxShadow?.horizontal}px ${btnState?.boxShadow?.blurRadius}px ${btnState?.boxShadow?.spreadRadius}px ${btnState?.boxShadow?.color}`,
              }
        }
      >
        {btnState?.buttonText}
      </button>
    </Box>
  );
};

export { BtnCompPreviewBox };
