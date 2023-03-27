import SearchIcon from "@components/atoms/Icons/SearchIcon";
import DefaultInput from "@components/atoms/Input/DefaultInput";
import { forwardRef } from "react";
import styled from "styled-components";

type SizeType = "s" | "m";
interface SearchInputProps {
  size: SizeType;
  placeholder?: string;
}

const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  ({ size, placeholder = "검색하기" }, ref) => {
    return (
      <SearchInputContainer size={size}>
        <DefaultInput
          type="text"
          ref={ref}
          placeholder={placeholder}
          fontSize={size === "s" ? "sm" : "base"}
        />
        <SearchIcon />
      </SearchInputContainer>
    );
  }
);

const SearchInputContainer = styled.label<{ size: SizeType }>`
  border-radius: 0.25rem;
  min-width: 144px;
  width: 100%;
  height: ${({ size }) => (size === "s" ? 1.5 : 2.125)}rem;
  padding: 0 0.125rem;
  background-color: ${({ theme }) => theme.backgroundColor.tab1};

  display: flex;
  flex-direction: row;
  align-items: center;

  svg {
    font-size: ${({ theme, size }) =>
      theme.fontSize[size === "s" ? "lg" : "xxl"]};
    color: ${({ theme }) => theme.color.icon};
  }
`;

export default SearchInput;
