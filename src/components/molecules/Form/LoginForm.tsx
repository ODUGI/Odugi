import SpanText from "@components/atoms/Text/SpanText";
import { forwardRef } from "react";
import DefaultForm from "./DefaultForm";

interface LoginFormProps {
  text: string;
  type?: string;
}

const LoginForm = forwardRef<HTMLInputElement, LoginFormProps>(
  ({ text, type = "text" }, ref) => (
    <>
      <DefaultForm
        ref={ref}
        text={
          <>
            {text}
            <SpanText text=" *" color="red" />
          </>
        }
        type={type}
      />
    </>
  )
);

export default LoginForm;
