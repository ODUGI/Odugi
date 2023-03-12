import CommunityImageDiv from "./CommunityImage";
import AddIcon from "../Icons/AddIcon";

export default {
  title: "atoms/div",
  component: CommunityImageDiv,
};

export const CommunityImage = () => (
  <CommunityImageDiv avatarHeight={3} avatarWidth={3} id={3} name="서버1">
    <AddIcon />
  </CommunityImageDiv>
);
