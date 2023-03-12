import useGetFriendStatus from "@hooks/query/useGetFriendStatus";
import useMainStore from "@store/useMainStore";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import DirectMessageHeader from "./DirectMessageHeader";
import FriendHeader from "./FriendHeader";

const Tab3MainHeader = () => {
  const { channelId } = useParams();
  const { userId, userName } = useMainStore();

  const status = useGetFriendStatus(Number(userId));

  return (
    <Tab3MainHeaderContainer>
      {channelId ? (
        <DirectMessageHeader name={userName} status={status} />
      ) : (
        <FriendHeader />
      )}
    </Tab3MainHeaderContainer>
  );
};

const Tab3MainHeaderContainer = styled.div`
  height: 48px;
  padding: 0 0.5rem;

  display: flex;
  flex-direction: row;
  align-items: center;
`;

export default Tab3MainHeader;
