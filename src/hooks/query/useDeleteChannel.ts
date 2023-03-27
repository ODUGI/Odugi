import { useMutation } from "@tanstack/react-query";
import communityApi from "@api/community";

const useCreateCommunity = () => {
  return useMutation(communityApi.deleteChannel);
};

export default useCreateCommunity;
