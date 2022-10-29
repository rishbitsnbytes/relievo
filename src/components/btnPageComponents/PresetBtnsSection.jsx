import { Box, Typography } from '@mui/material';
import {
    typographyStyle,
    scrollbarStyling
} from "../../utils/commonStyles";

const PresetBtnsSection = () => {
    return (
        <Box
            sx={{
                backgroundColor: 'primary.main',
                borderRadius: 1,
                p: 1,
                width: '12rem',
                overflowY: 'scroll',
                ...scrollbarStyling
            }}>
            <Typography
                sx={{
                    ...typographyStyle,
                    color: 'secondary.main',
                    fontSize: '1.1rem',
                    textAlign: 'center'
                }}>
                Preset Buttons
            </Typography>
        </Box>
    );
}

export { PresetBtnsSection };