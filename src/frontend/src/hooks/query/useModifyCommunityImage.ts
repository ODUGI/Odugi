import communityApi from "@api/community";
import { useMutation } from "@tanstack/react-query";

const useModifyCommunityImage = () => {
  return useMutation(communityApi.modifyImage);
};

export default useModifyCommunityImage;
