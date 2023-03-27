import DefaultInput from "@components/atoms/Input/DefaultInput";
import { useRef } from "react";
import styled from "styled-components";

const SearchButton = () => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <SearchButtonContainer>
      <DefaultInput
        ref={ref}
        type="text"
        placeholder="대화 찾기 또는 시작하기"
      />
    </SearchButtonContainer>
  );
};

const SearchButtonContainer = styled.div`
  width: 100%;
  height: 1.75rem;

  input {
    cursor: pointer;
  }
`;

export default SearchButton;
