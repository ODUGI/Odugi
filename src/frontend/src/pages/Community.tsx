import PageContainer from "../components/atoms/Div/PageContainer";
import HeaderHelmet from "../components/atoms/Helmet";
import CommunityPage from "../components/templates/CommunityPage";

const Community = () => {
  const chatroomName = "welcome";

  return (
    <>
      <HeaderHelmet title={`• Discord | ${chatroomName}`} />
      <PageContainer>
        <CommunityPage />
      </PageContainer>
    </>
  );
};

export default Community;
