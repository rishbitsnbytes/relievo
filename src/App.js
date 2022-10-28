import { AppRoutes } from "./routes";
import { Box } from '@mui/material';

const App = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'primary.light',
        height: '100vh'
      }}>
      <AppRoutes />
    </Box>
  );
}

export default App;
