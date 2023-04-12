import { useMutation } from "@tanstack/react-query";
import authApi from "@api/auth";
import { useNavigate } from "react-router-dom";
import { cookies } from "src/App";
import { COOKIE_KEY } from "@configs/cookie";
import { useUserStore } from "@store/useUserStore";

const useLogout = () => {
  const { resetUser } = useUserStore();
  const navigate = useNavigate();

  return useMutation(authApi.logout, {
    onMutate: () => {
      cookies.remove(COOKIE_KEY);
      localStorage.clear();
      resetUser();
    },

    onSuccess: () => {
      navigate("/login");
    },
  });
};

export default useLogout;
