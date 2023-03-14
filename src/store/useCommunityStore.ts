import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface CommunityState {
  communityStatus: number;
}

interface CommunityAction {
  setCommunityStatus: (communityStatus: number) => void;
}

const useCommunityStore = create<CommunityState & CommunityAction>()(
  devtools(
    persist(
      (set) => ({
        communityStatus: 0,

        setCommunityStatus: (communityStatus: number) =>
          set({ communityStatus }),
      }),
      { name: "community" }
    )
  )
);

export default useCommunityStore;
