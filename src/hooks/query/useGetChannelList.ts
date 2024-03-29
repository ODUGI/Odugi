import communityApi from "@api/community";
import { useQuery } from "@tanstack/react-query";

const useGetChannelList = ({ communityId }: any) => {
  const { data } = useQuery(
    ["channelList", { communityId }],
    communityApi.getChannelList
  );
  if (!data?.data?.data) return [];
  return data?.data?.data;
};

export default useGetChannelList;
