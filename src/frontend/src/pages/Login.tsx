import AuthContainer from "@components/atoms/Div/AuthContainer";
import HeaderHelmet from "@components/atoms/Helmet";
import LoginPage from "@components/templates/LoginPage";

const Login = () => {
  return (
    <>
      <HeaderHelmet title="로그인 | Discord" />
      <AuthContainer>
        <LoginPage />
      </AuthContainer>
    </>
  );
};

export default Login;
