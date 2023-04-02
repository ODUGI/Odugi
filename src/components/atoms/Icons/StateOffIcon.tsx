import TripOriginIcon from "@mui/icons-material/TripOrigin";
import { memo } from "react";
import styled from "styled-components";

const StateOffIcon = styled(TripOriginIcon)``;

interface StateIconProps {
  fontSize: string;
  padding?: number;
}

export default memo(({ fontSize, padding = 1 }: StateIconProps) => (
  <StateOffIcon sx={{ fontSize, padding: `${padding}px`, borderRadius: 25 }} />
));
