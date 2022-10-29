import { Box, Typography } from '@mui/material';
import { typographyStyle, landingPageSubsectionHeading } from "../../utils/commonStyles";

const Installation = () => {
    return (
        <Box>
            <Typography
            sx={{
                ...typographyStyle,
                ...landingPageSubsectionHeading,
                pb: 15
            }}>
                Installation Guide
            </Typography>
        </Box>
    );
}

export { Installation };