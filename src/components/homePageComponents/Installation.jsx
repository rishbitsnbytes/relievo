import { Box, Typography } from '@mui/material';
import {
    homePagesubsectionOuterContainer,
    homePagesubsectionInnerContainer,
    hompageSubsectionHighlightedTypography,
    hompageSubsectionNormalTypography,
    homepageSubsectionNestedBox
} from "../../utils/commonStyles";
import sliders from "../../assets/sliders.svg";
import copyingDone from "../../assets/copyingDone.svg";
import playWithInputs from "../../assets/playWithInputs.svg";
import { typographyStyle, landingPageSubsectionHeading } from "../../utils/commonStyles";

const Installation = () => {

    const introText = {
        highlightedText: "No Installation Guide Needed 😁 ",
        normalText: " play around with the inputs to get your desired dynamic component ",
        highlightedText2: " and just copy the ready-made code."
    }

    return (
        <Box>
            <Typography
                sx={{
                    ...typographyStyle,
                    ...landingPageSubsectionHeading
                }}>
                Installation Guide
            </Typography>
            <Box sx={{
                ...homePagesubsectionOuterContainer,
                padding: { xs: '3rem 1rem', sm: '4rem 1rem', lg: '4rem 2rem' },
            }}>
                <Box sx={homePagesubsectionInnerContainer}>
                    <Typography sx={hompageSubsectionHighlightedTypography}>
                        {introText.highlightedText}
                        <Typography sx={{
                            ...hompageSubsectionNormalTypography,
                            display: 'block'
                        }}>
                            {introText.normalText}
                        </Typography>
                        <Typography sx={{
                            ...hompageSubsectionHighlightedTypography,
                            fontWeight: 'light',
                            fontSize: { xs: '1rem', sm: '1.1rem' }
                        }}>
                            {introText.highlightedText2}
                        </Typography>
                    </Typography>
                </Box>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: { xs: '0rem 0.5rem', md: '0rem 3rem' } }}>
                <Box sx={homepageSubsectionNestedBox}>
                    <Typography sx={{
                        ...hompageSubsectionNormalTypography,
                        fontSize: { xs: '1rem', md: '1.3rem', lg: '1.5rem' }
                    }}>
                        Use sliders
                    </Typography>
                    <Box
                        component='img'
                        src={sliders}
                        sx={{
                            width: { xs: 150, sm: 250, md: 300, lg: 400 }
                        }} />
                </Box>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'flex-start', p: { xs: '0rem 0.5rem', md: '0rem 3rem' } }}>
                <Box sx={{
                    ...homepageSubsectionNestedBox,
                    justifyContent: 'flex-start'
                }}>
                    <Box
                        component='img'
                        src={playWithInputs}
                        sx={{
                            width: { xs: 150, sm: 250, md: 300, lg: 400 }
                        }} />
                    <Typography sx={{
                        ...hompageSubsectionNormalTypography,
                        fontSize: { xs: '1rem', md: '1.3rem', lg: '1.5rem' }
                    }}>
                        Use color pickers
                    </Typography>
                </Box>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: { xs: '0rem 0.5rem', md: '0rem 3rem' } }}>
                <Box sx={homepageSubsectionNestedBox}>
                    <Typography sx={{
                        ...hompageSubsectionNormalTypography,
                        fontSize: { xs: '1rem', md: '1.3rem', lg: '1.5rem' }
                    }}>
                        And copy the code for your desired preview!!
                    </Typography>
                    <Box
                        component='img'
                        src={copyingDone}
                        sx={{
                            width: { xs: 100, sm: 200, md: 250, lg: 350 }
                        }} />
                </Box>
            </Box>
        </Box>
    );
}

export { Installation };