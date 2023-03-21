import { COOKIE_KEY } from "@configs/cookie";
import { ReactElement } from "react";
import { Navigate, useMatch } from "react-router-dom";
import { cookies } from "src/App";

interface ProtectAuthProps {
  children: ReactElement;
}

const ProtectPage = ({ children }: ProtectAuthProps) => {
  const isBaseUrl = useMatch("/");
  const cookie = cookies.get(COOKIE_KEY);
  const accessToken = localStorage.getItem("accessToken");

  const navigateUrl = () => {
    if (cookie && accessToken) {
      if (isBaseUrl) {
        return <Navigate replace to="/@me" />;
      }
      return children;
    }
    return <Navigate replace to="/login" />;
  };

  return navigateUrl();
};

export default ProtectPage;
