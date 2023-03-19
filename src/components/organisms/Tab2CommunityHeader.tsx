import CommunityDropdown from "@components/molecules/Div/CommunityDropdown";
import useOutsideClick from "@hooks/common/useOutsideClick";
import { useRef, useState } from "react";
import styled from "styled-components";
import ArrowBottomIcon from "../atoms/Icons/ArrowBottomIcon";
import Text from "../atoms/Text/Text";

const Tab2CommunityHeader = () => {
  const dropdownRef = useRef<any>();
  const [showDropdown, setShowDropdown] = useState(false);

  useOutsideClick(dropdownRef, () => setShowDropdown(false));

  const communityName = "자바스크립트 스터디";

  const showCommunityDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  return (
    <Tab2HeaderContainer
      ref={dropdownRef}
      showModal={showDropdown}
      onClick={showCommunityDropdown}
    >
      <Text color="white">{communityName}</Text>
      <ArrowBottomIcon />
      {showDropdown && <CommunityDropdown />}
    </Tab2HeaderContainer>
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
