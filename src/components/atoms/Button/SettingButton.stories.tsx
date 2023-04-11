import { BackgroundColorType, ColorType } from "@styles/theme";
import SettingButton from "./SettingButton";

export default {
  title: "atoms/Button",
  component: SettingButton,
};

interface SettingArgs {
  text: string;
  fontWeight: "normal" | "bold";
  color: ColorType;
  backgroundColor: BackgroundColorType;
  disabled: boolean;
  status: SettingBarType;
  type: "user" | "community";
}

export const Setting = (args: SettingArgs) => {
  return <SettingButton {...args} />;
};

Setting.args = {
  text: "텍스트입니다",
  fontWeight: "normal",
  status: "내 계정",
  type: "user",
};

Setting.argTypes = {
  fontWeight: { control: { type: "select", options: ["normal", "bold"] } },
  status: {
    control: {
      type: "select",
      options: ["내 계정", "프로필", "알림", "일반", "멤버", "초대"],
    },
  },
  type: { control: { type: "select", options: ["user", "community"] } },
};
