import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface ModalState {
  inviteFriendModal: boolean;
  userSettingModal: boolean;
  communitySettingModal: boolean;
}

interface ModalAction {
  setInviteFriendModal: (inviteFriendModal: boolean) => void;
  setUserSettingModal: (userSettingModal: boolean) => void;
  setCommunitySettingModal: (communitySettingModal: boolean) => void;
}

const useModalStore = create<ModalState & ModalAction>()(
  devtools((set) => ({
    inviteFriendModal: false,
    userSettingModal: false,
    communitySettingModal: false,

    setInviteFriendModal: (inviteFriendModal: boolean) =>
      set({ inviteFriendModal }),
    setUserSettingModal: (userSettingModal: boolean) =>
      set({ userSettingModal }),
    setCommunitySettingModal: (communitySettingModal: boolean) =>
      set({ communitySettingModal }),
  }))
);

export default useModalStore;
