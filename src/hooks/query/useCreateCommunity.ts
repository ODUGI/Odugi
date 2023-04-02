import { useUserStore } from "@store/useUserStore";
import { useNavigate } from "react-router-dom";
import communityApi from "@api/community";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useCreateCommunity = () => {
  const { userInfo } = useUserStore();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const QUERY_KEY = ["communityList", userInfo.id];

  return useMutation(communityApi.create, {
    onMutate: async (newCommunity: any) => {
      await queryClient.cancelQueries({ queryKey: QUERY_KEY });
      const previousCommunityList = queryClient.getQueriesData(QUERY_KEY);
      queryClient.setQueryData(QUERY_KEY, [
        ...previousCommunityList,
        newCommunity,
      ]);

      return { previousCommunityList };
    },

    onError: (_err: Error, _newCommunity: any, context: any) => {
      queryClient.setQueriesData(QUERY_KEY, context.previousCommunityList);
    },
    onSuccess: () => {
      navigate(-1);
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },
  });
};

export default useCreateCommunity;
