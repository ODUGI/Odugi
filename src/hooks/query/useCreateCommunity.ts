import communityApi from "@api/community";
import { useMutation } from "@tanstack/react-query";

const useCreateCommunity = (options: any) => {
  return useMutation(communityApi.create, options);
};

export default useCreateCommunity;
