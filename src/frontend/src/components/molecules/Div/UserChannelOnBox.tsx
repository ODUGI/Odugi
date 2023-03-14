import ButtonWrapper from "@components/atoms/Button/ButtonWrapper";
import UserLogo from "@components/atoms/Div/UserLogo";
import Text from "@components/atoms/Text/Text";
import { useUserStore } from "@store/useUserStore";
import styled from "styled-components";

interface UserChannelOnBoxProps {
  name?: string;
  src?: string;
}

const UserChannelOnBox = ({ name, src }: UserChannelOnBoxProps) => {
  const {
    userInfo: { profileImagePath: mysrc, name: myname },
  } = useUserStore();

  return (
    <Container>
      <ButtonWrapper onClick={() => null} height={30}>
        <UserChannelOnBoxContainer>
          <UserLogo
            src={src || mysrc}
            width={1.5}
            height={1.5}
            onClick={() => null}
          />
          <Text text={name || myname} color="white" />
        </UserChannelOnBoxContainer>
      </ButtonWrapper>
    </Container>
  );
};

const Container = styled.div`
  padding-bottom: 0.5rem;
  padding-left: 2.25rem;
  padding-right: 0.5rem;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const UserChannelOnBoxContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  margin: 4px 0;
`;

export default UserChannelOnBox;
