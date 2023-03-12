import { MouseEventHandler } from "react";
import styled from "styled-components";
import { BackgroundColorType, ColorType } from "@styles/theme";
import useCommunityStore, { SettingStatusType } from "@store/useCommunityStore";

interface SettingButtonProps {
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  fontWeight?: "normal" | "bold";
  color?: ColorType;
  backgroundColor?: BackgroundColorType;
  disabled?: boolean;
  status: SettingStatusType;
}

const CommunitySettingButton = ({
  text,
  onClick,
  fontWeight = "normal",
  status,
}: SettingButtonProps) => {
  const { settingStatus, setSettingStatus } = useCommunityStore();

  const getColor = (status: SettingStatusType) => {
    return status === settingStatus ? "white" : "tab3-header";
  };

  const getBackgroundColor = (status: SettingStatusType) => {
    return status === settingStatus ? "active" : "trans";
  };

  const changeUserStatus = (mainStatus: SettingStatusType) => {
    setSettingStatus(mainStatus);
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

export default CommunitySettingButton;
