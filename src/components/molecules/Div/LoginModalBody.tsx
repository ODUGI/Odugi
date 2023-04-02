import LinkText from "@components/atoms/Text/LinkText";
import { Ref } from "react";
import styled from "styled-components";
import LoginForm from "../Form/LoginForm";

interface LoginModalBodyProps {
  refs: {
    emailRef: Ref<HTMLInputElement>;
    passwordRef: Ref<HTMLInputElement>;
  };
}

const LoginModalBody = ({ refs }: LoginModalBodyProps) => {
  return (
    <>
      <LoginForm ref={refs.emailRef} text="이메일" type="email" />
      <LoginForm ref={refs.passwordRef} text="비밀번호" type="password" />
      <LinkTextContainer>
        <LinkText text="비밀번호를 잊으셨나요?" onClick={() => null} />
      </LinkTextContainer>
    </>
  );
};

const LinkTextContainer = styled.div`
  margin: -1rem 0 1.25rem;
`;

export default LoginModalBody;
