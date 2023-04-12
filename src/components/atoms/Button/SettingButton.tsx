import styled from "styled-components";
import { BackgroundColorType, ColorType } from "@styles/theme";
import useSettingModalStore from "@store/useSettingModalStore";
import { UseMutateFunction } from "@tanstack/react-query";

interface SettingButtonProps {
  onClick?: UseMutateFunction | null;
  text: string;
  fontWeight?: "normal" | "bold";
  color?: ColorType;
  disabled?: boolean;
  status?: SettingBarType;
}

const SettingButton = ({
  onClick = null,
  text,
  fontWeight = "normal",
  status = null,
}: SettingButtonProps) => {
  const { settingBarStatus, setSettingBarStatus } = useSettingModalStore();

  const getColor = (status: SettingBarType) => {
    return status === settingBarStatus ? "white" : "tab3-header";
  };

  const getBackgroundColor = (status: SettingBarType) => {
    return status === settingBarStatus ? "active" : "transparent";
  };

  const changeUserStatus = (mainStatus: SettingBarType) => {
    setSettingBarStatus(mainStatus);
  };

  const handleClickButton = () => {
    if (onClick) return onClick();
    return changeUserStatus(status);
  };

  return (
    <SettingButtonContainer
      onClick={handleClickButton}
      fontWeight={fontWeight}
      color={getColor(status)}
      backgroundColor={getBackgroundColor(status)}
    >
      {text}
    </SettingButtonContainer>
  );
};

interface SettingButtonContainerProps {
  color: ColorType;
  backgroundColor: BackgroundColorType;
  fontWeight: "normal" | "bold";
}

const SettingButtonContainer = styled.button<SettingButtonContainerProps>`
  border: none;
  width: 100%;
  height: 100%;
  font-size: 1rem;
  font-weight: ${({ fontWeight }) => fontWeight};
  text-align: left;

  padding: 0.375rem;
  margin-bottom: 0.25rem;

  color: ${({ theme, color }) => theme.color[color]};
  background-color: ${({ theme, backgroundColor }) =>
    theme.backgroundColor[backgroundColor]};
  border-radius: 0.25rem;

  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.color["white"]};
    background-color: ${({ theme }) => theme.backgroundColor["setting"]};
  }
`;

export default SettingButton;
