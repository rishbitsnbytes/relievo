import { Box, Typography } from '@mui/material';
import { typographyStyle, landingPageSubsectionHeading } from "../../utils/commonStyles";

const CodeSnippet = () => {
    return (
        <Box>
            <Typography
                sx={{
                    ...typographyStyle,
                    ...landingPageSubsectionHeading,
                    pb: 15
                }}>
                Code Snippets
            </Typography>
        </Box>
    );
}

export { CodeSnippet };