import Text from "@components/atoms/Text/Text";
import InviteInput from "../Input/InviteInput";

const AddFriend = () => {
  return (
    <>
      <Text fontWeight="bold" color="white" mb={8}>
        친구 추가하기
      </Text>
      <Text color="auth-desc" fontSize="sm" mb={16}>
        이메일을 작성하여 친구를 추가할 수 있어요.
      </Text>
      <InviteInput />
    </>
  );
};

export default AddFriend;
