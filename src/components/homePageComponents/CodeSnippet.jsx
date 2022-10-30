import { Box, Typography } from '@mui/material';
import codeSnippet1 from "../../assets/codeSnippet1.png";
import codeSnippet2 from "../../assets/codeSnippet2.png";
import { typographyStyle, landingPageSubsectionHeading, flexCenter } from "../../utils/commonStyles";

const CodeSnippet = () => {
    return (
        <Box>
            <Typography
                sx={{
                    ...typographyStyle,
                    ...landingPageSubsectionHeading
                }}>
                Code Snippets
                <Box sx={{
                    ...flexCenter,
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                    gap: 5,
                    p: '4rem 2rem'
                }}>
                    <Box
                        component='img'
                        src={codeSnippet1}
                        sx={{
                            width: { xs: 250, md: 300, lg: 350 }
                        }} />
                    <Box
                        component='img'
                        src={codeSnippet2}
                        sx={{
                            width: { xs: 250, md: 300, lg: 350 }
                        }} />
                </Box>
            </Typography>
        </Box>
    );
}

export { CodeSnippet };