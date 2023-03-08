import DropdownModal from "@components/atoms/Div/DropdownModal";
import EditIcon from "@components/atoms/Icons/EditIcon";
import LogoutIcon from "@components/atoms/Icons/LogoutIcon";
import PersonAddIcon from "@components/atoms/Icons/PersonAddIcon";
import useModalStore, { ModalType } from "@store/useModalStore";
import styled from "styled-components";
import DropdownModalButton from "../Button/DropdownModalButton";

const CommunityModal = () => {
  const { setModalType, setShowModal } = useModalStore();

  const setModal = (modalType: ModalType) => {
    setModalType(modalType);
    setShowModal(true);
  };

  return (
    <DropdownModal width={220} top={55} left={80}>
      <DropdownModalButton
        text="초대하기"
        color="invite"
        onClick={() => setModal("inviteFriend")}
        Icon={<PersonAddIcon />}
      />
      <DropdownModalButton
        text="서버 설정"
        onClick={() => setModal("communitySetting")}
        Icon={<EditIcon />}
      />
      <Divider />
      <DropdownModalButton
        text="서버 나가기"
        color="red"
        hoverBackgroundColor="voice-hangup"
        onClick={() => null}
        Icon={<LogoutIcon />}
      />
    </DropdownModal>
  );
};

const Divider = styled.div`
  height: 1px;
  background-color: ${({ theme }) => theme.backgroundColor.divider};
`;

export default CommunityModal;
