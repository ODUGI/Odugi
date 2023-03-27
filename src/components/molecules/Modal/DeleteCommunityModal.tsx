import DefaultButton from "@components/atoms/Button/DefaultButton";
import DefaultInput from "@components/atoms/Input/DefaultInput";
import Text from "@components/atoms/Text/Text";
import BackgroundModal from "@components/organisms/BackgroundModal";
import useInput from "@hooks/common/useInput";
import useDeleteCommunity from "@hooks/query/useDeleteCommnunity";
import useModifyIntro from "@hooks/query/useModifyIntro";
import useSettingModalStore from "@store/useSettingModalStore";
import { useUserStore } from "@store/useUserStore";
import { useParams } from "react-router-dom";
import { Bottom, InputWrapper, TextWrapper } from "./UserSettingModal";

const DeleteCommunityModal = () => {
  const { setShowSettingModal } = useSettingModalStore();

  const { mutate: deleteCommunity } = useDeleteCommunity();
  const { userInfo } = useUserStore();

  const { channelId, communityId, categoryId } = useParams();
  const updataIntro = () => {
    deleteCommunity(communityId);
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

export default DeleteCommunityModal;
