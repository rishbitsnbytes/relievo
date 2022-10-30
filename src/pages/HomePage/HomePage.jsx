import { Box, Typography } from '@mui/material';
import { Header, HomePageComp } from "../../components/";
import { contentSectionScollbarStyle } from "../../utils/commonStyles";

const HomePage = () => {
  return (
    <Box>
      <Header />
      <Box sx={contentSectionScollbarStyle}>
        <HomePageComp.IntroSection />
        <HomePageComp.Features />
        <HomePageComp.Installation />
        <HomePageComp.CodeSnippet />
        <Box>
          <Typography
            sx={{
              fontFamily: 'Gruppo',
              color: 'otherColors.gray',
              fontSize: '1.2rem',
              textAlign: 'center',
              pt: 4,
              pb: 4
            }}>
            2022 @ copyright || All rights reserved
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export { HomePage };
