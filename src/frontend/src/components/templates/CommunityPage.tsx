import CommunitySetting from "@pages/CommunitySetting";
import UserSetting from "@pages/UserSetting";
import useModalStore from "@store/useModalStore";
import { useEffect } from "react";
import styled from "styled-components";
import InviteFriendModal from "../organisms/InviteFriendModal";
import CommunityList from "../organisms/CommunityList";
import Tab2Footer from "../organisms/Tab2Footer";
import Tab2CommunityHeader from "@components/organisms/Tab2ServerHeader";
import Tab2CommunityBody from "@components/organisms/Tab2ServerBody";
import Tab3CommunityHeader from "@components/organisms/Tab3ServerHeader";
import Tab3CommunityBody from "@components/organisms/Tab3ServerBody";

const CommunityPage = () => {
  const {
    inviteFriendModal,
    userSettingModal,
    communitySettingModal,
    setInviteFriendModal,
    setUserSettingModal,
    setCommunitySettingModal,
  } = useModalStore();

  useEffect(() => {
    setInviteFriendModal(false);
    setUserSettingModal(false);
    setCommunitySettingModal(false);
  }, []);

  return (
    <>
      <CommunityList />
      <Tab2Container>
        <Tab2CommunityHeader />
        <Tab2CommunityBody />
        <Tab2Footer />
      </Tab2Container>
      <Tab3Container>
        <Tab3CommunityHeader />
        <Tab3CommunityBody />
      </Tab3Container>
      {inviteFriendModal && <InviteFriendModal />}
      {userSettingModal && <UserSetting />}
      {communitySettingModal && <CommunitySetting />}
    </>
  );
};

const Tab2Container = styled.div`
  background-color: ${({ theme }) => theme.backgroundColor.tab2};
  width: 15rem;
  display: flex;
  flex-direction: column;
`;

const Tab3Container = styled.div`
  background-color: ${({ theme }) => theme.backgroundColor.tab3};
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export default CommunityPage;
