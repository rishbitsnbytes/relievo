import { flexCenter } from "../../utils/commonStyles";
import { Box, Typography } from "@mui/material";
import { boxShadowData } from "../../data/boxShadowData";
import { useBoxShadow } from "contexts";
import { useState } from "react";
import { typographyStyle, scrollbarStyling } from "../../utils/commonStyles";

const PresetBoxShadowSection = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [hoverElementId, setHoverElementId] = useState("");
  const { boxShadowDispatch } = useBoxShadow();

  const handleBoxChange = (box) => {
    boxShadowDispatch({
      type: "UPDATE_WHOLE_BOX",
      payload: box,
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

  const getStyle = (eachBox) => {
    return isHovering && eachBox?.boxId === hoverElementId
      ? {
          backgroundColor: eachBox?.hover?.boxColor,
          border: `${eachBox?.border?.size}px solid ${eachBox?.hover?.borderColor}`,
          color: eachBox?.hover?.fontColor,
          borderRadius: `${eachBox?.border?.radius}px`,
          display: "inline-block",
          cursor: "pointer",
          fontFamily: eachBox?.font?.type,
          fontSize: `${eachBox?.font?.size / 2}px`,
          fontWeight: eachBox?.font?.weight,
          padding: `${eachBox?.padding?.vertical / 2}px ${
            eachBox?.padding?.horizontal / 2
          }px`,
          boxShadow: `${eachBox?.hover?.vertical}px ${eachBox?.hover?.horizontal}px ${eachBox?.hover?.blurRadius}px ${eachBox?.hover?.spreadRadius}px ${eachBox?.hover?.color}`,
        }
      : {
          backgroundColor: eachBox?.boxColor,
          borderRadius: `${eachBox?.border?.radius}px`,
          border: `${eachBox?.border?.size}px solid ${eachBox?.border?.color}`,
          color: eachBox?.font?.color,
          display: "inline-block",
          cursor: "pointer",
          fontFamily: eachBox?.font?.type,
          fontSize: `${eachBox?.font?.size / 2}px`,
          fontWeight: eachBox?.font?.weight,
          padding: `${eachBox?.padding?.vertical / 2}px ${
            eachBox?.padding?.horizontal / 2
          }px`,
          boxShadow: `${eachBox?.boxShadow?.vertical}px ${eachBox?.boxShadow?.horizontal}px ${eachBox?.boxShadow?.blurRadius}px ${eachBox?.boxShadow?.spreadRadius}px ${eachBox?.boxShadow?.color}`,
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
        Preset Box Shadows
      </Typography>
      {[...boxShadowData].map((eachBox) => (
        <Box
          sx={{
            backgroundColor: "primary.light",
            borderRadius: 1,
            cursor: "pointer",
            width: "100%",
            height: "10rem",
            m: "0.5rem 0rem",
            p: "0.2rem",
            "&:hover": {
              boxShadow: "0px 0px 2px 0px #EF4F4F",
            },
          }}
          onClick={() => handleBoxChange(eachBox)}
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
            <div
              id={eachBox?.boxId}
              onMouseEnter={(e) => handleMouseEnter(e)}
              onMouseLeave={(e) => handleMouseLeave(e)}
              style={getStyle(eachBox)}
            >
              {eachBox?.boxText}
            </div>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export { PresetBoxShadowSection };
