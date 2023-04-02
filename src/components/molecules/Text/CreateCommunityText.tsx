import Text from "@components/atoms/Text/Text";
import styled from "styled-components";

const CreateCommunityText = () => {
  return (
    <CreateCommunityTextContainer>
      <Text fontSize="xxl" fontWeight="bold" mb={12} color="white">
        서버 커스터마이징하기
      </Text>
      <Text fontSize="base" color="auth-desc" center>
        새로운 서버에 이름과 아이콘을 부여해 개성을 드러내 보세요. 나중에 언제든
        바꿀 수 있어요.
      </Text>
    </CreateCommunityTextContainer>
  );
};

const CreateCommunityTextContainer = styled.div`
  text-align: center;
  margin-bottom: 1.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export default CreateCommunityText;
