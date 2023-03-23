import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import { memo } from "react";
import styled from "styled-components";

const StateMobileIcon = styled(PhoneIphoneIcon)``;
interface StateIconProps {
  fontSize: string;
  padding?: number;
}

export default memo(({ fontSize, padding = 1 }: StateIconProps) => (
  <StateMobileIcon
    sx={{ fontSize, padding: `${padding}px`, borderRadius: 25 }}
  />
));
