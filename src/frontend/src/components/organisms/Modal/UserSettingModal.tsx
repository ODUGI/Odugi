import styled from "styled-components";
import BackgroundModal from "@components/organisms/BackgroundModal";
import CancelIcon from "@components/atoms/Icons/CancelIcon";
import useModalStore from "@store/useModalStore";
import useUserSetStore, { UserSettingType } from "@store/useUserSetStore";
import MyAccount from "../MyAccount";
import UserProfile from "../UserProfile";
import CommunitySettingBar from "../CommunitySettingBar";

const userComponent = {
  "내 계정": MyAccount,
  프로필: UserProfile,
  알림: UserProfile,
};

const getStatus = (status: UserSettingType) => {
  const Component = userComponent[status];
  return <Component />;
};

const UserSettingModal = () => {
  const { userStatus } = useUserSetStore();
  const { setShowModal } = useModalStore();

  return (
    <BackgroundModal width={800} p={0} onClick={() => setShowModal(false)}>
      <SettingBox>
        <Side>
          <CommunitySettingBar />
        </Side>
        <Container>
          <CancelIconWrapper onClick={() => setShowModal(false)}>
            <CancelIcon />
          </CancelIconWrapper>
          {/* <UserProfile /> */}
          {getStatus(userStatus)}
        </Container>
      </SettingBox>
    </BackgroundModal>
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
