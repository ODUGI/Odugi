import Text from "../atoms/Text/Text";
import SettingWrapper from "./SettingWrapper";
import styled from "styled-components";
import UserSettingProfile from "./UserSettingProfile";
import UserSettingImageModal from "@components/molecules/Modal/UserSettingImageModal";
import useSettingModalStore from "@store/useSettingModalStore";

const UserProfile = () => {
  const { showSettingModal } = useSettingModalStore();

  return (
    <SettingWrapper>
      <ProfileWrapper>
        <Text
          text="프로필"
          fontSize="xl"
          fontWeight="bold"
          color="white"
          mb={24}
        />
        <UserSettingProfile />
      </ProfileWrapper>
      {showSettingModal && <UserSettingImageModal />}
    </SettingWrapper>
  );
};

const ProfileWrapper = styled.div`
  width: 100%;
`;

export default UserProfile;
