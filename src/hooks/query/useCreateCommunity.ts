import { useNavigate } from "react-router-dom";
import communityApi from "@api/community";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useCreateCommunity = (userId: number) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation(communityApi.create, {
    onMutate: async (newCommunityList: any) => {
      await queryClient.cancelQueries({
        queryKey: ["communityList", userId],
      });
      const previousCommunityList = queryClient.getQueriesData([
        "communityList",
        userId,
      ]);
      queryClient.setQueryData(["communityList", userId], newCommunityList);

      return { newCommunityList, previousCommunityList };
    },
    onError: (_err: Error, _newCommunityList: any, context: any) => {
      queryClient.setQueriesData(
        ["communityList", userId],
        context?.previousCommunityList
      );
    },
    onSuccess: () => {
      navigate(-1);
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ["communityList", userId],
      });
    },
  });
};

export default useCreateCommunity;
