import { Typography } from '@mui/material';
import { generatorBoxSubsectionHeading } from "../../utils/commonStyles";

const GeneratorBoxSubsectionHeading = ({ subsectionHeading }) => {
    return (
        <Typography sx={generatorBoxSubsectionHeading}>
            {subsectionHeading}
        </Typography>
    );
}

export { GeneratorBoxSubsectionHeading };