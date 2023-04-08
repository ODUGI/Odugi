import styled from "styled-components";
import { BackgroundColorType, ColorType } from "@styles/theme";
import useSettingModalStore from "@store/useSettingModalStore";

interface SettingButtonProps {
  text: string;
  fontWeight?: "normal" | "bold";
  color?: ColorType;
  backgroundColor?: BackgroundColorType;
  disabled?: boolean;
  status: SettingBarType;
  type: "user" | "community";
}

const SettingButton = ({
  text,
  fontWeight = "normal",
  status,
  type,
}: SettingButtonProps) => {
  const { settingBarStatus, setSettingBarStatus } = useSettingModalStore();

  const getColor = (status: SettingBarType) => {
    return status === settingBarStatus ? "white" : "tab3-header";
  };

  const getBackgroundColor = (status: SettingBarType) => {
    return status === settingBarStatus ? "active" : "transparent";
  };

  const changeUserStatus = (mainStatus: SettingBarType) => {
    if (type === "community") {
      setSettingBarStatus(mainStatus);
    } else {
      setSettingBarStatus(mainStatus);
    }
  };

  return (
    <SettingButtonContainer
      onClick={() => changeUserStatus(status)}
      fontWeight={fontWeight}
      color={getColor(status)}
      backgroundColor={getBackgroundColor(status)}
    >
      {text}
    </SettingButtonContainer>
  );
};

export const SettingButtonContainer = styled.button<
  Pick<SettingButtonProps, "color" | "backgroundColor" | "fontWeight">
>`
  margin-bottom: 0.25rem;
  text-align: left;
  border: none;
  width: 100%;
  height: 100%;
  font-size: 1rem;
  padding: 0.375rem;
  box-sizing: border-box;
  color: ${({ theme, color }) => theme.color[color]};
  background-color: ${({ theme, backgroundColor }) =>
    theme.backgroundColor[backgroundColor]};
  font-weight: ${({ fontWeight }) => fontWeight};
  border-radius: 0.25rem;
  cursor: pointer;
  &:hover {
    opacity: 1;
    color: ${({ theme }) => theme.color["white"]};
    background-color: ${({ theme }) => theme.backgroundColor["setting"]};
  }
`;

export default SettingButton;
