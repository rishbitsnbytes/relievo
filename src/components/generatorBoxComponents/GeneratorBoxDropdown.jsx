import { generatorBoxTextField } from "../../utils/commonStyles";
import { TextField, MenuItem } from '@mui/material';
import { useState } from "react";

const GeneratorBoxDropdown = () => {

    const fontTypesList = [
        {
            value: 'Ariel',
            label: 'Ariel',
        },
        {
            value: 'Gruppo',
            label: 'Gruppo',
        },
        {
            value: 'Montserrat',
            label: 'Montserrat',
        }
    ];

    const [fontType, setFontType] = useState('Ariel');

    const handleChange = (event) => {
        setFontType(event.target.value);
    };


    return (
        <TextField
            id="fontType"
            select
            label="Font Type"
            value={fontType}
            onChange={handleChange}
            variant="filled"
            size="small"
            sx={generatorBoxTextField}
        >
            {fontTypesList.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                    {option.label}
                </MenuItem>
            ))}
        </TextField>
    );
}

export { GeneratorBoxDropdown };