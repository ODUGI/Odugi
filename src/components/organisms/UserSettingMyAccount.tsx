import Text from "../atoms/Text/Text";
import AccountCard from "./AccountCard";
import SettingWrapper from "./SettingWrapper";
import { Divider } from "@mui/material";
import FieldButton from "../atoms/Button/FieldButton";
import styled from "styled-components";
import useDeleteUser from "@hooks/query/useDeleteUser";

const UserSettingMyAccount = () => {
  const { mutate: deleteUser } = useDeleteUser();

  return (
    <SettingWrapper>
      <>
        <Text color="white" fontWeight="bold" fontSize="xl" mb={20}>
          내 계정
        </Text>
        <AccountCard />
        <Divider
          sx={{ borderColor: "#96989D93", opacity: 0.5, mr: 9, mt: 5, mb: 5 }}
        />
        <Text color="setting-tab" fontSize="xs" mb={10}>
          계정 삭제하기
        </Text>
        <ButtonWrappper>
          <FieldButton
            text="계정 삭제하기"
            onClick={() => deleteUser()}
            backgroundColor="voice-hangup"
            fontWeight="bold"
          />
        </ButtonWrappper>
      </>
    </SettingWrapper>
  );
};

export default UserSettingMyAccount;

const ButtonWrappper = styled.div`
  width: 7.5rem;
  height: 2rem;
`;
