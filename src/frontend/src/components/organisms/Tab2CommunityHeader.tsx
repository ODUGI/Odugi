import useDropdownStore from "@store/useDropdownStore";
import styled from "styled-components";
import TabDivider from "../atoms/Div/TabDivider";
import ArrowBottomIcon from "../atoms/Icons/ArrowBottomIcon";
import Text from "../atoms/Text/Text";

const Tab2CommunityHeader = () => {
  const { showDropdown, setShowDropdown, setDropdownType } = useDropdownStore();

  const communityName = "자바스크립트 스터디";

  const showCommunityDropdown = () => {
    setShowDropdown(!showDropdown);
    setDropdownType("community");
  };

  return (
    <>
      <Tab2HeaderContainer
        showModal={showDropdown}
        onClick={showCommunityDropdown}
      >
        <Text text={communityName} color="white" />
        <ArrowBottomIcon />
      </Tab2HeaderContainer>
      <TabDivider />
    </>
  );
};

const Tab2HeaderContainer = styled.div<{ showModal: boolean }>`
  position: sticky;
  top: 0;
  padding: 0.75rem 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  background-color: ${({ theme, showModal }) =>
    theme.backgroundColor[showModal ? "hover" : "trans"]};
  svg {
    color: ${({ theme }) => theme.color.icon};
  }
  &:hover {
    background-color: ${({ theme }) => theme.backgroundColor.hover};
  }
`;

export default Tab2CommunityHeader;
