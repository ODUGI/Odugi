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
  const { settingBarStatus, setSettingBarStatus } = useSettingModalStore();
  const { setShowModal } = useModalStore();

  const Component = settingBarStatus ? userComponent[settingBarStatus] : <></>;

  useEffect(() => {
    setSettingBarStatus("내 계정");
  }, []);

  return (
    <SettingBox>
      <Side>
        <UserSettingBar />
      </Side>
      <Container>
        <CancelIconWrapper onClick={() => setShowModal(false)}>
          <CancelIcon />
        </CancelIconWrapper>
        {Component}
      </Container>
    </SettingBox>
  );
};

const CancelIconWrapper = styled.div`
  font-size: 5rem;
  color: ${({ theme }) => theme.color["auth-desc"]};
  position: absolute;

  right: 500px;
  top: 25px;

  cursor: pointer;
`;

const SettingBox = styled.div`
  width: 100vw;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: row;
  background-color: ${({ theme }) => theme.backgroundColor["voice-icon"]};
`;
const Container = styled.div`
  position: relative;
  display: flex;
  flex: 1 1 800px;
  align-items: flex-start;
  background-color: ${({ theme }) => theme.backgroundColor["tab3"]};
`;
const Side = styled.div`
  display: flex;
  flex: 1 1 auto;
  justify-content: flex-end;
`;

export default UserSettingModal;
