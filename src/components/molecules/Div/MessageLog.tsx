import UserLogo from "@components/atoms/Div/UserLogo";
import MessageText from "@components/atoms/Div/MessageText";
import { createRef, useEffect, useState } from "react";
import styled from "styled-components";
import MessageUserDate from "./MessageUserDate";

interface MessageLogProps {
  hasImage?: boolean;
  imageUrl?: string;
  name?: string;
  createdAt: string;
  text: string;
}

const MessageLog = ({
  text,
  name,
  hasImage = false,
  imageUrl,
  createdAt,
}: MessageLogProps) => {
  const [height, setHeight] = useState(24);
  const textRef = createRef<HTMLParagraphElement>();

  useEffect(() => {
    if (textRef?.current) {
      const textHeight = textRef.current.offsetHeight;
      setHeight(textHeight);
    }
  }, []);

  return (
    <MessageLogContainer hasImage={hasImage} height={height}>
      {/* <MessageHoverButtons /> */}
      {hasImage && (
        <LogoImageContainer>
          <UserLogo
            src={imageUrl}
            height={2.5}
            width={2.5}
            onClick={() => null}
          />
        </LogoImageContainer>
      )}
      <TextContainer>
        {hasImage && name && (
          <MessageUserDate name={name} createdAt={createdAt} />
        )}
        <MessageText
          ref={textRef}
          text={text}
          hasDate={!hasImage}
          createdAt={new Date(createdAt)}
        />
      </TextContainer>
    </MessageLogContainer>
  );
};

const MessageLogContainer = styled.div<{ hasImage: boolean; height: number }>`
  margin-top: ${({ hasImage }) => (hasImage ? 16 : 0)}px;
  padding-top: ${({ hasImage }) => (hasImage ? 12 : 0)}px;
  position: relative;
  display: flex;
  flex-direction: row;

  &:hover {
    background-color: ${({ theme }) => theme.backgroundColor["msg-hover"]};

    .msg-hover,
    .msg-date {
      visibility: visible;
    }
  }
`;

const LogoImageContainer = styled.div`
  margin-left: 16px;
  position: absolute;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export default MessageLog;
