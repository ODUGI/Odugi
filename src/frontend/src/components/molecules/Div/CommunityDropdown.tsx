import DropdownContainer from "@components/atoms/Div/DropdownContainer";
import EditIcon from "@components/atoms/Icons/EditIcon";
import LogoutIcon from "@components/atoms/Icons/LogoutIcon";
import PersonAddIcon from "@components/atoms/Icons/PersonAddIcon";
import useModalStore, { ModalType } from "@store/useModalStore";
import styled from "styled-components";
import DropdownButton from "../Button/DropdownButton";

const CommunityDropdown = () => {
  const { setModalType, setShowModal } = useModalStore();

  const setModal = (modalType: ModalType) => {
    console.log("modalType", modalType);
    setModalType(modalType);
    setShowModal(true);
  };

  return (
    <DropdownContainer width={220} top={55} left={10}>
      <DropdownButton
        text="초대하기"
        color="invite"
        onClick={() => setModal("inviteFriend")}
        Icon={<PersonAddIcon />}
      />
      <DropdownButton
        text="서버 설정"
        onClick={() => setModal("communitySetting")}
        Icon={<EditIcon />}
      />
      <Divider />
      <DropdownButton
        text="서버 나가기"
        color="red"
        hoverBackgroundColor="voice-hangup"
        onClick={() => null}
        Icon={<LogoutIcon />}
      />
    </DropdownContainer>
  );
};

const Divider = styled.div`
  height: 1px;
  background-color: ${({ theme }) => theme.backgroundColor.divider};
`;

export default CommunityDropdown;
