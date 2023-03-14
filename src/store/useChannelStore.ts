import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface ChannelState {
  channelIdList: { [key: string]: string };
}

interface ChannelAction {
  setChannelIdList: (channelId: { [key: string]: any }) => void;
}

const useChannelStore = create<ChannelState & ChannelAction>()(
  devtools(
    persist(
      (set) => ({
        channelIdList: { "@me": "" },

        setChannelIdList: (channelIdList: { [key: string]: string }) =>
          set({ channelIdList }),
      }),
      { name: "channel" }
    )
  )
);

export default useChannelStore;
