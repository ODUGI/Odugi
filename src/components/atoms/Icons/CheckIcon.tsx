import CheckIcon from "@mui/icons-material/Check";
import { memo } from "react";
import styled from "styled-components";

const IconWrapper = styled.div`
  &:hover {
    color: ${({ theme }) => theme.backgroundColor["add-friend"]};
  }
`;

export default memo(() => (
  <IconWrapper>
    <CheckIcon />
  </IconWrapper>
));
