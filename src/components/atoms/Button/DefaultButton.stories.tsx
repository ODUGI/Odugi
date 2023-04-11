import {
  BorderColorType,
  ColorType,
  FontSizeType,
  backgroundColorType,
  borderColorType,
  colorType,
  fontSizeType,
} from "@styles/theme";
import DefaultButton from "./DefaultButton";
import { action } from "@storybook/addon-actions";

export default {
  title: "atoms/Button",
  component: DefaultButton,
};

interface DefaultArgs {
  isInviteButton: boolean;
  text: string;
  width: number;
  height: number;
  fontSize: FontSizeType;
  fontWeight: "normal" | "bold";
  color: ColorType;
  backgroundColor: string;
  hoverBackgroundColor: string;
  disabled: boolean;
  borderColor: BorderColorType;
  mb: number;
  ph: number;
  pv: number;
}

export const Default = (args: DefaultArgs) => {
  return <DefaultButton {...args} onClick={action("onClick")} />;
};

Default.args = {
  text: "버튼 텍스트",
  isInviteButton: false,
  width: 200,
  height: 30,
  fontSize: "base",
  fontWeight: "normal",
  color: "white",
  backgroundColor: "primary",
  hoverBackgroundColor: "primary",
  disabled: false,
  borderColor: "transparent",
  mb: 0,
  ph: 0,
  pv: 0,
};

Default.argTypes = {
  isInviteButton: { control: { disabled: false } },
  fontSize: { control: { type: "select", options: fontSizeType } },
  fontWeight: { control: { type: "select", options: ["normal", "bold"] } },
  color: { control: { type: "select", options: colorType } },
  backgroundColor: {
    control: { type: "select", options: backgroundColorType },
  },
  hoverBackgroundColor: {
    control: { type: "select", options: backgroundColorType },
  },
  disabled: { control: { disabled: false } },
  borderColor: { control: { type: "select", options: borderColorType } },
};
