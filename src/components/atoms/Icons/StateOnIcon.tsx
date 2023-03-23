import CircleIcon from "@mui/icons-material/Circle";
import { memo } from "react";
import styled from "styled-components";

const StateOnIcon = styled(CircleIcon)``;

interface StateIconProps {
  fontSize: string;
  padding?: number;
}

export default memo(({ fontSize, padding = 1 }: StateIconProps) => (
  <StateOnIcon sx={{ fontSize, padding: `${padding}px`, borderRadius: 25 }} />
));
