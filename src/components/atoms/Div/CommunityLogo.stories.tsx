import CommunityLogo from "./CommunityLogo";
import AddIcon from "../Icons/AddIcon";

export default {
  title: "atoms/div",
  component: CommunityLogo,
};

export const CommunityLogoDiv = () => (
  <CommunityLogo avatarHeight={3} avatarWidth={3} id={3} name="서버1">
    <AddIcon />
  </CommunityLogo>
);
