import communityApi from "@api/community";
import { useMutation } from "@tanstack/react-query";

const useModifyServerImage = () => {
  return useMutation(communityApi.modifyImage);
};

export default useModifyServerImage;
