import communityApi from "@api/community";
import { useMutation } from "@tanstack/react-query";

const useSendInvite = () => {
  return useMutation(communityApi.sendInvite);
};

export default useSendInvite;
