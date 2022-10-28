import { Box } from '@mui/material';
import { Header, HomePageComp } from "../../components/";

const HomePage = () => {
  return (
    <Box>
      <Header />
      <HomePageComp.IntroSection />
    </Box>
  );
}

export { HomePage };
