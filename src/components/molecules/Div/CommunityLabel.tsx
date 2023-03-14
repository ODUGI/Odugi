import ArrowBottomIcon from "@components/atoms/Icons/ArrowBottomIcon";
import Text from "@components/atoms/Text/Text";
import styled from "styled-components";

interface CommunityLabelProps {
  text: string;
}

const CommunityLabel = ({ text }: CommunityLabelProps) => {
  return (
    <CommunityLabelContainer>
      <ArrowBottomIcon />
      <Text text={text} fontSize="xs" fontWeight="bold" />
    </CommunityLabelContainer>
  );
};

const CommunityLabelContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  padding-top: 1rem;
  padding-left: 0.25rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.color.inactive};
  svg {
    font-size: ${({ theme }) => theme.fontSize.xs};
  }
  &:hover {
    color: ${({ theme }) => theme.color.white};
  }
`;

export default CommunityLabel;
