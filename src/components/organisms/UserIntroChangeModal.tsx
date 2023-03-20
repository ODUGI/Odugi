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
          <Text fontSize="xxl" fontWeight="bold" mb={12} color="white" center>
            자기소개 작성하기
          </Text>
          <Text fontSize="base" color="setting-tab" mb={20} center>
            한줄로 자기소개를 작성해주세요!
          </Text>
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
            type="text"
            fontSize="base"
            color="white"
            backgroundColor="voice-modal"
            // value={introduction}
            // onChange={changeIntroduction}
          />
        </Wrapper>
      </TopWrapper>
      <Bottom>
        <DefaultButton text="완료" onClick={updataIntro} />
      </Bottom>
    </>
  );
};

const Wrapper = styled.div`
  width: 100%;
  padding: 0.8rem 1rem 0 1rem;
`;

const TextWrapper = styled.div``;

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

export default UserIntroChangeModal;
