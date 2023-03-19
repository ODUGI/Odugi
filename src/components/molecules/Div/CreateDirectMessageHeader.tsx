import DefaultInput from "@components/atoms/Input/DefaultInput";
import Text from "@components/atoms/Text/Text";
import { ChangeEventHandler } from "react";
import styled from "styled-components";

interface CreateDirectMesssageHeaderProps {
  addFriendNum: number;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const CreateDirectMesssageHeader = ({
  addFriendNum,
  value,
  onChange,
}: CreateDirectMesssageHeaderProps) => {
  return (
    <CreateDirectMesssageHeaderContainer>
      <Text color="white" fontSize="lg" mb={8}>
        친구 선택하기
      </Text>
      <Text color="auth-desc" fontSize="xs" mb={16}>
        친구를 {9 - addFriendNum}명 더 추가할 수 있어요.
      </Text>
      <DefaultInput
        placeholder="친구의 사용자명 입력하기"
        value={value}
        onChange={onChange}
        type="text"
      />
    </CreateDirectMesssageHeaderContainer>
  );
};

const CreateDirectMesssageHeaderContainer = styled.div`
  margin-bottom: 12px;
`;

export default CreateDirectMesssageHeader;
