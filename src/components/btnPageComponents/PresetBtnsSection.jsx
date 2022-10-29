import { flexCenter } from "../../utils/commonStyles";
import { Box, Typography } from "@mui/material";
import { btnsData } from "../../data/btnsData";
import { useBtn } from "contexts";
import { useState } from "react";
import { typographyStyle, scrollbarStyling } from "../../utils/commonStyles";

const PresetBtnsSection = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [hoverElementId, setHoverElementId] = useState("");
  const { btnState, btnDispatch } = useBtn();

  const handleBtnChange = (button) => {
    btnDispatch({
      type: "UPDATE_WHOLE_BUTTON",
      payload: button,
    });
  };

  const handleMouseEnter = (e) => {
    setHoverElementId(e.target.id);
    setIsHovering(true);
  };

  const handleMouseLeave = (e) => {
    setHoverElementId("");
    setIsHovering(false);
  };

  const getStyle = (eachBtn) => {
    return isHovering && eachBtn?.buttonId === hoverElementId
      ? {
          backgroundColor: eachBtn?.hover?.buttonColor,
          border: `${eachBtn?.border?.size}px solid ${eachBtn?.hover?.borderColor}`,
          color: eachBtn?.hover?.fontColor,
          borderRadius: `${eachBtn?.border?.radius}px`,
          display: "inline-block",
          cursor: "pointer",
          fontFamily: eachBtn?.font?.type,
          fontSize: `${eachBtn?.font?.size / 2}px`,
          fontWeight: eachBtn?.font?.weight,
          padding: `${eachBtn?.padding?.vertical / 2}px ${
            eachBtn?.padding?.horizontal / 2
          }px`,
          boxShadow: `${eachBtn?.boxShadow?.vertical}px ${eachBtn?.boxShadow?.horizontal}px ${eachBtn?.boxShadow?.blurRadius}px ${eachBtn?.boxShadow?.spreadRadius}px ${eachBtn?.boxShadow?.color}`,
        }
      : {
          backgroundColor: eachBtn?.buttonColor,
          borderRadius: `${eachBtn?.border?.radius}px`,
          border: `${eachBtn?.border?.size}px solid ${eachBtn?.border?.color}`,
          color: eachBtn?.font?.color,
          display: "inline-block",
          cursor: "pointer",
          fontFamily: eachBtn?.font?.type,
          fontSize: `${eachBtn?.font?.size / 2}px`,
          fontWeight: eachBtn?.font?.weight,
          padding: `${eachBtn?.padding?.vertical / 2}px ${
            eachBtn?.padding?.horizontal / 2
          }px`,
          boxShadow: `${eachBtn?.boxShadow?.vertical}px ${eachBtn?.boxShadow?.horizontal}px ${eachBtn?.boxShadow?.blurRadius}px ${eachBtn?.boxShadow?.spreadRadius}px ${eachBtn?.boxShadow?.color}`,
        };
  };

  return (
    <Box
      sx={{
        backgroundColor: "primary.main",
        borderRadius: 1,
        p: 1,
        width: "12rem",
        overflowY: "scroll",
        ...scrollbarStyling,
      }}
    >
      <Typography
        sx={{
          ...typographyStyle,
          color: "secondary.main",
          fontSize: "1.1rem",
          textAlign: "center",
        }}
      >
        Preset Buttons
      </Typography>
      {[...btnsData].map((eachBtn) => (
        <Box
          sx={{
            backgroundColor: "primary.light",
            borderRadius: 1,
            cursor: "pointer",
            width: "100%",
            height: "5rem",
            m: "0.5rem 0rem",
            p: "0.2rem",
            "&:hover": {
              boxShadow: "0px 0px 2px 0px #EF4F4F",
            },
          }}
          onClick={() => handleBtnChange(eachBtn)}
        >
          <Box
            sx={{
              ...flexCenter,
              backgroundColor: "primary.main",
              justifyContent: "center",
              width: "100%",
              height: "100%",
              m: "auto",
            }}
          >
            <button
              id={eachBtn?.buttonId}
              onMouseEnter={(e) => handleMouseEnter(e)}
              onMouseLeave={(e) => handleMouseLeave(e)}
              style={getStyle(eachBtn)}
            >
              {eachBtn?.buttonText}
            </button>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export { PresetBtnsSection };
