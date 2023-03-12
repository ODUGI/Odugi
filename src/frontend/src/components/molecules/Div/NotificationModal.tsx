import DropdownContainer from "@components/atoms/Div/DropdownContainer";
import RadioButtonUncheckedIcon from "@components/atoms/Icons/RadioButtonUncheckedIcon";
import { RadioButtonChecked } from "@mui/icons-material";
import { useState } from "react";
import DropdownButton from "../Button/DropdownButton";

const NotificationModal = () => {
  const [type, setType] = useState(1);

  return (
    <DropdownContainer width={188} top={40} right={160}>
      <DropdownButton
        text="카테고리 기본값 사용"
        color="auth-desc"
        onClick={() => setType(1)}
        Icon={
          type === 1 ? <RadioButtonChecked /> : <RadioButtonUncheckedIcon />
        }
      />
      <DropdownButton
        text="모든 메시지"
        color="auth-desc"
        onClick={() => setType(2)}
        Icon={
          type === 2 ? <RadioButtonChecked /> : <RadioButtonUncheckedIcon />
        }
      />
      <DropdownButton
        text="@mentions만"
        color="auth-desc"
        onClick={() => setType(3)}
        Icon={
          type === 3 ? <RadioButtonChecked /> : <RadioButtonUncheckedIcon />
        }
      />
      <DropdownButton
        text="없음"
        color="auth-desc"
        onClick={() => setType(4)}
        fontSize="sm"
        Icon={
          type === 4 ? <RadioButtonChecked /> : <RadioButtonUncheckedIcon />
        }
      />
    </DropdownContainer>
  );
};

export default NotificationModal;
