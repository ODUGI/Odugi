import { Avatar } from "@mui/material";
import { IconButton } from "@mui/material";
import styled from "styled-components";
import { ReactElement } from "react";
import useCommunityStore from "@store/useCommunityStore";

interface CommunityImageProps {
  id: Number;
  name: string;
  active?: boolean;
  src?: string;
  children?: ReactElement;
  avatarWidth: Number;
  avatarHeight: Number;
}

const CommunityImage = ({
  id,
  name,
  active = false,
  src,
  children,
  avatarHeight = 3,
  avatarWidth = 3,
}: CommunityImageProps) => {
  const { communityStatus, setCommunityStatus } = useCommunityStore();
  active = Number(communityStatus) === id;

  const selectCommunity = () => {
    if (id === -2) return;
    setCommunityStatus(id.toString());
  };

  return (
    <CommunityIconBox borderRadius={active ? 0.8 : 5} height={active ? 35 : 10}>
      <ClickedWrapper className="side" />
      <StyledIconButton
        height={avatarHeight}
        width={avatarWidth}
        onClick={selectCommunity}
      >
        {/* borderRadius로 이미지 동그란 정도 조절하기 */}
        <Avatar className="avatar" src={src}>
          {children}
          {name}
        </Avatar>
      </StyledIconButton>
    </CommunityIconBox>
  );
};

export default CommunityImage;

interface CommunityIconBoxProps {
  borderRadius: number | string;
  height: number | string;
}

const CommunityIconBox = styled.div<CommunityIconBoxProps>`
  display: flex;
  margin-bottom: 0.5rem;
  align-items: center;
  .avatar {
    border-radius: ${({ borderRadius }) => borderRadius}rem;
    background-color: ${({ theme }) => theme.backgroundColor.tab3};
  }
  .side {
    height: ${({ height }) => height}px;
  }
  &:hover {
    .avatar {
      border-radius: 0.8rem;
      transition: all 0.4s ease-in-out;
    }
    .side {
      height: ${({ height }) => (height === 35 ? 35 : 25)}px;
      transition: height 0.4s ease-in-out;
    }
  }
`;

interface CommunityIconButtonProps {
  width: Number;
  height: Number;
}

const StyledIconButton = styled(IconButton)<CommunityIconButtonProps>`
  .avatar {
    width: 100%;
    height: 100%;
  }
  margin: 0px;
  padding: 0rem !important;
  border-radius: 5rem;
  width: ${({ width }) => width + "rem"};
  height: ${({ height }) => height + "rem"};

  border: 3px solid white;
`;

const ClickedWrapper = styled.div`
  height: 10px;
  list-style-type: none;
  line-height: 16px;
  width: 6px;
  background-color: ${({ theme }) => theme.backgroundColor.white};
  border-radius: 0 1rem 1rem 0;
  justify-content: flex-start;
  vertical-align: baseline;
  user-select: none;
  opacity: 1;
  margin-right: 0.5rem;
`;
