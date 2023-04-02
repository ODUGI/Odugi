import AddCircleIcon from "@components/atoms/Icons/AddCircleIcon";
import MessageInput from "@components/atoms/Input/MessageInput";
import useOutsideClick from "@hooks/common/useOutsideClick";
import { ChangeEvent, KeyboardEvent, useRef, useState } from "react";
import styled from "styled-components";
import FileUploadeDropdown from "./FileUploadeDropdown";

interface MessageInputProps {
  value: string;
  nickname: string;
  onChange: Function;
  addChatMessage: () => void;
}

const MessageBox = ({
  value,
  nickname,
  onChange,
  addChatMessage,
}: MessageInputProps) => {
  const messageRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLLabelElement>(null);
  const [showUploadDropdown, setShowUploadDropdown] = useState(false);

  useOutsideClick(dropdownRef, () => setShowUploadDropdown(false));

  // const resizeTextAreaHeight = () => {
  //   if (messageRef.current instanceof HTMLTextAreaElement) {
  //     messageRef.current.style.height = "auto";
  //     messageRef.current.style.height = messageRef.current.scrollHeight + "px";
  //   }
  // };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "Enter") {
      return addChatMessage();
    }
    onChange(e.target.value);
    // resizeTextAreaHeight();
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      addChatMessage();
    } else if (e.key === "Tab") {
      e.preventDefault();
    }
  };

  return (
    <MessageInputContainer ref={dropdownRef}>
      <AddButton onClick={() => setShowUploadDropdown((prev) => !prev)}>
        <AddCircleIcon />
        {showUploadDropdown && <FileUploadeDropdown />}
      </AddButton>
      <MessageInput
        ref={messageRef}
        placeholder={`@${nickname}에 메시지 보내기`}
        rows={1}
        value={value}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
    </MessageInputContainer>
  );
};

const MessageInputContainer = styled.label`
  border-radius: 8px;
  padding: 0 1rem;

  display: flex;
  flex-direction: row;

  background-color: ${({ theme }) => theme.backgroundColor["msg-input"]};
`;

const AddButton = styled.button`
  height: 44px;
  padding: 0.625rem 1rem;
  margin-left: -1rem;

  color: ${({ theme }) => theme.color.icon};
  background-color: transparent;

  &:hover {
    color: ${({ theme }) => theme.color.white};
  }
`;

export default MessageBox;
