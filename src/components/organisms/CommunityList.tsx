import styled from "styled-components";
import CommunityLogo from "../atoms/Div/CommunityLogo";
import { useNavigate, useParams } from "react-router-dom";
import AddIcon from "@components/atoms/Icons/AddIcon";
import { useUserStore } from "@store/useUserStore";
import ScrollableBox from "@components/molecules/Div/scrollableBox";
import useGetCommunityList from "@hooks/query/useGetCommunityList";
import OdugiLogo from "../../assets/images/logo.jpg";
import useModalStore from "@store/useModalStore";
import { useCallback } from "react";

const CommunityList = () => {
  const navigate = useNavigate();

  const { userInfo } = useUserStore();
  const { setShowModal, setModalType } = useModalStore();

  const list = useGetCommunityList();
  const goMainPage = useCallback(() => {
    navigate("/@me");
  }, []);

  const createCommunity = useCallback(() => {
    setShowModal(true);
    setModalType("createCommunity");
  }, []);

  const onCommunity = useCallback((communityId: number) => {
    navigate(`/${communityId}`);
  }, []);

  return (
    <BarContainer>
      <ScrollableBox>
        <ul>
          <li onClick={goMainPage}>
            <CommunityLogo
              avatarHeight={3}
              avatarWidth={3}
              name="메인"
              id={-1}
              src={OdugiLogo}
            />
          </li>

          <Divider />

          {list.map((community: any, idx: number) => (
            <li key={idx} onClick={() => onCommunity(community.communityId)}>
              <CommunityLogo
                avatarHeight={3}
                avatarWidth={3}
                name={community.name}
                id={community.communityId}
                src={community.img}
              />
            </li>
          ))}

          {list.length !== 0 && <Divider />}

          <li onClick={createCommunity}>
            <CommunityLogo avatarHeight={3} avatarWidth={3} name="" id={-2}>
              <AddIcon />
            </CommunityLogo>
          </li>
        </ul>
      </ScrollableBox>
    </BarContainer>
  );
};

const BarContainer = styled.div`
  width: 4.5rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 0.75rem;
  background-color: ${({ theme }) => theme.backgroundColor.tab1};

  ul {
    width: 100%;
    padding: 0;
    margin: 0;
    list-style: none;
  }

  li {
    width: 100%;
    display: flex;
    position: relative;
    padding: 0;
    left: 0;

    svg {
      color: ${({ theme }) => theme.color["invite-success"]};
    }
  }
`;

const Divider = styled.div`
  margin: 0 auto 8px auto;
  width: 42%;
  height: 2px;
  background-color: ${({ theme }) => theme.backgroundColor.divider};
`;

export default CommunityList;
