import { useMutation } from "@tanstack/react-query";
import communityApi from "@api/community";

const useCreateCategory = () => {
  return useMutation(communityApi.createCategory);
};

export default useCreateCategory;
