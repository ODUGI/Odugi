import PageContainer from "@components/atoms/Div/PageContainer";
import HeaderHelmet from "@components/atoms/Helmet";
import CommonPage from "@components/templates/CommonPage";
import useModalStore from "@store/useModalStore";
import { lazy, useEffect } from "react";
import { useParams } from "react-router-dom";

const InviteFriendModal = lazy(
  () => import("@components/organisms/Modal/InviteFriendModal")
);
const UserSettingModal = lazy(
  () => import("@components/organisms/Modal/UserSettingModal")
);
const CreateCommunityModal = lazy(
  () => import("@components/organisms/Modal/CreateCommunityModal")
);
const CreateChannelModal = lazy(
  () => import("@components/molecules/Modal/CreateChannelModal")
);
const CreateCategroyModal = lazy(
  () => import("@components/molecules/Modal/CreateCategoryModal")
);
const CommunitySettingModal = lazy(
  () => import("@components/organisms/Modal/CommunitySettingModal")
);

const modalTable = {
  inviteFriend: <InviteFriendModal />,
  userSetting: <UserSettingModal />,
  communitySetting: <CommunitySettingModal />,
  createCommunity: <CreateCommunityModal />,
  createCategory: <CreateCategroyModal />,
  createChannel: <CreateChannelModal />,
};

const Common = () => {
  //!TODO: channelId는 추후에 channelName을 받아오는 용도로 사용
  const { communityId, channelId } = useParams();
  const { setShowModal, showModal, modalType } = useModalStore();

  const isMainPage = !communityId || communityId === "@me";
  const channelName = "자바스크립트 스터디";

  useEffect(() => {
    setShowModal(false);
  }, []);

  const component = modalType ? modalTable[modalType] : null;

  return (
    <>
      <HeaderHelmet title={`${isMainPage ? "친구" : channelName} | Discord`} />
      <PageContainer>
        <CommonPage isMainPage={isMainPage} />
        {showModal && component}
      </PageContainer>
    </>
  );
};

export default Common;
