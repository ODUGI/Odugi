import useInput from "@hooks/common/useInput";
import useOutsideClick from "@hooks/common/useOutsideClick";
import { useRef, useState } from "react";
import styled from "styled-components";
import NotificationsIcon from "../atoms/Icons/NotificationsIcon";
import TagIcon from "../atoms/Icons/TagIcon";
import Text from "../atoms/Text/Text";
import NotificationModal from "../molecules/Div/NotificationModal";
import SearchInput from "../molecules/Input/SearchInput";

const Tab3CommunityHeader = () => {
  const chatroomName = "test";
  const [value, onChange] = useInput();
  const [showNotiModal, setShowNotiModal] = useState(false);
  const dropdownRef = useRef<any>();

  useOutsideClick(dropdownRef, () => setShowNotiModal(false));

  return (
    <Tab3CommunityHeaderContainer>
      <HeaderLeftWrapper>
        <TagIcon />
        <Text text={chatroomName} color="white" />
      </HeaderLeftWrapper>
      <HeaderRightWrapper>
        <div ref={dropdownRef}>
          <AlarmButtonWrapper onClick={() => setShowNotiModal((prev) => !prev)}>
            <NotificationsIcon />
          </AlarmButtonWrapper>
          {showNotiModal && <NotificationModal />}
        </div>
        <SearchInputWrapper>
          <SearchInput size="s" value={value} onChange={onChange} />
        </SearchInputWrapper>
      </HeaderRightWrapper>
    </Tab3CommunityHeaderContainer>
  );
};

const Tab3CommunityHeaderContainer = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.5rem;

  svg {
    font-size: ${({ theme }) => theme.fontSize.xxl};
    color: ${({ theme }) => theme.color.icon};
  }
`;

const HeaderLeftWrapper = styled.div`
  margin-left: 0.5rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
`;

const HeaderRightWrapper = styled.div`
  margin-right: 0.5rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;

  svg {
    cursor: pointer;

    &:hover {
      color: ${({ theme }) => theme.color.white};
    }
  }
`;

const SearchInputWrapper = styled.div`
  width: 9rem;

  &:has(input:focus) {
    width: 15rem;
  }
  transition: width 0.3s;
`;

const AlarmButtonWrapper = styled.div``;

export default Tab3CommunityHeader;
