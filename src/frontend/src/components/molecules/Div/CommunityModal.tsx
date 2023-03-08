import DropdownModal from "@components/atoms/Div/DropdownModal";
import EditIcon from "@components/atoms/Icons/EditIcon";
import LogoutIcon from "@components/atoms/Icons/LogoutIcon";
import PersonAddIcon from "@components/atoms/Icons/PersonAddIcon";
import useModalStore from "@store/useModalStore";
import styled from "styled-components";
import DropdownModalButton from "../Button/DropdownModalButton";

const CommunityModal = ({ setShowModal }: any) => {
  const { setInviteFriendModal, setCommunitySettingModal } = useModalStore();

  const setModal = () => {
    setCommunitySettingModal(true);
    setShowModal(false);
  };

  return (
    <DropdownModal width={220} top={55} left={80}>
      <DropdownModalButton
        text="초대하기"
        color="invite"
        onClick={() => setInviteFriendModal(true)}
        Icon={<PersonAddIcon />}
      />
      <DropdownModalButton
        text="서버 설정"
        onClick={() => setModal()}
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
