import styled from "styled-components";
import CancelIcon from "@components/atoms/Icons/CancelIcon";
import useModalStore from "@store/useModalStore";
import MyAccount from "../MyAccount";
import UserProfile from "../UserProfile";
import useSettingModalStore from "@store/useSettingModalStore";
import CommunitySettingDefault from "../CommunitySettingDefault";
import CommunitySettingMember from "../CommunitySettingMember";
import CommunitySettingInvite from "../CommunitySettingInvite";
import { UserSettingBar } from "../UserSettingBar.stories";
import { useEffect } from "react";

const userComponent = {
  "내 계정": <MyAccount />,
  프로필: <UserProfile />,
  알림: <UserProfile />,
  일반: <CommunitySettingDefault />,
  멤버: <CommunitySettingMember />,
  초대: <CommunitySettingInvite />,
};

const UserSettingModal = () => {
  const { setShowModal } = useModalStore();
  const { settingBarStatus, setSettingBarStatus } = useSettingModalStore();

  const component = settingBarStatus ? userComponent[settingBarStatus] : null;

  useEffect(() => {
    setSettingBarStatus("내 계정");
  }, []);

  return (
    <UserSettingModalContainer>
      <LeftSideContainer>
        <UserSettingBar />
      </LeftSideContainer>
      <CancelButtonWrapper>
        <CancelIconWrapper onClick={() => setShowModal(false)}>
          <CancelIcon />
        </CancelIconWrapper>
        {component}
      </CancelButtonWrapper>
    </UserSettingModalContainer>
  );
};

const UserSettingModalContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;

  display: flex;
  flex-direction: row;
  justify-content: center;

  top: 0;
  left: 0;

  overflow: hidden;
  background-color: ${({ theme }) => theme.backgroundColor["voice-icon"]};
`;

const LeftSideContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1 1 auto;
`;

const CancelButtonWrapper = styled.div`
  position: relative;

  display: flex;
  flex: 1 1 800px;
  align-items: flex-start;

  background-color: ${({ theme }) => theme.backgroundColor["tab3"]};
`;

const CancelIconWrapper = styled.div`
  font-size: 5rem;
  color: ${({ theme }) => theme.color["auth-desc"]};
  position: absolute;

  right: 500px;
  top: 25px;

  cursor: pointer;
`;

export default UserSettingModal;
