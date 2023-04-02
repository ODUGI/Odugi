import DefaultForm from "../Form/DefaultForm";

const RegisterStep1Body = ({ refs }: any) => {
  return (
    <>
      <DefaultForm type="email" ref={refs.emailRef}>
        이메일
      </DefaultForm>
      <DefaultForm ref={refs.nameRef}>사용자명</DefaultForm>
      <DefaultForm type="password" ref={refs.passwordRef}>
        비밀번호
      </DefaultForm>
    </>
  );
};

export default RegisterStep1Body;
