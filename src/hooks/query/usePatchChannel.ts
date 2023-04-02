import { useMutation } from "@tanstack/react-query";
import communityApi from "@api/community";

const usePatchChannel = () => {
  return useMutation(communityApi.patchChannel);
};

export default usePatchChannel;
