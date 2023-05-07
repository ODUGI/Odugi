import LinkText from "@components/atoms/Text/LinkText";
import useRegister from "@hooks/query/useRegister";
import { useRegisterStore } from "@store/useRegisterStore";
import { forwardRef, useCallback } from "react";
import DefaultForm from "../Form/DefaultForm";

const RegisterStep2Body = forwardRef<HTMLInputElement>((_, ref) => {
  const { email, name, password } = useRegisterStore();

  const { mutate: sendEmail } = useRegister();

  const resendEmail = useCallback(() => {
    sendEmail({ email, name, password });
  }, [email, name, password]);

  return (
    <>
      <DefaultForm ref={ref}>인증 코드</DefaultForm>
      <LinkText
        text="코드를 받지 못했거나 코드가 만료되었나요? 다시 보내세요."
        onClick={resendEmail}
      />
    </>
  );
});

export default RegisterStep2Body;
