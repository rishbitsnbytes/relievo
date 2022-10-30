import { Box } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useAppTheme } from "../../providers/RelievoThemeProvider";
import { headerIcon, flexSpaceAround } from "../../utils/commonStyles";

const HeaderNav = () => {

    const { toggleTheme, mode } = useAppTheme();

    return (
        <Box
            sx={{
                ...flexSpaceAround,
                gap: { xs: '1rem', md: '2rem' }
            }}
            onClick={() => toggleTheme()}
        >

            {/* eslint-disable-next-line */}
            <a href="https://github.com/rishbitsnbytes/relievo" target="_blank" >
                <GitHubIcon sx={headerIcon} onClick={(e) => e.stopPropagation()} />
            </a>
            {
                mode === "dark" ?
                    <LightModeIcon sx={headerIcon} /> :
                    <DarkModeIcon sx={headerIcon} />
            }
        </Box>
    );
}

export { HeaderNav };
