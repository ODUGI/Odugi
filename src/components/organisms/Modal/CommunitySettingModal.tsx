import styled from "styled-components";
import { useEffect, lazy } from "react";
import CommunitySettingBar from "../CommunitySettingBar";
import CancelIcon from "@components/atoms/Icons/CancelIcon";
import useModalStore from "@store/useModalStore";
import useSettingModalStore from "@store/useSettingModalStore";
const CommunitySettingMember = lazy(() => import("../CommunitySettingMember"));
const CommunitySettingDefault = lazy(
  () => import("../CommunitySettingDefault")
);
const CommunitySettingInvite = lazy(() => import("../CommunitySettingInvite"));
const UserSettingMyAccount = lazy(() => import("../UserSettingMyAccount"));
const UserSettingProfile = lazy(() => import("../UserSettingProfile"));

const userComponent = {
  "내 계정": <UserSettingMyAccount />,
  프로필: <UserSettingProfile />,
  알림: <UserSettingProfile />,
  일반: <CommunitySettingDefault />,
  멤버: <CommunitySettingMember />,
  초대: <CommunitySettingInvite />,
};

const CommunitySettingModal = () => {
  const { setShowModal } = useModalStore();
  const { settingBarStatus, setSettingBarStatus } = useSettingModalStore();

  const component = settingBarStatus ? userComponent[settingBarStatus] : null;

  const closeModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    setSettingBarStatus("일반");
  }, []);

  return (
    <SettingBox>
      <Side>
        <CommunitySettingBar />
      </Side>
      <Container>
        <CancelIconWrapper onClick={closeModal}>
          <CancelIcon />
        </CancelIconWrapper>
        {component}
      </Container>
    </SettingBox>
  );
};

const SettingBox = styled.div`
  width: 100%;
  position: fixed;
  z-index: 4;
  top: 0;
  left: 0;

  background-color: ${({ theme }) => theme.backgroundColor["voice-icon"]};

  display: flex;
  flex-direction: row;
  justify-content: center;
  overflow: hidden;
`;

const CancelIconWrapper = styled.div`
  font-size: 5rem;
  color: ${({ theme }) => theme.color["auth-desc"]};
  position: absolute;
  right: 500px;
  top: 25px;

  cursor: pointer;
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

export default CommunitySettingModal;
