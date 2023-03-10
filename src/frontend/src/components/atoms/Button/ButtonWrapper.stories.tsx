import ButtonWrapper from "./ButtonWrapper";

export default {
  title: "atoms/Button",
  component: ButtonWrapper,
};

export const Wrapper = () => (
  <ButtonWrapper onClick={() => null}>
    <>test text</>
  </ButtonWrapper>
);
