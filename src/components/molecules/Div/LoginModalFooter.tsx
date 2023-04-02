import DefaultButton from "@components/atoms/Button/DefaultButton";
import LinkText from "@components/atoms/Text/LinkText";
import Text from "@components/atoms/Text/Text";
import useLogin from "@hooks/query/useLogin";
import validateEmail from "@utils/validateEmail";
import { Dispatch, SetStateAction, useCallback } from "react";
import { useNavigate } from "react-router-dom";

interface LoginModalFooterProps {
  refs: any;
  setErrorMessage: Dispatch<SetStateAction<string>>;
}

const LoginModalFooter = ({ refs, setErrorMessage }: LoginModalFooterProps) => {
  const navigate = useNavigate();
  const { mutate: login } = useLogin(setErrorMessage);
  const { emailRef, passwordRef } = refs;

  const goRegisterPage = useCallback(() => navigate("/register"), []);

  const onLogin = useCallback(() => {
    if (!emailRef.current.value || !passwordRef.current.value) {
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
  }, [refs]);

  return (
    <>
      <DefaultButton text="로그인" onClick={onLogin} height={44} mb={12} />
      <Text color="auth-desc" fontSize="sm">
        계정이 필요한가요?
        <LinkText text=" 가입하기" onClick={goRegisterPage} />
      </Text>
    </>
  );
};

export default LoginModalFooter;
