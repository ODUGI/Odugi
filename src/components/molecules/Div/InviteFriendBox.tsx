import ButtonWrapper from "@components/atoms/Button/ButtonWrapper";
import DefaultButton from "@components/atoms/Button/DefaultButton";
import Text from "@components/atoms/Text/Text";
import useSendInvite from "@hooks/query/useSendInvite";
import { useUserStore } from "@store/useUserStore";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import useSendInviteToChat from "@hooks/query/useSentInviteToChat";

interface friend {
  name: string;
  userId: number;
  channelId: string;
}

const InviteFriendBox = ({ name, userId, channelId }: friend) => {
  const { mutate: sendInvite } = useSendInvite();
  const { userInfo } = useUserStore();
  const { communityId } = useParams();
  const { mutate: sendInviteToChat } = useSendInviteToChat();

  let backUrl = process.env.REACT_APP_BASE_URL;
  let uuid = crypto.randomUUID();

  const onSendInvite = () => {
    sendInvite({
      communityId,
      userId,
      shortUrl: uuid,
    });
    sendInviteToChat({
      sender: userInfo.name,
      channelId: channelId,
      linkMessage: `${backUrl}/invite/${uuid}/${userId}`,
    });
  };

  return (
    <ButtonWrapper onClick={() => null}>
      <InviteFriendBoxContainer>
        <UserInfoContainer>
          <UserProfileWrapper />
          <Text color="white">{name}</Text>
        </UserInfoContainer>
        <DefaultButton
          text="초대..."
          onClick={onSendInvite}
          pv={2}
          width={90}
          height={32}
          fontSize="sm"
          color="white"
          backgroundColor="transparent"
          hoverBackgroundColor="add-friend"
          borderColor="success"
        />
      </InviteFriendBoxContainer>
    </ButtonWrapper>
  );
};

const InviteFriendBoxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 7px 0px;
`;

const UserInfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

const UserProfileWrapper = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 25px;
  background-color: white;
`;

export default InviteFriendBox;
