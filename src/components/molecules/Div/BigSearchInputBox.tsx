import { forwardRef, Ref } from "react";
import styled from "styled-components";
import SearchInput from "../Input/SearchInput";

const BigSearchInputBox = forwardRef<HTMLInputElement>((ref) => {
  return (
    <InputContainer>
      <SearchInput size="m" ref={ref as Ref<HTMLInputElement>} />
    </InputContainer>
  );
});

const InputContainer = styled.div`
  margin-top: 16px;
  margin-bottom: 8px;
`;

export default BigSearchInputBox;
