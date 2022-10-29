import { Box, Typography } from '@mui/material';
import { previewBox, typographyStyle } from "../../utils/commonStyles";

const BtnCompPreviewBox = () => {
    return (
        <Box sx={previewBox}>
            <Typography
                sx={{
                    ...typographyStyle,
                    color: 'secondary.main',
                    fontSize: '1.1rem',
                    position: 'absolute',
                    top: '10px'
                }}>
                Preview
            </Typography>
        </Box>
    );
}

export { BtnCompPreviewBox };