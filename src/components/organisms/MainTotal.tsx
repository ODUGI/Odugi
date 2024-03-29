import BigSearchInputBox from "@components/molecules/Div/BigSearchInputBox";
import FriendDefaultBox from "@components/molecules/Div/FriendDefaultBox";
import useGetFriendList from "@hooks/query/useGetFriendList";
import useMainStore from "@store/useMainStore";
import { useRef } from "react";
import styled from "styled-components";
import DefaultButton from "../atoms/Button/DefaultButton";
import EmptyContainer from "../molecules/Div/EmptyContainer";
import ScrollableBox from "../molecules/Div/scrollableBox";
import LabelText from "../molecules/Text/LabelText";

const MainTotal = () => {
  const searchRef = useRef<HTMLInputElement>(null);

  const { setMainStatus } = useMainStore(({ setMainStatus }) => ({
    setMainStatus,
  }));
  const { data, isSuccess } = useGetFriendList();

  if (!isSuccess) return null;
  const friendList: FriendType[] = data.filter(
    (friend: FriendType) => friend.friendState === "ACCEPTED"
  );

  return (
    <>
      {friendList.length > 0 ? (
        <>
          <BigSearchInputBox ref={searchRef} />
          <LabelText label={"모든 친구"} num={friendList.length} />
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
        <Container>
          <EmptyContainer
            image="addFriend"
            text="Ottogi는 친구를 기다리고 있어요."
          />
          <ButtonWrapper>
            <DefaultButton
              text="친구 추가하기"
              onClick={() => setMainStatus("친구 추가하기")}
              height={38}
              width={110}
              fontSize="sm"
            />
          </ButtonWrapper>
        </Container>
      )}
    </>
  );
};

const ButtonWrapper = styled.div`
  margin-top: 20px;
  text-align: center;
  position: relative;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export default MainTotal;
