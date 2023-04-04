import clientApi from "./axios";

interface FriendParams {
  email: string;
}

const friendApi = {
  getAll: async () => {
    return await clientApi.get(`/user/member/showfriend`);
  },

  request: async ({ email }: FriendParams) => {
    return await clientApi.post("/user/member/addfriend", { email });
  },

  accept: async ({ email }: FriendParams) => {
    return await clientApi.post("/user/member/acceptfriend", { email });
  },

  reject: async ({ email }: FriendParams) => {
    return await clientApi.delete("/user/member/rejectfriend", {
      data: { email },
    });
  },

  cancel: async ({ email }: FriendParams) => {
    return await clientApi.post("/user/member/cancelfriend");
  },

  // isOnline: async ({ queryKey }: any) => {
  //   const { userId } = queryKey[1];
  //   return await clientApi.get(`/state/get`, {
  //     params: { userId },
  //   });
  // },
};

export default friendApi;
