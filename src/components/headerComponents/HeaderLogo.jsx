import { Box, Link } from '@mui/material';
import logo from "../../assets/logo.png";

const HeaderLogo = () => {
    return (
        <Link href="/">
            <Box
                component='img'
                src={logo}
                sx={{
                    width: { xs: 60, sm: 120 }
                }} />
        </Link>
    );
}

export { HeaderLogo };