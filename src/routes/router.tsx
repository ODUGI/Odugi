import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ProtectAuth from "../components/organisms/ProtectAuth";
import ProtectPage from "../components/organisms/ProtectHome";
import NotFound from "@pages/NotFound";
import Common from "@pages/Common";

const Router = () => {
  return (
    <Routes>
      <Route
        path="/login"
        element={
          <ProtectAuth>
            <Login />
          </ProtectAuth>
        }
      />
      <Route
        path="/register"
        element={
          <ProtectAuth>
            <Register />
          </ProtectAuth>
        }
      />

      {[
        "/",
        "/@me",
        "/@me/:channelId",
        "/:communityId",
        "/:communityId/:channelId",
      ].map((path) => (
        <Route
          path={path}
          element={
            <ProtectPage>
              <Common />
            </ProtectPage>
          }
        />
      ))}

      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
