import Text from "../atoms/Text/Text";
import SettingWrapper from "./SettingWrapper";
import { Divider } from "@mui/material";
import styled from "styled-components";
import UserLogo from "../atoms/Div/UserLogo";

const CommunitySettingMember = () => {
  return (
    <SettingWrapper>
      <Text color="white" fontWeight="bold" fontSize="xl" mb={20}>
        서버 멤버
      </Text>
      <Text color="setting-tab" fontSize="sm" mb={20}>
        멤버 총 x명
      </Text>
      <Divider sx={{ borderColor: "#96989D93", opacity: 0.5, mt: 1, mb: 1 }} />
      <Member>
        <UserLogo height={3} width={3} onClick={() => null} />
        <Text color="white" fontSize="sm">
          김현우
        </Text>
      </Member>
    </SettingWrapper>
  );
};

const Member = styled.div`
  display: flex;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  gap: 12px;
  padding: 16px 0;
  border-bottom: 1px solid ${({ theme }) => theme.borderColor.divider}; ;
`;

export default CommunitySettingMember;
