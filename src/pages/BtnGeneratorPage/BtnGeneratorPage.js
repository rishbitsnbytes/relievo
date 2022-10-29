import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { Box, Typography } from '@mui/material';
import { Header } from "../../components/";
import {
    contentSectionScollbarStyle,
    typographyStyle,
    previewBox,
    codePreviewBoxes,
    copyIcon
} from "../../utils/commonStyles";

const BtnGeneratorPage = () => {
    return (
        <Box>
            <Header />
            <Box
                sx={{
                    ...contentSectionScollbarStyle,
                    display: 'flex',
                    padding: 2
                }}>

                <Box
                    sx={{
                        backgroundColor: 'primary.main',
                        borderRadius: 1,
                        p: 1,
                        width: '12rem'
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

                <Box sx={{ flexGrow: 1, height: '100%' }}>

                    <Typography
                        sx={{
                            ...typographyStyle,
                            color: 'otherColors.gray',
                            fontSize: '1.4rem',
                            textAlign: 'center'
                        }}>
                        Button Generator
                    </Typography>

                    <Box sx={{ width: '65%', height: '100%', p: '1.1rem 2rem' }}>
                        <Box sx={previewBox}>
                            Preview
                        </Box>
                        <Box sx={{ display: 'flex', gap: 1, p: '1rem 0rem', height: '50%' }}>
                            <Box sx={codePreviewBoxes}>
                                <ContentCopyIcon sx={copyIcon} />
                                HTML
                            </Box>
                            <Box sx={codePreviewBoxes}>
                                <ContentCopyIcon sx={copyIcon} />
                                CSS
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export { BtnGeneratorPage };