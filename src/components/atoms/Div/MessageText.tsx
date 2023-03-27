import getFormatTime from "@utils/getFormatTime";
import { forwardRef, useCallback, useMemo } from "react";
import styled from "styled-components";
import { ColorType, FontSizeType } from "@styles/theme";
import LinkText from "../Text/LinkText";
import useEnterInvitation from "@hooks/query/useEnterInvitation";
import validateUrl from "@utils/validateUrl";

interface MessageTextProps {
  text: string;
  hasDate: boolean;
  createdAt: Date;
}

const MessageText = forwardRef<HTMLParagraphElement, MessageTextProps>(
  ({ text, hasDate, createdAt }, ref) => {
    const { mutate: enterInvitation } = useEnterInvitation();
    const hasLink = useMemo(() => validateUrl(text), [text]);
    const words = text.split(" ");
    const link = words[0];
    words.splice(0, 1);
    const chat2 = words.join(" ");

    const clickInvitation = useCallback(() => {
      enterInvitation();
      window.location.replace(link);
    }, []);

    return (
      <MessageTextContainer>
        {hasDate && (
          <MessageDate className="msg-date">
            <Message ref={ref} color="auth-label" fontSize="xs">
              {getFormatTime(createdAt)}
            </Message>
          </MessageDate>
        )}
        <MessageContainer>
          {hasLink && <LinkText text={link} onClick={clickInvitation} />}(
          <Message ref={ref} color="msg">
            {hasLink ? chat2 : text}
          </Message>
          )
        </MessageContainer>
      </MessageTextContainer>
    );
  }
);

const MessageTextContainer = styled.div`
  p {
    word-break: break-all;
  }
  display: flex;
  align-items: center;
`;

const MessageDate = styled.span`
  position: absolute;
  margin-left: 0.75rem;
  visibility: hidden;
`;

const MessageContainer = styled.div`
  left: 0;
  padding: 0.125rem 3rem 0.125rem 4.5rem;
`;

interface MessageProps {
  fontSize?: FontSizeType;
  color?: ColorType;
  mb?: number;
  mr?: number;
  center?: boolean;
}

const Message = styled.p<MessageProps>`
  line-height: 1.5rem;
  color: ${({ theme, color }) => theme.color[color]};
  font-size: ${({ theme, fontSize }) => theme.fontSize[fontSize]};
  margin-top: 0;
  margin-left: 0;
`;

export default MessageText;
