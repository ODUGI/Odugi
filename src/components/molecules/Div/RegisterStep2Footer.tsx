import DefaultButton from "@components/atoms/Button/DefaultButton";
import useSendUserCode from "@hooks/query/useSendUserCode";
import { useRegisterStore } from "@store/useRegisterStore";
import { useCallback } from "react";
import styled from "styled-components";

const RegisterStep2Footer = ({ emailCodeCurrent, setErrorMessage }: any) => {
  const { setStep } = useRegisterStore();

  const { mutate: sendUserCode } = useSendUserCode({
    onError: () => {
      setErrorMessage("인증 코드를 다시 입력해주세요.");
    },
    onSuccess: () => {
      setStep(3);
    },
  });

  const verifyEmail = useCallback(() => {
    const emailCode = emailCodeCurrent.value;

    if (!emailCode) {
      return setErrorMessage("코드를 입력해주세요.");
    }
    sendUserCode(emailCode);
  }, [emailCodeCurrent]);

  return (
    <Footer>
      <DefaultButton
        text="다음"
        onClick={verifyEmail}
        height={44}
        width={100}
      />
    </Footer>
  );
};

const Footer = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: end;
`;

export default RegisterStep2Footer;
