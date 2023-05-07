import friendApi from "@api/friend";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useAcceptFriend = () => {
  const queryClient = useQueryClient();
  const QUERY_KEY = ["friendList"];

  return useMutation(friendApi.accept, {
    // onMutate: async (newFriend: any) => {
    //   await queryClient.cancelQueries({ queryKey: QUERY_KEY });
    //   const previousFriendList = queryClient.getQueryData(QUERY_KEY);
    //   queryClient.setQueryData(QUERY_KEY, [
    //     ...(previousFriendList as any),
    //     newFriend,
    //   ]);

    //   return { previousFriendList };
    // },

    // onError: (_err: Error, _newFriend: any, context: any) => {
    //   queryClient.setQueryData(QUERY_KEY, context.previousFriendList);
    // },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEY });
    },
  });
};

export default useAcceptFriend;
