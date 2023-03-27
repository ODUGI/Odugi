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

const UserSettingGeneralTab = () => {
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

  const component = settingModalType ? modalTable[settingModalType] : null;

  return (
    <ListWrapper>
      {showSettingModal && component}
      <FieldContinaer>
        <LeftRow>
          <Text fontSize="xs" color="setting-tab" mb={8}>
            사용자명
          </Text>
          <Text fontSize="base" color="white">
            {userInfo.name}
          </Text>
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
          <Text fontSize="xs" color="setting-tab" mb={8}>
            이메일
          </Text>
          <Text fontSize="base" color="white">
            {userInfo.email}
          </Text>
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
          <Text fontSize="xs" color="setting-tab" mb={8}>
            비밀번호
          </Text>
          <Text fontSize="base" color="white">
            ********
          </Text>
        </LeftRow>
        <ButtonWrappper>
          <FieldButton text="변경하기" onClick={() => showModal("password")} />
        </ButtonWrappper>
      </FieldContinaer>
      <FieldContinaer>
        <LeftRow>
          <Text fontSize="base" color="setting-tab" mb={8}>
            자기소개
          </Text>
          <Text fontSize="base" color="white">
            {userInfo.introduction}
          </Text>
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

export default UserSettingGeneralTab;
