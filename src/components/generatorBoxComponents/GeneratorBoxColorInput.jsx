import { typographyStyle } from "../../utils/commonStyles";
import { useAppTheme } from "providers/RelievoThemeProvider";

const GeneratorBoxColorInput = ({ inputLabel, changeHandler, actionType }) => {
  const { mode } = useAppTheme();

  const labelColor = mode === "light" ? "#1a1a24" : "#d4d4d4";

  return (
    <label
      style={{
        ...typographyStyle,
        alignItems: "center",
        color: `${labelColor}`,
        display: "flex",
        gap: 5,
      }}
    >
      {inputLabel}
      <input
        type="color"
        onChange={(event) => changeHandler(event, actionType)}
        style={{
          width: "40px",
          height: "25px",
          borderRadius: "3px",
        }}
      />
    </label>
  );
};

export { GeneratorBoxColorInput };
