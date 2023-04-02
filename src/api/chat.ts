import clientApi from "./axios";

const chatApi = {
  getChatFriends: async ({ queryKey }: any) => {
    const { userId } = queryKey[1];

    return await clientApi.get("/state/getchannel", {
      params: { userId },
    });
  },

  enterInvitation: async () => {
    return await clientApi.post("/chat/community_enter", {
      //!TODO 기능 추가되면 하드코딩 수정할 것
      name: "종인",
      channelId: "220",
    });
  },
};

export default chatApi;
