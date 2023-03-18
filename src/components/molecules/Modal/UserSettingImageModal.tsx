import DefaultButton from "@components/atoms/Button/DefaultButton";
import BackgroundModal from "@components/organisms/BackgroundModal";
import useModifyUserImage from "@hooks/query/useModifyUserImage";
import useSettingModalStore from "@store/useSettingModalStore";
import { useUserStore } from "@store/useUserStore";
import { useState } from "react";
import styled from "styled-components";
import ImageUploadButton from "../Button/ImageUploadButton";

const UserSettingImageModal = () => {
  const formData = new FormData();
  const [img, setImg] = useState<Blob | undefined>();
  const { userInfo, setUserInfo } = useUserStore();
  const { setShowSettingModal } = useSettingModalStore();

  const { mutate: modifyImage } = useModifyUserImage({
    onSuccess: (data: any) => {
      setUserInfo({ ...userInfo, profileImagePath: data.data.data });

      closeModal();
    },
  });

  const updateImage = () => {
    if (!img) return;

    formData.append("file", img);
    modifyImage({ formData });
  };

  const closeModal = () => {
    setShowSettingModal(false);
  };

  return (
    <BackgroundModal
      width={440}
      p={0}
      onClick={closeModal}
      children={
        <ModalContainer>
          <BodyContainer>
            <ImageUploadButton setImg={setImg} />
          </BodyContainer>
          <BottomContainer>
            <DefaultButton
              text="취소"
              width={100}
              height={36}
              onClick={closeModal}
              backgroundColor="transparent"
              hoverBackgroundColor="transparent"
            />
            <DefaultButton
              text="변경하기"
              width={100}
              height={36}
              onClick={updateImage}
            />
          </BottomContainer>
        </ModalContainer>
      }
    />
  );
};

const ModalContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${({ theme }) => theme.backgroundColor["tab3"]};
  border-radius: 6px;
`;

const BodyContainer = styled.div`
  padding: 2rem;
`;

const BottomContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 4rem;
  padding: 1rem;
  align-items: center;
  background-color: ${({ theme }) => theme.backgroundColor["voice-nobody"]};
  border-bottom-left-radius: 0.375rem;
  border-bottom-right-radius: 0.375rem;
`;

export default UserSettingImageModal;
