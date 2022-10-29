import { useBtn } from '../../contexts/';
import { TextField } from '@mui/material';
import { generatorBoxTextField } from "../../utils/commonStyles";

const GeneratorBoxTextField = ({ btnType, btnLabel, btnId }) => {

    const { btnComp, handleTextChange } = useBtn();

    return (
        <TextField
            id={btnId}
            label={btnLabel}
            type={btnType}
            value={btnComp?.btnText}
            defaultValue={btnComp?.btnText}
            variant="outlined"
            size="small"
            onChange={(e) => handleTextChange(e)}
            sx={generatorBoxTextField} />
    );
}

export { GeneratorBoxTextField };