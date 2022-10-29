import { Box } from '@mui/material';
import { contentSectionScollbarStyle, } from "../../utils/commonStyles";
import { Header, BtnComp, previewComp, GeneratorBox } from "../../components/";

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
                <BtnComp.PresetBtnsSection />

                <Box sx={{ display: 'flex', flexGrow: 1, height: '100%' }}>
                    <Box sx={{ flexGrow: 1 }}>
                        <BtnComp.BtnPageHeading />
                        <Box sx={{ width: '100%', height: '100%', p: '1.1rem 2rem' }}>
                            <previewComp.BtnCompPreviewBox />
                            <Box sx={{ display: 'flex', gap: 1, p: '1rem 0rem', height: '50%' }}>
                                <previewComp.CodePreviewBox boxHeading="HTML" />
                                <previewComp.CodePreviewBox boxHeading="CSS" />
                            </Box>
                        </Box>
                    </Box>

                    <GeneratorBox />
                </Box>
            </Box>
        </Box>
    );
}

export { BtnGeneratorPage };