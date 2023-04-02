import styled from "styled-components";
import DefaultInput from "@components/atoms/Input/DefaultInput";
import { useParams } from "react-router-dom";
import { useRef, useState } from "react";
import BackgroundModal from "@components/organisms/BackgroundModal";
import DefaultButton from "@components/atoms/Button/DefaultButton";
import CancelIcon from "@components/atoms/Icons/CancelIcon";
import useModalStore from "@store/useModalStore";
import Text from "@components/atoms/Text/Text";
import useCreateChannel from "@hooks/query/useCreateChanel";

const CreateChannelModal = () => {
  const { setShowModal } = useModalStore();
  const { communityId } = useParams();

  const [type, setType] = useState(0);
  const nameRef = useRef<HTMLInputElement>(null);

  const { mutate: createChannel } = useCreateChannel();

  const MakeChannel = () => {
    if (nameRef.current) {
      const name = nameRef.current.value;
      createChannel({ name, categoryId: 10, communityId, type, role: 0 });
      closeModal();
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleRadio = (event: React.ChangeEvent<HTMLInputElement>) => {
    setType(event.target.value === "CHAT" ? 0 : 1);
  };

  return (
    <BackgroundModal width={440} p={0}>
      <CreateCommunityHeader>
        <CancelIconWrapper onClick={closeModal}>
          <CancelIcon />
        </CancelIconWrapper>
        <Text fontSize="xxl" color="white">
          채널 만들기
        </Text>
        <Text fontSize="sm" color="white">
          :채팅에 속해있음
        </Text>
      </CreateCommunityHeader>
      <CreateCommunityBody>
        <Text fontSize="xs" color="white" mb={8}>
          채널 이름
        </Text>
        <fieldset>
          <label>
            <input
              type="radio"
              name="contact"
              value="CHAT"
              onChange={handleRadio}
            />
            <span>채팅채널</span>
          </label>
          <label>
            <input
              type="radio"
              name="contact"
              value="VOICE"
              onChange={handleRadio}
            />
            <span>음성채널</span>
          </label>
        </fieldset>
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
          onClick={MakeChannel}
        />
      </CreateCommunityFooter>
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
