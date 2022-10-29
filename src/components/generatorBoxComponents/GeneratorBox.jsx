import { Box, Typography } from '@mui/material';
import { scrollbarStyling, typographyStyle } from "../../utils/commonStyles";

const GeneratorBox = () => {
    return (
        <Box
            sx={{
                backgroundColor: 'primary.main',
                borderRadius: 1,
                minWidth: '20rem',
                p: 1,
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
                Generator
            </Typography>
            
        </Box>
    );
}

export { GeneratorBox };