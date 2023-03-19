import SettingButton from "@components/atoms/Button/SettingButton";
import Text from "@components/atoms/Text/Text";
import { useUserStore } from "@store/useUserStore";
import styled from "styled-components";
import UserState from "./UserState";

const CardUserInfo = () => {
  const { userInfo } = useUserStore();

  return (
    <InfoContainer>
      <Logo>
        <UserState type="m" src={userInfo.profileImagePath} status="1" />
      </Logo>
      <NameWrapper>
        <Text fontSize="lg" fontWeight="bold" color="white" mb={4}>
          {userInfo.name}
        </Text>
        <Text fontSize="sm" color="setting-tab">
          {userInfo.introduction}
        </Text>
      </NameWrapper>
      <ButtonWrapper>
        <SettingButton type="user" text="사용자 프로필 편집" status="프로필" />
      </ButtonWrapper>
    </InfoContainer>
  );
};

const Logo = styled.div`
  width: 80px;
  height: 80px;
  background-color: ${({ theme }) => theme.backgroundColor["voice-nobody"]};
  position: absolute;
  top: 75px;
  left: 20px;
  -webkit-box-sizing: content-box;
  box-sizing: content-box;
  border-radius: 3rem;
  border: 0.25rem solid ${({ theme }) => theme.backgroundColor["voice-nobody"]}; ;
`;

const InfoContainer = styled.div`
  height: 72px;
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding: 16px 16px 0 120px;
  background-color: ${({ theme }) => theme.backgroundColor["voice-nobody"]};
`;

const ButtonWrapper = styled.div`
  width: auto;
  height: 2rem;
`;

const NameWrapper = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
`;

export default CardUserInfo;
