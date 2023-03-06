import useGetChatFriends from "@hooks/query/useGetChatFriends";
import UserChannelOnBox from "./UserChannelOnBox";

interface UserFriendChannelOnBoxProps {
  friend: FriendType;
  categoryId: number;
}

const UserFriendChannelOnBox = ({
  friend,
  categoryId,
}: UserFriendChannelOnBoxProps) => {
  const { data: friendCategoryId } = useGetChatFriends(friend.userId);

  if (Number(friendCategoryId) === categoryId) {
    return (
      <UserChannelOnBox src={friend.profileImagePath} name={friend.name} />
    );
  }
  return <></>;
};

export default UserFriendChannelOnBox;
