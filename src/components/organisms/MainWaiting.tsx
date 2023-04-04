import EmptyContainer from "../molecules/Div/EmptyContainer";
import LabelText from "../molecules/Text/LabelText";
import FriendWaitingBox from "../molecules/Div/FriendWaitingBox";
import ScrollableBox from "../molecules/Div/scrollableBox";
import useGetFriendList from "@hooks/query/useGetFriendList";
import { useRef } from "react";
import SearchInput from "@components/molecules/Input/SearchInput";

interface FriendState {
  receiver: string;
  friendState: FriendStateType;
}

const MainWaiting = () => {
  const searchRef = useRef<HTMLInputElement>(null);

  const { data, isSuccess } = useGetFriendList();

  if (!isSuccess) return null;

  const friendList: FriendType[] = data.filter(
    (friend: FriendState) =>
      friend.friendState === "REQUEST" || friend.friendState === "WAIT"
  );
  const num = friendList.length;

  return (
    <>
      {num > 0 ? (
        <>
          <SearchInput size="m" ref={searchRef} />
          <LabelText label={"대기 중"} num={num} />
          <ScrollableBox>
            {friendList.map(
              ({ email, name, friendState, profileImagePath }: FriendType) => (
                <FriendWaitingBox
                  src={profileImagePath}
                  key={email}
                  email={email}
                  name={name}
                  status={friendState}
                />
              )
            )}
          </ScrollableBox>
        </>
      ) : (
        <EmptyContainer
          image="waiting"
          text="대기 중인 친구 요청이 없네요. 그래도 옆에 Ottogi는 있네요."
        />
      )}
    </>
  );
};

export default MainWaiting;
