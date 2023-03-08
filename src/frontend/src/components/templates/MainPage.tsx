import styled from "styled-components";
import MainBody from "../organisms/MainBody";
import CommunityList from "../organisms/CommunityList";
import Tab2MainBody from "../organisms/Tab2MainBody";
import Tab2Footer from "../organisms/Tab2Footer";
import Tab2MainHeader from "../organisms/Tab2MainHeader";
import Tab3MainHeader from "../organisms/Tab3MainHeader";
import { useEffect } from "react";
import useModalStore from "@store/useModalStore";
import InviteFriendModal from "@components/organisms/InviteFriendModal";
import UserSetting from "@pages/UserSetting";
import CommunitySettingBar from "@components/organisms/CommunitySettingBar";
import CommunityModal from "@components/molecules/Div/CommunityModal";

const MainPage = () => {
  const { setShowModal, showModal, modalType } = useModalStore();
  console.log(showModal, modalType);

  useEffect(() => {
    setShowModal(false);
  }, []);

  return (
    <>
      <CommunityList />
      <Tab2Container>
        <Tab2MainHeader />
        <Tab2MainBody />
        <Tab2Footer />
      </Tab2Container>
      <Tab3Container>
        <Tab3MainHeader />
        <MainBody />
      </Tab3Container>
      {showModal && modalType === "inviteFriend" && <InviteFriendModal />}
      {showModal && modalType === "userSetting" && <UserSetting />}
      {showModal && modalType === "communitySetting" && <CommunitySettingBar />}
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

export default MainPage;
