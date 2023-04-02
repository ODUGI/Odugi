import { useMutation } from "@tanstack/react-query";
import communityApi from "@api/community";

const usePatchCommunity = () => {
  return useMutation(communityApi.patchCommunity);
};

export default usePatchCommunity;
