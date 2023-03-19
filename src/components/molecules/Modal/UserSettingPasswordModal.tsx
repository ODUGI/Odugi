import DefaultButton from "@components/atoms/Button/DefaultButton";
import DefaultInput from "@components/atoms/Input/DefaultInput";
import Text from "@components/atoms/Text/Text";
import BackgroundModal from "@components/organisms/BackgroundModal";
import useInput from "@hooks/common/useInput";
import useModifyPassword from "@hooks/query/useModifyPassword";
import useSettingModalStore from "@store/useSettingModalStore";
import { Bottom, InputWrapper, TextWrapper } from "./UserSettingModal";

const UserSettingPasswordModal = () => {
  const { setShowSettingModal } = useSettingModalStore();

  const [passwordConfirm, changePasswordConfirm] = useInput();
  const [password, changePassword] = useInput();
  const [originalPassword, changeOriginalPassword] = useInput();

  const { mutate: modifyPassword } = useModifyPassword();

  const OnChangePw = () => {
    modifyPassword({
      password,
      originalPassword,
    });
  };

  return (
    <BackgroundModal
      width={440}
      p={0}
      onClick={() => setShowSettingModal(false)}
      children={
        <>
          <div>
            <TextWrapper>
              <Text
                fontSize="xxl"
                fontWeight="bold"
                mb={12}
                color="white"
                center
              >
                비밀번호를 바꿔주세요
              </Text>
              <Text fontSize="base" color="setting-tab" center>
                현재 비밀번호와 새 비밀번호를 입력하세요.
              </Text>
            </TextWrapper>

            <InputWrapper>
              <Text color="setting-tab" fontSize="xs" mb={10} fontWeight="bold">
                현재 비밀번호
              </Text>
              <DefaultInput
                value={originalPassword}
                onChange={changeOriginalPassword}
                backgroundColor="voice-modal"
                fontSize="base"
                color="white"
                type="text"
              />
            </InputWrapper>
            <InputWrapper>
              <Text color="setting-tab" fontSize="xs" mb={10} fontWeight="bold">
                새 비밀번호
              </Text>
              <DefaultInput
                value={password}
                onChange={changePassword}
                backgroundColor="voice-modal"
                fontSize="base"
                color="white"
                type="text"
              />
            </InputWrapper>
            <InputWrapper>
              <Text color="setting-tab" fontSize="xs" mb={10} fontWeight="bold">
                새 비밀번호 확인
              </Text>
              <DefaultInput
                value={passwordConfirm}
                onChange={changePasswordConfirm}
                backgroundColor="voice-modal"
                fontSize="base"
                color="white"
                type="text"
              />
            </InputWrapper>
          </div>
          <Bottom>
            <DefaultButton
              text="취소"
              onClick={() => setShowSettingModal(false)}
              height={38}
              width={96}
              backgroundColor="transparent"
              hoverBackgroundColor="transparent"
            />
            <DefaultButton
              text="완료"
              onClick={OnChangePw}
              height={38}
              width={96}
            />
          </Bottom>
        </>
      }
    />
  );
};

export default UserSettingPasswordModal;
