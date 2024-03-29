import clientApi from "./axios";

const communityApi = {
  // 커뮤니티 생성
  create: async ({ formData }: any) => {
    return await clientApi.post("/community/community", formData);
  },
  //카테고리 생성
  createCategory: async ({ name, communityId, role }: any) => {
    return await clientApi.post("/community/category", {
      name,
      communityId,
      role,
    });
  },

  // 채널 생성
  createChannel: async ({ name, categoryId, communityId, role, type }: any) => {
    return await clientApi.post("/community/channel", {
      name,
      categoryId,
      role,
      type,
      communityId,
    });
  },

  // 커뮤니티 이름 변경
  update: async ({ communityName, communityId, userId }: any) => {
    return await clientApi.patch("/community/update", {
      communityName,
      communityId,
      userId,
    });
  },

  // 커뮤니티 삭제
  delete: async ({ communityId, userId }: any) => {
    return await clientApi.patch("/community/community", {
      communityId,
      userId,
    });
  },

  // 커뮤니티 이미지 변경
  modifyImage: async ({ formData }: any) => {
    return await clientApi.patch("/community/imgupload", formData);
  },

  // 커뮤니티 리스트 가져옴 - 옛날 버전
  // getList: async ({ queryKey }: any) => {
  //   const { userId } = queryKey[1];
  //   return await clientApi.get(`/community/showcommunitys`, {
  //     params: { userId },
  //   });
  // },

  // 커뮤니티 리스트 가져옴
  getList: async () => {
    return await clientApi.get(`/community/communitys`);
  },
  // 커뮤니티의 카테고리 가져옴
  getCategoryList: async ({ queryKey }: any) => {
    const { communityId } = queryKey[1];
    return await clientApi.get(`/community/categorys/${communityId}`);
  },

  // 커뮤니티의 채널 가져옴
  getChannelList: async ({ queryKey }: any) => {
    const { communityId } = queryKey[1];
    return await clientApi.get(`/community/channels/${communityId}`);
  },

  sendInvite: async ({ communityId, userId, shortUrl }: any) => {
    console.log(communityId, userId, shortUrl);
    return await clientApi.post(`/invite/member`, {
      communityId,
      userId,
      shortUrl,
    });
  },

  sendInviteToChat: async ({ sender, channelId, linkMessage }: any) => {
    return await clientApi.post(`/chat/invite`, {
      sender,
      channelId,
      linkMessage,
    });
  },

  deleteCommunity: async ({ communityId, role }: any) => {
    return await clientApi.delete(`community/community`, {
      data: {
        communityId,
        role,
      },
    });
  },
  deleteCategory: async ({ categoryId, role }: any) => {
    return await clientApi.delete(`community/category`, {
      data: {
        categoryId,
        role,
      },
    });
  },
  deleteChannel: async ({ channelId, role }: any) => {
    return await clientApi.delete(`community/channel`, {
      data: {
        channelId,
        role,
      },
    });
  },
  patchCommunity: async ({ communityId, name, role }: any) => {
    return await clientApi.patch(`community/community`, {
      communityId,
      name,
      role,
    });
  },
  patchCategory: async ({ categoryId, role, name }: any) => {
    return await clientApi.patch(`community/category`, {
      categoryId,
      name,
      role,
    });
  },
  patchChannel: async ({ channelId, role, name }: any) => {
    return await clientApi.patch(`community/channel`, {
      channelId,
      name,
      role,
    });
  },
  //초대권 생성
  createInvitation: async ({ formData }: any) => {
    // console.log(typeof communityId, typeof `${invitedId}`);

    return await clientApi.post("community/invite", formData);
  },
  //
};
export default communityApi;
