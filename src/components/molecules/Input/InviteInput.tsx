import DefaultButton from "@components/atoms/Button/DefaultButton";
import DefaultInput from "@components/atoms/Input/DefaultInput";
import Text from "@components/atoms/Text/Text";
import useRequestFriend from "@hooks/query/useRequestFriend";
import { useUserStore } from "@store/useUserStore";
import { useQueryClient } from "@tanstack/react-query";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const InviteInput = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { userInfo } = useUserStore();

  const emailRef = useRef<HTMLInputElement>(null);
  const [status, setStatus] = useState("default");

  const { mutate: requestFriend } = useRequestFriend({
    onMutate: () => {
      if (emailRef?.current) {
        emailRef.current.value = "";
      }
    },
    onError: () => {
      setStatus("danger");
    },
    onSuccess: () => {
      setStatus("success");
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["friendList"] });
    },
  });

  const inviteFriend = () => {
    if (!userInfo) navigate("/login");
    if (emailRef?.current) {
      requestFriend({ email: emailRef.current.value });
    }
  };

  console.log(emailRef.current);
  return (
    <>
      <InviteInputContainer borderColor={status}>
        <DefaultInput
          ref={emailRef}
          maxLength={37}
          placeholder="사용자 이메일 입력"
          type="email"
          fontSize="base"
          backgroundColor="transparent"
        />
        <DefaultButton
          text="친구 요청 보내기"
          onClick={inviteFriend}
          height={32}
          width={130}
          fontSize="sm"
        />
      </InviteInputContainer>
      {status === "success" && (
        <Text color="invite-success">
          {emailRef.current?.value}에게 성공적으로 친구 요청을 보냈어요.
        </Text>
      )}
      {status === "danger" && (
        <Text color="invite-danger">
          음, 안되네요. 이메일이 정확한지 다시 한 번 확인해주세요.
        </Text>
      )}
    </>
  );
};

const InviteInputContainer = styled.label<{ borderColor: any }>`
  width: 100%;
  height: 3.125rem;

  display: flex;
  flex-direction: row;
  align-items: center;

  background-color: ${({ theme }) => theme.backgroundColor.tab1};
  border-radius: 0.5rem;
  border: 2px solid
    ${({ theme, borderColor }) => theme.borderColor[borderColor]};
  padding: 0 0.75rem 0 0.125rem;
  margin-bottom: 0.5rem;

  &:has(input:focus) {
    border-color: ${({ theme, borderColor }) =>
      borderColor === "default"
        ? theme.borderColor.focus
        : theme.borderColor[borderColor]};
  }
`;

export default InviteInput;
