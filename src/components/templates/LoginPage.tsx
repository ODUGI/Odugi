import DefaultButton from "@components/atoms/Button/DefaultButton";
import LinkText from "@components/atoms/Text/LinkText";
import Text from "@components/atoms/Text/Text";
import LoginForm from "@components/molecules/Form/LoginForm";
import AuthDesc from "@components/molecules/Text/AuthDesc";
import AuthModal from "@components/organisms/Modal/AuthModal";
import useInput from "@hooks/common/useInput";
import useLogin from "@hooks/query/useLogin";
import validateEmail from "@utils/validateEmail";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, changeEmail] = useInput();
  const [password, changePassword] = useInput();
  const [errorMessage, setErrorMessage] = useState("");

  const { mutate: login } = useLogin();

  const goRegisterPage = () => navigate("/register");

  const onLogin = () => {
    if (!email || !password) {
      return setErrorMessage("모든 값을 입력해주세요.");
    }
    if (!validateEmail(email)) {
      return setErrorMessage("유효하지 않은 아이디입니다.");
    }
    if (password.length < 8) {
      return setErrorMessage("비밀번호는 8자리 이상이어야 합니다.");
    }
    setErrorMessage("");
    login({ email, password });
  };

  return (
    <AuthModal width={480}>
      <>
        <Text
          text="돌아오신 것을 환영해요!"
          color="white"
          fontSize="xxl"
          fontWeight="bold"
          center
          mb={8}
        />
        <AuthDesc text=" 만나다니 너무 반가워요!" />
        {errorMessage && (
          <Text
            text={errorMessage}
            color="invite-danger"
            fontSize="xs"
            fontWeight="bold"
            mb={8}
          />
        )}
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
        <DefaultButton text="로그인" onClick={onLogin} height={44} mb={12} />
        <Text
          text={
            <>
              <>계정이 필요한가요? </>
              <LinkText text="가입하기" onClick={goRegisterPage} />
            </>
          }
          color="auth-desc"
          fontSize="sm"
        />
      </>
    </AuthModal>
  );
};

const LinkTextContainer = styled.div`
  margin: -1rem 0 1.25rem;
`;

export default LoginPage;
