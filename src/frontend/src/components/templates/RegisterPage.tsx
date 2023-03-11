import { useEffect } from "react";
import AuthModal from "@components/organisms/AuthModal";
import RegisterStep1 from "@components/organisms/RegisterStep1";
import RegisterStep2 from "@components/organisms/RegisterStep2";
import RegisterStep3 from "@components/organisms/RegisterStep3";
import { useRegisterStore } from "@store/useRegisterStore";

const RegisterPage = () => {
  const { step, resetStep } = useRegisterStore();

  useEffect(() => {
    resetStep();
  }, []);

  const getRegisterComponent = [RegisterStep1, RegisterStep2, RegisterStep3];
  const Component = getRegisterComponent[step - 1];

  return (
    <AuthModal width={480}>
      <Component />
    </AuthModal>
  );
};

export default RegisterPage;
