import styled from "styled-components";
import Text from "../atoms/Text/Text";
import SettingButton from "../atoms/Button/SettingButton";
import { Divider } from "@mui/material";
import useLogout from "@hooks/query/useLogout";

const MyAccountSettingBar = () => {
  const { mutate: logoutUser } = useLogout();

  return (
    <BarContainer>
      <Header>
        <Text fontSize="xs" color="msg-hover" mb={6} fontWeight="bold">
          사용자 설정
        </Text>
      </Header>

      <ul>
        <li>
          <SettingButton text="내 계정" status="내 계정" />
        </li>
        <li>
          <SettingButton text="프로필" status="프로필" />
        </li>

        <Divider
          sx={{ borderColor: "#96989D93", opacity: 0.5, mr: 1, mt: 1, mb: 1 }}
        />

        <SettingButton text="로그아웃" onClick={logoutUser} />
      </ul>
    </BarContainer>
  );
};

export default MyAccountSettingBar;

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
