import communityApi from "@api/community";
import { useMutation } from "@tanstack/react-query";

const useDeleteCommunity = () => {
  return useMutation(communityApi.delete);
};

export default useDeleteCommunity;
