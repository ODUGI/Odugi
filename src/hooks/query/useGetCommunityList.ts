import { useUserStore } from "@store/useUserStore";
import communityApi from "@api/community";
import { useQuery } from "@tanstack/react-query";

const useGetCommunityList = () => {
  const { userInfo } = useUserStore();

  const { data: res } = useQuery(
    ["communityList", userInfo.id],
    communityApi.getList
  );

  if (!res) return [];

  return res.data.data;
};

export default useGetCommunityList;
