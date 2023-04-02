import styled from "styled-components";
import DefaultInput from "@components/atoms/Input/DefaultInput";
import { useCallback, useRef, useState } from "react";
import CreateCommunityText from "@components/molecules/Text/CreateCommunityText";
import BackgroundModal from "../BackgroundModal";
import ImageUploadButton from "@components/molecules/Button/ImageUploadButton";
import DefaultButton from "@components/atoms/Button/DefaultButton";
import CancelIcon from "@components/atoms/Icons/CancelIcon";
import useModalStore from "@store/useModalStore";
import Text from "@components/atoms/Text/Text";
import useCreateCommunity from "@hooks/query/useCreateCommunity";

const CreateCommunityModal = () => {
  let formData = new FormData();
  const nameRef = useRef<HTMLInputElement>(null);
  const [img, setImg] = useState<Blob>();

  const { setShowModal } = useModalStore();
  const { mutate: createCommunity } = useCreateCommunity();

  const MakeCommunity = useCallback(() => {
    if (!img || !nameRef?.current) return;

    formData.append("communityName", nameRef.current.value);
    formData.append("file", img);
    createCommunity({ formData });
  }, [img, nameRef]);

  const closeModal = useCallback(() => {
    setShowModal(false);
  }, []);

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
          <Text fontSize="xs" color="white" mb={8}>
            서버 이름
          </Text>
          <DefaultInput ref={nameRef} type="text" />
        </CreateCommunityBody>
        <CreateCommunityFooter>
          <DefaultButton
            width={96}
            height={38}
            text="취소"
            backgroundColor="transparent"
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
