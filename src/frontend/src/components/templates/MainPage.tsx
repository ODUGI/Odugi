import styled from "styled-components";
import Tab3MainBody from "../organisms/Tab3MainBody";
import CommunityList from "../organisms/CommunityList";
import Tab2MainBody from "../organisms/Tab2MainBody";
import Tab2Footer from "../organisms/Tab2Footer";
import Tab2MainHeader from "../organisms/Tab2MainHeader";
import Tab3MainHeader from "../organisms/Tab3MainHeader";
import { useEffect } from "react";
import useModalStore from "@store/useModalStore";
import InviteFriendModal from "@components/organisms/InviteFriendModal";
import CommunitySettingBar from "@components/organisms/CommunitySettingBar";
import UserSettingModal from "@components/organisms/Modal/UserSettingModal";
import CreateCommunityModal from "@components/organisms/Modal/CreateCommunityModal";
import TabDivider from "@components/atoms/Div/TabDivider";

const MainPage = () => {
  const { setShowModal, showModal, modalType } = useModalStore();

  useEffect(() => {
    setShowModal(false);
  }, []);

  const modalTable = {
    inviteFriend: <InviteFriendModal />,
    userSetting: <UserSettingModal />,
    communitySetting: <CommunitySettingBar />,
    createCommunity: <CreateCommunityModal />,
  };

  const Component = modalType ? modalTable[modalType] : <></>;

  return (
    <>
      <CommunityList />
      <Tab2Container>
        <Tab2MainHeader />
        <TabDivider />
        <Tab2MainBody />
        <Tab2Footer />
      </Tab2Container>
      <Tab3Container>
        <Tab3MainHeader />
        <TabDivider />
        <Tab3MainBody />
      </Tab3Container>
      {showModal && Component}
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

export default MainPage;
