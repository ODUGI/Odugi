import ButtonWrapper from "@components/atoms/Button/ButtonWrapper";
import CheckboxOffIcon from "@components/atoms/Icons/CheckboxOffIcon";
import CheckboxOnIcon from "@components/atoms/Icons/CheckboxOnIcon";
import Text from "@components/atoms/Text/Text";
import styled from "styled-components";
import UserState from "./UserState";

interface SelectFriendProps {
  status: "0" | "1" | "2" | "3";
  check?: boolean;
}

const SelectFriend = ({ check = false, status }: SelectFriendProps) => {
  return (
    <ButtonWrapper onClick={() => null}>
      <SelectFriendContainer>
        <UserState type="s" status={status} />
        <UserNameWrapper>
          <Text>name</Text>
        </UserNameWrapper>
        {check ? <CheckboxOnIcon /> : <CheckboxOffIcon />}
      </SelectFriendContainer>
    </ButtonWrapper>
  );
};

const SelectFriendContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 4px;
  gap: 12px;
`;

const UserNameWrapper = styled.div`
  flex: 1;
`;

export default SelectFriend;
