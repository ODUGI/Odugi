import { useNavigate } from "react-router-dom";
import communityApi from "@api/community";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface useDeleteCommunityProps {
  communityId: string | undefined;
  userId: number;
}

const useDeleteCommunity = ({
  communityId,
  userId,
}: useDeleteCommunityProps) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const QUERY_KEY = ["communityList", userId];

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
