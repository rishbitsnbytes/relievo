import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { Box, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import {
  codePreviewBoxes,
  copyIcon,
  scrollbarStyling,
  typographyStyle,
} from "../../utils/commonStyles";
import { useBoxShadow } from "contexts";
import { useState } from "react";

const BoxShadowCodePreviewBox = ({ boxHeading }) => {
  const { boxShadowState } = useBoxShadow();
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = (e) => {
    navigator.clipboard.writeText(e.target.nextSibling.innerHTML);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <Box
      sx={{
        ...codePreviewBoxes,
        overflowY: "scroll",
        ...scrollbarStyling,
      }}
    >
      <Typography
        sx={{
          ...typographyStyle,
          color: "secondary.main",
        }}
      >
        {boxHeading}
      </Typography>
      {isCopied ? (
        <CheckCircleIcon sx={copyIcon}></CheckCircleIcon>
      ) : (
        <ContentCopyIcon sx={copyIcon} onClick={(e) => handleCopy(e)} />
      )}

      <Box
        sx={{
          ...typographyStyle,
          width: "40ch",
          height: "auto",
          p: "1rem 0rem",
          color: "otherColors.gray",
          whiteSpace: "break-spaces",
        }}
      >
        {boxHeading === "HTML"
          ? `<div class="myBox" >${boxShadowState?.boxText}</div>`
          : boxHeading === "CSS"
          ? `.myBox {
            box-shadow: ${boxShadowState?.boxShadow?.horizontal}px ${boxShadowState?.boxShadow?.vertical}px ${boxShadowState?.boxShadow?.blurRadius}px ${boxShadowState?.boxShadow?.spreadRadius}px ${boxShadowState?.boxShadow?.color};
            background-color: ${boxShadowState?.boxColor};
            border: ${boxShadowState?.border?.size}px solid ${boxShadowState?.border?.color};
            border-radius: ${boxShadowState?.border?.radius}px;
            display: inline-block;
        }

        .myBox:hover {
          box-shadow: ${boxShadowState?.hover?.horizontal}px ${boxShadowState?.hover?.vertical}px ${boxShadowState?.hover?.blurRadius}px ${boxShadowState?.hover?.spreadRadius}px ${boxShadowState?.hover?.color};
        }
        `
          : ""}
      </Box>
    </Box>
  );
};

export { BoxShadowCodePreviewBox };
