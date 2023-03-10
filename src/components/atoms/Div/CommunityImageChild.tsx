import { Avatar } from "@mui/material";
import { IconButton } from "@mui/material";
import styled from "styled-components";
import useCommunityStore from "@store/useCommunityStore";

interface CommunityImageChildProps {
  id: number;
  name: string;
  active?: boolean;
  src?: string;
}

const CommunityImageChild = ({
  id,
  active = false,
  src,
}: CommunityImageChildProps) => {
  const { communityStatus, setCommunityStatus } = useCommunityStore();
  active = Number(communityStatus) === id;

  const selectCommunity = () => {
    setCommunityStatus(id);
  };

  return (
    <CommunityIconBox borderRadius={active ? 0.8 : 5} height={active ? 35 : 10}>
      <ClickedWrapper className="side" />
      <StyledIconButton onClick={selectCommunity}>
        <Avatar className="avatar" src={src}></Avatar>
      </StyledIconButton>
    </CommunityIconBox>
  );
};

export default CommunityImageChild;

interface CommunityIconBoxProps {
  borderRadius: number | string;
  height: number | string;
}

const CommunityIconBox = styled.div<CommunityIconBoxProps>`
  display: flex;
  margin-bottom: 0.5rem;
  align-items: center;
  .avatar {
    border-radius: ${({ borderRadius }) => `${borderRadius}rem`};
  }
  .side {
    height: ${({ height }) => `${height}px`};
  }
  &:hover {
    .avatar {
      border-radius: 0.8rem;
      transition: all 0.4s ease-in-out;
    }
    .side {
      height: ${({ height }) => (height === 35 ? "35px" : "25px")};
      transition: height 0.4s ease-in-out;
    }
  }
`;

const StyledIconButton = styled(IconButton)`
  .avatar {
    width: 3rem;
    height: 3rem;
  }
  margin: 0px;
  padding: 0rem !important;
  border-radius: 5rem;
  width: 3rem;
  height: 3rem;
`;

const ClickedWrapper = styled.div`
  height: 10px;
  list-style-type: none;
  line-height: 16px;
  width: 6px;
  background-color: #fff;
  border-radius: 0 1rem 1rem 0;
  justify-content: flex-start;
  vertical-align: baseline;
  user-select: none;
  opacity: 1;
  margin-right: 0.5rem;
`;
