import { useNavigate } from "react-router-dom";
import communityApi from "@api/community";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useUserStore } from "@store/useUserStore";

interface useDeleteCommunityProps {
  communityId: string | undefined;
}

const useDeleteCommunity = ({ communityId }: useDeleteCommunityProps) => {
  const { userInfo } = useUserStore();

  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const QUERY_KEY = ["communityList", userInfo.id];

  return useMutation(communityApi.delete, {
    onMutate: async () => {
      await queryClient.cancelQueries({
        queryKey: QUERY_KEY,
      });
      const previousCommunityList = queryClient.getQueriesData(QUERY_KEY);

      const newCommunityList = [...previousCommunityList].filter(
        (community: any) => community.id !== communityId
      );
      queryClient.setQueryData(QUERY_KEY, newCommunityList);

      return { newCommunityList, previousCommunityList };
    },

    onError: (_err: Error, _newCommunityList: any, context: any) => {
      queryClient.setQueriesData(QUERY_KEY, context?.previousCommunityList);
    },

    onSuccess: () => {
      navigate("/@me");
    },

    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      });
    },
  });
};

export default useDeleteCommunity;
