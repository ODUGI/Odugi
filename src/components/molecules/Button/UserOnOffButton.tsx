import { MouseEventHandler, ReactElement } from "react";
import styled from "styled-components";
import { flexCenter } from "@styles/flexCenter";
import ToolTip from "@components/atoms/Div/ToolTip";

interface MicButtonProps {
  text: string;
  OnIcon: ReactElement;
  OffIcon: ReactElement;
  onClick: MouseEventHandler<HTMLDivElement>;
  on?: boolean;
}

const UserOnOffButton = ({
  text,
  OnIcon,
  OffIcon,
  on = false,
  onClick,
}: MicButtonProps) => {
  return (
    <ToolTip title={text} place="top">
      <UserOnOffButtonContainer onClick={onClick}>
        <IconContainer>{on ? OnIcon : OffIcon}</IconContainer>
      </UserOnOffButtonContainer>
    </ToolTip>
  );
};

const UserOnOffButtonContainer = styled.div`
  ${flexCenter}
  width: 32px;
  height: 32px;
  border-radius: 4px;
  color: ${({ theme }) => theme.color.icon};
  background-color: ${({ theme }) => theme.backgroundColor.transparent};
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.color.white};
    background-color: ${({ theme }) => theme.backgroundColor.active};
  }
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
`;

export default UserOnOffButton;
