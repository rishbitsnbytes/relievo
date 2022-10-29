import { TextField } from '@mui/material';
import { generatorBoxTextField } from "../../utils/commonStyles";

const GeneratorBoxTextField = ({ btnType, btnLabel, btnId }) => {
    return (
        <TextField
            id={btnId}
            label={btnLabel}
            type={btnType}
            variant="outlined"
            size="small"
            sx={generatorBoxTextField} />
    );
}

export { GeneratorBoxTextField };