import { useNavigate } from "react-router-dom";
import communityApi from "@api/community";
import { useMutation } from "@tanstack/react-query";

const useDeleteCommunity = () => {
  const navigate = useNavigate();
  return useMutation(communityApi.delete, {
    onSuccess: () => {
      navigate("/@me");
    },
  });
};

export default useDeleteCommunity;
