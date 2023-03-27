import { useMutation } from "@tanstack/react-query";
import communityApi from "@api/community";

const usePatchCategory = () => {
  return useMutation(communityApi.patchCategory);
};

export default usePatchCategory;
