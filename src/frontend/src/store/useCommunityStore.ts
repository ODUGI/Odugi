import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

export type SettingStatusType = "일반" | "멤버" | "초대";

interface CommunityState {
  communityStatus: string;
  settingStatus: SettingStatusType;
}

interface CommunityAction {
  setCommunityStatus: (communityStatus: string) => void;
  setSettingStatus: (settingStatus: SettingStatusType) => void;
}

const useCommunityStore = create<CommunityState & CommunityAction>()(
  devtools(
    persist(
      (set) => ({
        communityStatus: "메인",
        settingStatus: "일반",

        setCommunityStatus: (communityStatus: string) =>
          set({ communityStatus }),
        setSettingStatus: (settingStatus: SettingStatusType) =>
          set({ settingStatus }),
      }),
      { name: "community" }
    )
  )
);

export default useCommunityStore;
