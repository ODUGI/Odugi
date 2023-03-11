import DropdownModal from "@components/atoms/Div/DropdownModal";
import RadioButtonUncheckedIcon from "@components/atoms/Icons/RadioButtonUncheckedIcon";
import { RadioButtonChecked } from "@mui/icons-material";
import { useState } from "react";
import DropdownModalButton from "../Button/DropdownModalButton";

const NotificationModal = () => {
  const [type, setType] = useState(1);

  return (
    <DropdownModal width={188} top={40} right={160}>
      <DropdownModalButton
        text="카테고리 기본값 사용"
        color="auth-desc"
        onClick={() => setType(1)}
        Icon={
          type === 1 ? <RadioButtonChecked /> : <RadioButtonUncheckedIcon />
        }
      />
      <DropdownModalButton
        text="모든 메시지"
        color="auth-desc"
        onClick={() => setType(2)}
        Icon={
          type === 2 ? <RadioButtonChecked /> : <RadioButtonUncheckedIcon />
        }
      />
      <DropdownModalButton
        text="@mentions만"
        color="auth-desc"
        onClick={() => setType(3)}
        Icon={
          type === 3 ? <RadioButtonChecked /> : <RadioButtonUncheckedIcon />
        }
      />
      <DropdownModalButton
        text="없음"
        color="auth-desc"
        onClick={() => setType(4)}
        fontSize="sm"
        Icon={
          type === 4 ? <RadioButtonChecked /> : <RadioButtonUncheckedIcon />
        }
      />
    </DropdownModal>
  );
};

export default NotificationModal;
