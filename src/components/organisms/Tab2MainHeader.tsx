import styled from "styled-components";
import SearchButton from "../molecules/Button/SearchButton";

const Tab2MainHeader = () => {
  return (
    <Tab2HeaderContainer>
      <SearchButton />
    </Tab2HeaderContainer>
  );
};

const Tab2HeaderContainer = styled.div`
  height: 3rem;
  padding: 0 0.625rem;

  display: flex;
  align-items: center;
`;

export default Tab2MainHeader;
