import { Box, Typography, Button } from '@mui/material';
import mainImage from "../../assets/mainImage.svg";
import { typographyStyle } from "../../utils/commonStyles";

const IntroSection = () => {

    const introText = {
        highlightedText: "A Dynamic Component Library ",
        normalText: " which relieves developer's pain related to component UI Building!!"
    }

    return (
        <Box
            sx={{
                alignItems: 'center',
                display: 'flex',
                flexDirection: { xs: 'column-reverse', md: 'row' },
                flexGrow: 0,
                justifyContent: 'space-around',
                gap: { xs: 10, md: 2 },
                padding: { xs: '4rem 0.5rem 6rem 0.5rem', sm: '6rem 2rem 6rem 2rem', lg: '6rem 3rem 6rem 3rem' },
            }}>
            <Box
                sx={{
                    alignItems: { xs: 'center', md: 'flex-start' },
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    pl: { xs: '1rem', lg: '4rem' },
                }}>
                <Typography
                    sx={{
                        ...typographyStyle,
                        fontSize: { xs: '1.3rem', sm: '1.5rem' },
                        textAlign: { xs: 'center', md: 'left' }
                    }}>
                    {introText.highlightedText}
                    <Typography
                        sx={{
                            ...typographyStyle,
                            color: 'otherColors.gray',
                            display: 'inline-block',
                            fontWeight: 'light',
                            fontSize: { xs: '1rem', sm: '1.1rem' }
                        }}>
                        {introText.normalText}
                    </Typography>
                </Typography>
                <Button
                    variant="outlined"
                    sx={{
                        mt: 2,
                        color: 'secondary.main',
                        border: '1px solid'
                    }}>
                    Get Started
                </Button>
            </Box>
            <Box>
                <Box
                    component='img'
                    src={mainImage}
                    sx={{
                        width: { xs: 300, md: 400, lg: 500 }
                    }} />
            </Box>
        </Box>
    );
}

export { IntroSection };