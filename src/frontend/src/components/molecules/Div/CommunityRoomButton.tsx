import ButtonWrapper from "@components/atoms/Button/ButtonWrapper";
import PersonAddIcon from "@components/atoms/Icons/PersonAddIcon";
import TagIcon from "@components/atoms/Icons/TagIcon";
import VolumeIcon from "@components/atoms/Icons/VolumeIcon";
import Text from "@components/atoms/Text/Text";
import useModalStore from "@store/useModalStore";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

interface CommunityRoomButtonProps {
  type: "chat" | "voice";
  text: string;
  communityId: string;
  categoryId: number;
}

const CommunityRoomButton = ({
  type,
  text,
  communityId,
  categoryId,
}: CommunityRoomButtonProps) => {
  const { categoryId: currentCategoryId } = useParams();
  const navigate = useNavigate();
  const { setInviteFriendModal } = useModalStore();

  const onClick = () => {
    navigate(`/${communityId}/${categoryId}`);
  };

  return (
    <ButtonContainer onClick={onClick}>
      <ButtonWrapper
        ph={6}
        onClick={() => null}
        height={34}
        color="inactive"
        active={currentCategoryId === categoryId.toString()}
      >
        <CommunityRoomButtonContainer>
          <LeftContainer>
            {type === "chat" ? <TagIcon /> : <VolumeIcon />}
            <Text text={text} />
          </LeftContainer>
          <div
            className="right-icon"
            onClick={() => setInviteFriendModal(true)}
          >
            <PersonAddIcon />
          </div>
        </CommunityRoomButtonContainer>
      </ButtonWrapper>
    </ButtonContainer>
  );
};

const ButtonContainer = styled.div`
  svg {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
  .right-icon {
    svg {
      font-size: ${({ theme }) => theme.fontSize.base};
    }
    visibility: hidden;
  }
  margin: 0 0.5rem;
  &:hover {
    .right-icon {
      visibility: visible;
    }
  }
`;

const CommunityRoomButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
`;

export default CommunityRoomButton;
