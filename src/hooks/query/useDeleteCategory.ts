import { useMutation } from "@tanstack/react-query";
import communityApi from "@api/community";

const useDeleteCategory = () => {
  return useMutation(communityApi.deleteCategory);
};

export default useDeleteCategory;
