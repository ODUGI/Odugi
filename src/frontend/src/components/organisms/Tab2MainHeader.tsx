import styled from "styled-components";
import SearchButton from "../molecules/Button/SearchButton";

const Tab2Header = () => {
  return (
    <Tab2HeaderContainer>
      <SearchButton />
    </Tab2HeaderContainer>
  );
};

const Tab2HeaderContainer = styled.div`
  height: 48px;
  padding: 0 0.625rem;

  display: flex;
  align-items: center;
`;

export default Tab2Header;
