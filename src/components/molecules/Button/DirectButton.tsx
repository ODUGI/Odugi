import styled from "styled-components";
import ButtonWrapper from "@components/atoms/Button/ButtonWrapper";
import Text from "@components/atoms/Text/Text";
import { useNavigate, useParams } from "react-router-dom";
import UserState from "../Div/UserState";
// import useGetFriendStatus from "@hooks/query/useGetFriendStatus";
import useMainStore from "@store/useMainStore";

interface DirectButtonProps {
  id: string;
  name: string;
  userId: number;
  src?: string;
}

const DirectButton = ({ id, name, userId, src }: DirectButtonProps) => {
  const { channelId } = useParams();
  const navigate = useNavigate();

  const { setUserId, setUserName } = useMainStore();

  // const { data: status, isLoading } = useGetFriendStatus(userId);

  // if (isLoading) return <></>;

  const goChatRoom = () => {
    setUserId(userId);
    setUserName(name);
    navigate(`/@me/${id}`);
  };

  return (
    <ButtonWrapper
      active={channelId === id}
      onClick={goChatRoom}
      height={42}
      ph={8}
      color="inactive"
    >
      <DirectButtonContainer>
        <UserState
          type="s"
          // status={status?.data.data}
          status="0"
          src={src}
        />
        <Text>{name}</Text>
      </DirectButtonContainer>
    </ButtonWrapper>
  );
};

const DirectButtonContainer = styled.div`
  height: 42px;
  align-items: center;
  display: flex;
  gap: 0.75rem;
`;

export default DirectButton;
