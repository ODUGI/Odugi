import Tip from "@components/atoms/Div/Tooltip";
import AddIcon from "@components/atoms/Icons/AddIcon";
import Text from "@components/atoms/Text/Text";
import CreateDirectMessageModal from "@components/organisms/CreateDirectMessageDropdown";
import useOutsideClick from "@hooks/common/useOutsideClick";
import { useRef, useState } from "react";
import styled from "styled-components";

const DirectMessage = () => {
  const dropdownRef = useRef<any>();
  const [showDMDropdown, setShowDMDropdown] = useState(false);

  useOutsideClick(dropdownRef, () => setShowDMDropdown(false));

  return (
    <DirectMessageContainer>
      <Text text="다이렉트 메시지" fontSize="xs" fontWeight="bold" />
      <Tip title="DM 생성" place="top">
        <PlusButtonContainer
          ref={dropdownRef}
          onClick={() => setShowDMDropdown((prev) => !prev)}
        >
          <AddIcon />
          {showDMDropdown && (
            <DMModalWrapper>
              <CreateDirectMessageModal />
            </DMModalWrapper>
          )}
        </PlusButtonContainer>
      </Tip>
    </DirectMessageContainer>
  );
};

const DirectMessageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 18px;
  padding-bottom: 4px;
  color: ${({ theme }) => theme.color.inactive};
  &:hover {
    color: ${({ theme }) => theme.color.white};
  }
`;

const PlusButtonContainer = styled.div`
  color: ${({ theme }) => theme.color.icon};
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.color.white};
  }
`;

const DMModalWrapper = styled.div`
  position: relative;
`;

export default DirectMessage;
