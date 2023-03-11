import AuthContainer from "@components/atoms/Div/AuthContainer";
import HeaderHelmet from "@components/atoms/Helmet";
import RegisterPage from "@components/templates/RegisterPage";

const Register = () => {
  return (
    <>
      <HeaderHelmet title="회원가입 | Discord" />
      <AuthContainer>
        <RegisterPage />
      </AuthContainer>
    </>
  );
};

export default Register;
