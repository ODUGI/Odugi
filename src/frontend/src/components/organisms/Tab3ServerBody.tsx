import styled from "styled-components";
import MainDirectBody from "./MainDirectBody";
import MainVoiceRoomBody from "./MainVoiceRoomBody";

const Tab3CommunityBody = () => {
  return (
    <Tab3CommunityBodyContainer>
      {/* <MainDirectBody /> */}
      <MainVoiceRoomBody />
    </Tab3CommunityBodyContainer>
  );
};

const Tab3CommunityBodyContainer = styled.div`
  /* padding: 0 20px;
  margin-top: 4px; */
  position: relative;
  height: calc(100vh - 55px);
  /* flex: 1; */
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export default Tab3CommunityBody;
