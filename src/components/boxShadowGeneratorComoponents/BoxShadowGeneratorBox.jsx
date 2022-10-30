import { BoxShadowGenerators } from ".";
import { useLocation } from "react-router";
import { Box, Typography } from "@mui/material";
import { scrollbarStyling, typographyStyle } from "../../utils/commonStyles";

const BoxShadowGeneratorBox = () => {
  const location = useLocation();

  return (
    <Box
      sx={{
        backgroundColor: "primary.main",
        borderRadius: 1,
        minWidth: "20rem",
        p: "0.5rem 1.5rem",
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
        Box Shadow Generator
      </Typography>
      {location?.pathname === "/box-shadow" ? <BoxShadowGenerators /> : ""}
    </Box>
  );
};

export { BoxShadowGeneratorBox };
