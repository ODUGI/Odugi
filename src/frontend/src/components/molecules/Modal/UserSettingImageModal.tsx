import FieldButton from "@components/atoms/Button/fieldButton";
import BackgroundModal from "@components/organisms/BackgroundModal";
import useModifyUserImage from "@hooks/query/useModifyUserImage";
import useSettingModalStore from "@store/useSettingModalStore";
import { useUserStore } from "@store/useUserStore";
import { useState } from "react";
import styled from "styled-components";
import CommunityLogoUpload from "../Button/CommunityLogoUpload";

const UserSettingImageModal = () => {
  const formData = new FormData();
  const [img, setImg] = useState<Blob | undefined>();
  const { userInfo, setUserInfo } = useUserStore();
  const { showSettingModal, setShowSettingModal } = useSettingModalStore();

  const updateImage = () => {
    if (!img) return;
    formData.append("file", img);
    modifyImage({ formData });
  };

  const { mutate: modifyImage } = useModifyUserImage({
    onSuccess: (data: any) => {
      setUserInfo({ ...userInfo, profileImagePath: data.data.data });
    },
  });

  const closeModal = () => {
    setShowSettingModal(false);
  };

  return (
    <BackgroundModal
      width={440}
      p={0}
      onClick={closeModal}
      children={
        <Wrapper>
          <CommunityLogoUpload setImg={setImg} />
          <AvatarWrapper>
            <FieldButton text="변경하기" onClick={updateImage} />
          </AvatarWrapper>
        </Wrapper>
      }
    />
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding: 1rem;
  background-color: ${({ theme }) => theme.backgroundColor["tab3"]};
`;

const AvatarWrapper = styled.div`
  height: 32px;
  width: 8.5;
  width: 10rem;
`;

export default UserSettingImageModal;
