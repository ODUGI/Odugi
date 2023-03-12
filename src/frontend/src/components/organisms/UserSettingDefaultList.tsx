import FieldButton from "@components/atoms/Button/fieldButton";
import Text from "@components/atoms/Text/Text";
import styled from "styled-components";
import { useUserStore } from "@store/useUserStore";
import useSettingModalStore, {
  SettingModalType,
} from "@store/useSettingModalStore";
import UserSettingNameModal from "@components/molecules/Modal/UserSettingNameModal";
import UserSettingPasswordModal from "@components/molecules/Modal/UserSettingPasswordModal";
import UserSettingIntroModal from "@components/molecules/Modal/UserSettingIntroModal";
import UserSettingImageModal from "@components/molecules/Modal/UserSettingImageModal";
import { useEffect } from "react";

const FieldList = () => {
  const { userInfo } = useUserStore();

  const {
    showSettingModal,
    settingModalType,
    setSettingModalType,
    setShowSettingModal,
  } = useSettingModalStore();

  const showModal = (modalType: SettingModalType) => {
    setSettingModalType(modalType);
    setShowSettingModal(true);
  };

  useEffect(() => {
    setShowSettingModal(false);
  }, []);

  const modalTable = {
    name: <UserSettingNameModal />,
    password: <UserSettingPasswordModal />,
    intro: <UserSettingIntroModal />,
    image: <UserSettingImageModal />,
  };

  const Component = settingModalType ? modalTable[settingModalType] : <></>;

  return (
    <ListWrapper>
      {showSettingModal && Component}
      <FieldContinaer>
        <LeftRow>
          <Text text="사용자명" fontSize="xs" color="setting-tab" mb={8} />
          <Text text={userInfo.name} fontSize="base" color="white" />
        </LeftRow>
        <ButtonWrappper>
          <FieldButton
            text="수정"
            backgroundColor="setting"
            onClick={() => showModal("name")}
          />
        </ButtonWrappper>
      </FieldContinaer>
      <FieldContinaer>
        <LeftRow>
          <Text text="이메일" fontSize="xs" color="setting-tab" mb={8} />
          <Text text={userInfo.email} fontSize="base" color="white" />
        </LeftRow>
        <ButtonWrappper>
          <FieldButton
            text="확인"
            backgroundColor="setting"
            onClick={() => null}
          />
        </ButtonWrappper>
      </FieldContinaer>
      <FieldContinaer>
        <LeftRow>
          <Text text="비밀번호" fontSize="xs" color="setting-tab" mb={8} />
          <Text text="********" fontSize="base" color="white" />
        </LeftRow>
        <ButtonWrappper>
          <FieldButton text="변경하기" onClick={() => showModal("password")} />
        </ButtonWrappper>
      </FieldContinaer>
      <FieldContinaer>
        <LeftRow>
          <Text text="자기소개" fontSize="base" color="setting-tab" mb={8} />
          <Text text={userInfo.introduction} fontSize="base" color="white" />
        </LeftRow>
        <ButtonWrappper>
          <FieldButton text="변경하기" onClick={() => showModal("intro")} />
        </ButtonWrappper>
      </FieldContinaer>
    </ListWrapper>
  );
};

const ListWrapper = styled.div``;

const FieldContinaer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

const LeftRow = styled.div`
  align-items: center;
`;

const ButtonWrappper = styled.div`
  width: auto;
  height: 2rem;
`;

export default FieldList;
