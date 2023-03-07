import styled from "styled-components";
import { Divider } from "../atoms/Div/Divider.stories";
import CommunityImage from "../atoms/Div/CommunityImage";
import { useNavigate, useParams } from "react-router-dom";
import AddIcon from "@components/atoms/Icons/AddIcon";
import useGetCommunityList from "@hooks/query/useGetCommunityList";
import { useUserStore } from "@store/useUserStore";
import ScrollableBox from "@components/molecules/Div/scrollableBox";
import Ottogi from "../../assets/images/OttogiOttogi.png";
const CommunityList = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { userInfo } = useUserStore();
  const { list } = useGetCommunityList({ userId: userInfo.id });
  console.log(list);

  const onMain = () => {
    navigate("/@me");
  };

  const onCommunity = (v: Number) => {
    navigate("/" + v);
  };

  const onCreateCommunity = () => {
    navigate("/CreateCommunity");
  };

  if (params === null) {
    onMain();
    return null;
  }

  // const EmptyContainer = () => {
  //   return (
  //     <BarContainer>
  //       <ScrollableBox>
  //         <ul>
  //           <li onClick={onMain}>
  //             <CommunityImage
  //               avatarHeight={3}
  //               avatarWidth={3}
  //               name="메인"
  //               id={10000}
  //             />
  //           </li>
  //           <Divider />

  //           <li onClick={onCreateCommunity}>
  //             <CommunityImage avatarHeight={3} avatarWidth={3} name="" id={10001}>
  //               <AddIcon />
  //             </CommunityImage>
  //           </li>
  //         </ul>
  //       </ScrollableBox>
  //     </BarContainer>
  //   );
  // };

  // if (!res?.data.data) {
  //   return <EmptyContainer />;
  // }

  // console.log("res", res);
  // const List = res?.data.data[0].split("},");
  // if (List[0] === "") return <EmptyContainer />;

  // if (List.length > 0) {
  //   for (let i = 0; i < List?.length; i++) {
  //     if (i !== List.length - 1) {
  //       data.push(JSON.parse(List[i] + "}"));
  //     } else {
  //       data.push(JSON.parse(List[i]));
  //     }
  //   }
  // }

  return (
    <BarContainer>
      <ScrollableBox>
        <ul>
          <li onClick={onMain}>
            <CommunityImage
              avatarHeight={3}
              avatarWidth={3}
              name="메인"
              id={10000}
              src={Ottogi}
            />
          </li>
          <Divider />
          {list.map((v: any, idx) => {
            return (
              <li key={idx} onClick={() => onCommunity(v.community_id)}>
                <CommunityImage
                  avatarHeight={3}
                  avatarWidth={3}
                  name={v.name}
                  id={v.community_id}
                  src={v.img}
                />
              </li>
            );
          })}
          <li onClick={onCreateCommunity}>
            <CommunityImage avatarHeight={3} avatarWidth={3} name="" id={10001}>
              <AddIcon />
            </CommunityImage>
          </li>
        </ul>
      </ScrollableBox>
    </BarContainer>
  );
};

export default CommunityList;

const BarContainer = styled.div`
  width: 4.5rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 0.75rem;
  background-color: ${({ theme }) => theme.backgroundColor.tab1};
  ul {
    padding: 0;
    margin: 0;
    list-style: none;
    width: 100%;
  }
  li {
    width: 100%;
    display: flex;
    position: relative;
    padding: 0;
    left: 0;
  }
`;
