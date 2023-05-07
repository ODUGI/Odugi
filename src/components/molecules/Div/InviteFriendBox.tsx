import ButtonWrapper from "@components/atoms/Button/ButtonWrapper";
import DefaultButton from "@components/atoms/Button/DefaultButton";
import Text from "@components/atoms/Text/Text";
import useSendInvite from "@hooks/query/useSendInvite";
import { useUserStore } from "@store/useUserStore";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import useSendInviteToChat from "@hooks/query/useSentInviteToChat";
import useCreateInvitation from "@hooks/query/useCreateInvitation";

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
  const { mutate: createInvite } = useCreateInvitation({
    onSuccess: (data: any) => {
      sendInviteToChat({
        sender: userInfo.name,
        channelId: channelId,
        linkMessage: data.data.data,
      });
    },
  });

  let backUrl = process.env.REACT_APP_BASE_URL;
  let uuid = crypto.randomUUID();

  const onSendInvite = () => {
    const formData = new FormData();
    formData.append("communityId", communityId as string);
    formData.append("invitedId", userId.toString());
    createInvite({
      formData,
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
