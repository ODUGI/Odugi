import { useQuery } from "@tanstack/react-query";
import friendApi from "@api/friend";

const useGetFriendList = () => {
  const { data, isSuccess } = useQuery(["friendList"], friendApi.getAll);

  return { data: data?.data.data ?? [], isSuccess };
};

export default useGetFriendList;
