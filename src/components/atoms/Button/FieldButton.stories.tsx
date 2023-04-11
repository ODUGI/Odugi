import { action } from "@storybook/addon-actions";
import FieldButton from "./FieldButton";
import {
  BackgroundColorType,
  ColorType,
  backgroundColorType,
  colorType,
} from "@styles/theme";

export default {
  title: "atoms/Button",
  component: FieldButton,
};

interface FieldArgs {
  text: string;
  fontWeight: "normal" | "bold";
  color: ColorType;
  backgroundColor: BackgroundColorType;
  disabled: boolean;
}

export const Field = (args: FieldArgs) => {
  return <FieldButton {...args} onClick={action("onClick")} />;
};

Field.args = {
  text: "텍스트입니다",
  fontWeight: "normal",
  color: "white",
  backgroundColor: "primary",
  disabled: false,
};

Field.argTypes = {
  fontWeight: { control: { type: "select", options: ["normal", "bold"] } },
  color: { control: { type: "select", options: colorType } },
  backgroundColor: {
    control: { type: "select", options: backgroundColorType },
  },
  disabled: { control: { disabled: false } },
};
