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
                padding: '6rem 3rem 2rem 3rem',
                display: 'flex',
                justifyContent: 'space-around'
            }}>
            <Box
                sx={{
                    alignItems: 'flex-start',
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    pl: '4rem'
                }}>
                <Typography
                    sx={{
                        ...typographyStyle,
                        fontSize: '1.5rem',
                    }}>
                    {introText.highlightedText}
                    <Typography
                        sx={{
                            ...typographyStyle,
                            color: 'otherColors.gray',
                            display: 'inline-block',
                            fontWeight: 'light',
                            fontSize: '1.1rem'
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
                        width: { xs: 200, sm: 500 }
                    }} />
            </Box>
        </Box>
    );
}

export { IntroSection };