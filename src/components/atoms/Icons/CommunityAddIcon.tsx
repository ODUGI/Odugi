import AddIcon from "@mui/icons-material/Add";
import { memo } from "react";
import styled from "styled-components";

const CommunityAddIcon = styled(AddIcon)`
  position: absolute;
  left: 58px;
  top: 0px;

  background-color: rgb(88, 101, 242);
  color: #fff;
  border-radius: 2rem;
`;

export default memo(() => <CommunityAddIcon />);
