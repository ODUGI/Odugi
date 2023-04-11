import { forwardRef, RefObject } from "react";
import styled from "styled-components";
import { BackgroundColorType, ColorType, FontSizeType } from "@styles/theme";

interface DefaultInputProps {
  type: string;
  initValue?: string;
  maxLength?: number;
  width?: number;
  height?: number;
  placeholder?: string;
  color?: ColorType;
  placeholderColor?: ColorType;
  fontSize?: FontSizeType;
  backgroundColor?: BackgroundColorType;
}

const DefaultInput = forwardRef<HTMLInputElement, DefaultInputProps>(
  (
    {
      type = "text",
      initValue = "",
      maxLength = 524288,
      width,
      height,
      placeholder = "",
      placeholderColor = "tab2-placeholder",
      fontSize = "sm",
      color = "white",
      backgroundColor = "tab1",
    },
    ref
  ) => {
    if (initValue && ref) {
      (ref as RefObject<HTMLInputElement>)!.current!.value = initValue;
    }

    return (
      <DefaultInputContainer
        ref={ref}
        type={type}
        maxLength={maxLength}
        width={width}
        height={height}
        placeholder={placeholder}
        placeholderColor={placeholderColor}
        fontSize={fontSize}
        color={color}
        backgroundColor={backgroundColor}
      />
    );
  }
);

const DefaultInputContainer = styled.input<
  Pick<
    DefaultInputProps,
    | "width"
    | "height"
    | "placeholderColor"
    | "fontSize"
    | "color"
    | "backgroundColor"
  >
>`
  width: ${({ width }) => (width ? `${width}px` : "100%")};
  height: ${({ height }) => (height ? `${height}px` : "100%")};
  padding: 0.625rem;
  border: none;
  border-radius: 4px;
  color: ${({ theme, color }) => theme.color[color]};
  font-weight: 500;
  font-size: ${({ theme, fontSize }) => theme.fontSize[fontSize]};
  background-color: ${({ theme, backgroundColor }) =>
    theme.backgroundColor[backgroundColor]};

  ::placeholder {
    color: ${({ theme, placeholderColor }) => theme.color[placeholderColor]};
  }

  &:focus {
    outline: none;
  }
`;

export default DefaultInput;
