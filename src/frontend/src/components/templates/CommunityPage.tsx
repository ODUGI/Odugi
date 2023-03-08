import CommunitySetting from "@pages/CommunityPage";
import UserSetting from "@pages/UserSetting";
import useModalStore from "@store/useModalStore";
import { useEffect } from "react";
import styled from "styled-components";
import InviteFriendModal from "../organisms/InviteFriendModal";
import CommunityList from "../organisms/CommunityList";
import Tab2Footer from "../organisms/Tab2Footer";
import Tab2CommunityHeader from "@components/organisms/Tab2CommunityHeader";
import Tab2CommunityBody from "@components/organisms/Tab2CommunityBody";
import Tab3CommunityHeader from "@components/organisms/Tab3CommunityHeader";
import Tab3CommunityBody from "@components/organisms/Tab3CommunityBody";
import CommunityModal from "@components/molecules/Div/CommunityModal";

const CommunityPage = () => {
  const { setShowModal, showModal, modalType } = useModalStore();

  useEffect(() => {
    setShowModal(false);
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
      {showModal && modalType === "inviteFriend" && <InviteFriendModal />}
      {showModal && modalType === "userSetting" && <UserSetting />}
      {showModal && modalType === "communitySetting" && <CommunitySetting />}
      {showModal && modalType === "community" && <CommunityModal />}
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
