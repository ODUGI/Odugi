import styled from "styled-components";
import CommunitySettingBar from "../components/organisms/CommunitySettingBar";
import CommunitySettingMember from "../components/organisms/CommunitySettingMember";
import CommunitySettingDefault from "../components/organisms/CommunitySettingDefault";
import CommunitySettingInvite from "../components/organisms/CommunitySettingInvite";
import BackgroundModal from "@components/organisms/BackgroundModal";
import CancelIcon from "@components/atoms/Icons/CancelIcon";
import useCommunityStore, { SettingStatusType } from "@store/useCommunityStore";
import useModalStore from "@store/useModalStore";

const communityComponent = {
  일반: CommunitySettingDefault,
  멤버: CommunitySettingMember,
  초대: CommunitySettingInvite,
};

const getStatus = (status: SettingStatusType) => {
  const Component = communityComponent[status];
  return <Component />;
};

const CommunityPage = () => {
  const { settingStatus } = useCommunityStore();
  const { setCommunitySettingModal } = useModalStore();

  return (
    <BackgroundModal
      width={800}
      p={0}
      onClick={() => setCommunitySettingModal(false)}
    >
      <SettingBox>
        <Side>
          <CommunitySettingBar />
        </Side>
        <Container>
          <CancelIconWrapper onClick={() => setCommunitySettingModal(false)}>
            <CancelIcon />
          </CancelIconWrapper>
          {getStatus(settingStatus)}
        </Container>
      </SettingBox>
    </BackgroundModal>
  );
};

const CancelIconWrapper = styled.div`
  font-size: 5rem;
  color: ${({ theme }) => theme.color["auth-desc"]};
  cursor: pointer;
  position: absolute;
  right: 500px;
  top: 25px;
`;

const SettingBox = styled.div`
  width: 100%;
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

export default CommunityPage;
