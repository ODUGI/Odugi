import ButtonWrapper from "./ButtonWrapper";
import { action } from "@storybook/addon-actions";
import {
  BackgroundColorType,
  ColorType,
  backgroundColorType,
  colorType,
} from "@styles/theme";

export default {
  title: "atoms/Button",
  component: ButtonWrapper,
};

interface WrapperArgs {
  width: number;
  height: number;
  color: ColorType;
  ph: number;
  active: boolean;
  blur: boolean;
  hoverBackgroundColor: BackgroundColorType;
}

export const Wrapper = (args: WrapperArgs) => {
  return (
    <ButtonWrapper {...args} onClick={action("onClick")}>
      텍스트
    </ButtonWrapper>
  );
};

Wrapper.args = {
  width: 100,
  height: 30,
  ph: 12,
  blur: false,
  active: false,
  color: "black",
  hoverBackgroundColor: "hover",
};

Wrapper.argTypes = {
  blur: { control: { disabled: false } },
  active: { control: { disabled: false } },
  color: { control: { type: "select", options: colorType } },
  hoverBackgroundColor: {
    control: { type: "select", options: backgroundColorType },
  },
};
