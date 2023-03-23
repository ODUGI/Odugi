import styled from "styled-components";
import PhoneDisabledIcon from "@mui/icons-material/PhoneDisabled";
import { memo } from "react";

const CallOffIcon = styled(PhoneDisabledIcon)`
  transform: scaleX(-1);
`;

export default memo(() => <CallOffIcon />);
