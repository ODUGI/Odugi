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

  //초대권 눌렀을 때
  clickInvite: async ({ sender, channelId, LinkMessage }: any) => {
    return await clientApi.post("/chat/invite", {
      sender,
      channelId,
      LinkMessage,
    });
  },

  //초대권 수락하기
  acceptInvite: async ({ queryKey }: any) => {
    return await clientApi.get(queryKey[1].url);
  },
};

export default chatApi;
