import styled from "styled-components";
import DefaultInput from "@components/atoms/Input/DefaultInput";
import { useParams } from "react-router-dom";
import { useCallback, useRef, useState } from "react";
import BackgroundModal from "@components/organisms/BackgroundModal";
import DefaultButton from "@components/atoms/Button/DefaultButton";
import CancelIcon from "@components/atoms/Icons/CancelIcon";
import useModalStore from "@store/useModalStore";
import Text from "@components/atoms/Text/Text";
import useCreateCategory from "@hooks/query/useCreateCatergory";

const CreateCategroyModal = () => {
  const { setShowModal } = useModalStore();

  const inputRef = useRef<HTMLInputElement>(null);
  const [role, setRole] = useState<number>(0);
  //userInfo에 role이 없었던가?
  const { communityId } = useParams();
  const { mutate: createCategory } = useCreateCategory();

  const MakeCategory = useCallback(() => {
    if (inputRef.current) {
      const name = inputRef.current.value;
      createCategory({ name, communityId, role });
      closeModal();
    }
  }, [inputRef]);

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

          <Text fontSize="xxl" color="white">
            카테고리 만들기
          </Text>
        </CreateCommunityHeader>
        <CreateCommunityBody>
          <Text fontSize="xs" color="white" mb={8}>
            카테고리 이름
          </Text>
          <DefaultInput ref={inputRef} type="text" />
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
            onClick={MakeCategory}
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

export default CreateCategroyModal;
