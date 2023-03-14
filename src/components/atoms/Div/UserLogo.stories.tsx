import UserLogo from "./UserLogo";
import { action } from "@storybook/addon-actions";

export default {
  title: "atoms/div",
  component: UserLogo,
};

export const LogoImage = () => (
  <UserLogo height={3} width={3} onClick={action("clicked")} />
);
