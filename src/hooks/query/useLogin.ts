import { COOKIE_KEY } from "@configs/cookie";
import { useMutation } from "@tanstack/react-query";
import { useUserStore } from "@store/useUserStore";
import authApi from "@api/auth";
import { cookies } from "src/App";

const useLogin = (setErrorMessage: any) => {
  const { setUserInfo } = useUserStore();

  return useMutation(authApi.login, {
    onError: () => {
      setErrorMessage("다시 시도해주세요.");
    },

    onSuccess: async ({
      data: {
        data: { accessToken, refreshToken },
      },
    }: any) => {
      const setTokens = async () => {
        cookies.set(COOKIE_KEY, refreshToken);
        localStorage.setItem("accessToken", accessToken);
      };

      const getUserInfo = async () => {
        const data = await authApi.getUserInfo({ accessToken });
        setUserInfo(data.data.data);
      };

      await setTokens();
      await getUserInfo();
      window.location.reload();
    },
  });
};

export default useLogin;
