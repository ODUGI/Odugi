import LoginModalBody from "@components/molecules/Div/LoginModalBody";
import LoginModalFooter from "@components/molecules/Div/LoginModalFooter";
import LoginModalHeader from "@components/molecules/Div/LoginModalHeader";
import AuthModal from "@components/organisms/Modal/AuthModal";
import useInput from "@hooks/common/useInput";
import useLogin from "@hooks/query/useLogin";
import validateEmail from "@utils/validateEmail";
import { useCallback, useState } from "react";

const LoginPage = () => {
  const [email, changeEmail] = useInput();
  const [password, changePassword] = useInput();
  const [errorMessage, setErrorMessage] = useState("");

  const { mutate: login } = useLogin(setErrorMessage);

  const onLogin = useCallback(() => {
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
  }, [email, password]);

  return (
    <AuthModal width={480}>
      <>
        <LoginModalHeader errorMessage={errorMessage} />
        <LoginModalBody
          email={email}
          password={password}
          changeEmail={changeEmail}
          changePassword={changePassword}
        />
        <LoginModalFooter onLogin={onLogin} />
      </>
    </AuthModal>
  );
};

export default LoginPage;
