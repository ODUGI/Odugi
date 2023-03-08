import MainPage from "@components/templates/MainPage";
import HeaderHelmet from "@components/atoms/Helmet";
import PageContainer from "@components/atoms/Div/PageContainer";
import { useMatch, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import useModalStore from "@store/useModalStore";

const Main = () => {
  const { setShowModal } = useModalStore();
  const navigate = useNavigate();
  const isMain = useMatch("/");

  useEffect(() => {
    setShowModal(false);
  }, []);

  if (isMain) {
    navigate("/@me");
  }

  return (
    <>
      <HeaderHelmet title="Discord | 친구" />
      <PageContainer>
        <MainPage />
      </PageContainer>
    </>
  );
};

export default Main;
