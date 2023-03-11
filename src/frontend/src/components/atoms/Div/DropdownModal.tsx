import styled from "styled-components";

interface DropdownModalProps {
  width: number;
  top?: number | null;
  right?: number | null;
  left?: number | null;
  bottom?: number | null;
}

const DropdownModal = styled.div<DropdownModalProps>`
  position: absolute;
  border-radius: 4px;
  z-index: 2;
  padding: 8px;
  width: ${({ width }) => width}px;
  background-color: ${({ theme }) => theme.backgroundColor["voice-modal"]};
  ${({ top }) => top && `top: ${top}px`};
  ${({ right }) => right && `right: ${right}px`};
  ${({ left }) => left && `left: ${left}px`};
  ${({ bottom }) => bottom && `bottom: ${bottom}px`};
`;

export default DropdownModal;
