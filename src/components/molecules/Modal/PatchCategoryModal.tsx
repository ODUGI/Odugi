import DefaultButton from "@components/atoms/Button/DefaultButton";
import DefaultInput from "@components/atoms/Input/DefaultInput";
import Text from "@components/atoms/Text/Text";
import BackgroundModal from "@components/organisms/BackgroundModal";
import useInput from "@hooks/common/useInput";
import usePatchCategory from "@hooks/query/usePatchCategory";
import useModalStore from "@store/useModalStore";
import useSettingModalStore from "@store/useSettingModalStore";
import { useUserStore } from "@store/useUserStore";
import { useRef } from "react";
import { useParams } from "react-router-dom";
import { Bottom, InputWrapper, TextWrapper } from "./UserSettingModal";

const PatchCategoryModal = () => {
  const { setShowModal } = useModalStore();

  const [name, changeName] = useInput();
  const { mutate: patchCategory } = usePatchCategory();
  const { userInfo } = useUserStore();

  const nameRef = useRef<HTMLInputElement>(null);
  // const { channelId, communityId, categoryId } = useParams();
  const categoryId = 8;
  const role = 0;
  const updataIntro = () => {
    patchCategory({ name, categoryId, role });
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
                fontSize="xxl"
                fontWeight="bold"
                mb={12}
                color="white"
                center
              >
                정말로 삭제 하시겠습니까?
              </Text>
            </TextWrapper>
          </div>
          <DefaultInput ref={nameRef} type="text" />
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

export default PatchCategoryModal;
