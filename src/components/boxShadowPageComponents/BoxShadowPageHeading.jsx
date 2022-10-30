import { Typography } from "@mui/material";
import { typographyStyle } from "../../utils/commonStyles";

const BoxShadowPageHeading = () => {
  return (
    <Typography
      sx={{
        ...typographyStyle,
        color: "otherColors.gray",
        fontSize: "1.4rem",
        textAlign: "center",
      }}
    >
      Box Shadow Generator
    </Typography>
  );
};

export { BoxShadowPageHeading };
