import communityApi from "@api/community";
import { useMutation } from "@tanstack/react-query";

const useUpdateCommunityName = () => {
  return useMutation(communityApi.update);
};

export default useUpdateCommunityName;
