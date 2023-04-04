import TabDivider from "@components/atoms/Div/TabDivider";
import CommunityList from "@components/organisms/CommunityList";
import Tab2Footer from "@components/organisms/Tab2Footer";
import { lazy, Suspense } from "react";
import styled from "styled-components";

const Tab2MainHeader = lazy(
  () => import("@components/organisms/Tab2MainHeader")
);
const Tab2CommunityHeader = lazy(
  () => import("@components/organisms/Tab2CommunityHeader")
);
const Tab2MainBody = lazy(() => import("@components/organisms/Tab2MainBody"));
const Tab2CommunityBody = lazy(
  () => import("@components/organisms/Tab2CommunityBody")
);
const Tab3MainHeader = lazy(
  () => import("@components/organisms/Tab3MainHeader")
);
const Tab3CommunityHeader = lazy(
  () => import("@components/organisms/Tab3CommunityHeader")
);
const Tab3MainBody = lazy(() => import("@components/organisms/Tab3MainBody"));
const Tab3CommunityBody = lazy(
  () => import("@components/organisms/Tab3CommunityBody")
);

interface CommonPageProps {
  isMainPage: boolean;
}

const CommonPage = ({ isMainPage }: CommonPageProps) => {
  return (
    <>
      <CommunityList />

      <Suspense fallback={null}>
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
      </Suspense>
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
  flex: 1;
  background-color: ${({ theme }) => theme.backgroundColor.tab3};

  display: flex;
  flex-direction: column;
`;

export default CommonPage;
