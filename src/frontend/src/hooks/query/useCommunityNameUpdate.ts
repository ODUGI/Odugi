import communityApi from "@api/community";
import { useMutation } from "@tanstack/react-query";

const useModifyPassword = () => {
  return useMutation(communityApi.update);
};

export default useModifyPassword;
