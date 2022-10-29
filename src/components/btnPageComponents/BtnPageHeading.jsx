import { Typography } from '@mui/material';
import { typographyStyle } from "../../utils/commonStyles";

const BtnPageHeading = () => {
    return (
        <Typography
            sx={{
                ...typographyStyle,
                color: 'otherColors.gray',
                fontSize: '1.4rem',
                textAlign: 'center'
            }}>
            Button Generator
        </Typography>
    );
}

export { BtnPageHeading };