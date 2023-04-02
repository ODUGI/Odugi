import Text from "@components/atoms/Text/Text";
import AuthDesc from "../Text/AuthDesc";
import AuthHeader from "../Text/AuthHeader";

interface RegisterStep2HeaderProps {
  errorMessage: string;
}

const RegisterStep2Header = ({ errorMessage }: RegisterStep2HeaderProps) => {
  return (
    <>
      <AuthHeader text="코드 입력" />
      <AuthDesc text="이메일 확인: 방금 인증 코드를 보냈어요. 해당 코드를 입력하여 본인임을 인증하세요." />
      {errorMessage && (
        <Text color="invite-danger" fontSize="xs" fontWeight="bold" mb={16}>
          {errorMessage}
        </Text>
      )}
    </>
  );
};

export default RegisterStep2Header;
