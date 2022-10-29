import { typographyStyle } from "../../utils/commonStyles";

const GeneratorBoxColorInput = ({ inputLabel }) => {
    return (
        <label
            style={{
                ...typographyStyle,
                alignItems: 'center',
                color: '#d4d4d4',
                display: 'flex',
                gap: 5
            }}>
            {inputLabel}
            <input
                type="color"
                style={{
                    width: '40px',
                    height: '25px',
                    borderRadius: '3px'
                }} />
        </label>
    );
}

export { GeneratorBoxColorInput };