import DarkModeIcon from "@mui/icons-material/DarkMode";
import { memo } from "react";
import styled from "styled-components";

const StateEmptyIcon = styled(DarkModeIcon)`
  transform: scaleX(-1);
`;

interface StateIconProps {
  fontSize: string;
  padding?: number;
}

export default memo(({ fontSize, padding = 1 }: StateIconProps) => (
  <StateEmptyIcon
    sx={{ fontSize, padding: `${padding}px`, borderRadius: 25 }}
  />
));
