import { Box, Typography } from '@mui/material';
import { Header, HomePageComp } from "../../components/";

const HomePage = () => {
  return (
    <Box>
      <Header />
      <Box sx={{
        height: '90vh',
        overflowY: 'scroll',
        '&::-webkit-scrollbar': {
          width: '5px'
        },
        '&::-webkit-scrollbar-track': {
          boxShadow: 'inset 0 0 5px #d4d4d4',
          borderRadius: '1rem'
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: '#6261bd',
          borderRadius: '50%'
        }
      }}>
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
