import { useMutation } from "@tanstack/react-query";
import communityApi from "@api/community";

const useDeleteChannel = () => {
  return useMutation(communityApi.deleteChannel);
};

export default useDeleteChannel;
