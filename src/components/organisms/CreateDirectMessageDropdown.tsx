import useInput from "@hooks/common/useInput";
import useGetFriendList from "@hooks/query/useGetFriendList";
import styled from "styled-components";
import ModalContainer from "../atoms/Div/ModalContainer";
import Text from "../atoms/Text/Text";
import CreateDirectMesssageHeader from "../molecules/Div/CreateDirectMessageHeader";
import CreateDirectMesssageFooter from "../molecules/Div/CreateDirectMesssageFooter";
import ScrollableBox from "../molecules/Div/scrollableBox";
import SelectFriend from "../molecules/Div/SelectFriend";
import searchImage from "../../assets/images/search.svg";

interface CreateDirectMessageDropdownProps {
  top?: number;
  left?: number;
  right?: number;
}

const CreateDirectMessageDropdown = ({
  top = 0,
  left = 0,
  right = 0,
}: CreateDirectMessageDropdownProps) => {
  const { data: friendList, isSuccess } = useGetFriendList();

  const [search, changeSearch] = useInput();

  return (
    <CreateDirectMessageDropdownContainer
      left={left}
      right={right}
      top={top}
      width={440}
      p={16}
    >
      <CreateDirectMesssageHeader
        // value={search}
        // onChange={changeSearch}
        addFriendNum={1}
      />
      <>
        {isSuccess && friendList.length > 0 ? (
          <ScrollableBox>
            {/* <SelectFriend />   
            <SelectFriend check /> */}
            {friendList.map((friend: FriendType) => (
              <SelectFriend check={true} status="1" />
            ))}
          </ScrollableBox>
        ) : (
          <SearchContainer>
            <SearchImage src={searchImage} alt="" width={85} height={85} />
            <Text color="auth-desc" center>
              개인 메시지에 모든 친구가 포함되어 있어요.
            </Text>
          </SearchContainer>
        )}
      </>
      <CreateDirectMesssageFooter />
    </CreateDirectMessageDropdownContainer>
  );
};

const CreateDirectMessageDropdownContainer = styled(
  ModalContainer
)<CreateDirectMessageDropdownProps>`
  border-radius: 0.25rem;
  position: absolute;
  z-index: 2;
  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;
  right: ${({ right }) => right}px;
  box-shadow: 0 0 0.3125rem ${({ theme }) => theme.backgroundColor.tab1};
`;

const SearchContainer = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

const SearchImage = styled.img`
  margin-bottom: 20px;
`;

export default CreateDirectMessageDropdown;
