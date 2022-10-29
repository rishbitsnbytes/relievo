import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { Box, Typography } from '@mui/material';
import {
    codePreviewBoxes,
    copyIcon,
    scrollbarStyling,
    typographyStyle
} from "../../utils/commonStyles";

const CodePreviewBox = ({ boxHeading }) => {
    return (
        <Box
            sx={{
                ...codePreviewBoxes,
                overflowY: 'scroll',
                ...scrollbarStyling
            }}>
            <ContentCopyIcon sx={copyIcon} />
            <Typography
                sx={{
                    ...typographyStyle,
                    color: 'secondary.main'
                }}>
                {boxHeading}
            </Typography>
        </Box>
    );
}

export { CodePreviewBox };