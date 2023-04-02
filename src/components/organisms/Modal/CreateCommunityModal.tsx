import styled from "styled-components";
import useInput from "@hooks/common/useInput";
import DefaultInput from "@components/atoms/Input/DefaultInput";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "@store/useUserStore";
import { useState } from "react";
import CreateCommunityText from "@components/molecules/Text/CreateCommunityText";
import BackgroundModal from "../BackgroundModal";
import ImageUploadButton from "@components/molecules/Button/ImageUploadButton";
import DefaultButton from "@components/atoms/Button/DefaultButton";
import CancelIcon from "@components/atoms/Icons/CancelIcon";
import useModalStore from "@store/useModalStore";
import Text from "@components/atoms/Text/Text";
import useCreateCommunity from "@hooks/query/useCreateCommunity";

const CreateCommunityModal = () => {
  const navigate = useNavigate();
  let formData = new FormData();

  const { setShowModal } = useModalStore();

  const [img, setImg] = useState<Blob | undefined>();
  const [name, changeName] = useInput();

  const { mutate: createCommunity } = useCreateCommunity(userInfo.id);

  const MakeCommunity = () => {
    if (!img) return 0;

    formData.append("communityName", name);
    formData.append("file", img);
    createCommunity({ formData });
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <BackgroundModal width={440} p={0}>
      <>
        <CreateCommunityHeader>
          <CancelIconWrapper onClick={closeModal}>
            <CancelIcon />
          </CancelIconWrapper>
          <CreateCommunityText />
        </CreateCommunityHeader>
        <CreateCommunityBody>
          <ImageUploadButton setImg={setImg} />
          <Text text="서버 이름" fontSize="xs" color="white" mb={8} />
          <DefaultInput value={name} onChange={changeName} type="text" />
        </CreateCommunityBody>
        <CreateCommunityFooter>
          <DefaultButton
            width={96}
            height={38}
            text="취소"
            backgroundColor="transparernt"
            hoverBackgroundColor="transparent"
            onClick={closeModal}
          />
          <DefaultButton
            width={96}
            height={38}
            text="만들기"
            onClick={MakeCommunity}
          />
        </CreateCommunityFooter>
      </>
    </BackgroundModal>
  );
};

const CreateCommunityHeader = styled.div`
  padding: 1.5rem 1.5rem 0;
`;

const CancelIconWrapper = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.color.icon};

  display: flex;
  justify-content: end;

  cursor: pointer;
`;

const CreateCommunityBody = styled.div`
  margin: 1rem 0;
  padding: 0 0.5rem 0 1rem;
`;

const CreateCommunityFooter = styled.div`
  padding: 16px;
  background-color: ${({ theme }) => theme.backgroundColor["grey-7"]};

  display: flex;
  justify-content: space-between;
`;

export default CreateCommunityModal;
