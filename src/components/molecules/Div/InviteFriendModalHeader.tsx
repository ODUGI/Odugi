import CancelIcon from "@components/atoms/Icons/CancelIcon";
import TagIcon from "@components/atoms/Icons/TagIcon";
import Text from "@components/atoms/Text/Text";
import useModalStore from "@store/useModalStore";
import styled from "styled-components";

const InviteFriendModalHeader = () => {
  const { setShowModal } = useModalStore();
  //!TODO: 추후에 channelId로 groupName, chatRoomName을 가져와야 함!
  const groupName = "test";
  const chatRoomName = "환영";

  return (
    <InviteFriendModalHeaderContainer>
      <Header>
        <Text color="white">친구를 {groupName}그룹으로 초대하기</Text>
        <CancelIconWrapper onClick={() => setShowModal(false)}>
          <CancelIcon />
        </CancelIconWrapper>
      </Header>
      <TextWrapper>
        <TagIcon />
        <Text>{chatRoomName}</Text>
      </TextWrapper>
    </InviteFriendModalHeaderContainer>
  );
};

const InviteFriendModalHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 1rem 0px 1rem;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.25rem;
`;

const CancelIconWrapper = styled.div`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.color["auth-desc"]};
  cursor: pointer;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  color: ${({ theme }) => theme.color["auth-desc"]};
  align-items: center;
  gap: 0.5rem;
`;

export default InviteFriendModalHeader;
