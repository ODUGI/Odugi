import chatApi from "@api/chat";
import { useMutation } from "@tanstack/react-query";

const useEnterInvitation = () => {
  return useMutation(chatApi.enterInvitation);
};

export default useEnterInvitation;
