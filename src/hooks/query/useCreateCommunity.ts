import { useNavigate } from "react-router-dom";
import { useUserStore } from "./../../store/useUserStore";
import communityApi from "@api/community";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useCreateCommunity = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { userInfo } = useUserStore();

  return useMutation(communityApi.create, {
    onMutate: async (newCommunityList: any) => {
      await queryClient.cancelQueries({
        queryKey: ["communityList", { userId: userInfo.id }],
      });
      const previousCommunityList = queryClient.getQueriesData([
        "communityList",
        newCommunityList,
      ]);
      return { newCommunityList, previousCommunityList };
    },
    onError: (_err: Error, _newCommunityList: any, context: any) => {
      queryClient.setQueriesData(
        ["communityList"],
        context?.previousCommunityList
      );
    },
    onSuccess: () => {
      navigate(-1);
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ["communityList", { userId: userInfo.id }],
      });
    },
  });
};

export default useCreateCommunity;
