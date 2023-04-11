import {
  BackgroundColorType,
  ColorType,
  backgroundColorType,
  colorType,
} from "@styles/theme";
import TextButton from "./TextButton";
import { action } from "@storybook/addon-actions";

export default {
  title: "atoms/Button",
  component: TextButton,
};

interface TextButtonArgs {
  text: string;
  color: ColorType;
  backgroundColor: BackgroundColorType;
  hoverColor: ColorType;
  hoverBackgroundColor: BackgroundColorType;
}

export const Text = (args: TextButtonArgs) => {
  return <TextButton {...args} onClick={action("onClick")} />;
};

Text.args = {
  text: "온라인",
  color: "black",
  backgroundColor: "transparent",
  hoverColor: "white",
  hoverBackgroundColor: "transparent",
};

Text.argTypes = {
  color: { control: { type: "select", options: colorType } },
  backgroundColor: {
    control: { type: "select", options: backgroundColorType },
  },
  hoverColor: { control: { type: "select", options: colorType } },
  hoverBackgroundColor: {
    control: { type: "select", options: backgroundColorType },
  },
};
