import { Slider } from '@mui/material';
import { typographyStyle } from "../../utils/commonStyles";

const GeneratorBoxSlider = ({ sliderLabel }) => {
    return (
        <label
            style={{
                ...typographyStyle,
                alignItems: 'center',
                color: '#d4d4d4',
                display: 'flex',
                gap: 5
            }}>
            {sliderLabel}
            <Slider
                color="secondary"
                defaultValue={70}
                sx={{ width: '10rem' }}
            />
            {70}
        </label>
    );
}

export { GeneratorBoxSlider };