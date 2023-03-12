import DropdownContainer from "@components/atoms/Div/DropdownContainer";
import useRejectFriend from "@hooks/query/useRejectFriend";
import useMainStore from "@store/useMainStore";
import { MouseEvent } from "react";
import styled from "styled-components";
import DropdownButton from "../Button/DropdownButton";

const FriendEtcDropdown = () => {
  const { deleteFriendEmail } = useMainStore();
  const { mutate: deleteFriend } = useRejectFriend();

  const clickDeleteFriend = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    deleteFriend({ email: deleteFriendEmail });
  };

  return (
    <EtcModalContainer>
      <DropdownContainer width={188} right={50}>
        <DropdownButton text="영상 통화 시작하기" onClick={() => null} />
        <DropdownButton text="음성 통화 시작하기" onClick={() => null} />
        <DropdownButton
          text="친구 삭제하기"
          color="red"
          hoverBackgroundColor="voice-hangup"
          onClick={clickDeleteFriend}
        />
      </DropdownContainer>
    </EtcModalContainer>
  );
};

const EtcModalContainer = styled.div``;

export default FriendEtcDropdown;
