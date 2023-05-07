import MessageText from "@components/atoms/Div/MessageText";
import WelcomeIcon from "@components/atoms/Icons/WelcomeIcon";
import styled from "styled-components";
interface WelcomeMessageProps {
  name: string;
}

const WelcomeMessage = ({ name }: WelcomeMessageProps) => {
  return (
    <WelcomeMessageContainer>
      <IconWrapper>
        <WelcomeIcon />
      </IconWrapper>

      <MessageText
        hasDate={false}
        text={`${name} 님이 입장하셨어요!`}
        createdAt={new Date()}
      />
    </WelcomeMessageContainer>
  );
};

const WelcomeMessageContainer = styled.div`
  position: relative;
  display: flex;
`;

const IconWrapper = styled.div`
  position: absolute;
  left: 20px;
`;

export default WelcomeMessage;
