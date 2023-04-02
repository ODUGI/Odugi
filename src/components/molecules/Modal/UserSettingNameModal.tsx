import DefaultButton from "@components/atoms/Button/DefaultButton";
import DefaultInput from "@components/atoms/Input/DefaultInput";
import Text from "@components/atoms/Text/Text";
import BackgroundModal from "@components/organisms/BackgroundModal";
import useInput from "@hooks/common/useInput";
import useModifyName from "@hooks/query/useModifyName";
import useSettingModalStore from "@store/useSettingModalStore";
import { useUserStore } from "@store/useUserStore";
import { Bottom, InputWrapper, TextWrapper } from "./UserSettingModal";

const UserSettingNameModal = () => {
  const { userInfo, setUserInfo } = useUserStore();
  const { setShowSettingModal } = useSettingModalStore();

  const [name, changeName] = useInput(userInfo.name);
  const [password, changePassword] = useInput();
  const { mutate: modifyName } = useModifyName();
  const updateUserName = () => {
    modifyName({ name, password });
    setUserInfo({ ...userInfo, name });
    setShowSettingModal(false);
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
                사용자명 변경하기
              </Text>
              <Text fontSize="base" color="setting-tab" center>
                새 사용자명과 기존 비밀번호를 입력하세요.
              </Text>
            </TextWrapper>

            <InputWrapper>
              <Text color="setting-tab" fontSize="xs" mb={10} fontWeight="bold">
                사용자명
              </Text>
              <DefaultInput
                // value={name}
                // onChange={changeName}
                backgroundColor="voice-modal"
                fontSize="base"
                color="white"
                type="text"
              />
            </InputWrapper>

            <InputWrapper>
              <Text color="setting-tab" fontSize="xs" mb={10} fontWeight="bold">
                현재 비밀번호
              </Text>
              <DefaultInput
                // value={password}
                // onChange={changePassword}
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
              onClick={updateUserName}
              height={38}
              width={96}
            />
          </Bottom>
        </>
      }
    />
  );
};

export default UserSettingNameModal;
