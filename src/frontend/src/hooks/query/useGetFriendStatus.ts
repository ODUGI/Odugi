import { useQuery } from "@tanstack/react-query";
import friendApi from "@api/friend";

const useGetFriendStatus = (userId: number) => {
  const { data } = useQuery(["friendStatus", { userId }], friendApi.isOnline);

  return data?.data.data;
};

export default useGetFriendStatus;
