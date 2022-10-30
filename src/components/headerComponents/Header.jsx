import { Box } from '@mui/material';
import { HeaderNav } from "./HeaderNav";
import { HeaderLogo } from "./HeaderLogo";
import { flexCenter } from "../../utils/commonStyles";
import { HeaderHamburgerMenu } from "./HeaderHamburgerMenu";

const Header = () => {
    return (
        <Box sx={{
            backgroundColor: 'primary.main',
            ...flexCenter,
            height: '10vh',
            padding: '0rem 1.5rem 0rem 1.5rem',
        }}>
            <Box
                sx={{
                    alignItems: 'center',
                    display: 'flex',
                    gap: 3
                }}>
                <HeaderHamburgerMenu />
                <HeaderLogo />
            </Box>
            <HeaderNav />
        </Box>
    );
}

export { Header };