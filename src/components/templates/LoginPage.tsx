import LoginModalBody from "@components/molecules/Div/LoginModalBody";
import LoginModalFooter from "@components/molecules/Div/LoginModalFooter";
import LoginModalHeader from "@components/molecules/Div/LoginModalHeader";
import AuthModal from "@components/organisms/Modal/AuthModal";
import useLogin from "@hooks/query/useLogin";
import validateEmail from "@utils/validateEmail";
import { useCallback, useRef, useState } from "react";

const LoginPage = () => {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const refs = { emailRef, passwordRef };

  const [errorMessage, setErrorMessage] = useState("");

  const { mutate: login } = useLogin(setErrorMessage);

  const onLogin = useCallback(() => {
    if (!emailRef.current || !passwordRef.current) {
      return setErrorMessage("모든 값을 입력해주세요.");
    }
    if (!validateEmail(emailRef.current.value)) {
      return setErrorMessage("유효하지 않은 아이디입니다.");
    }
    if (passwordRef.current.value.length < 8) {
      return setErrorMessage("비밀번호는 8자리 이상이어야 합니다.");
    }
    setErrorMessage("");
    login({
      email: emailRef.current.value,
      password: passwordRef.current.value,
    });
  }, [emailRef, passwordRef]);

  return (
    <AuthModal width={480}>
      <>
        <LoginModalHeader errorMessage={errorMessage} />
        <LoginModalBody refs={refs} />
        <LoginModalFooter onLogin={onLogin} />
      </>
    </AuthModal>
  );
};

export default LoginPage;
