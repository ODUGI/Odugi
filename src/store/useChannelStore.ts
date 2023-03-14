import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface ChannelState {}

interface ChannelAction {}

const useChannelStore = create<ChannelState & ChannelAction>()(
  devtools(persist((set) => ({}), { name: "channel" }))
);

export default useChannelStore;
