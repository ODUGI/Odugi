import { create } from "zustand";
import { devtools } from "zustand/middleware";

export type SettingModalType = null | "name" | "password" | "intro" | "image";

interface SettingModalState {
  showSettingModal: boolean;
  settingBarStatus: SettingBarType;
  settingModalType: SettingModalType;
}

interface SettingModalAction {
  setShowSettingModal: (showSettingModal: boolean) => void;
  setSettingBarStatus: (settingBarStatus: SettingBarType) => void;
  setSettingModalType: (settingModalType: SettingModalType) => void;
}

const useSettingModalStore = create<SettingModalState & SettingModalAction>()(
  devtools((set) => ({
    showSettingModal: false,
    settingBarStatus: null,
    settingModalType: null,

    setShowSettingModal: (showSettingModal: boolean) =>
      set({ showSettingModal }),
    setSettingBarStatus: (settingBarStatus: SettingBarType) =>
      set({ settingBarStatus }),
    setSettingModalType: (settingModalType: SettingModalType) =>
      set({ settingModalType }),
  }))
);

export default useSettingModalStore;
