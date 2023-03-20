import DefaultButton from "@components/atoms/Button/DefaultButton";
import DefaultInput from "@components/atoms/Input/DefaultInput";
import Text from "@components/atoms/Text/Text";
import BackgroundModal from "@components/organisms/BackgroundModal";
import useInput from "@hooks/common/useInput";
import useModifyIntro from "@hooks/query/useModifyIntro";
import useSettingModalStore from "@store/useSettingModalStore";
import { useUserStore } from "@store/useUserStore";
import { Bottom, InputWrapper, TextWrapper } from "./UserSettingModal";

const UserSettingIntroModal = () => {
  const { setShowSettingModal } = useSettingModalStore();

  const { userInfo, setUserInfo } = useUserStore();
  const [introduction, changeIntroduction] = useInput();
  const { mutate: modifyIntro } = useModifyIntro();

  const updataIntro = () => {
    modifyIntro({ introduction });
    setUserInfo({ ...userInfo, introduction });
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
                자기소개 작성하기
              </Text>
              <Text fontSize="base" color="setting-tab" center>
                한줄로 자기소개를 작성해주세요!
              </Text>
            </TextWrapper>
            <InputWrapper>
              <DefaultInput
                // value={introduction}
                // onChange={changeIntroduction}
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
              onClick={updataIntro}
              height={38}
              width={96}
            />
          </Bottom>
        </>
      }
    />
  );
};

export default UserSettingIntroModal;
