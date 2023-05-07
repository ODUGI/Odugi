import { ChangeEventHandler, forwardRef, KeyboardEvent } from "react";
import styled from "styled-components";

interface MessageInputProps {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onKeyPress: (e: KeyboardEvent<HTMLInputElement>) => void;
  placeholder?: string;
  rows?: number;
}

const MessageInput = forwardRef<HTMLInputElement, MessageInputProps>(
  ({ value, onChange, placeholder = "", onKeyPress }, ref) => {
    return (
      <TextArea
        ref={ref}
        value={value}
        onChange={onChange}
        onKeyPress={onKeyPress}
        placeholder={placeholder}
      />
    );
  }
);

const TextArea = styled.input`
  line-height: 22px;
  vertical-align: middle;
  flex: 1;
  border: none;
  resize: none;
  outline: none;
  overflow-y: hidden;
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.fontSize.base};
  background-color: ${({ theme }) => theme.backgroundColor.transparent};
  padding: 0.6875rem 0.875rem 0.6875rem 0;

  ::placeholder {
    color: ${({ theme }) => theme.color["msg-placeholder"]};
  }
`;

export default MessageInput;
