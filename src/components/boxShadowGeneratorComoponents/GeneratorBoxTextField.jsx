import { useBtn } from "contexts";
import { TextField } from "@mui/material";
import { generatorBoxTextField } from "../../utils/commonStyles";

const GeneratorBoxTextField = () => {
  const { btnState, btnDispatch } = useBtn();

  const handleTextChange = (e) => {
    btnDispatch({
      type: "UPDATE_BUTTON_TEXT",
      payload: e.target.value,
    });
  };

  return (
    <TextField
      id={btnState.buttonId}
      value={btnState?.buttonText}
      defaultValue={btnState?.buttonText}
      variant="outlined"
      size="small"
      onChange={(e) => handleTextChange(e)}
      sx={generatorBoxTextField}
    />
  );
};

export { GeneratorBoxTextField };
