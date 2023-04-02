import RegisterStep2Body from "@components/molecules/Div/RegisterStep2Body";
import RegisterStep2Footer from "@components/molecules/Div/RegisterStep2Footer";
import RegisterStep2Header from "@components/molecules/Div/RegisterStep2Header";
import { useRef, useState } from "react";

const RegisterStep2 = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const emailCodeRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <RegisterStep2Header errorMessage={errorMessage} />
      <RegisterStep2Body ref={emailCodeRef} />
      <RegisterStep2Footer
        emailCodeCurrent={emailCodeRef.current}
        setErrorMessage={setErrorMessage}
      />
    </>
  );
};

export default RegisterStep2;
