import TabDivider from "@components/atoms/Div/TabDivider";
import CommunityList from "@components/organisms/CommunityList";
import Tab2CommunityBody from "@components/organisms/Tab2CommunityBody";
import Tab2CommunityHeader from "@components/organisms/Tab2CommunityHeader";
import Tab2Footer from "@components/organisms/Tab2Footer";
import Tab2MainBody from "@components/organisms/Tab2MainBody";
import Tab2MainHeader from "@components/organisms/Tab2MainHeader";
import Tab3CommunityBody from "@components/organisms/Tab3CommunityBody";
import Tab3CommunityHeader from "@components/organisms/Tab3CommunityHeader";
import Tab3MainBody from "@components/organisms/Tab3MainBody";
import Tab3MainHeader from "@components/organisms/Tab3MainHeader";
import styled from "styled-components";

interface CommonPageProps {
  isMainPage: boolean;
}

const CommonPage = ({ isMainPage }: CommonPageProps) => {
  return (
    <>
      <CommunityList />
      <Tab2Container>
        {isMainPage ? <Tab2MainHeader /> : <Tab2CommunityHeader />}
        <TabDivider />
        {isMainPage ? <Tab2MainBody /> : <Tab2CommunityBody />}
        <Tab2Footer />
      </Tab2Container>
      <Tab3Container>
        {isMainPage ? <Tab3MainHeader /> : <Tab3CommunityHeader />}
        <TabDivider />
        {isMainPage ? <Tab3MainBody /> : <Tab3CommunityBody />}
      </Tab3Container>
    </>
  );
};

const Tab2Container = styled.div`
  background-color: ${({ theme }) => theme.backgroundColor.tab2};
  width: 15rem;

  display: flex;
  flex-direction: column;
`;

const Tab3Container = styled.div`
  background-color: ${({ theme }) => theme.backgroundColor.tab3};
  flex: 1;

  display: flex;
  flex-direction: column;
`;

export default CommonPage;
