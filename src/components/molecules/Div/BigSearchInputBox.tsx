import { forwardRef } from "react";
import styled from "styled-components";
import SearchInput from "../Input/SearchInput";

const BigSearchInputBox = forwardRef<HTMLInputElement>((_, ref) => {
  return (
    <InputContainer>
      <SearchInput size="m" ref={ref} />
    </InputContainer>
  );
});

const InputContainer = styled.div`
  margin-top: 16px;
  margin-bottom: 8px;
`;

export default BigSearchInputBox;
