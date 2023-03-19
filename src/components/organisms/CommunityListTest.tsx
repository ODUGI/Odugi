import styled from "styled-components";
import { Divider } from "../atoms/Div/Divider.stories";
import CommunityLogo from "../atoms/Div/CommunityLogo";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const CommunityListTest = () => {
  const [array, setArray] = useState([
    { id: "1", title: "공부" },
    { id: "2", title: "헬스" },
    { id: "3", title: "독서" },
    { id: "4", title: "산책" },
    { id: "5", title: "요리" },
  ]);

  const handleChange = (result: any) => {
    if (!result.destination) return;
    const items = [...array];
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setArray(items);
  };

  return (
    <BarContainer>
      <DragDropContext onDragEnd={handleChange}>
        <Droppable droppableId="communities">
          {(provided) => (
            <ul
              className="communities"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {array &&
                array.map(({ id, title }, index) => {
                  return (
                    <div
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                    >
                      <Draggable key={id} draggableId={id} index={index}>
                        {(provided) => (
                          <li
                            ref={provided.innerRef}
                            {...provided.dragHandleProps}
                            {...provided.draggableProps}
                            onClick={() => null}
                          >
                            <CommunityLogo
                              avatarHeight={3}
                              avatarWidth={3}
                              name={title}
                              id={index}
                            />
                          </li>
                        )}
                      </Draggable>
                    </div>
                  );
                })}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </BarContainer>
  );
};

export default CommunityListTest;

const BarContainer = styled.div`
  width: 4.5rem;
  height: 67.5rem;
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
