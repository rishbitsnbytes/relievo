import {
    homePagesubsectionOuterContainer,
    homePagesubsectionInnerContainer,
    hompageSubsectionHighlightedTypography,
    hompageSubsectionNormalTypography
} from "../../utils/commonStyles";
import { Box, Typography, Button } from '@mui/material';
import mainImage from "../../assets/mainImage.svg";
import { useNavigate } from 'react-router';

const IntroSection = () => {

    const introText = {
        highlightedText: "A Dynamic Component Library ",
        normalText: " which relieves developer's pain related to component UI Building!!"
    }

    const navigate = useNavigate();

    return (
        <Box sx={homePagesubsectionOuterContainer}>
            <Box sx={homePagesubsectionInnerContainer}>
                <Typography sx={hompageSubsectionHighlightedTypography}>
                    {introText.highlightedText}
                    <Typography sx={hompageSubsectionNormalTypography}>
                        {introText.normalText}
                    </Typography>
                </Typography>
                <Button
                    variant="outlined"
                    sx={{
                        mt: 2,
                        color: 'secondary.main',
                        border: '1px solid'
                    }}
                    onClick={() => navigate('/btn')}>
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