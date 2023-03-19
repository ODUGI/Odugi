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
  channelId: number;
}

const CommunityRoomButton = ({
  type,
  text,
  communityId,
  channelId,
}: CommunityRoomButtonProps) => {
  const { channelId: currentChannelId } = useParams();
  const navigate = useNavigate();
  const { setShowModal, setModalType } = useModalStore();

  const onClick = () => {
    navigate(`/${communityId}/${channelId}`);
  };

  const showInviteModal = () => {
    setModalType("inviteFriend");
    setShowModal(true);
  };

  return (
    <ButtonContainer onClick={onClick}>
      <ButtonWrapper
        ph={6}
        onClick={() => null}
        height={34}
        color="inactive"
        active={currentChannelId === channelId.toString()}
      >
        <CommunityRoomButtonContainer>
          <LeftContainer>
            {type === "chat" ? <TagIcon /> : <VolumeIcon />}
            <Text>{text}</Text>
          </LeftContainer>
          <div className="right-icon" onClick={showInviteModal}>
            <PersonAddIcon />
          </div>
        </CommunityRoomButtonContainer>
      </ButtonWrapper>
    </ButtonContainer>
  );
};

const ButtonContainer = styled.div`
  margin: 0 0.5rem;

  svg {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }

  .right-icon {
    svg {
      font-size: ${({ theme }) => theme.fontSize.base};
    }
    visibility: hidden;
  }

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
