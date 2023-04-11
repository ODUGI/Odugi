import { MouseEventHandler } from "react";
import styled from "styled-components";
import { BackgroundColorType, ColorType } from "@styles/theme";

interface ButtonWrapperProps {
  onClick: MouseEventHandler<HTMLDivElement>;
  width?: number;
  height?: number;
  color?: ColorType;
  ph?: number;
  active?: boolean;
  blur?: boolean;
  hoverBackgroundColor?: BackgroundColorType;
}

const ButtonWrapper = styled.div<ButtonWrapperProps>`
  display: flex;
  align-items: center;

  width: ${({ width }) => (width ? `${width}px` : "100%")};
  height: ${({ height }) => (height ? `${height}px` : "100%")};
  color: ${({ theme, color, active }) => theme.color[active ? "white" : color]};
  background-color: ${({ theme, active }) =>
    theme.backgroundColor[active ? "active" : "transparent"]};
  opacity: ${({ blur }) => (blur ? 30 : 100)}%;
  border-radius: 0.25rem;
  padding: 0 ${({ ph }) => ph}px;

  cursor: pointer;

  &:hover {
    opacity: 100%;
    color: ${({ theme }) => theme.color.white};
    background-color: ${({ theme, hoverBackgroundColor }) =>
      theme.backgroundColor[hoverBackgroundColor]};
  }
`;

ButtonWrapper.defaultProps = {
  active: false,
  ph: 8,
  color: "black",
  blur: false,
  hoverBackgroundColor: "hover",
};

export default ButtonWrapper;
