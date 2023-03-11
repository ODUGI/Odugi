import useGetFriendList from "@hooks/query/useGetFriendList";
import { useUserStore } from "@store/useUserStore";
import styled from "styled-components";
import DirectButton from "../Button/DirectButton";
import DirectMessage from "./DirectMessage";
import ScrollableBox from "./scrollableBox";

const FriendList = () => {
  const {
    userInfo: { email },
  } = useUserStore();
  const { data, isSuccess } = useGetFriendList(email);

  if (!isSuccess) return <></>;

  const friendList: FriendType[] = data.filter(
    (friend: FriendType) => friend.friendState === "ACCEPTED"
  );

  return (
    <FriendListContainer>
      {friendList.length !== 0 && <DirectMessage />}
      <ScrollableBox>
        <FriendListWrapper>
          {friendList.map(
            ({ name, userId, channelId, profileImagePath }: FriendType) => (
              <DirectButton
                key={name}
                name={name}
                userId={userId}
                id={channelId}
                src={profileImagePath}
              />
            )
          )}
        </FriendListWrapper>
      </ScrollableBox>
    </FriendListContainer>
  );
};

const FriendListContainer = styled.div`
  padding: 0 0.25rem;
  background-color: ${({ theme }) => theme.backgroundColor.trans};
`;

const FriendListWrapper = styled.div`
  height: calc(100vh - 200px);

  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export default FriendList;
