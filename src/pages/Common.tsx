import PageContainer from "@components/atoms/Div/PageContainer";
import HeaderHelmet from "@components/atoms/Helmet";
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
