import { useNavigate } from "react-router-dom";
import communityApi from "@api/community";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useCreateCommunity = (userId: number) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const QUERY_KEY = ["communityList", userId];

  return useMutation(communityApi.create, {
    onMutate: async (newCommunityList: any) => {
      await queryClient.cancelQueries({
        queryKey: QUERY_KEY,
      });
      const previousCommunityList = queryClient.getQueriesData(QUERY_KEY);
      queryClient.setQueryData(QUERY_KEY, [
        ...previousCommunityList,
        newCommunityList,
      ]);

      return { previousCommunityList };
    },

    onError: (_err: Error, _newCommunityList: any, context: any) => {
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
