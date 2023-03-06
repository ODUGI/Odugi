import clientApi from "./axios";

const communityApi = {
  // 커뮤니티 생성
  create: async ({ formData }: any) => {
    return await clientApi.post("/community/create", formData);
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
    return await clientApi.patch("/community/delete", { communityId, userId });
  },

  // 커뮤니티 이미지 변경
  modifyImage: async ({ formData }: any) => {
    return await clientApi.patch("/community/imgupload", formData);
  },

  // 커뮤니티 리스트 가져옴
  getList: async ({ queryKey }: any) => {
    const { userId } = queryKey[1];
    return await clientApi.get(`/community/getlist/`, {
      params: { userId },
    });
  },

  // 커뮤니티의 카테고리 리스트 가져옴
  getCategoryList: async ({ queryKey }: any) => {
    const { communityId } = queryKey[1];
    return await clientApi.get(`/community/getoption/`, {
      params: { communityId },
    });
  },

  sendInvite: async ({ communityId, userId, shortUrl }: any) => {
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
};
export default communityApi;
