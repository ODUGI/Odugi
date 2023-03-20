import ErrorText from "@components/atoms/Text/ErrorText";
import useInput from "@hooks/common/useInput";
import useSendEmail from "@hooks/query/useSendEmail";
import { useRegisterStore } from "@store/useRegisterStore";
import validateEmail from "@utils/validateEmail";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import DefaultButton from "../atoms/Button/DefaultButton";
import LinkText from "../atoms/Text/LinkText";
import DefaultForm from "../molecules/Form/DefaultForm";
import AuthHeader from "../molecules/Text/AuthHeader";

const RegisterStep1 = () => {
  const { setStep, setEmail, setName, setPassword } = useRegisterStore();
  const navigate = useNavigate();
  const [email, changeEmail] = useInput();
  const [name, changeName] = useInput();
  const [password, changePassword] = useInput();
  const [errorMessage, setErrorMessage] = useState("");

  const { mutate: sendEmail } = useSendEmail({
    onError: () => {
      setErrorMessage("문제가 발생했습니다. 다시 시도해주세요.");
    },

    onSuccess: () => {
      setStep(2);
    },
  });

  const goLoginPage = useCallback(() => navigate("/login"), []);

  const onRegister = useCallback(() => {
    if (!email || !name || !password) {
      return setErrorMessage("모든 값을 입력해주세요.");
    }

    if (!validateEmail(email) || password.length < 8) {
      return setErrorMessage("유효하지 않은 아이디 또는 비밀번호입니다.");
    }

    setErrorMessage("");
    setEmail(email);
    setName(name);
    setPassword(password);
    sendEmail({ email, name, password });
  }, [email, name, password]);

  return (
    <>
      <AuthHeader text="계정 만들기" />
      {errorMessage && <ErrorText text={errorMessage} />}
      <DefaultForm
        text="이메일"
        type="email"
        // value={email}
        // onChange={changeEmail}
      />
      <DefaultForm
        text="사용자명"
        // value={name} onChange={changeName}
      />
      <DefaultForm
        text="비밀번호"
        type="password"
        // value={password}
        // onChange={changePassword}
      />
      <DefaultButton text="계속하기" onClick={onRegister} height={44} mb={12} />
      <LinkText text="이미 계정이 있으신가요?" onClick={goLoginPage} />
    </>
  );
};

export default RegisterStep1;
