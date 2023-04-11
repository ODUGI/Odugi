import {
  BackgroundColorType,
  ColorType,
  backgroundColorType,
  colorType,
} from "@styles/theme";
import SetDefaultButton from "./SetDefaultButton";
import { action } from "@storybook/addon-actions";

export default {
  title: "atoms/Button",
  component: SetDefaultButton,
};

interface SetDefaultArgs {
  text: string;
  fontWeight: "normal" | "bold";
  color: ColorType;
  backgroundColor: BackgroundColorType;
  disabled: boolean;
}

export const SetDefault = (args: SetDefaultArgs) => {
  return <SetDefaultButton {...args} onClick={action("onClick")} />;
};

SetDefault.args = {
  text: "텍스트입니다",
  fontWeight: "normal",
  color: "white",
  backgroundColor: "primary",
};

SetDefault.argTypes = {
  fontWeight: { control: { type: "select", options: ["normal", "bold"] } },
  color: { control: { type: "select", options: colorType } },
  backgroundColor: {
    control: { type: "select", options: backgroundColorType },
  },
};
