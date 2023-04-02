import DefaultButton from "@components/atoms/Button/DefaultButton";
import DefaultInput from "@components/atoms/Input/DefaultInput";
import Text from "@components/atoms/Text/Text";
import BackgroundModal from "@components/organisms/BackgroundModal";
import useInput from "@hooks/common/useInput";
import useDeleteCategory from "@hooks/query/useDeleteCategory";
import useModifyIntro from "@hooks/query/useModifyIntro";
import useModalStore from "@store/useModalStore";
import { useUserStore } from "@store/useUserStore";
import { useParams } from "react-router-dom";
import { Bottom, InputWrapper, TextWrapper } from "./UserSettingModal";

const DeleteCategoryModal = () => {
  const { setShowModal } = useModalStore();

  const { mutate: deleteCategory } = useDeleteCategory();
  const { userInfo } = useUserStore();

  // const { channelId, communityId, categoryId } = useParams();
  const categoryId = 7;
  const role = 0;
  const updataIntro = () => {
    deleteCategory({ categoryId, role });
  };

  return (
    <BackgroundModal
      width={440}
      p={0}
      onClick={() => setShowModal(false)}
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
              onClick={() => setShowModal(false)}
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
