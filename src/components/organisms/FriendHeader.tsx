import useOutsideClick from "@hooks/common/useOutsideClick";
import { useRef, useState } from "react";
import styled from "styled-components";
import FriendHeaderLeft from "../atoms/Div/FriendHeaderLeft";
import MainTabButton from "../atoms/Div/MainTabButton";
import ToolTip from "../atoms/Div/ToolTip";
import ChatAddIcon from "../atoms/Icons/ChatAddIcon";
import CreateDirectMessageModal from "./CreateDirectMessageDropdown";

const FriendHeader = () => {
  const [showDMDropdown, setShowDMDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useOutsideClick(dropdownRef, () => setShowDMDropdown(false));

  return (
    <>
      <FriendHeaderContainer>
        <LeftContainer>
          <FriendHeaderLeft />
          <MainTabButton status={"온라인"} />
          <MainTabButton status={"모두"} />
          <MainTabButton status={"대기 중"} />
          <MainTabButton status={"친구 추가하기"} />
        </LeftContainer>

        <ToolTip title="새로운 그룹 메시지" place="bottom">
          <RightContainer
            ref={dropdownRef}
            onClick={() => setShowDMDropdown((prev) => !prev)}
          >
            <ChatAddIcon />
            {showDMDropdown && (
              <DMModalWrapper>
                <CreateDirectMessageModal top={20} left={-440} />
              </DMModalWrapper>
            )}
          </RightContainer>
        </ToolTip>
      </FriendHeaderContainer>
    </>
  );
};

const FriendHeaderContainer = styled.div`
  width: 100%;
  height: 1.5rem;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const RightContainer = styled.div`
  display: flex;
  align-items: center;
`;

const DMModalWrapper = styled.div`
  position: relative;
`;

export default FriendHeader;
