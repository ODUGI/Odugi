import LinkText from "@components/atoms/Text/LinkText";
import { ChangeEvent } from "react";
import styled from "styled-components";
import LoginForm from "../Form/LoginForm";

interface LoginModalBodyProps {
  email: string;
  password: string;
  changeEmail: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  changePassword: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

const LoginModalBody = ({
  email,
  password,
  changeEmail,
  changePassword,
}: LoginModalBodyProps) => (
  <>
    <LoginForm
      text="이메일"
      value={email}
      type="email"
      onChange={changeEmail}
    />
    <LoginForm
      text="비밀번호"
      value={password}
      type="password"
      onChange={changePassword}
    />
    <LinkTextContainer>
      <LinkText text="비밀번호를 잊으셨나요?" onClick={() => null} />
    </LinkTextContainer>
  </>
);

const LinkTextContainer = styled.div`
  margin: -1rem 0 1.25rem;
`;

export default LoginModalBody;
