import Text from "@components/atoms/Text/Text";
import styled from "styled-components";
import InviteCommunityInput from "../Input/InviteCommunityInput";

const InviteFriendModalFooter = () => {
  return (
    <InviteFriendModalFooterContainer>
      <Text color="auth-desc" fontSize="xs" fontWeight="bold" mb={8}>
        또는 친구에게 서버 초대 링크 전송하기
      </Text>
      <InviteCommunityInput url="https://discord.gg/e3AZaGPM" />
      <Text fontSize="xs" color="auth-desc">
        초대 링크가 7일 후 만료돼요.
      </Text>
    </InviteFriendModalFooterContainer>
  );
};

const InviteFriendModalFooterContainer = styled.div`
  padding: 1rem;
`;

export default InviteFriendModalFooter;
