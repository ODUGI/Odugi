import SettingButton from "@components/atoms/Button/SettingButton";
import styled from "styled-components";
import Text from "../atoms/Text/Text";

const CommunitySettingBar = () => {
  return (
    <BarContainer>
      <Header>
        <Text
          text="개별 서버 방 이름"
          fontSize="xs"
          color="msg-hover"
          mb={6}
          fontWeight="bold"
        />
      </Header>
      <ul>
        <li>
          <SettingButton
            type="community"
            text="일반"
            status="일반"
            backgroundColor="voice-icon"
          />
        </li>
        <li>
          <SettingButton
            type="community"
            text="멤버"
            status="멤버"
            backgroundColor="voice-icon"
          />
        </li>
        <li>
          <SettingButton
            type="community"
            text="초대"
            status="초대"
            backgroundColor="voice-icon"
          />
        </li>
      </ul>
    </BarContainer>
  );
};

const BarContainer = styled.div`
  width: 12rem;
  height: 67.5rem;
  padding: 60px 6px 60px 20px;
  background-color: ${({ theme }) => theme.backgroundColor["voice-icon"]};
  ul {
    padding: 0;
    margin: 0;
    list-style: none;
    width: 100%;
  }
  li {
    width: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    position: relative;
  }
`;

const Header = styled.div`
  width: 100%;
  padding: 0px 6px;
`;

export default CommunitySettingBar;
