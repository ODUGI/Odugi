import DefaultInput from "@components/atoms/Input/DefaultInput";
import styled from "styled-components";
import Text from "@components/atoms/Text/Text";
import { useUserStore } from "@store/useUserStore";
import useInput from "@hooks/common/useInput";
import useModifyName from "@hooks/query/useModifyName";
import DefaultButton from "@components/atoms/Button/DefaultButton";

const UserNameChangeModal = ({ setOpenModal }: any) => {
  const { userInfo, setUserInfo } = useUserStore();
  const [name, changeName] = useInput();
  const [password, changePassword] = useInput();
  const { mutate: modifyName } = useModifyName();
  const updataUserName = () => {
    modifyName({
      name,
      password,
    });
    setUserInfo({ ...userInfo, name });
    setOpenModal(false);
  };
  return (
    <>
      <TopWrapper>
        <TextWrapper>
          <Text
            text="사용자명 변경하기"
            fontSize="xxl"
            fontWeight="bold"
            mb={12}
            color="white"
          />
          <Text
            text="새 사용자명과 기존 비밀번호를 입력하세요."
            fontSize="base"
            color="setting-tab"
            mb={20}
          />
        </TextWrapper>
        <Wrapper>
          <Text
            text="사용자 명"
            color="setting-tab"
            fontSize="xs"
            mb={10}
            fontWeight="bold"
          />
          <DefaultInput
            value={name}
            onChange={changeName}
            backgroundColor="voice-modal"
            fontSize="base"
            color="white"
            type="text"
          />
        </Wrapper>

        <Wrapper>
          <Text
            text="현재 비밀번호"
            color="setting-tab"
            fontSize="xs"
            mb={10}
            fontWeight="bold"
          />
          <DefaultInput
            value={password}
            onChange={changePassword}
            backgroundColor="voice-modal"
            fontSize="base"
            color="white"
            type="text"
          />
        </Wrapper>
      </TopWrapper>
      <Bottom>
        <DefaultButton text="완료" onClick={() => updataUserName()} />
      </Bottom>
    </>
  );
};

export default UserNameChangeModal;

const Wrapper = styled.div`
  width: 100%;
  padding: 0.8rem 1rem 0 1rem;
`;

const TextWrapper = styled.div`
  text-align: center;
  p {
    text-align: center;
  }
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
