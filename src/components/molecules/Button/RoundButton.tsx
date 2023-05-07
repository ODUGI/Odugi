import { MouseEventHandler, ReactElement, memo } from "react";
import styled from "styled-components";
import { flexCenter } from "@styles/flexCenter";

interface RoundButtonProps {
  children: ReactElement;
  onClick: MouseEventHandler<HTMLDivElement>;
}

const RoundButton = ({ children, onClick }: RoundButtonProps) => (
  <RoundButtonContainer onClick={onClick}>{children}</RoundButtonContainer>
);

const RoundButtonContainer = styled.div`
  ${flexCenter}

  width: 2.25rem;
  height: 2.25rem;
  border-radius: 6.25rem;

  color: ${({ theme }) => theme.color.icon};
  background-color: ${({ theme }) => theme.backgroundColor.tab2};

  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.color.white};
  }
`;

export default RoundButton;
