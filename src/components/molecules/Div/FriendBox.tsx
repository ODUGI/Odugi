import ButtonWrapper from "@components/atoms/Button/ButtonWrapper";
import Text from "@components/atoms/Text/Text";
import { MouseEventHandler, ReactElement } from "react";
import styled from "styled-components";
import UserState from "./UserState";

interface FriendBoxProps {
  name: string;
  status: "0" | "1" | "2" | "3";
  onClick: MouseEventHandler<HTMLDivElement>;
  Buttons: ReactElement;
  src: string;
}

const statusTable = {
  "0": "오프라인",
  "1": "온라인",
  "2": "받은 친구 요청",
  "3": "보낸 친구 요청",
};

const FriendBox = ({ name, status, onClick, Buttons, src }: FriendBoxProps) => {
  return (
    <ButtonWrapper onClick={onClick}>
      <FriendDefaultBoxContainer>
        <UserContainer>
          <UserState type="s" src={src} status={status} />
          <UserText>
            <Text color="white" fontWeight="bold" mb={3}>
              {name}
            </Text>
            <Text fontSize="sm" color="auth-desc">
              {statusTable[status]}
            </Text>
          </UserText>
        </UserContainer>
        <ButtonsWrapper>{Buttons}</ButtonsWrapper>
      </FriendDefaultBoxContainer>
    </ButtonWrapper>
  );
};
const FriendDefaultBoxContainer = styled.div`
  width: 100%;
  height: 61px;
  border-top: 1px solid ${({ theme }) => theme.backgroundColor.divider};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const UserContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const UserText = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 0.75rem;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
`;

export default FriendBox;
