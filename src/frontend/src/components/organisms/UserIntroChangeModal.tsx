import DefaultButton from "@components/atoms/Button/DefaultButton";
import DefaultInput from "@components/atoms/Input/DefaultInput";
import Text from "@components/atoms/Text/Text";
import useInput from "@hooks/common/useInput";
import useModifyIntro from "@hooks/query/useModifyIntro";
import { useUserStore } from "@store/useUserStore";
import styled from "styled-components";

const UserIntroChangeModal = ({ setOpenModal3 }: any) => {
  const { userInfo, setUserInfo } = useUserStore();
  const [introduction, changeIntroduction] = useInput();
  const { mutate: modifyIntro } = useModifyIntro();
  const updataIntro = () => {
    modifyIntro({
      introduction,
    });
    setUserInfo({ ...userInfo, introduction });
    setOpenModal3(false);
  };
  return (
    <>
      <TopWrapper>
        <TextWrapper>
          <Text
            text="자기소개 작성하기"
            fontSize="xxl"
            fontWeight="bold"
            mb={12}
            color="white"
          />
          <Text
            text="한줄로 자기소개를 작성해주세요!"
            fontSize="base"
            color="setting-tab"
            mb={20}
          />
        </TextWrapper>
        <Wrapper>
          {/* <Text
                text="Self-Introduction"
                color="setting-tab"
                fontSize="xs"
                mb={10}
                fontWeight="bold"
              /> */}
          <DefaultInput
            value={introduction}
            onChange={changeIntroduction}
            backgroundColor="voice-modal"
            fontSize="base"
            color="white"
            type="text"
          />
        </Wrapper>
      </TopWrapper>
      <Bottom>
        <DefaultButton text="완료" onClick={() => updataIntro()} />
      </Bottom>
    </>
  );
};

export default UserIntroChangeModal;

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
