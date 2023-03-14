import styled from "styled-components";

export const TextWrapper = styled.div`
  padding: 24px 16px;
`;

export const InputWrapper = styled.div`
  width: 100%;
  padding: 0 1rem 1rem 1rem;
`;

export const Bottom = styled.div`
  display: flex;
  justify-content: end;
  padding: 1rem;
  background-color: ${({ theme }) => theme.backgroundColor["voice-nobody"]};
`;
