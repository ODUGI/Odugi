import styled from "styled-components";
import FieldButton from "../../atoms/Button/FieldButton";
import Text from "../../atoms/Text/Text";
import LinkText from "../../atoms/Text/LinkText";
import useSettingModalStore from "@store/useSettingModalStore";

const UserProfilePage = () => {
  const { setShowSettingModal, setSettingModalType } = useSettingModalStore();

  const showModal = () => {
    setShowSettingModal(true);
    setSettingModalType("image");
  };

  return (
    <MainWrapper>
      <BlockWrapper>
        <Text fontSize="base" color="setting-tab" mb={16} fontWeight="bold">
          유저프로필
        </Text>
        <Text fontSize="xs" color="setting-tab" mb={8} fontWeight="bold">
          아바타
        </Text>
        <CustomButtons>
          <AvatarWrapper>
            <FieldButton text="아바타 변경하기" onClick={showModal} />
          </AvatarWrapper>
          <LinkWrapper>
            <LinkText text="아바타 제거하기" onClick={() => null} />
          </LinkWrapper>
        </CustomButtons>
      </BlockWrapper>
    </MainWrapper>
  );
};

const MainWrapper = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  background-color: ${({ theme }) => theme.backgroundColor["tab3"]};
`;

const AvatarWrapper = styled.div`
  height: 32px;
  width: 8.5;
  width: 10rem;
`;

const CustomButtons = styled.div`
  margin-bottom: 24px;
  padding-bottom: 24px;
  display: flex;
  border-bottom: 0.25px solid ${({ theme }) => theme.color["setting-tab"]};
`;

const LinkWrapper = styled.div`
  padding: 7px 16px;
  margin-left: 4px;
`;

const BlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 100%;
`;

export default UserProfilePage;
