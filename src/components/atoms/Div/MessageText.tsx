import getFormatTime from "@utils/getFormatTime";
import { forwardRef, useCallback, useMemo, useState } from "react";
import styled from "styled-components";
import { ColorType, FontSizeType } from "@styles/theme";
import LinkText from "../Text/LinkText";
import useEnterInvitation from "@hooks/query/useEnterInvitation";
import validateUrl from "@utils/validateUrl";
import useClickInvite from "@hooks/query/useClickInvite";
import { useUserStore } from "@store/useUserStore";
import { useNavigate, useParams } from "react-router-dom";
import useAcceptInvite from "@hooks/query/useAcceptInvite";

interface MessageTextProps {
  text: string;
  hasDate: boolean;
  createdAt: Date;
}

const MessageText = forwardRef<HTMLParagraphElement, MessageTextProps>(
  ({ text, hasDate, createdAt }, ref) => {
    const [fetchInvite, setFetchInvite] = useState(false);
    const { mutate: enterInvitation } = useEnterInvitation();
    const { mutate: clickInvite } = useClickInvite();
    const hasLink = useMemo(() => validateUrl(text), [text]);
    const words = text.split(" ");
    const link = words[0];
    console.log(link);
    const { channelId } = useParams();
    const navigate = useNavigate();
    words.splice(0, 1);
    const chat2 = words.join(" ");
    const { userInfo } = useUserStore();
    const clickInvitation = useCallback(() => {
      enterInvitation();
      // window.location.replace(link);
    }, []);

    useAcceptInvite(link, fetchInvite, setFetchInvite);

    const ClickInvitationTest = () => {
      // clickInvite({ sender: userInfo.name, channelId, link });
      setFetchInvite(true);
    };
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
          {hasLink && <LinkText text={link} onClick={ClickInvitationTest} />}(
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
