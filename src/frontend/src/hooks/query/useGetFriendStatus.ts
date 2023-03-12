import { useQuery } from "@tanstack/react-query";
import friendApi from "@api/friend";

const useGetFriendStatus = (userId: number) => {
  return useQuery(["friendStatus", { userId }], friendApi.isOnline);
};

export default useGetFriendStatus;
