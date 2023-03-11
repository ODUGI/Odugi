import DropdownModal from "@components/atoms/Div/DropdownModal";
import useRejectFriend from "@hooks/query/useRejectFriend";
import useMainStore from "@store/useMainStore";
import { MouseEvent } from "react";
import styled from "styled-components";
import DropdownModalButton from "../Button/DropdownModalButton";

const EtcModal = () => {
  const { deleteFriendEmail } = useMainStore();
  const { mutate: deleteFriend } = useRejectFriend();

  const clickDeleteFriend = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    deleteFriend({ email: deleteFriendEmail });
  };

  return (
    <EtcModalContainer>
      <DropdownModal width={188} left={0}>
        <DropdownModalButton text="영상 통화 시작하기" onClick={() => null} />
        <DropdownModalButton text="음성 통화 시작하기" onClick={() => null} />
        <DropdownModalButton
          text="친구 삭제하기"
          color="red"
          hoverBackgroundColor="voice-hangup"
          onClick={clickDeleteFriend}
        />
      </DropdownModal>
    </EtcModalContainer>
  );
};

const EtcModalContainer = styled.div``;

export default EtcModal;
