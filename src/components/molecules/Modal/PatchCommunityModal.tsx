import DefaultButton from "@components/atoms/Button/DefaultButton";
import DefaultInput from "@components/atoms/Input/DefaultInput";
import Text from "@components/atoms/Text/Text";
import BackgroundModal from "@components/organisms/BackgroundModal";
import useInput from "@hooks/common/useInput";
import usePatchCommunity from "@hooks/query/usePatchCommunity";
import useSettingModalStore from "@store/useSettingModalStore";
import { useUserStore } from "@store/useUserStore";
import { useParams } from "react-router-dom";
import { Bottom, InputWrapper, TextWrapper } from "./UserSettingModal";

const DeleteCategoryModal = () => {
  const { setShowSettingModal } = useSettingModalStore();

  const [name, changeName] = useInput();
  const { mutate: patchCommunity } = usePatchCommunity();
  const { userInfo } = useUserStore();

  const { channelId, communityId, categoryId } = useParams();
  const updataIntro = () => {
    patchCommunity(communityId);
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
                text="정말로 삭제 하시겠습니까?"
                fontSize="xxl"
                fontWeight="bold"
                mb={12}
                color="white"
                center
              />
            </TextWrapper>
          </div>
          <DefaultInput value={name} onChange={changeName} type="text" />
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

export default DeleteCategoryModal;
