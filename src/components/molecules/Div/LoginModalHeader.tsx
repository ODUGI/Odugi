import ErrorText from "@components/atoms/Text/ErrorText";
import Text from "@components/atoms/Text/Text";
import { memo } from "react";
import AuthDesc from "../Text/AuthDesc";

interface LoginModalHeaderProps {
  errorMessage: string;
}

const LoginModalHeader = memo(({ errorMessage }: LoginModalHeaderProps) => {
  return (
    <>
      <Text color="white" fontSize="xxl" fontWeight="bold" center mb={8}>
        돌아오신 것을 환영해요!
      </Text>
      <AuthDesc text="만나다니 너무 반가워요!" />
      {errorMessage && <ErrorText text={errorMessage} />}
    </>
  );
});

export default LoginModalHeader;
