import DefaultButton from "./DefaultButton";
import {
  withKnobs,
  text,
  select,
  boolean,
  number,
} from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import {
  BackgroundColorType,
  BorderColorType,
  ColorType,
  backgroundColorType,
  borderColorType,
  colorType,
} from "@styles/theme";

export default {
  title: "atoms/Button",
  component: DefaultButton,
  decorators: [withKnobs],
};

export const Default = () => {
  const isInviteButton = boolean("isInviteButton", false);
  const buttonText = text("text", "버튼 텍스트");
  const width = number("width", 200);
  const height = number("height", 30);
  const fontSize = select(
    "fontSize",
    ["xxs", "xs", "sm", "base", "lg", "xl", "xxl", "xxxl"],
    "base"
  );
  const fontWeight = select("fontWeight", ["normal", "bold"], "normal");
  const color = select("color", colorType, "white");
  const backgroundColor = select(
    "backgroundColor",
    backgroundColorType,
    "primary"
  );
  const hoverBackgroundColor = select(
    "hoverBackgroundColor",
    backgroundColorType,
    "primary"
  );
  const disabled = boolean("disabled", false);
  const borderColor = select("borderColor", borderColorType, "transparent");
  const mb = number("mb", 0);
  const ph = number("ph", 0);
  const pv = number("pv", 0);

  return (
    <DefaultButton
      isInviteButton={isInviteButton}
      text={buttonText}
      onClick={action("onClick")}
      width={width}
      height={height}
      fontSize={fontSize}
      fontWeight={fontWeight}
      color={color as ColorType}
      backgroundColor={backgroundColor as BackgroundColorType}
      hoverBackgroundColor={hoverBackgroundColor as BackgroundColorType}
      disabled={disabled}
      borderColor={borderColor as BorderColorType}
      mb={mb}
      ph={ph}
      pv={pv}
    />
  );
};
