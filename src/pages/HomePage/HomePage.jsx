import { Box, Typography } from '@mui/material';
import { Header, HomePageComp } from "../../components/";
import { contentSectionScollbarStyle } from "../../utils/commonStyles";

const HomePage = () => {
  return (
    <Box>
      <Header />
      <Box sx={contentSectionScollbarStyle}>
        <HomePageComp.IntroSection />
        <HomePageComp.Installation />
        <HomePageComp.CodeSnippet />
        <Box>
          <Typography
            sx={{
              fontFamily: 'Gruppo',
              color: 'otherColors.gray',
              fontSize: '1.2rem',
              textAlign: 'center',
              pt: 2,
              pb: 2
            }}>
            2022 @ copyright || All rights reserved
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export { HomePage };
