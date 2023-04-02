import RegisterStep1Body from "@components/molecules/Div/RegisterStep1Body";
import RegisterStep1Footer from "@components/molecules/Div/RegisterStep1Footer";
import RegisterStep1Header from "@components/molecules/Div/RegisterStep1Header";
import { useRef, useState } from "react";

const RegisterStep1 = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const refs = { emailRef, nameRef, passwordRef };

  const [errorMessage, setErrorMessage] = useState("");

  return (
    <>
      <RegisterStep1Header errorMessage={errorMessage} />
      <RegisterStep1Body refs={refs} />
      <RegisterStep1Footer refs={refs} setErrorMessage={setErrorMessage} />
    </>
  );
};

export default RegisterStep1;
