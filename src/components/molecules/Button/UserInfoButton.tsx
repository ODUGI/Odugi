import ButtonWrapper from "@components/atoms/Button/ButtonWrapper";
import Text from "@components/atoms/Text/Text";
import { useUserStore } from "@store/useUserStore";
import styled from "styled-components";
import UserState from "../Div/UserState";

interface UserInfoButtonProps {
  status: "0" | "1" | "2" | "3";
}

const UserInfoButton = ({ status }: UserInfoButtonProps) => {
  const { userInfo } = useUserStore();

  return (
    <ButtonWrapper
      onClick={() => null}
      height={39}
      hoverBackgroundColor="active"
      ph={0}
    >
      <InfoContainer>
        <UserState type="s" status={status} src={userInfo.profileImagePath} />
        <Text fontWeight="bold" fontSize="sm" color="white">
          {userInfo.email}
        </Text>
      </InfoContainer>
    </ButtonWrapper>
  );
};

const InfoContainer = styled.div`
  width: 7.625rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  p {
    display: inline-block;
    width: 200px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export default UserInfoButton;
