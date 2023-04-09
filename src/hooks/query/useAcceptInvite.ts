import chatApi from "@api/chat";
import { useQuery } from "@tanstack/react-query";
import { Dispatch, SetStateAction } from "react";

const useAccpetInvite = (
  url: string,
  fetchInvite: boolean,
  setFetchInvite: Dispatch<SetStateAction<boolean>>
) => {
  // url = url.replace("http://13.125.40.16:8090", "");
  const { data } = useQuery(["result", { url }], chatApi.acceptInvite, {
    enabled: fetchInvite,
    onSuccess: () => {
      setFetchInvite(false);
    },
  });
  if (!data?.data?.data) return [];
  return data?.data?.data;
};

export default useAccpetInvite;
