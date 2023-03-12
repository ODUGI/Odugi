import { flexCenter } from "@styles/flexCenter";
import styled from "styled-components";
import ModalContainer from "../atoms/Div/ModalContainer";

interface AuthModalProps {
  children: React.ReactElement;
  width: number;
}

const AuthModal = ({ children, width }: AuthModalProps) => {
  return (
    <Background>
      <ModalContainer width={width}>{children}</ModalContainer>
    </Background>
  );
};

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  ${flexCenter}
`;

export default AuthModal;
