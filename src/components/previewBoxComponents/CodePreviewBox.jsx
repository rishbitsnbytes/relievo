import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { Box, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import {
  codePreviewBoxes,
  copyIcon,
  scrollbarStyling,
  typographyStyle,
} from "../../utils/commonStyles";
import { useBtn } from "contexts";
import { useState } from "react";

const CodePreviewBox = ({ boxHeading }) => {
  const { btnState } = useBtn();
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
          ? `<button class="myButton" >${btnState?.buttonText}</button>`
          : boxHeading === "CSS"
          ? `.myButton {
            box-shadow: ${btnState?.boxShadow?.vertical}px ${btnState?.boxShadow?.horizontal}px ${btnState?.boxShadow?.blurRadius}px ${btnState?.boxShadow?.spreadRadius}px ${btnState?.boxShadow?.color};
            background-color: ${btnState?.buttonColor};
            border: ${btnState?.border?.size}px solid ${btnState?.border?.color};
            border-radius: ${btnState?.border?.radius}px;
            display: inline-block;
            cursor:pointer;
            color: ${btnState?.font.color};
            font-family: ${btnState?.font?.type};
            font-size: ${btnState?.font?.size}px;
            font-weight: ${btnState?.font?.weight};
            padding: ${btnState?.padding?.vertical}px ${btnState?.padding?.horizontal}px;
        }

        .myButton:hover {
            background-color: ${btnState?.hover?.buttonColor};
            border: ${btnState?.border?.size}px solid ${btnState?.hover?.borderColor};
            color: ${btnState?.hover?.fontColor};
        }
        `
          : ""}
      </Box>
    </Box>
  );
};

export { CodePreviewBox };
