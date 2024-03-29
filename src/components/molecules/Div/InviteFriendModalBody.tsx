import Text from "@components/atoms/Text/Text";
import { flexCenter } from "@styles/flexCenter";
import styled from "styled-components";
import SearchInput from "../Input/SearchInput";
import InviteFriendBox from "./InviteFriendBox";
import ScrollableBox from "./scrollableBox";
import useGetFriendList from "@hooks/query/useGetFriendList";
import { useRef } from "react";

const InviteFriendModalBody = () => {
  const searchRef = useRef<HTMLInputElement>(null);
  const { data: friendList, isSuccess } = useGetFriendList();

  if (!isSuccess) return null;
  const num = friendList.length;

  return (
    <InviteFriendModalBodyContainer>
      <SearchInputWrapper>
        <SearchInput size="m" ref={searchRef} placeholder="친구 찾기" />
      </SearchInputWrapper>
      <Divider color="tab1" />
      <FriendListContainer>
        <ScrollableBox>
          <FriendListContainer>
            {num > 0 ? (
              friendList.map(({ name, userId, channelId }: FriendType) => (
                <InviteFriendBox
                  name={name}
                  userId={userId}
                  channelId={channelId}
                />
              ))
            ) : (
              <TextWrapper>
                <Text color="auth-desc" center fontWeight="bold">
                  검색 결과가 없어요
                </Text>
              </TextWrapper>
            )}
          </FriendListContainer>
        </ScrollableBox>
      </FriendListContainer>
      <Divider color="tab2" />
    </InviteFriendModalBodyContainer>
  );
};

const InviteFriendModalBodyContainer = styled.div`
  padding: 0.5rem 0.5rem 0 0.5rem;
`;

const SearchInputWrapper = styled.div`
  margin-bottom: 1rem;
`;

const Divider = styled.div<{ color: string }>`
  position: sticky;
  height: 0.0625rem;
  width: 100%;
  background-color: ${({ theme, color }) => theme.backgroundColor[color]};
`;

const FriendListContainer = styled.div`
  flex-direction: column;
  min-height: 5rem;
  max-height: 12.5rem;
`;

const TextWrapper = styled.div`
  ${flexCenter}
`;

export default InviteFriendModalBody;
