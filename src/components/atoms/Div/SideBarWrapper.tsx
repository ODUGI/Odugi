import { ReactElement } from "react";
import styled from "styled-components";
import useGetFriendList from "@hooks/query/useGetFriendList";
import Text from "../Text/Text";
import NobodyActive from "./NobodyActive";

interface SideBarProps {
  children: ReactElement;
}

const SideBar = ({ children }: SideBarProps) => {
  const { data } = useGetFriendList();

  return (
    <SideBarContainer>
      <Text fontSize="xl" color="white" fontWeight="bold" mb={16}>
        현재 활동 중
      </Text>
      {data ? <>{children}</> : <NobodyActive />}
    </SideBarContainer>
  );
};

const SideBarContainer = styled.div`
  width: 358px;
  padding: 1rem 0.5rem 1rem 1rem;
  border-left: 1px solid ${({ theme }) => theme.borderColor.divider};

  @media (max-width: 75rem) {
    display: none;
  }
`;

export default SideBar;
