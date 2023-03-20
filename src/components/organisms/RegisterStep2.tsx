import Text from "@components/atoms/Text/Text";
import useInput from "@hooks/common/useInput";
import useRegister from "@hooks/query/useRegister";
import useSendUserCode from "@hooks/query/useSendUserCode";
import { useRegisterStore } from "@store/useRegisterStore";
import { useCallback, useState } from "react";
import styled from "styled-components";
import DefaultButton from "../atoms/Button/DefaultButton";
import LinkText from "../atoms/Text/LinkText";
import DefaultForm from "../molecules/Form/DefaultForm";
import AuthDesc from "../molecules/Text/AuthDesc";
import AuthHeader from "../molecules/Text/AuthHeader";

const RegisterStep2 = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const { email, name, password, setStep } = useRegisterStore();
  const [emailCode, changeEmailCode] = useInput();

  const { mutate: sendEmail } = useRegister();
  const { mutate: sendUserCode } = useSendUserCode({
    onError: () => {
      setErrorMessage("인증 코드를 다시 입력해주세요.");
    },

    onSuccess: () => {
      setStep(3);
    },
  });

  const resendEmail = useCallback(() => {
    sendEmail({ email, name, password });
  }, [email, name, password]);

  const verifyEmail = useCallback(() => {
    if (!emailCode) {
      setErrorMessage("코드를 입력해주세요.");
    }
    sendUserCode(emailCode);
  }, [emailCode]);

  return (
    <>
      <AuthHeader text="코드 입력" />
      <AuthDesc text="이메일 확인: 방금 인증 코드를 보냈어요. 해당 코드를 입력하여 본인임을 인증하세요." />
      {errorMessage && (
        <Text color="invite-danger" fontSize="xs" fontWeight="bold" mb={16}>
          {errorMessage}
        </Text>
      )}
      <DefaultForm
        // value={emailCode}
        // onChange={changeEmailCode}
        text="인증 코드"
      />
      <LinkText
        text="코드를 받지 못했거나 코드가 만료되었나요? 다시 보내세요."
        onClick={resendEmail}
      />
      <Footer>
        <DefaultButton
          text="다음"
          onClick={verifyEmail}
          height={44}
          width={100}
        />
      </Footer>
    </>
  );
};

const Footer = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: end;
`;

export default RegisterStep2;
