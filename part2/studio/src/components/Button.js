import SaveButton from "./SaveButton.js";
import ClickedButton from "./ClickedButton.js";

function Button(props) {
  const saveButton = props.saveButton;
  if (saveButton) {
    return <SaveButton />;
  }
  return <ClickedButton />;
}

export default Button;