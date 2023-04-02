import LoginModalBody from "@components/molecules/Div/LoginModalBody";
import LoginModalFooter from "@components/molecules/Div/LoginModalFooter";
import LoginModalHeader from "@components/molecules/Div/LoginModalHeader";
import AuthModal from "@components/organisms/Modal/AuthModal";
import { useRef, useState } from "react";

const LoginPage = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const refs = { emailRef, passwordRef };

  const [errorMessage, setErrorMessage] = useState("");

  return (
    <AuthModal width={480}>
      <>
        <LoginModalHeader errorMessage={errorMessage} />
        <LoginModalBody refs={refs} />
        <LoginModalFooter refs={refs} setErrorMessage={setErrorMessage} />
      </>
    </AuthModal>
  );
};

export default LoginPage;
