import communityApi from "@api/community";
import { useMutation } from "@tanstack/react-query";

const useSendInviteToChat = () => {
  return useMutation(communityApi.sendInviteToChat);
};

export default useSendInviteToChat;
