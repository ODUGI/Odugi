import communityApi from "@api/community";
import { useMutation } from "@tanstack/react-query";

const useCreateInvitation = (options: any) => {
  return useMutation(communityApi.createInvitation, options);
};

export default useCreateInvitation;
