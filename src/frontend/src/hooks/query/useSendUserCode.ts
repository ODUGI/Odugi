import { useMutation } from "@tanstack/react-query";
import authApi from "@api/auth";

const useSendUserCode = (options: any) => {
  return useMutation(authApi.verify, options);
};

export default useSendUserCode;
