import styled from "styled-components";
import useInput from "@hooks/common/useInput";
import DefaultInput from "@components/atoms/Input/DefaultInput";
import { useMutation } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { useUserStore } from "@store/useUserStore";
import { useState } from "react";
import communityApi from "@api/community";
import CreateCommunityText from "@components/molecules/Text/CreateCommunityText";
import BackgroundModal from "@components/organisms/BackgroundModal";
import ImageUploadButton from "@components/molecules/Button/ImageUploadButton";
import DefaultButton from "@components/atoms/Button/DefaultButton";
import CancelIcon from "@components/atoms/Icons/CancelIcon";
import useModalStore from "@store/useModalStore";
import Text from "@components/atoms/Text/Text";
import useCreateChannel from "@hooks/query/useCreateChanel";

const CreateChannelModal = () => {
  const navigate = useNavigate();

  let formData = new FormData();

  const { userInfo } = useUserStore();
  const { setShowModal } = useModalStore();
  const [name, changeName] = useInput();
  const { communityId } = useParams();
  const [type, setType] = useState(0);
  const [role, setRole] = useState(0);
  //userInfo에 role이 없었던가?
  const [categoryId, setCategoryId] = useState(10);
  // const { mutate: createChannel } = useMutation(communityApi.createChannel, {
  //   onSuccess: () => {
  //     navigate(-1);
  //   },
  // });
  const { mutate: createChannel } = useCreateChannel();
  const MakeChannel = () => {
    createChannel({ name, categoryId, communityId, type, role });
    closeModal();
  };

  const closeModal = () => {
    setShowModal(false);
  };
  const radioHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setType(event.target.value === "CHAT" ? 0 : 1);
  };

  return (
    <BackgroundModal width={440} p={0}>
      <>
        <CreateCommunityHeader>
          <CancelIconWrapper onClick={closeModal}>
            <CancelIcon />
          </CancelIconWrapper>
          <Text text="채널 만들기" fontSize="xxl" color="white" />
          <Text text=":채팅에 속해있음" fontSize="sm" color="white" />
        </CreateCommunityHeader>
        <CreateCommunityBody>
          <Text text="채널 이름" fontSize="xs" color="white" mb={8} />
          <fieldset>
            <label>
              <input
                type="radio"
                name="contact"
                value="CHAT"
                onChange={radioHandler}
              />
              <span>채팅채널</span>
            </label>
            <label>
              <input
                type="radio"
                name="contact"
                value="VOICE"
                onChange={radioHandler}
              />
              <span>음성채널</span>
            </label>
          </fieldset>
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
            onClick={MakeChannel}
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

export default CreateChannelModal;
