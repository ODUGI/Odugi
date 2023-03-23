import { Avatar } from "@mui/material";
import { IconButton } from "@mui/material";
import styled from "styled-components";
import { MouseEventHandler, ReactElement } from "react";

interface LogoImageProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
  width: number;
  height: number;
  src?: string;
  child?: ReactElement;
}

const UserLogo = ({
  onClick,
  height,
  width,
  src = "",
  child,
}: LogoImageProps) => {
  return (
    <StyledIconButton width={width} height={height} onClick={onClick}>
      <Avatar src={src} className="avatar">
        {child}
      </Avatar>
    </StyledIconButton>
  );
};

interface ButtonProps {
  width: number;
  height: number;
}

const StyledIconButton = styled(IconButton)<ButtonProps>`
  .avatar {
    width: 100%;
    height: 100%;
  }
  margin: 0px;
  padding: 0rem !important;
  width: ${({ width }) => width}rem;
  height: ${({ height }) => height}rem; ;
`;

export default UserLogo;
