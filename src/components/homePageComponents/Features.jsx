import { Box, Typography } from '@mui/material';
import {
    featureBox,
    typographyStyle,
    landingPageSubsectionHeading
} from "../../utils/commonStyles";

const Features = () => {
    return (
        <Box>
            <Typography
                sx={{
                    ...typographyStyle,
                    ...landingPageSubsectionHeading
                }}>
                Features
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: 2,
                    p: { xs: '2rem 0.5rem', md: '4rem 2rem' }
                }}>
                <Box sx={featureBox}>
                    <Typography
                        sx={{
                            ...typographyStyle,
                            color: 'otherColors.gray',
                            textAlign: 'center',
                            fontWeight: 'light',
                            fontSize: { xs: '0.8rem', md: '1rem' }
                        }}>
                        Button Generator
                    </Typography>
                </Box>
                <Box sx={featureBox}>
                    <Typography
                        sx={{
                            ...typographyStyle,
                            color: 'otherColors.gray',
                            textAlign: 'center',
                            fontWeight: 'light',
                            fontSize: { xs: '0.8rem', md: '1rem' }
                        }}>
                        BoxShadow Generator
                    </Typography>
                </Box>
                <Box sx={featureBox}>
                    <Typography
                        sx={{
                            ...typographyStyle,
                            color: 'otherColors.gray',
                            textAlign: 'center',
                            fontWeight: 'light',
                            fontSize: { xs: '0.8rem', md: '1rem' }
                        }}>
                        GlassMorphism Generator
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}

export { Features };