import { useMutation } from "@tanstack/react-query";
import communityApi from "@api/community";

const useCreateChannel = () => {
  return useMutation(communityApi.createChannel);
};

export default useCreateChannel;
