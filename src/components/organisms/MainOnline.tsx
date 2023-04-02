import FriendDefaultBox from "@components/molecules/Div/FriendDefaultBox";
import useGetFriendList from "@hooks/query/useGetFriendList";
import { useUserStore } from "@store/useUserStore";
import { useRef } from "react";
import BigSearchInputBox from "../molecules/Div/BigSearchInputBox";
import EmptyContainer from "../molecules/Div/EmptyContainer";
import ScrollableBox from "../molecules/Div/scrollableBox";
import LabelText from "../molecules/Text/LabelText";

const MainOnline = () => {
  const searchRef = useRef<HTMLInputElement>(null);

  const {
    userInfo: { email },
  } = useUserStore();
  const { data, isSuccess } = useGetFriendList(email);

  if (!isSuccess) return null;
  const friendList: FriendType[] = data.filter(
    (friend: FriendType) => friend.friendState === "ACCEPTED"
  );

  return (
    <>
      {friendList.length > 0 ? (
        <>
          <BigSearchInputBox ref={searchRef} />
          <LabelText label={"온라인"} num={friendList.length} />
          <ScrollableBox>
            {friendList.map(
              ({
                email,
                name,
                channelId,
                userId,
                friendState,
                profileImagePath,
              }) => (
                <FriendDefaultBox
                  src={profileImagePath}
                  key={email}
                  email={email}
                  id={channelId}
                  name={name}
                  userId={userId}
                  status={friendState}
                />
              )
            )}
          </ScrollableBox>
        </>
      ) : (
        <EmptyContainer
          image="sleep"
          text="아무도 Ottogi와 놀고 싶지 않은가 봐요."
        />
      )}
    </>
  );
};

export default MainOnline;
