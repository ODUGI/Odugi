import Text from "../atoms/Text/Text";
import SettingWrapper from "./SettingWrapper";
import styled from "styled-components";
import UserSettingProfileBody from "./UserSettingProfileBody";
import UserSettingImageModal from "@components/molecules/Modal/UserSettingImageModal";
import useSettingModalStore from "@store/useSettingModalStore";

const UserSettingProfile = () => {
  const { showSettingModal } = useSettingModalStore();

  return (
    <SettingWrapper>
      <ProfileWrapper>
        <Text fontSize="xl" fontWeight="bold" color="white" mb={24}>
          프로필
        </Text>
        <UserSettingProfileBody />
      </ProfileWrapper>
      {showSettingModal && <UserSettingImageModal />}
    </SettingWrapper>
  );
};

const ProfileWrapper = styled.div`
  width: 100%;
`;

export default UserSettingProfile;
