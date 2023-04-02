import DefaultInput from "@components/atoms/Input/DefaultInput";
import styled from "styled-components";
import Text from "@components/atoms/Text/Text";
import useInput from "@hooks/common/useInput";
import DefaultButton from "@components/atoms/Button/DefaultButton";
import useModifyPassword from "@hooks/query/useModifyPassword";

const UserPasswordChangeModal = ({ setOpenModal2 }: any) => {
  const [passwordConfirm, changePasswordConfirm] = useInput();
  const [password, changePassword] = useInput();
  const [originalPassword, changeOriginalPassword] = useInput();

  const { mutate: modifyPassword } = useModifyPassword();
  const OnChangePw = () => {
    modifyPassword({
      password,
      originalPassword,
    });
    setOpenModal2(false);
  };
  return (
    <>
      <TopWrapper>
        <TextWrapper>
          <Text fontSize="xxl" fontWeight="bold" mb={12} color="white" center>
            비밀번호를 바꿔주세요.
          </Text>
          <Text fontSize="base" color="setting-tab" mb={20} center>
            현재 비밀번호와 새 비밀번호를 입력하세요.
          </Text>
        </TextWrapper>

        <Wrapper>
          <Text color="setting-tab" fontSize="xs" mb={10} fontWeight="bold">
            현재 비밀번호
          </Text>
          <DefaultInput
            type="text"
            color="white"
            backgroundColor="voice-modal"
            fontSize="base"
            // value={originalPassword}
            // onChange={changeOriginalPassword}
          />
        </Wrapper>
        <Wrapper>
          <Text color="setting-tab" fontSize="xs" mb={10} fontWeight="bold">
            새 비밀번호
          </Text>
          <DefaultInput
            type="text"
            color="white"
            backgroundColor="voice-modal"
            fontSize="base"
            // value={password}
            // onChange={changePassword}
          />
        </Wrapper>
        <Wrapper>
          <Text color="setting-tab" fontSize="xs" mb={10} fontWeight="bold">
            새 비밀번호 확인
          </Text>
          <DefaultInput
            type="text"
            color="white"
            backgroundColor="voice-modal"
            fontSize="base"
            // value={passwordConfirm}
            // onChange={changePasswordConfirm}
          />
        </Wrapper>
      </TopWrapper>
      <Bottom>
        <DefaultButton text="완료" onClick={() => OnChangePw()} />
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

export default UserPasswordChangeModal;
