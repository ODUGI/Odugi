import PageContainer from "@components/atoms/Div/PageContainer";
import HeaderHelmet from "@components/atoms/Helmet";
import CreateCategroyModal from "@components/molecules/Modal/CreateCategoryModal";
import CreateChannelModal from "@components/molecules/Modal/CreateChannelModal";
import DeleteCategoryModal from "@components/molecules/Modal/DeleteCategoryModal";
import DeleteChannelModal from "@components/molecules/Modal/DeleteChannelModal";
import DeleteCommunityModal from "@components/molecules/Modal/DeleteCommunityModal";
import PatchCategoryModal from "@components/molecules/Modal/PatchCategoryModal";
import PatchChannelModal from "@components/molecules/Modal/PatchChannelModal";
import PatchCommunityModal from "@components/molecules/Modal/PatchCommunityModal";
import CommunitySettingModal from "@components/organisms/Modal/CommunitySettingModal";
import CreateCommunityModal from "@components/organisms/Modal/CreateCommunityModal";
import InviteFriendModal from "@components/organisms/Modal/InviteFriendModal";
import UserSettingModal from "@components/organisms/Modal/UserSettingModal";
import CommonPage from "@components/templates/CommonPage";
import useModalStore from "@store/useModalStore";
import { useEffect } from "react";
import { useMatch, useNavigate, useParams } from "react-router-dom";

const modalTable = {
  inviteFriend: <InviteFriendModal />,
  userSetting: <UserSettingModal />,
  communitySetting: <CommunitySettingModal />,
  createCommunity: <CreateCommunityModal />,
  createCategory: <CreateCategroyModal />,
  createChannel: <CreateChannelModal />,
  patchCommunity: <PatchCommunityModal />,
  patchCategory: <PatchCategoryModal />,
  patchChannel: <PatchChannelModal />,
  deleteCommunity: <DeleteCommunityModal />,
  deleteCategory: <DeleteCategoryModal />,
  deleteChannel: <DeleteChannelModal />,
};

const Common = () => {
  const navigate = useNavigate();
  const isBaseUrl = useMatch("/");
  const { communityId, channelId } = useParams();
  const { setShowModal, showModal, modalType } = useModalStore();

  const isMainPage = !communityId;
  const channelName = "자바스크립트 스터디";

  useEffect(() => {
    setShowModal(false);
  }, []);

  if (isBaseUrl) {
    navigate("/@me");
    return null;
  }

  const component = modalType ? modalTable[modalType] : <></>;

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
