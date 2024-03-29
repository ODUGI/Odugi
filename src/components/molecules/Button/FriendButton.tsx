import { useMatch, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ColorType } from "@styles/theme";
import ButtonWrapper from "@components/atoms/Button/ButtonWrapper";
import PersonIcon from "@components/atoms/Icons/PersonIcon";
import Text from "@components/atoms/Text/Text";

const FriendButton = () => {
  const isMain = useMatch("/@me");
  const navigate = useNavigate();

  return (
    <ButtonWrapper
      active={!!isMain}
      onClick={() => navigate("/@me")}
      height={42}
    >
      <FriendButtonContainer color={isMain ? "white" : "inactive"}>
        <PersonIcon />
        <Text color={isMain ? "white" : "inactive"}>친구</Text>
      </FriendButtonContainer>
    </ButtonWrapper>
  );
};

const FriendButtonContainer = styled.div<{ color: ColorType }>`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  svg {
    color: ${({ theme, color }) => theme.color[color]};
  }

  &:hover {
    color: ${({ theme }) => theme.color.white};
  }
`;

export default FriendButton;
