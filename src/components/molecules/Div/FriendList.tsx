import useGetFriendList from "@hooks/query/useGetFriendList";
import styled from "styled-components";
import DirectButton from "../Button/DirectButton";
import DirectMessage from "./DirectMessage";
import ScrollableBox from "./scrollableBox";

const FriendList = () => {
  const { data, isSuccess } = useGetFriendList();

  if (!isSuccess) return null;

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
  background-color: ${({ theme }) => theme.backgroundColor.transparent};
`;

const FriendListWrapper = styled.div`
  height: calc(100vh - 12.5rem);

  display: flex;
  flex-direction: column;
  gap: 0.125rem;
`;

export default FriendList;
