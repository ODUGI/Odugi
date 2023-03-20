import DefaultButton from "@components/atoms/Button/DefaultButton";
import LinkText from "@components/atoms/Text/LinkText";
import Text from "@components/atoms/Text/Text";
import { useNavigate } from "react-router-dom";

interface LoginModalFooterProps {
  onLogin: () => void;
}

const LoginModalFooter = ({ onLogin }: LoginModalFooterProps) => {
  const navigate = useNavigate();

  const goRegisterPage = () => navigate("/register");

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
