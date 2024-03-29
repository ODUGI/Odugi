import { COOKIE_KEY } from "@configs/cookie";
import { ReactElement } from "react";
import { Navigate, useMatch, useParams } from "react-router-dom";
import { cookies } from "src/App";

interface ProtectAuthProps {
  children: ReactElement;
}

const ProtectPage = ({ children }: ProtectAuthProps) => {
  const isBaseUrl = useMatch("/");
  const isMain = useMatch("/@me");
  const { communityId, channelId } = useParams();

  const cookie = cookies.get(COOKIE_KEY);
  const accessToken = localStorage.getItem("accessToken");

  const navigateUrl = () => {
    if (cookie && accessToken) {
      if (isBaseUrl || (isMain && !communityId && channelId)) {
        return <Navigate replace to="/@me" />;
      }
      return children;
    }
    return <Navigate replace to="/login" />;
  };

  return navigateUrl();
};

export default ProtectPage;
