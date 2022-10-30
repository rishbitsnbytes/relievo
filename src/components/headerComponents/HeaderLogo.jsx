import { Box, Link } from "@mui/material";
import logo from "../../assets/logo.png";

const HeaderLogo = () => {
  return (
    <Link href="/home">
      <Box
        component="img"
        src={logo}
        sx={{
          width: { xs: 80, md: 120 },
        }}
      />
    </Link>
  );
};

export { HeaderLogo };
