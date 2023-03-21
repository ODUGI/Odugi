import DefaultButton from "@components/atoms/Button/DefaultButton";
import LinkText from "@components/atoms/Text/LinkText";
import useSendEmail from "@hooks/query/useSendEmail";
import { useRegisterStore } from "@store/useRegisterStore";
import validateEmail from "@utils/validateEmail";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const RegisterStep1Footer = ({ refs, setErrorMessage }: any) => {
  const navigate = useNavigate();

  const { setStep, setEmail, setName, setPassword } = useRegisterStore();

  const { mutate: sendEmail } = useSendEmail({
    onError: () => {
      setErrorMessage("문제가 발생했습니다. 다시 시도해주세요.");
    },
    onSuccess: () => {
      setStep(2);
    },
  });

  const goLoginPage = useCallback(() => navigate("/login"), []);

  const validateInputs = (email: string) => {
    if (
      !refs.emailRef.current ||
      !refs.nameRef.current ||
      !refs.passwordRef.current
    ) {
      return setErrorMessage("모든 값을 입력해주세요.");
    }

    if (!validateEmail(email) || email.length < 8) {
      return setErrorMessage("유효하지 않은 아이디 또는 비밀번호입니다.");
    }
  };

  const registerUser = useCallback(() => {
    const email = refs.emailRef.current.value;
    const name = refs.nameRef.current.value;
    const password = refs.passwordRef.current.value;

    validateInputs(email);

    setErrorMessage("");
    setEmail(email);
    setName(name);
    setPassword(password);
    sendEmail({ email, name, password });
  }, []);

  return (
    <>
      <DefaultButton
        text="계속하기"
        onClick={registerUser}
        height={44}
        mb={12}
      />
      <LinkText text="이미 계정이 있으신가요?" onClick={goLoginPage} />
    </>
  );
};

export default RegisterStep1Footer;
