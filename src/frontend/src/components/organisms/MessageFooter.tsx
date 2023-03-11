import useSendToStore from "@store/useSendToStore";
import { Dispatch, SetStateAction } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import MessageBox from "../molecules/Div/MessageBox";

interface MessageFooterProps {
  message: string;
  setMessage: Dispatch<SetStateAction<string>>;
  addChatMessage: () => void;
}

const MessageFooter = ({
  message,
  setMessage,
  addChatMessage,
}: MessageFooterProps) => {
  const { communityId } = useParams();
  const { sendTo } = useSendToStore();

  const onChange = (v: string) => {
    setMessage(v);
  };

  return (
    <MessageFooterContainer isCommunity={!!communityId}>
      <MessageBox
        value={message}
        onChange={onChange}
        nickname={sendTo}
        addChatMessage={addChatMessage}
      />
    </MessageFooterContainer>
  );
};

const MessageFooterContainer = styled.div<{ isCommunity: boolean }>`
  position: relative;
  background-color: ${({ theme }) => theme.backgroundColor.tab3};
  width: ${({ isCommunity }) =>
    isCommunity ? "calc(100vw - 19.6875rem)" : "calc(100vw - 41.875rem)"};
  position: absolute;
  bottom: 0;
  padding: 0 1rem 1.5rem 1rem;
  @media (max-width: 75rem) {
    width: calc(100vw - 19.6875rem);
  }
`;

export default MessageFooter;
