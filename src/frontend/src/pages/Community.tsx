import PageContainer from "../components/atoms/Div/PageContainer";
import HeaderHelmet from "../components/atoms/Helmet";
import CommunityPage from "../components/templates/CommunityPage";

const Community = () => {
  const channelName = "welcome";

  return (
    <>
      <HeaderHelmet title={`${channelName} | Discord`} />
      <PageContainer>
        <CommunityPage />
      </PageContainer>
    </>
  );
};

export default Community;
