import { create } from "zustand";
import { devtools } from "zustand/middleware";

export type SettingModalType = null | "name" | "password" | "intro" | "image";

interface SettingModalState {
  showSettingModal: boolean;
  settingModalType: SettingModalType;
}

interface SettingModalAction {
  setShowSettingModal: (showSettingModal: boolean) => void;
  setSettingModalType: (settingModalType: SettingModalType) => void;
}

const useSettingModalStore = create<SettingModalState & SettingModalAction>()(
  devtools((set) => ({
    showSettingModal: false,
    settingModalType: null,

    setShowSettingModal: (showSettingModal: boolean) =>
      set({ showSettingModal }),
    setSettingModalType: (settingModalType: SettingModalType) =>
      set({ settingModalType }),
  }))
);

export default useSettingModalStore;
