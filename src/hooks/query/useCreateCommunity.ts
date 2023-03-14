import communityApi from "@api/community";
import { useMutation } from "@tanstack/react-query";

const useCreateCommunity = () => {
  return useMutation(communityApi.create);
};

export default useCreateCommunity;
