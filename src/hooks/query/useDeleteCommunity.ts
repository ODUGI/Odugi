import { useMutation } from "@tanstack/react-query";
import communityApi from "@api/community";

const useDeleteCommunity = () => {
  return useMutation(communityApi.deleteCommunity);
};

export default useDeleteCommunity;
