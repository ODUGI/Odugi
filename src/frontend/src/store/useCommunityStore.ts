import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

export type SettingStatusType = "일반" | "멤버" | "초대";

interface CommunityState {
  server: string;
  settingStatus: SettingStatusType;
}

interface CommunityAction {
  setServer: (server: string) => void;
  setSettingStatus: (settingStatus: SettingStatusType) => void;
}

const useCommunityStore = create<CommunityState & CommunityAction>()(
  devtools(
    persist(
      (set) => ({
        server: "메인",
        settingStatus: "일반",

        setServer: (server: string) => set({ server }),
        setSettingStatus: (settingStatus: SettingStatusType) =>
          set({ settingStatus }),
      }),
      { name: "server" }
    )
  )
);

export default useCommunityStore;
