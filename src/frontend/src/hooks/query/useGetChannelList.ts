import communityApi from "@api/community";
import { useQuery } from "@tanstack/react-query";

const useGetChannelList = ({ communityId }: any) => {
  return useQuery(["channel", { communityId }], communityApi.getChannelList);
};

export default useGetChannelList;
