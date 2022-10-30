import { Box } from "@mui/material";
import { contentSectionScollbarStyle } from "../../utils/commonStyles";
import {
  Header,
  BtnComp,
  BoxShadowComp,
  previewComp,
  BoxShadowGeneratorBox,
} from "../../components/";

const BoxShadowGeneratorPage = () => {
  return (
    <Box>
      <Header />
      <Box
        sx={{
          ...contentSectionScollbarStyle,
          display: "flex",
          padding: 2,
        }}
      >
        <BoxShadowComp.PresetBoxShadowSection />

        <Box sx={{ display: "flex", flexGrow: 1, height: "100%" }}>
          <Box sx={{ flexGrow: 1 }}>
            <BoxShadowComp.BoxShadowPageHeading />
            <Box sx={{ width: "100%", height: "100%", p: "1.1rem 2rem" }}>
              <previewComp.BoxShadowCompPreviewBox />
              <Box
                sx={{ display: "flex", gap: 1, p: "1rem 0rem", height: "50%" }}
              >
                <previewComp.BoxShadowCodePreviewBox boxHeading="HTML" />
                <previewComp.BoxShadowCodePreviewBox boxHeading="CSS" />
              </Box>
            </Box>
          </Box>

          <BoxShadowGeneratorBox />
        </Box>
      </Box>
    </Box>
  );
};

export { BoxShadowGeneratorPage };
