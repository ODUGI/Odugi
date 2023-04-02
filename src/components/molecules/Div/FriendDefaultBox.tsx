import Tip from "@components/atoms/Div/Tooltip";
import CancelIcon from "@components/atoms/Icons/CancelIcon";
import ChatIcon from "@components/atoms/Icons/ChatIcon";
import MoreIcon from "@components/atoms/Icons/MoreIcon";
import useOutsideClick from "@hooks/common/useOutsideClick";
import useGetFriendStatus from "@hooks/query/useGetFriendStatus";
import useMainStore from "@store/useMainStore";
import { MouseEvent, ReactElement, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import RoundButton from "../Button/RoundButton";
import FriendEtcDropdown from "./FriendEtcDropdown";
import FriendBox from "./FriendBox";

interface FriendDefaultBoxProps {
  email: string;
  id: string;
  name: string;
  userId: number;
  // status: FriendStateType;
  status: any;
  src: string;
}

const FriendDefaultBox = ({
  email,
  id,
  name,
  userId,
  status,
  src,
}: FriendDefaultBoxProps) => {
  const navigate = useNavigate();

  const dropdownRef = useRef<HTMLDivElement>(null);
  const [showEtcModal, setShowEtcModal] = useState(false);

  const { setDeleteFriendEmail } = useMainStore();
  const { setUserName, setUserId } = useMainStore();
  const { data: isOnline, isLoading } = useGetFriendStatus(userId);

  useOutsideClick(dropdownRef, () => setShowEtcModal(false));

  if (isLoading) return null;

  if (isOnline?.data.data !== "1") {
    return null;
  }

  const enterDM = () => {
    navigate(`/@me/${id}`);
    setUserName(name);
    setUserId(userId);
  };

  const clickChatIcon = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setDeleteFriendEmail(email);
    setShowEtcModal(!showEtcModal);
  };

  let Buttons: ReactElement;
  if (status === "WAIT") {
    Buttons = (
      <Tip title="취소" place="top">
        <RoundButton Icon={<CancelIcon />} onClick={() => null} />
      </Tip>
    );
  } else {
    Buttons = (
      <>
        <Tip title="메시지 보내기" place="top">
          <RoundButton Icon={<ChatIcon />} onClick={enterDM} />
        </Tip>
        <EtcContainer ref={dropdownRef}>
          <Tip title="기타" place="top">
            <RoundButton Icon={<MoreIcon />} onClick={clickChatIcon} />
          </Tip>
          {showEtcModal && <FriendEtcDropdown />}
        </EtcContainer>
      </>
    );
  }
  return (
    <FriendBox
      src={src}
      name={name}
      status={isOnline?.data.data}
      onClick={enterDM}
      Buttons={Buttons}
    />
  );
};

const EtcContainer = styled.div``;

export default FriendDefaultBox;
