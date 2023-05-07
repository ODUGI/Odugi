import { useMutation } from "@tanstack/react-query";
import chatApi from "@api/chat";

const useClickInvite = () => {
  return useMutation(chatApi.clickInvite);
};

export default useClickInvite;
