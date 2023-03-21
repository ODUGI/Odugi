import DefaultForm from "../Form/DefaultForm";

const RegisterStep1Body = ({ refs }: any) => {
  return (
    <>
      <DefaultForm text="이메일" type="email" ref={refs.emailRef} />
      <DefaultForm text="사용자명" ref={refs.nameRef} />
      <DefaultForm text="비밀번호" type="password" ref={refs.passwordRef} />
    </>
  );
};

export default RegisterStep1Body;
