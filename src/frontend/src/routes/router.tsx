import { Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Community from "../pages/Community";
import ProtectAuth from "../components/organisms/ProtectAuth";
import ProtectPage from "../components/organisms/ProtectHome";
import NotFound from "@pages/NotFound";

const Router = () => {
  return (
    <Routes>
      <Route
        path={"/"}
        element={
          // <ProtectPage>
          <Main />
          // </ProtectPage>
        }
      />

      <Route
        path="/login"
        element={
          // <ProtectAuth>
          <Login />
          // </ProtectAuth>
        }
      />
      <Route
        path="/register"
        element={
          // <ProtectAuth>
          <Register />
          // </ProtectAuth>
        }
      />

      <Route
        path={"/@me"}
        element={
          // <ProtectPage>
          <Main />
          // </ProtectPage>
        }
      />
      <Route
        path="/@me/:channelId"
        element={
          // <ProtectPage>
          <Main />
          // </ProtectPage>
        }
      />

      <Route
        path="/:communityId"
        element={
          // <ProtectPage>
          <Community />
          // </ProtectPage>
        }
      />
      <Route
        path="/:communityId/:channelId"
        element={
          // <ProtectPage>
          <Community />
          // </ProtectPage>
        }
      />

      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
