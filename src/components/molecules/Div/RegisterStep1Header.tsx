import ErrorText from "@components/atoms/Text/ErrorText";
import AuthHeader from "../Text/AuthHeader";

interface RegisterStep1HeaderProps {
  errorMessage: string;
}

const RegisterStep1Header = ({ errorMessage }: RegisterStep1HeaderProps) => {
  return (
    <>
      <AuthHeader text="계정 만들기" />
      {errorMessage && <ErrorText text={errorMessage} />}
    </>
  );
};

export default RegisterStep1Header;
