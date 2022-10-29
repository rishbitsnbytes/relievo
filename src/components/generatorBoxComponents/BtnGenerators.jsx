import { Box } from '@mui/material';
import {
    GeneratorBoxTextField,
    GeneratorBoxColorInput,
    GeneratorBoxSubsectionHeading,
    GeneratorBoxDropdown,
    GeneratorBoxSlider
} from "./";
import { generatorBoxSubsectionInputContainer } from "../../utils/commonStyles";

const BtnGenerators = () => {
    return (
        <Box sx={{
            p: '0.5rem 0rem',
            display: 'flex',
            flexDirection: 'column',
            gap: 5
        }}>
            <Box>
                <GeneratorBoxSubsectionHeading subsectionHeading="Button" />
                <Box sx={generatorBoxSubsectionInputContainer}>
                    <GeneratorBoxTextField
                        btnType="text"
                        btnLabel="Button Text"
                        btnId="btnText" />
                    <GeneratorBoxColorInput inputLabel="Button Color :" />
                </Box>
            </Box>

            <Box>
                <GeneratorBoxSubsectionHeading subsectionHeading="Preview Box" />
                <Box sx={generatorBoxSubsectionInputContainer}>
                    <GeneratorBoxColorInput inputLabel="Background Color :" />
                </Box>
            </Box>

            <Box>
                <GeneratorBoxSubsectionHeading subsectionHeading="Text" />
                <Box sx={generatorBoxSubsectionInputContainer}>
                    <GeneratorBoxDropdown />
                    <GeneratorBoxSlider sliderLabel="Font Size :" />
                    <GeneratorBoxSlider sliderLabel="Font Weight :" />
                    <GeneratorBoxColorInput inputLabel="Text Color :" />
                </Box>
            </Box>

            <Box>
                <GeneratorBoxSubsectionHeading subsectionHeading="Border" />
                <Box sx={generatorBoxSubsectionInputContainer}>
                    <GeneratorBoxSlider sliderLabel="Border Size :" />
                    <GeneratorBoxSlider sliderLabel="Border Radius :" />
                    <GeneratorBoxColorInput inputLabel="Border Color :" />
                </Box>
            </Box>

            <Box>
                <GeneratorBoxSubsectionHeading subsectionHeading="Padding" />
                <Box sx={generatorBoxSubsectionInputContainer}>
                    <GeneratorBoxSlider sliderLabel="Vertical :" />
                    <GeneratorBoxSlider sliderLabel="Horizontal :" />
                </Box>
            </Box>

            <Box>
                <GeneratorBoxSubsectionHeading subsectionHeading="Box Shadow" />
                <Box sx={generatorBoxSubsectionInputContainer}>
                    <GeneratorBoxSlider sliderLabel="Vertical :" />
                    <GeneratorBoxSlider sliderLabel="Horizontal :" />
                    <GeneratorBoxSlider sliderLabel="Blur Radius :" />
                    <GeneratorBoxSlider sliderLabel="Spread Radius :" />
                    <GeneratorBoxColorInput inputLabel="Color :" />
                </Box>
            </Box>

            <Box>
                <GeneratorBoxSubsectionHeading subsectionHeading="Hover" />
                <Box sx={generatorBoxSubsectionInputContainer}>
                    <GeneratorBoxColorInput inputLabel="Button Color :" />
                    <GeneratorBoxColorInput inputLabel="Border Color :" />
                    <GeneratorBoxColorInput inputLabel="Text Color :" />
                </Box>
            </Box>
        </Box>
    );
}

export { BtnGenerators };