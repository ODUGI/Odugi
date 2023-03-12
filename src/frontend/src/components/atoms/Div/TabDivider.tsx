import styled from "styled-components";

const TabDivider = styled.div`
  width: 100%;
  height: 0.0938rem;
  background-color: ${({ theme }) => theme.backgroundColor["user-tab"]};
`;

export default TabDivider;
