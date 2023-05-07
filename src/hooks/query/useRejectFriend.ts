import { useMutation, useQueryClient } from "@tanstack/react-query";
import friendApi from "@api/friend";

const useRejectFriend = () => {
  const queryClient = useQueryClient();
  const QUERY_KEY = ["friendList"];

  return useMutation(friendApi.reject, {
    // onMutate: async (newFriend: any) => {
    //   await queryClient.cancelQueries({ queryKey: QUERY_KEY });
    //   const previousFriendList: any = queryClient.getQueryData(QUERY_KEY);
    //   console.log(previousFriendList);
    //   const newFriendList = previousFriendList.filter(
    //     (friend: any) => friend.id !== newFriend.id
    //   );
    //   queryClient.setQueryData(QUERY_KEY, newFriendList);

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

export default useRejectFriend;
