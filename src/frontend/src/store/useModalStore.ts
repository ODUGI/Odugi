import { create } from "zustand";
import { devtools } from "zustand/middleware";

export type ModalType =
  | null
  | "inviteFriend"
  | "userSetting"
  | "community"
  | "communitySetting";

interface ModalState {
  modalType: ModalType;
  showModal: boolean;
}

interface ModalAction {
  setShowModal: (showModal: boolean) => void;
  setModalType: (modalType: ModalType) => void;
}

const useModalStore = create<ModalState & ModalAction>()(
  devtools((set) => ({
    modalType: null,
    showModal: false,

    setShowModal: (showModal: boolean) => set({ showModal }),
    setModalType: (modalType: ModalType) => set({ modalType }),
  }))
);

export default useModalStore;
