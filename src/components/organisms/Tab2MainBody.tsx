import styled from "styled-components";
import FriendButton from "../molecules/Button/FriendButton";
import FriendList from "../molecules/Div/FriendList";

const Tab2MainBody = () => {
  return (
    <Tab2MainBodyContainer>
      <FriendButton />
      <FriendList />
    </Tab2MainBodyContainer>
  );
};

const Tab2MainBodyContainer = styled.div`
  margin: 0.5rem 0.5rem 0 0.5rem;
  flex: 1;
`;

export default Tab2MainBody;
