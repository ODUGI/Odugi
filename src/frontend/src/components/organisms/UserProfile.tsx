import Text from "../atoms/Text/Text";
import { ProfileTab } from "./ProfileTab.stories";
import Modal from "@components/organisms/Modal";
import SettingWrapper from "./SettingWrapper";
import { useCallback, useState } from "react";
import styled from "styled-components";
import DefaultButton from "@components/atoms/Button/DefaultButton";
import CommunityLogoUpload from "@components/molecules/Button/CommunityLogoUpload";

const ImageChange = () => {
  return (
    <>
      <TopWrapper>
        <CommunityLogoUpload />
      </TopWrapper>
      <Bottom>
        <DefaultButton text="완료" onClick={() => null} />
      </Bottom>
    </>
  );
};

const UserProfile = () => {
  const [isOpenModal, setOpenModal] = useState<boolean>(false);

  const onClickToggleModal = useCallback(() => {
    setOpenModal(!isOpenModal);
  }, [isOpenModal]);

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
        <ProfileTab />
      </ProfileWrapper>
      {isOpenModal && (
        <Modal onClickToggleModal={onClickToggleModal}>
          <ImageChange />
        </Modal>
      )}
    </SettingWrapper>
  );
};

export default UserProfile;
const ProfileWrapper = styled.div`
  width: 100%;
`;

const TopWrapper = styled.div`
  padding: 1rem;
  width: 100%;
  text-align: center;
`;

const Bottom = styled.div`
  width: 100%;
  height: 4rem;
  padding: 1rem;
  background-color: ${({ theme }) => theme.backgroundColor["voice-nobody"]};
`;
