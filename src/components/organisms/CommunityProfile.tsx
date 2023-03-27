import DefaultForm from "@components/molecules/Form/DefaultForm";
import { useRef } from "react";
import styled from "styled-components";
import DropDown from "../atoms/Div/DropDown";
import Text from "../atoms/Text/Text";

const CommunityProfile = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  return (
    <ProfileWrapper>
      <Text fontSize="base" color="setting-tab" mb={16} fontWeight="bold">
        서버 프로필
      </Text>
      <BlockWrapper>
        <Text fontSize="sm" color="msg-placeholder" mb={16}>
          참가 중인 서버마다 다른 프로필을 사용하여 보세요.
        </Text>
        <Text fontSize="xs" color="setting-tab" mb={12} fontWeight="bold">
          서버 선택하기
        </Text>
        <DropDown />
      </BlockWrapper>
      <BlockWrapper>
        <DefaultForm ref={nameRef} type="community">
          서버이름
        </DefaultForm>
      </BlockWrapper>
    </ProfileWrapper>
  );
};

const ProfileWrapper = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
`;

const BlockWrapper = styled.div`
  margin-bottom: 1.5rem;
  border-bottom: 0.25rem solid ${({ theme }) => theme.color["setting-tab"]};
  padding-bottom: 1rem;
`;

export default CommunityProfile;
