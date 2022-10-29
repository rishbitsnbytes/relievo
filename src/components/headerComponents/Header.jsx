import { Box } from '@mui/material';
import { HeaderNav } from "./HeaderNav";
import { HeaderLogo } from "./HeaderLogo";
import { flexCenter } from "../../utils/commonStyles";

const Header = () => {
    return (
        <Box sx={{
            backgroundColor: 'primary.main',
            ...flexCenter,
            height: '10vh',
            padding: '0rem 1.5rem 0rem 1.5rem',
        }}>
            <HeaderLogo />
            <HeaderNav />
        </Box>
    );
}

export { Header };