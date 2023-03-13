import useModalStore from "@store/useModalStore";
import { useEffect } from "react";
import styled from "styled-components";
import InviteFriendModal from "../organisms/Modal/InviteFriendModal";
import CommunityList from "../organisms/CommunityList";
import Tab2Footer from "../organisms/Tab2Footer";
import Tab2CommunityHeader from "@components/organisms/Tab2CommunityHeader";
import Tab2CommunityBody from "@components/organisms/Tab2CommunityBody";
import Tab3CommunityHeader from "@components/organisms/Tab3CommunityHeader";
import Tab3CommunityBody from "@components/organisms/Tab3CommunityBody";
import UserSettingModal from "@components/organisms/Modal/UserSettingModal";
import { CreateCommunity } from "@components/molecules/Text/CreateCommunityText.stories";
import CommunitySettingModal from "@components/organisms/Modal/CommunitySettingModal";
import TabDivider from "@components/atoms/Div/TabDivider";
import { useNavigate, useParams } from "react-router-dom";
import useChannelStore from "@store/useChannelStore";

const modalTable = {
  inviteFriend: <InviteFriendModal />,
  userSetting: <UserSettingModal />,
  communitySetting: <CommunitySettingModal />,
  createCommunity: <CreateCommunity />,
};

const CommunityPage = () => {
  const navigate = useNavigate();
  const { communityId, channelId: routerChannelId } = useParams();

  const { channelIdList, setChannelIdList } = useChannelStore();
  const { setShowModal, showModal, modalType } = useModalStore();

  const handleRoute = () => {
    if (!communityId) {
      navigate("/@me");
      return null;
    }

    if (routerChannelId) {
      setChannelIdList({ ...channelIdList, [communityId]: routerChannelId });
    } else {
      const storeChannelId = channelIdList[communityId];

      if (storeChannelId) {
        navigate(`/${communityId}/${storeChannelId}`);
        return null;
      } else {
        //!TODO 추후에 처리해주어야 함 (Default channelId)
      }
    }
  };

  useEffect(() => {
    setShowModal(false);
    handleRoute();
  }, []);

  const component = modalType ? modalTable[modalType] : <></>;

  return (
    <CommunityPageContainer>
      <CommunityList />
      <Tab2Container>
        <Tab2CommunityHeader />
        <TabDivider />
        <Tab2CommunityBody />
        <Tab2Footer />
      </Tab2Container>
      <Tab3Container>
        <Tab3CommunityHeader />
        <TabDivider />
        <Tab3CommunityBody />
      </Tab3Container>
      {showModal && component}
    </CommunityPageContainer>
  );
};

const CommunityPageContainer = styled.div`
  width: 100vw;
  display: flex;
  position: relative;
  height: 100vh;
`;

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
