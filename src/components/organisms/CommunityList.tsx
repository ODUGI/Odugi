import styled from "styled-components";
import CommunityLogo from "../atoms/Div/CommunityLogo";
import { useNavigate, useParams } from "react-router-dom";
import AddIcon from "@components/atoms/Icons/AddIcon";
import { useUserStore } from "@store/useUserStore";
import ScrollableBox from "@components/molecules/Div/scrollableBox";
import useGetCommunityList from "@hooks/query/useGetCommunityList";
import OdugiLogo from "../../assets/images/logo.jpg";
import useModalStore from "@store/useModalStore";
import { useEffect, useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const CommunityList = () => {
  const navigate = useNavigate();
  const params = useParams();

  const { userInfo } = useUserStore();
  const { setShowModal, setModalType } = useModalStore();
  const list = useGetCommunityList();
  const goMainPage = () => {
    navigate("/@me");
  };

  const [array, setArray] = useState([]);
  useEffect(() => {
    setArray(list);
  }, [list]);

  if (!params) {
    goMainPage();
    return null;
  }

  const onCommunity = (communityId: Number) => {
    navigate(`/${communityId}`);
  };

  const createCommunity = () => {
    setShowModal(true);
    setModalType("createCommunity");
  };

  const handleChange = (result: any) => {
    if (!result.destination) return;
    const items = [...array];
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setArray(items);
  };

  return (
    <BarContainer>
      <ScrollableBox>
        <DragDropContext onDragEnd={handleChange}>
          <Droppable droppableId="communities">
            {(provided) => (
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
                  <Draggable
                    key={community.communityId}
                    draggableId={community.communityId}
                    index={idx}
                  >
                    {(provided) => (
                      <li
                        ref={provided.innerRef}
                        {...provided.dragHandleProps}
                        {...provided.draggableProps}
                        onClick={() => onCommunity(community.communityId)}
                      >
                        <CommunityLogo
                          avatarHeight={3}
                          avatarWidth={3}
                          name={community.name}
                          id={community.communityId}
                          src={community.img}
                        />
                      </li>
                    )}
                  </Draggable>
                ))}

                {list.length !== 0 && <Divider />}

                <li onClick={createCommunity}>
                  <CommunityLogo
                    avatarHeight={3}
                    avatarWidth={3}
                    name=""
                    id={-2}
                  >
                    <AddIcon />
                  </CommunityLogo>
                </li>
              </ul>
            )}
          </Droppable>
        </DragDropContext>
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
